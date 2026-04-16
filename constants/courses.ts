import { Course } from "@/types/courses";

import img from "@/app/_assets/courses-imgs/marek-piwnicki-cOEOiVxB2os-unsplash.jpg";
export const CoursesData: Course[] = [
  {
    id: 1,
    link: "markting",
    description: "lorem",
    title: "Introdution To Programing",
    img,
    overview: `This course is a comprehensive introduction to React, one of the most popular JavaScript libraries for building user interfaces. Whether you're a beginner just starting with web development or a developer looking to enhance your skills, this course will guide you from the fundamentals to advanced concepts.

You'll start by learning what React is and why it's used by top companies like Facebook, Instagram, and Netflix. The course covers essential topics such as components, props, state, and JSX. You'll also dive into powerful features like React Hooks, routing, and context API.

By the end of this course, you'll be able to build dynamic, fast, and modern web applications using React — from simple components to full-scale projects.`,
    topic: "markting"
  },
  {
    id: 2,
    link: "markting",
    description:
      "A complete course to master React library for building interactive UIs using JavaScript, JSX, Hooks, and more.",
    title: "Introdution To Markting",
    img,
  },
  {
    id: 3,
    link: "markting",
    description: "lorem",
    title: "Introdution To Markting",
    img,
  },
  {
    id: 4,
    link: "markting",
    description: "lorem",
    title: "Introdution To Markting",
    img,
  },
];
export const dashboardFakeCourses =
  [
    {
      id: 1,
      title: "Computer Science 101",
      instructor: "Dr. Ahmed Ali",
      progress: 80,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      title: "Frontend Engineering",
      instructor: "Eng. Salma Hassan",
      progress: 45,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 3,
      title: "Database Management Systems",
      instructor: "Dr. Omar Mahmoud",
      progress: 100,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 4,
      title: "Artificial Intelligence Basics",
      instructor: "Dr. Sarah Ibrahim",
      progress: 20,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=60",
    },
  ]