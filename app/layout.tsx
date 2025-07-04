import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "تعلّمك",
    description: "ابدأ رحلتك التعليمية معنا واكتشف محتوى يلهمك لتتقدّم",
  }
}
export const generateMetaData: Metadata = {
  title: "تعلّمك",
  description: "ابدأ رحلتك التعليمية معنا واكتشف محتوى يلهمك لتتقدّم",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <head>
        <link rel="icon" href="/logo2.png" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased dark:bg-black`}
      >
         <Toaster />
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          <PageWrapper>
            {children}
          </PageWrapper>
        </ThemeProvider>

      </body>

    </html>
  );
}
