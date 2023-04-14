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
exports.UPDATE_USER_PASSWORD = exports.UPDATE_USER = exports.SINGLE_USER = exports.CURRENT_USER = exports.ALL_USERS = void 0;
const http_status_codes_1 = require("http-status-codes");
const errors_1 = require("../errors");
const async_middleware_1 = require("../middlewares/async-middleware");
const user_model_1 = __importDefault(require("../models/user-model"));
const ALL_USERS = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const users = yield user_model_1.default.find({ role: "user" }).select("-password");
    if (!users) {
        throw new errors_1.BadRequestError("No Users found");
    }
    res.status(http_status_codes_1.StatusCodes.OK).json({ msg: "ALL_USERS", users });
}));
exports.ALL_USERS = ALL_USERS;
const SINGLE_USER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const user = yield user_model_1.default.findOne({ _id: req.params.id }).select("-password");
    if (!user) {
        throw new errors_1.NotFoundError(`No user with id ${req.params.id}`);
    }
    res.status(200).json({ msg: "SINGLE_USER", user });
}));
exports.SINGLE_USER = SINGLE_USER;
const CURRENT_USER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("CURRENT USER");
}));
exports.CURRENT_USER = CURRENT_USER;
const UPDATE_USER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send(req.body);
}));
exports.UPDATE_USER = UPDATE_USER;
const UPDATE_USER_PASSWORD = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send(req.body);
}));
exports.UPDATE_USER_PASSWORD = UPDATE_USER_PASSWORD;
