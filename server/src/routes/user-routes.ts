import express from "express";
import {
  ALL_USERS,
  CURRENT_USER,
  SINGLE_USER,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
} from "../controllers/user-controller";
import {
  authenticationMiddleware,
  authorizedPermissions,
} from "../middlewares/authentication-middleware";
const router = express.Router();

router
  .route("/")
  .get(
    authenticationMiddleware,
    authorizedPermissions(["admin", "manager", "user"]),
    ALL_USERS
  );
router.route("/showMe").get(CURRENT_USER);

router.route("/updateUser").patch(UPDATE_USER);
router.route("/updateUserPass").patch(UPDATE_USER_PASSWORD);
router.route("/:id").get(authenticationMiddleware, SINGLE_USER);

export { router };
