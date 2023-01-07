import { IUser } from '../../domain/user.entity';
import { IUserRepository } from '../../domain/user.repository';

let mockDataBase: any[] = [];

export class MockRepository implements IUserRepository {
  async findUserById(id: String): Promise<any> {
    const user = mockDataBase.filter((data) => data.id === id);
    return user;
  }

  async createUser(user: IUser): Promise<any> {
    mockDataBase = mockDataBase.concat(user);
    return user;
  }

  async getAllUsers(): Promise<any[]> {
    return mockDataBase;
  }
}
