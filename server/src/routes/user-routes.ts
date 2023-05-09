import express from "express";
import {
  ALL_USERS,
  CURRENT_USER,
  DELETE_USER,
  SINGLE_USER,
  UPDATE_ROLE,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
} from "../controllers/user-controller";
import { authenticationMiddleware } from "../middlewares/authentication-middleware";
import { authorizedPermissions } from "../utils/authorizedPermissions";
const router = express.Router();

router
  .route("/")
  .get(authenticationMiddleware, authorizedPermissions(["admin"]), ALL_USERS);
router
  .route("/currentUser")
  .get(
    authenticationMiddleware,
    authorizedPermissions(["admin"]),
    CURRENT_USER
  );

router.route("/updateUser").patch(authenticationMiddleware, UPDATE_USER);
router
  .route("/updateUserPass")
  .patch(authenticationMiddleware, UPDATE_USER_PASSWORD);
router.route("/updateRole/:id").patch(authenticationMiddleware, UPDATE_ROLE);
router
  .route("/:id")
  .get(authenticationMiddleware, SINGLE_USER)
  .delete(authenticationMiddleware, DELETE_USER);

export { router };
