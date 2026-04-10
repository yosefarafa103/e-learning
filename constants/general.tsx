import { ISubject } from "@/models/subjects.model";
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
        label: ("statistics.students"),
    },
    {
        icon: <BookOpen className="w-10 h-10" />,
        value: "320+",
        label: ("statistics.courses"),
    },
    {
        icon: <GraduationCap className="w-10 h-10" />,
        value: "80+",
        label: ("statistics.instructors"),
    },
    {
        icon: <Star className="w-10 h-10" />,
        value: "4.9 / 5",
        label: ("statistics.rating"),
        iconColor: "text-yellow-400",
    },
];
