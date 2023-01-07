import { IUser } from '../../domain/user.entity';
import { IUserRepository } from '../../domain/user.repository';
import { User } from '../model/mongo/user.schema';

export class MongoRepository implements IUserRepository {
  async findUserById(id: String): Promise<any> {
    const user = await User.findOne({ id });
    return user;
  }

  async createUser(user: IUser): Promise<any> {
    const newUser = await User.create(user);
    return newUser;
  }

  async getAllUsers(): Promise<any[]> {
    const allUsers = await User.find({});
    return allUsers;
  }
}
