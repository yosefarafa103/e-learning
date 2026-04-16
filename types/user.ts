import { ICourse } from "./courses";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher';
  createdAt?: Date;
  updatedAt?: Date;
  subjects: string[] | []
  imgProfile: string
  enrolled_courses?: ICourse[] | []
}


export type User = {
  name: string;
  email: string;
  major: string;
  university: string;
  year: string;
  gpa: number | string;
  completedCourses: number | string;
  inProgressCourses: number | string;
  avatar: string;
};

export type Student = {
  id: number;
  student: string;
  title: string;
  status: string;
  grade: null | number;
}
