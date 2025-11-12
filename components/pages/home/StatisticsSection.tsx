import { Users, BookOpen, GraduationCap, Star } from "lucide-react";
import { ReactNode } from "react";

export default function StatisticsSection() {
  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      value: "12,500+",
      label: "طالب مسجل 👩‍🎓",
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      value: "320+",
      label: "دورة تدريبية 🎓",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      value: "80+",
      label: "مدرب خبير 👨‍🏫",
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-400" />,
      value: "4.9 / 5",
      label: "تقييم المستخدمين ⭐",
      iconColor: "text-yellow-400",
    },
  ];
  return (
    <section className="bg-background transition-colors duration-300 py-20 border rounded-lg mb-2">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          إحصائيات{" "}
          <span className="text-indigo-600 dark:text-indigo-400">المنصة</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 dark:bg-indigo-400 mx-auto mb-12 rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((el) => (
            <StatCard {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}

export interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
  iconColor?: string;
}
export function StatCard({
  icon,
  value,
  label,
  iconColor = "text-indigo-600",
}: StatItem) {
  return (
    <div className="flex flex-col items-center dark:bg-accent bg-background py-8 rounded-2xl shadow-sm hover:shadow-md transition border">
      <div className={`w-10 h-10 mb-3 ${iconColor}`}>{icon}</div>
      <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
        {value}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2">{label}</p>
    </div>
  );
}
