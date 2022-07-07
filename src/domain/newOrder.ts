import { OrderDTO, Orders } from './../infraestructure/models/order';
import { plainToClass } from 'class-transformer';
import { errorEntryBuilder } from './../application/errorEntryBuilder';
import { validateOrReject } from 'class-validator';
import { addOrderData } from '../infraestructure/services/orders';

export const addNewOrder = async (orderData: OrderDTO): Promise<Orders> => {
  const orderDTO = plainToClass(OrderDTO, orderData);
  try {
    await validateOrReject(orderDTO, {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    });
  } catch (error) {
    console.log('paso', error);
    throw errorEntryBuilder(error);
  }

  try {
    const newOrder: Orders = await addOrderData(orderData);
    return newOrder;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
