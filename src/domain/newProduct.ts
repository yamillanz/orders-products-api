import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Products } from './../infraestructure/models/products';
import { ProductDTO } from './../infraestructure/models/products.dto';

import { errorEntryBuilder } from '../application/errorEntryBuilder';
import { addProductData } from '../infraestructure/services/products';
import { getDataOneOrder } from './../infraestructure/services/orders';

export const addNewProduct = async (productData: ProductDTO): Promise<Products> => {
  const productDTO = plainToClass(ProductDTO, productData);
  try {
    await validateOrReject(productDTO, {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    });
  } catch (error) {
    throw errorEntryBuilder(error);
  }

  const { idOrder } = productData;
  const validOrder = await getDataOneOrder(idOrder);
  if (!validOrder || JSON.stringify(validOrder) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid order' };
  }

  try {
    const newProduct: Products = await addProductData(productData);
    return newProduct;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
