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
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER = exports.LOGIN = void 0;
const http_status_codes_1 = require("http-status-codes");
const async_middleware_1 = require("../middlewares/async-middleware");
const REGISTER = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { name, email, password } = req.body;
    //Note:  PASSWORD IS HASHED IN THE MODEL BEFORE IT SAVE TO DATABSE
    // Creation of the User here....
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        msg: "USER_REGISTERED",
        data: Object.assign({}, req.body),
    });
}));
exports.REGISTER = REGISTER;
const LOGIN = (0, async_middleware_1.asyncMiddleware)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    // FIND EXISTING EMAIL, IF NONE THROW ERROR
    // COMPARE PASSWORD USING BCRYPT JS IN THE MODEL
    // IF PASSWORD MATCH RELEASE THE TOKEN
    res.status(http_status_codes_1.StatusCodes.OK).json({
        msg: "LOGIN_SUCCESSFUL",
        data: Object.assign({}, req.body),
    });
}));
exports.LOGIN = LOGIN;
