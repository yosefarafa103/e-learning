import { ISubject } from "@/models/subjects.model";
import { Assignment, AssignmentStatus, AssignmentStatusList } from "@/types/dashboard";
import { Student } from "@/types/user";
import {
  FlaskConical,
  Palette,
  LaptopMinimal,
  BookOpenText,
  Sigma,
  Users,
  BookOpen,
  GraduationCap,
  Star,
} from "lucide-react";
export const categories = [
  {
    title: "Science",
    icon: <FlaskConical />,
  },
  {
    title: "Arts",
    icon: <Palette />,
  },
  {
    title: "Technology",
    icon: <LaptopMinimal />,
  },
  {
    title: "Literature",
    icon: <BookOpenText />,
  },
  {
    title: "Mathematics",
    icon: <Sigma />,
  },
];

export const fakeSubjects: ISubject[] = [
  {
    category: "الصف الاول الاعدادي",
    title: "رياضيات",
    description: "تعلم الرياضيات باسهل الطرق مع نخبه من المختصين",
    created_at: new Date(),
    updated_at: new Date(),
    level: "high",
  },
  {
    category: "الصف الاول الاعدادي",
    title: "علوم",
    description: "اكتشف اساسيات العلوم بطريقة مبسطة وسهلة الفهم",
    created_at: new Date(),
    updated_at: new Date(),
    level: "medium",
  },
  {
    category: "الصف الاول الاعدادي",
    title: "دراسات اجتماعية",
    description: "تعرف على التاريخ والجغرافيا بشكل ممتع",
    created_at: new Date(),
    updated_at: new Date(),
    level: "low",
  },
  {
    category: "الصف الثاني الاعدادي",
    title: "رياضيات",
    description: "شرح متقدم لمفاهيم الرياضيات مع تدريبات عملية",
    created_at: new Date(),
    updated_at: new Date(),
    level: "high",
  },
  {
    category: "الصف الثاني الاعدادي",
    title: "لغة عربية",
    description: "تعلم النحو والبلاغة بطريقة سهلة ومبسطة",
    created_at: new Date(),
    updated_at: new Date(),
    level: "medium",
  },
  {
    category: "الصف الثالث الاعدادي",
    title: "لغة انجليزية",
    description: "طور مهاراتك في اللغة الانجليزية بسهولة",
    created_at: new Date(),
    updated_at: new Date(),
    level: "medium",
  },
  {
    category: "الصف الثالث الاعدادي",
    title: "علوم",
    description: "فهم عميق للمفاهيم العلمية مع تطبيقات عملية",
    created_at: new Date(),
    updated_at: new Date(),
    level: "high",
  },
];

export const stats = [
  {
    icon: <Users className="w-10 h-10" />,
    value: "12,500+",
    label: "statistics.students",
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    value: "320+",
    label: "statistics.courses",
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    value: "80+",
    label: "statistics.instructors",
  },
  {
    icon: <Star className="w-10 h-10" />,
    value: "4.9 / 5",
    label: "statistics.rating",
    iconColor: "text-yellow-400",
  },
];
export const fakeUserSettings = {
  name: "Mohamed Khaled",
  email: "mohamed.khaled@example.com",
  language: "English",
  theme: "Light",
  emailNotifications: true,
  pushNotifications: false,
};

export const fakeUser = {
  name: "Mohamed Khaled",
  email: "mohamed.khaled@example.com",
  major: "Computer Science",
  university: "Cairo University",
  year: "3rd Year",
  gpa: 3.8,
  completedCourses: 12,
  inProgressCourses: 3,
  avatar:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=60",
};
export const BASE_URL = "https://e-learning-eight-tau.vercel.app";


export const fakeAssignmentsStudentDashboard: Assignment[] = [
  {
    id: 1,
    title: "Assignment 1: Introduction to Programming",
    course: "Computer Science 101",
    dueDate: "Nov 5, 2025",
    status: "pending",
    progress: 0,
    type: "assignment",
  },
  {
    id: 2,
    title: "Quiz 1: Data Structures",
    course: "Computer Science 102",
    dueDate: "Nov 2, 2025",
    status: "completed",
    progress: 100,
    type: "quiz",
  },
  {
    id: 3,
    title: "Assignment 2: Web Development Basics",
    course: "Frontend Engineering",
    dueDate: "Nov 10, 2025",
    status: "in_progress",
    progress: 60,
    type: "assignment",
  },
  {
    id: 4,
    title: "Quiz 2: JavaScript Fundamentals",
    course: "Frontend Engineering",
    dueDate: "Nov 8, 2025",
    status: "pending",
    progress: 0,
    type: "quiz",
  },
]

export const fakeAssignmentsTeacher: Student[] = [
  {
    id: 1,
    student: "Ahmed Ali",
    title: "Assignment 2",
    status: "Submitted",
    grade: null,
  },
  {
    id: 2,
    student: "Sara Mohamed",
    title: "Quiz 1",
    status: "Graded",
    grade: 90,
  },
  {
    id: 3,
    student: "Omar Hassan",
    title: "Assignment 3",
    status: "Pending",
    grade: null,
  },
]
  ;
export const fakeAssignmentsParent: (Student & { progress: number })[] =
  [
    {
      id: 1,
      student: "Ahmed Ali",
      title: "Assignment 2",
      status: "Submitted",
      grade: 80,
      progress: 100,
    },
    {
      id: 2,
      student: "Ahmed Ali",
      title: "Quiz 1",
      status: "Graded",
      grade: 95,
      progress: 100,
    },
    {
      id: 3,
      student: "Ahmed Ali",
      title: "Assignment 3",
      status: "Pending",
      grade: null,
      progress: 40,
    },
  ];



export const assignmentsStatus: AssignmentStatusList = ['all', "pending", "in_progress", "completed"]