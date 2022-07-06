import { Request, Response } from 'express';
import {
  addOrderData,
  deleteOrderData,
  getAllDataOrders,
  getDataOneOrder,
  updateOrderData,
} from '../services/orders';
// import db from "../../database";

export const getAllOrders = async (req: Request, resp: Response) => {
  const orders = await getAllDataOrders();
  resp.status(200).json(orders);
};

export const getAOrder = async (req: Request, resp: Response) => {
  const idOrder: number = +req.params.idOrder;
  const order = (await getDataOneOrder(idOrder)) ?? {};
  resp.status(200).json(order);
};

export const updateOrder = async (req: Request, resp: Response) => {
  const idOrder = +req.params.idOrder;
  const orderUpdated = await updateOrderData(idOrder, req.body);
  resp.status(200).json({ message: 'Successfully Update Data', order: orderUpdated });
};

export const deleteAOrder = async (req: Request, resp: Response) => {
  const idOrder = +req.params.idOrder;
  await deleteOrderData(idOrder);
  resp.json({ message: 'deleted Successfully' });
};

export const addOrder = async (req: Request, resp: Response) => {
  const orderData = req.body;
  const newOrder = await addOrderData(orderData);
  resp.status(200).json({ message: 'Successfully Add Data', order: newOrder });
};
