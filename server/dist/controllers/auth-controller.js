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
const unauthenticated_error_1 = __importDefault(require("../errors/unauthenticated-error"));
const async_middleware_1 = require("../middlewares/async-middleware");
const user_model_1 = __importDefault(require("../models/user-model"));
const attachCookies_1 = require("../utils/attachCookies");
const hashedPassword_1 = require("../utils/hashedPassword");
const REGISTER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // CHECK EMAIL
    const emailExists = yield user_model_1.default.findOne({ email });
    if (emailExists) {
        throw new errors_1.BadRequestError("Email already exists");
    }
    // CHECK IF THERE IS A USER
    const isFirstAccount = (yield user_model_1.default.countDocuments({})) === 0;
    if (isFirstAccount) {
        req.body.role = "admin";
    }
    else {
        req.body.role = "user";
    }
    // HASHING PASSWORD
    const hashedPassword = yield (0, hashedPassword_1.hashPassword)(password);
    req.body.password = hashedPassword;
    // CREATING USER
    const user = yield user_model_1.default.create(req.body);
    // ATTACHING COOKIES
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    (0, attachCookies_1.attachCookiesToResponse)(res, tokenUser);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        msg: "USER_REGISTERED",
        data: tokenUser,
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
    // GET THE USER
    const user = yield user_model_1.default.findOne({ email });
    if (!user) {
        throw new unauthenticated_error_1.default("Invalid Credentials : Email doesnt exist");
    }
    // COMPARE PASSWORD USING BCRYPT JS IN THE MODEL
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new unauthenticated_error_1.default("Password is incorrect");
    }
    // IF PASSWORD MATCH RELEASE THE TOKEN
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    (0, attachCookies_1.attachCookiesToResponse)(res, tokenUser);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        msg: "LOGIN_SUCCESSFUL",
        data: tokenUser,
    });
}));
exports.LOGIN = LOGIN;
const LOGOUT = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    res.status(http_status_codes_1.StatusCodes.OK).json({
        msg: "LOGOUT",
        data: Object.assign({}, req.body),
    });
}));
exports.LOGOUT = LOGOUT;
