import { IUser, NewUserEntry } from '../../domain/user.entity';
import { IUserRepository } from '../../domain/user.repository';
import { User } from '../model/mongo/user.schema';

export class MongoRepository implements IUserRepository {
  async findUserById(id: String): Promise<IUser | undefined> {
    try {
      const userFind = await User.findOne({ id });

      if (userFind) {
        const { _id, name, email } = userFind;
        const user: IUser = { id: _id.toString(), name, email } as IUser;

        return user;
      }

      return undefined;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async createUser(user: NewUserEntry): Promise<IUser | undefined> {
    const newUser = await User.create(user);

    if (newUser) {
      const { id, name, email } = newUser;
      const user: IUser = { id, name, email } as IUser;

      return user;
    }

    return newUser;
  }

  async getAllUsers(): Promise<IUser[] | []> {
    const allUsers = await User.find({});
    const users: IUser[] = [];

    if (allUsers) {
      allUsers.map((el) => {
        const { id, name, email } = el;
        const user = {
          id,
          name,
          email,
        } as IUser;

        users.push(user);
      });

      return users;
    }

    return [];
  }
}
