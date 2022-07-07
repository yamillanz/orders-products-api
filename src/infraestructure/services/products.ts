import { Products, ProductDTO } from '../models/products';
import db from '../database';

export const getAllDataProducts = async (): Promise<Products[] | any> => {
  try {
    const products: Products[] = await db.findAll({ table: 'orders_products' });
    return products;
  } catch (error) {
    console.error(error);
  }
};

export const getDataOneProduct = async (idProduct: number): Promise<Products | any> => {
  try {
    const Product: Products =
      (
        await db.findOne({
          table: 'orders_products',
          id: 'idOrderProduct',
          idvalue: idProduct,
        })
      )[0] ?? null;
    return Product;
  } catch (error) {
    console.error(error);
  }
};

export const addProductData = async (product: ProductDTO) => {
  try {
    const resultSave = await db.save({ table: 'orders_products', data: product });
    // console.log(resultSave.insertId);
    const { insertId } = resultSave;
    const newProductCreated: ProductDTO = await getDataOneProduct(insertId);
    return newProductCreated;
  } catch (error) {
    console.error(error);
  }
};

export const updateProductData = async (idProduct: number, ProductToUpdate: ProductDTO) => {
  try {
    let ProductFinded: Products = await getDataOneProduct(idProduct);
    ProductFinded = { ...ProductFinded, ...ProductToUpdate };
    const resultUpdate = await db.update({
      table: 'orders_products',
      data: ProductFinded,
      id: 'idOrderProduct',
    });
    return ProductFinded;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProductData = async (idOrderProduct: number) => {
  try {
    const result = await db.remove({
      table: 'orders_products',
      id: 'idOrderProduct',
      data: { idOrderProduct },
    });
  } catch (error) {
    console.error(error);
  }
};
