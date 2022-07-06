import { Request, Response } from 'express';
// import db from "../../database";

export const getAllProducts = async (req: Request, resp: Response) => {
  resp.json({ users: [] });
};

export const getAProduct = async (req: Request, resp: Response) => {
  const idUser = req.params.idUser;
  resp.json({ data: idUser });
};

export const updateProduct = async (req: Request, resp: Response) => {
  const idUser = req.params.idUser;
  resp.json({ data: idUser });
};

export const deleteAProduct = async (req: Request, resp: Response) => {
  const idUser = req.params.idUser;
  resp.json({ data: idUser });
};

export const addProduct = async (req: Request, resp: Response) => {
  resp.json({ data: 'Add data successfully' });
};
