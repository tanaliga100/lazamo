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
import { authorizedPermissions } from "../utils/authorizedPermissions";

const router = express.Router();

router
  .route("/")
  .get(ALL_PRODUCTS)
  .post(
    authenticationMiddleware,
    authorizedPermissions(["admin"]),
    CREATE_PRODUCT
  );
router
  .route("/uploadImage")
  .post(
    authenticationMiddleware,
    authorizedPermissions(["admin"]),
    UPLOAD_IMAGE
  );
router
  .route("/:id")
  .get(SINGLE_PRODUCT)
  .patch(authorizedPermissions(["admin"]), UPDATE_PRODUCT)
  .delete(authorizedPermissions(["admin"]), DELETE_PRODUCT);

export { router };
