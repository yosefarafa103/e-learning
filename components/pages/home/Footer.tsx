"use client";

import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="bg-background border rounded-lg text-gray-200 pt-10 pb-5"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {t("footer.importantLinks")}
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                {t("footer.privacyPolicy")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                {t("footer.terms")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-indigo-400 transition text-primary"
              >
                {t("footer.support")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {t("footer.contactUs")}
          </h3>
          <ul className="space-y-3">
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
            <a
              href="#"
              className="hover:text-indigo-400 transition text-primary"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition text-primary"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="hover:text-indigo-400 transition text-primary"
            >
              <Instagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">
            {t("footer.aboutPlatform")}
          </h3>
          <p className="text-primary leading-relaxed">
            {t("footer.aboutDescription")}
          </p>
        </div>
      </div>

      <div className="border-t border-primary mt-10 pt-6 text-center text-primary text-sm">
        © {new Date().getFullYear()} {t("footer.rights")}{" "}
        <span className="text-indigo-400">{t("footer.platformName")}</span>
      </div>
    </footer>
  );
}
