import { Request, Response } from 'express';
import { addNewProduct } from '../../domain/newProduct';
import { updateAProduct } from '../../domain/updateAProduct';
import { deleteProductData, getAllDataProducts, getDataOneProduct } from '../services/products';

export const getAllProducts = async (req: Request, resp: Response) => {
  const products = await getAllDataProducts();
  resp.status(200).json(products);
};

export const getAProduct = async (req: Request, resp: Response) => {
  const idProduct: number = +req.params.idProduct;
  const product = (await getDataOneProduct(idProduct)) ?? {};
  resp.status(200).json(product);
};

export const addProduct = async (req: Request, resp: Response) => {
  try {
    const newProduct = await addNewProduct(req.body);
    resp.status(200).json({ message: 'Add Data Successfully', order: newProduct });
  } catch (error) {
    let { statusCode, errorsMessages } = error;
    console.log('error request: ', error);
    errorsMessages = errorsMessages ?? { error: 'Something wrong with add product' };

    resp.status(statusCode).json({ errorsMessages });
  }
};

export const updateProduct = async (req: Request, resp: Response) => {
  try {
    const idProduct = +req.params.idProduct;
    const productUpdate = await updateAProduct(idProduct, req.body);
    resp.status(200).json({ message: 'Successfully Update Data', order: productUpdate });
  } catch (error) {
    let { statusCode, errorsMessages } = error;
    errorsMessages = errorsMessages ?? { error: 'Something wrong with add product' };

    console.log('error request: ', error);
    resp.status(statusCode).json({ errorsMessages });
  }
};

export const deleteAProduct = async (req: Request, resp: Response) => {
  const idProduct = +req.params.idProduct;
  await deleteProductData(idProduct);
  resp.json({ message: 'Deleted Successfully' });
};
