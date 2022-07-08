import { Orders } from './../infraestructure/models/order';
import { OrderDTO } from './../infraestructure/models/order.dto';
import { plainToClass } from 'class-transformer';
import { errorEntryBuilder } from './../application/errorEntryBuilder';
import { validateOrReject } from 'class-validator';
import { addOrderData } from '../infraestructure/services/orders';
import { getDataOneUser } from '../infraestructure/services/user';

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

  const { idUser } = orderData;
  const validUser = await getDataOneUser(idUser);
  if (!validUser || JSON.stringify(validUser) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid user' };
  }

  try {
    const newOrder: Orders = await addOrderData(orderData);
    return newOrder;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
