import { Request, Response } from 'express';
import { UserUseCase } from '../../application/user.usecase';

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  public createNewUser = async (req: Request, res: Response) => {
    const body = req.body;
    const user = await this.userUseCase.createUser(body);
    res.status(201).send(user);
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userUseCase.findUserById(id);
    res.status(200).send(user);
  };

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userUseCase.getAllUsers();
    res.status(200).send(users);
  };
}
