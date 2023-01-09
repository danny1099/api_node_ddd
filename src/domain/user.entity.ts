export interface IUser {
  name: string;
  email: string;
  id: string;
}

export type NewUserEntry = Omit<IUser, 'id'>;
export interface UserEntityArray extends Array<IUser> {}
