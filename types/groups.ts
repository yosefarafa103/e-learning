import { IUser } from "./user";

export interface IGroup {
  _id?: string;
  name: string;
  description?: string;
  teacher: IUser;
  students: IUser[]|null;
  createdAt?: Date;
  updatedAt?: Date;
}
