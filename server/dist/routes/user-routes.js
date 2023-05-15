"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const authentication_middleware_1 = require("../middlewares/authentication-middleware");
const router = express_1.default.Router();
exports.router = router;
router.route("/").get(authentication_middleware_1.authenticationMiddleware, user_controller_1.ALL_USERS);
router.route("/currentUser").get(authentication_middleware_1.authenticationMiddleware, user_controller_1.CURRENT_USER);
router.route("/updateUser").patch(authentication_middleware_1.authenticationMiddleware, user_controller_1.UPDATE_USER);
router
    .route("/updateUserPass")
    .patch(authentication_middleware_1.authenticationMiddleware, user_controller_1.UPDATE_USER_PASSWORD);
router.route("/updateRole/:id").patch(authentication_middleware_1.authenticationMiddleware, user_controller_1.UPDATE_ROLE);
router
    .route("/:id")
    .get(authentication_middleware_1.authenticationMiddleware, user_controller_1.SINGLE_USER)
    .delete(authentication_middleware_1.authenticationMiddleware, user_controller_1.DELETE_USER);
