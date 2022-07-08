import { Users } from './../models/users';
import db from '../../infraestructure/database';

export const getAllDataUsers = async (): Promise<Users[] | undefined> => {
  try {
    const users: Users[] = await db.findAll({ table: 'users' });
    return users;
  } catch (error) {
    console.error(error);
  }
};

export const getDataOneUser = async (idUSer: number): Promise<Users | undefined> => {
  try {
    const user: Users = (
      await db.findOne({
        table: 'users',
        id: 'idUser',
        idvalue: idUSer,
      })
    )[0];
    return user ?? null;
  } catch (error) {
    console.error(error);
  }
};
