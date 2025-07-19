import { StaticImageData } from "next/image";

export interface Course {
  id: string;
  title: string;
  img: string;
  description?: string;
  link: string;
  overview?: string;
  topic?: string;
}
