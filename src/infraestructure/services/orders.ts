import { Orders } from '../models/order';
import { OrderDTO, UpdatedOrderDTO } from '../models/order.dto';
import db from '../database';

export const getAllDataOrders = async () => {
  try {
    const orders: Orders[] = (await db.findAll({ table: 'orders' })) ?? [];
    return orders;
  } catch (error) {
    console.error(error);
  }
};

export const getDataOneOrder = async (idOrder: number) => {
  try {
    const order: Orders =
      (
        await db.findOne({
          table: 'orders',
          id: 'idOrder',
          idvalue: idOrder,
        })
      )[0] ?? null;
    return order;
  } catch (error) {
    console.error(error);
  }
};

export const addOrderData = async (orden: OrderDTO) => {
  try {
    const resultSave = await db.save({ table: 'orders', data: orden });
    // console.log(resultSave.insertId);
    const { insertId } = resultSave;
    const newOrderCreated: Orders | undefined = await getDataOneOrder(insertId);
    return newOrderCreated;
  } catch (error) {
    console.error(error);
  }
};

export const updateOrderData = async (idOrden: number, orderToUpdate: UpdatedOrderDTO) => {
  try {
    let orderFinded: Orders = await getDataOneOrder(idOrden);
    orderFinded = { ...orderFinded, ...orderToUpdate };
    const resultUpdate = await db.update({ table: 'orders', data: orderFinded, id: 'idOrder' });
    return orderFinded;
  } catch (error) {
    console.error(error);
  }
};

export const deleteOrderData = async (idOrder: number) => {
  try {
    const result = await db.remove({ table: 'orders', id: 'idOrder', data: { idOrder } });
    console.log('delete', result);
  } catch (error) {
    console.error(error);
  }
};
