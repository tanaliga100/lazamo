"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const authorizedPermissions_1 = require("../utils/authorizedPermissions");
const router = express_1.default.Router();
exports.router = router;
router
    .route("/")
    .get(product_controller_1.ALL_PRODUCTS)
    .post(authentication_middleware_1.authenticationMiddleware, (0, authorizedPermissions_1.authorizedPermissions)(["admin"]), product_controller_1.CREATE_PRODUCT);
router
    .route("/uploadImage")
    .post(authentication_middleware_1.authenticationMiddleware, (0, authorizedPermissions_1.authorizedPermissions)(["admin"]), product_controller_1.UPLOAD_IMAGE);
router
    .route("/:id")
    .get(product_controller_1.SINGLE_PRODUCT)
    .patch((0, authorizedPermissions_1.authorizedPermissions)(["admin"]), product_controller_1.UPDATE_PRODUCT)
    .delete((0, authorizedPermissions_1.authorizedPermissions)(["admin"]), product_controller_1.DELETE_PRODUCT);
