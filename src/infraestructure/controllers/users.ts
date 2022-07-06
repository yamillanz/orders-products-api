import { getAllDataUsers, getDataOneUser } from './../services/user';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, resp: Response) => {
  const users = await getAllDataUsers();
  resp.status(200).json(users);
};

export const getAUser = async (req: Request, resp: Response) => {
  const idUser: number = +req.params.idUser;
  const user = (await getDataOneUser(idUser)) ?? {};
  resp.status(200).json(user);
};
