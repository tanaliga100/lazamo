import express from "express";
import {
  ALL_PRODUCTS,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  SINGLE_PRODUCT,
  UPDATE_PRODUCT,
  UPLOAD_IMAGE,
} from "../controllers/product-controller";

const router = express.Router();

router.route("/").get(ALL_PRODUCTS).post(CREATE_PRODUCT);
router.route("/uploadImage").post(UPLOAD_IMAGE);
router
  .route("/:id")
  .get(SINGLE_PRODUCT)
  .patch(
    // authorizedPermissions(["admin", "manager"]),
    UPDATE_PRODUCT
  )
  .delete(
    // authorizedPermissions(["admin", "manager"]),
    DELETE_PRODUCT
  );

export { router };
