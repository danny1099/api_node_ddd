import { IUser } from './../../domain/user.entity';
import { IUserRepository } from '../../domain/user.repository';

const mockDataBase: IUser[] = [];

export class MockRepository implements IUserRepository {
  async findUserById(id: String): Promise<IUser | undefined> {
    const userFind = mockDataBase.find((data) => data.id === id);

    if (userFind) {
      const { id, name, email } = userFind;
      const user: IUser = { id, name, email } as IUser;

      return user;
    }

    return undefined;
  }

  async createUser(user: IUser): Promise<IUser | undefined> {
    if (user) {
      mockDataBase.push(user);
      return user;
    }

    return undefined;
  }

  async getAllUsers(): Promise<IUser[] | []> {
    return mockDataBase;
  }
}
