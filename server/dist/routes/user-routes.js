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
router
    .route("/")
    .get(authentication_middleware_1.authenticationMiddleware, (0, authentication_middleware_1.authorizedPermissions)(["admin", "manager", "user"]), user_controller_1.ALL_USERS);
router.route("/showMe").get(user_controller_1.CURRENT_USER);
router.route("/updateUser").patch(user_controller_1.UPDATE_USER);
router.route("/updateUserPass").patch(user_controller_1.UPDATE_USER_PASSWORD);
router.route("/:id").get(authentication_middleware_1.authenticationMiddleware, user_controller_1.SINGLE_USER);
