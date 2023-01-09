import { IUser, NewUserEntry } from './user.entity';
import { v4 as uuid } from 'uuid';

export class UserValue implements IUser {
  name: string;
  email: string;
  id: string;

  constructor(user: NewUserEntry) {
    this.name = user.name;
    this.email = user.email;
    this.id = uuid();
  }
}
