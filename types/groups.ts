import { IUser } from "./user";

export interface IGroup {
  _id?: string;
  name: string;
  description?: string;
  teacher: string;
  students: IUser[];
  createdAt?: Date;
  updatedAt?: Date;
}
