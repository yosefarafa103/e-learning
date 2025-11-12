import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="bg-background border rounded-lg text-gray-200 pt-10 pb-5"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            روابط مهمة
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                الشروط والأحكام
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                الدعم الفني
              </a>
            </li>
          </ul>
        </>

        <>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            تواصل معنا
          </h3>
          <ul className="space-y-3 ">
            <li className="flex items-center gap-3 text-primary">
              <Mail className="w-5 h-5 text-indigo-400" />
              <a
                href="mailto:support@elearn.com"
                className="hover:text-indigo-400"
              >
                support@elearn.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-primary">
              <Phone className="w-5 h-5 text-indigo-400" />
              <span>+20 100 123 4567</span>
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-indigo-400 transition text-primary">
              <Facebook />
            </a>
            <a href="#" className="hover:text-indigo-400 transition text-primary">
              <Twitter />
            </a>
            <a href="#" className="hover:text-indigo-400 transition text-primary">
              <Instagram />
            </a>
          </div>
        </>

        <>
          <h3 className="text-xl font-semibold mb-4 text-white">عن المنصة</h3>
          <p className="text-primary leading-relaxed">
            نحن منصة تعليمية إلكترونية تهدف إلى تمكين المتعلمين من تطوير
            مهاراتهم عبر الإنترنت من خلال محتوى تفاعلي وأساتذة متميزين في مختلف
            المجالات.
          </p>
        </>
      </div>

      <div className="border-t border-primary mt-10 pt-6 text-center text-primary text-sm">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لمنصة{" "}
        <span className="text-indigo-400">تعلمك</span>
      </div>
    </footer>
  );
}
