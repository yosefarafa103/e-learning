import { StaticImageData } from "next/image";

export interface Course {
  id: number;
  title: string;
  img: StaticImageData;
  description?: string;
  link: string;
  overview?: string;
  topic?: string;
}
