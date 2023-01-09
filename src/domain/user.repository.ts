import { IUser, NewUserEntry } from './user.entity';

export interface IUserRepository {
  findUserById(id: String): Promise<IUser | undefined>;
  createUser(user: NewUserEntry): Promise<IUser | undefined>;
  getAllUsers(): Promise<IUser[] | []>;
}
