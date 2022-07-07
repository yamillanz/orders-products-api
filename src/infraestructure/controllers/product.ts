import { Request, Response } from 'express';
import {
  addProductData,
  deleteProductData,
  getAllDataProducts,
  getDataOneProduct,
  updateProductData,
} from '../services/products';

export const getAllProducts = async (req: Request, resp: Response) => {
  const products = await getAllDataProducts();
  resp.status(200).json(products);
};

export const getAProduct = async (req: Request, resp: Response) => {
  const idProduct: number = +req.params.idProduct;
  const product = (await getDataOneProduct(idProduct)) ?? {};
  resp.status(200).json(product);
};

export const updateProduct = async (req: Request, resp: Response) => {
  const idProduct = +req.params.idProduct;
  const orderUpdated = await updateProductData(idProduct, req.body);
  resp.status(200).json({ message: 'Successfully Update Data', order: orderUpdated });
};

export const deleteAProduct = async (req: Request, resp: Response) => {
  const idProduct = +req.params.idProduct;
  await deleteProductData(idProduct);
  resp.json({ message: 'Deleted Successfully' });
};

export const addProduct = async (req: Request, resp: Response) => {
  const productData = req.body;
  const newProduct = await addProductData(productData);
  resp.status(200).json({ message: 'Successfully Add Data', order: newProduct });
};
