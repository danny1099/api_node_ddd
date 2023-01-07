import { IUser } from '../domain/user.entity';
import { UserValue } from '../domain/user.value';
import { IUserRepository } from '../domain/user.repository';

export class UserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  createUser = async (user: IUser) => {
    const userInstance = new UserValue(user);
    const userCreated = await this.userRepository.createUser(userInstance);
    return userCreated;
  };

  findUserById = async (id: String) => {
    const user = await this.userRepository.findUserById(id);
    return user;
  };

  getAllUsers = async () => {
    const users = await this.userRepository.getAllUsers();
    return users;
  };
}
