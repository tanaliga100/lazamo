"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER = exports.LOGOUT = exports.LOGIN = void 0;
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const async_middleware_1 = require("../middlewares/async-middleware");
const user_model_1 = __importDefault(require("../models/user-model"));
const attachCookies_1 = require("../utils/attachCookies");
const comparePassword_1 = require("../utils/comparePassword");
const hashedPassword_1 = require("../utils/hashedPassword");
const tokenUser_1 = require("../utils/tokenUser");
const REGISTER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // CHECK EMAIL IF ITS EXISTS
    const emailExists = yield user_model_1.default.findOne({ email });
    if (emailExists) {
        throw new errors_1.BadRequestError(`THIS EMAIL: ${email} ALREADY EXISTS`);
    }
    // HASHING PASSWORD
    const hashedPassword = yield (0, hashedPassword_1.hashPassword)(password);
    // ASSIGNING THE USER
    const tempUser = {
        name,
        email,
        password: hashedPassword,
        // role: req.body.role,
    };
    // const hasAdmin = await User.findOne({ role: "admin" });
    // const managerCount = await User.countDocuments({ role: "manager" });
    // if (!hasAdmin) {
    //   tempUser.role = "admin";
    // } else {
    //   if (managerCount < 3) {
    //     tempUser.role = "manager";
    //   } else {
    //     tempUser.role = "user";
    //   }
    // }
    // if (managerCount > 3) {
    //   throw new BadRequestError("Manager count must be less than 3");
    // }
    // CREATING USER
    const user = yield user_model_1.default.create(tempUser);
    // ATTACHING COOKIES
    const tokenUser = yield (0, tokenUser_1.createTokenUser)(user);
    // USING CREATE TOKEN | TRADITIONAL
    // const token = createToken(tokenUser);
    // USING COOKIES TO ATTACH TOKEN
    (0, attachCookies_1.attachCookiesToResponse)(res, tokenUser);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        msg: "USER_REGISTERED",
        data: tokenUser,
        // token,
    });
}));
exports.REGISTER = REGISTER;
const LOGIN = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    // FIND EXISTING EMAIL, IF NONE THROW ERROR
    if (!email || !password) {
        throw new errors_1.BadRequestError("Please provide email and password");
    }
    // // GET THE USER
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        throw new errors_1.UnAuthenticatedError("Invalid Credentials : Email doesnt exist");
    }
    // COMPARE PASSWORD USING BCRYPT JS IN THE MODEL
    const isPasswordCorrect = yield (0, comparePassword_1.comparePassword)(password, user.password);
    if (!isPasswordCorrect) {
        throw new errors_1.UnAuthenticatedError("Password is incorrect");
    }
    // const isPassCorredct = user.comparePassword(password);
    // if (!isPassCorredct) {
    //   throw new UnAuthenticatedError("Password is incorrect");
    // }
    // IF PASSWORD MATCH RELEASE THE TOKEN
    const tokenUser = yield (0, tokenUser_1.createTokenUser)(user);
    (0, attachCookies_1.attachCookiesToResponse)(res, tokenUser);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        msg: "LOGIN_SUCCESSFUL",
        tokenUser,
    });
}));
exports.LOGIN = LOGIN;
const LOGOUT = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // REMOVED COOKIES
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        msg: "USER_LOGOUT",
    });
}));
exports.LOGOUT = LOGOUT;
