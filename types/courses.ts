import { StaticImageData } from "next/image";
import { ObjectId, Types } from 'mongoose';
import { IUser } from "./user";

export interface Course {
  id: number;
  title: string;
  img: StaticImageData;
  description?: string;
  link: string;
  overview?: string;
  topic?: string;
}


export interface ICourse {
  _id?: string;
  created_at?: Date;
  title: string;
  description: string;
  instructor_id: IUser;
  price: number;
  rating?: number
  buyers: []
}


export interface ILesson {
  _id?: Types.ObjectId;
  created_at?: Date;
  course_id: Types.ObjectId;
  title: string;
  content: string;
}

export interface IPost {
  _id?: string
  author: IUser
  content: string;
  tags?: string[];
  likes?: number;
  visibility?: 'public' | 'private' | 'followers';

  replies?: []
  createdAt?: Date;
  updatedAt?: Date;
}