import { OrderDTO, Orders } from './../models/order';
import { Request, Response } from 'express';
import {
  deleteOrderData,
  getAllDataOrders,
  getDataOneOrder,
  updateOrderData,
} from '../services/orders';
import { addNewOrder } from '../../domain/newOrder';
import { updateAnOrder } from '../../domain/updateAnOrder';

export const getAllOrders = async (req: Request, resp: Response) => {
  const orders = await getAllDataOrders();
  resp.status(200).json(orders);
};

export const getAOrder = async (req: Request, resp: Response) => {
  const idOrder: number = +req.params.idOrder;
  const order = (await getDataOneOrder(idOrder)) ?? {};
  resp.status(200).json(order);
};

export const addOrder = async (req: Request, resp: Response) => {
  try {
    const newOrder: Orders = await addNewOrder(req.body);
    resp.status(200).json({ message: 'Add Data Successfully', order: newOrder });
  } catch (error) {
    const { statusCode, errorsMessages } = error;
    console.log('error request: ', error);
    resp.status(statusCode).json({ errorsMessages });
  }
};

export const updateOrder = async (req: Request, resp: Response) => {
  try {
    const idOrder = +req.params.idOrder;
    const orderUpdated = await updateAnOrder(idOrder, req.body);
    resp.status(200).json({ message: 'Successfully Update Data', order: orderUpdated });
  } catch (error) {
    const { statusCode, errorsMessages } = error;
    console.log('error request: ', error);
    resp.status(statusCode).json({ errorsMessages });
  }
};

export const deleteAOrder = async (req: Request, resp: Response) => {
  const idOrder = +req.params.idOrder;
  await deleteOrderData(idOrder);
  resp.json({ message: 'deleted Successfully' });
};
