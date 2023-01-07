import { IUser } from './user.entity';

export interface IUserRepository {
  findUserById(id: String): Promise<IUser | null>;
  createUser(user: IUser): Promise<IUser | null>;
  getAllUsers(): Promise<IUser[] | null>;
}
