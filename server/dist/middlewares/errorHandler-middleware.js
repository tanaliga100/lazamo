"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMidlleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = __importDefault(require("../errors/custom-error"));
const errorHandlerMidlleware = (err, req, res, next) => {
    console.log(err instanceof custom_error_1.default ? "CUSTOM_ERROR" : "FALLBACK_ERROR");
    // DEFINE A DEFAULT ERROR OBJECT
    let customError = {
        statusCode: err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong",
    };
    // BELOW ARE THE DIFFERENT KINDS OF ERROR THROWN BY MONGOOSE || CUSTOMIZED
    // Note: Validation Error Handler
    if (err.name && err.name === "ValidationError") {
        customError.msg = Object.values(err.errors).map((item) => {
            const path = item.path;
            const message = item.message;
            return {
                path: path,
                message: message,
            };
        });
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    // Note: Duplicate Error Handler
    if (err.code && err.code === 11000) {
        customError.msg = `DUPLICATE VALUE ENTERED FOR ${Object.keys(err.keyValue)} FIELD... Please choose another email address`;
        customError.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
    }
    // Note: Cast Error Handler
    if (err.name === "CastError") {
        customError.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        customError.msg = `NO ITEM FOUND WITH ID: ${err.value}`;
    }
    // return res.status(404).json({
    //   err,
    // });
    return res.status(customError.statusCode).json({
        ERROR: customError.msg,
    });
};
exports.errorHandlerMidlleware = errorHandlerMidlleware;
