import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { IProducts } from "../interfaces/product.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import Product from "../models/product-model";

export const CREATE_PRODUCT = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    const {
      name,
      averageRating,
      color,
      category,
      featured,
      freeShipping,
      description,
      company,
      image,
      price,
      inventory,
      user,
    } = req.body as IProducts;
    // ATTACH THE USERID INCHARGE TO THE PRODUCT THAT WILL BE CREATED
    req.body.user = req.user.userId;
    // AND THEN CREATE A PRODUCT HERE
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "PRODUCT CREATED", product });
  }
);

export const ALL_PRODUCTS = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    res.status(StatusCodes.OK).json({ msg: " ALL PRODUCTS" });
  }
);

export const SINGLE_PRODUCT = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    res.status(StatusCodes.OK).json({ msg: " SINGLE PRODUCT" });
  }
);

export const UPDATE_PRODUCT = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    res.status(StatusCodes.OK).json({ msg: " UPDATED" });
  }
);
export const DELETE_PRODUCT = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    res.status(StatusCodes.OK).json({ msg: " DELETE PRODUCT" });
  }
);

export const UPLOAD_IMAGE = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    res.status(StatusCodes.OK).json({ msg: " UPLOADED" });
  }
);

// export {
//  CREATE_PRODUCT,
//  ALL_PRODUCTS,
//  SINGLE_PRODUCT,
//  UPDATE_PRODUCT,
//  DELETE_PRODUCT,
//  UPLOAD_IMAGE
// }
