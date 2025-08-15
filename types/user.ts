import { ICourse } from "./courses";

export interface IUser {
    _id?: string;
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
