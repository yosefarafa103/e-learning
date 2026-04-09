"use client"
import { useTranslation } from "react-i18next";
export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          {t("about.title")}
          <span className="text-indigo-600">{t("about.platform")}</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
        <p className="text-lg text-primary leading-relaxed max-w-3xl mx-auto">
          {t("about.description")}
        </p>
      </div>
    </section>
  );
}
