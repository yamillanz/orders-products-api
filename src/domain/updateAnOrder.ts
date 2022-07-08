import { getDataOneOrder } from './../infraestructure/services/orders';
import { Orders } from '../infraestructure/models/order';
import { UpdatedOrderDTO } from '../infraestructure/models/order.dto';
import { plainToClass } from 'class-transformer';
import { errorEntryBuilder } from '../application/errorEntryBuilder';
import { validateOrReject } from 'class-validator';
import { updateOrderData } from '../infraestructure/services/orders';
import { getDataOneUser } from '../infraestructure/services/user';

export const updateAnOrder = async (
  idOrder: number,
  orderData: UpdatedOrderDTO
): Promise<Orders> => {
  const orderDTO = plainToClass(UpdatedOrderDTO, orderData);
  try {
    await validateOrReject(orderDTO, {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    });
  } catch (error) {
    throw errorEntryBuilder(error);
  }

  const validproduct = await getDataOneOrder(idOrder);
  if (!validproduct || JSON.stringify(validproduct) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid Order' };
  }

  const { idUser } = orderData;
  const validUser = await getDataOneUser(idUser);
  if (!validUser || JSON.stringify(validUser) === '{}') {
    throw { statusCode: 400, errorsMessages: 'No valid user' };
  }

  try {
    const orderUpdated: Orders = await updateOrderData(idOrder, orderData);
    return orderUpdated;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
