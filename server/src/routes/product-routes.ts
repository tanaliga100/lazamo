import express from "express";
import {
  ALL_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  SINGLE_PRODUCT,
  UPDATE_PRODUCT,
  UPLOAD_IMAGE,
} from "../controllers/product-controller";
import { authenticationMiddleware } from "../middlewares/authentication-middleware";

const router = express.Router();

router.route("/").get(ALL_PRODUCTS).post(
  authenticationMiddleware,
  // authorizedPermissions(["admin", "manager"]),
  CREATE_PRODUCT
);
router.route("/uploadImage").post(authenticationMiddleware, UPLOAD_IMAGE);
router
  .route("/:id")
  .get(SINGLE_PRODUCT)
  .patch(
    authenticationMiddleware,
    // authorizedPermissions(["admin", "manager"]),
    UPDATE_PRODUCT
  )
  .delete(
    authenticationMiddleware,
    // authorizedPermissions(["admin", "manager"]),
    DELETE_PRODUCT
  );

export { router };
