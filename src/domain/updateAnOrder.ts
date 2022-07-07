import { OrderDTO, Orders, UpdatedOrderDTO } from '../infraestructure/models/order';
import { plainToClass } from 'class-transformer';
import { errorEntryBuilder } from '../application/errorEntryBuilder';
import { validateOrReject } from 'class-validator';
import { updateOrderData } from '../infraestructure/services/orders';

export const updateAnOrder = async (
  idOrder: number,
  orderData: UpdatedOrderDTO
): Promise<Orders> => {
  const orderDTO = plainToClass(UpdatedOrderDTO, orderData);
  try {
    const result = await validateOrReject(orderDTO, {
      forbidUnknownValues: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    });
  } catch (error) {
    throw errorEntryBuilder(error);
  }

  try {
    const orderUpdated: Orders = await updateOrderData(idOrder, orderData);
    return orderUpdated;
  } catch (error) {
    throw { statusCode: 500, errorMessages: error };
  }
};
