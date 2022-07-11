import { getDataOneProduct } from './../infraestructure/services/products';
import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Products } from '../infraestructure/models/products';
import { UpdatedProductDTO } from '../infraestructure/models/products.dto';

import { errorEntryBuilder } from '../application/errorEntryBuilder';
import { updateProductData } from '../infraestructure/services/products';
import { getDataOneOrder } from '../infraestructure/services/orders';

export const updateAProduct = async (
  idProduct: number,
  productData: UpdatedProductDTO
): Promise<Products> => {
  const productDTO = plainToClass(UpdatedProductDTO, productData);
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

  const validproduct = await getDataOneProduct(idProduct);
  if (!validproduct || JSON.stringify(validproduct) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid Product' };
  }

  const { idOrder } = productData;
  const validOrder = await getDataOneOrder(idOrder);
  if (!validOrder || JSON.stringify(validOrder) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid order' };
  }

  try {
    const newProduct: Products = await updateProductData(idProduct, productData);
    return newProduct;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
