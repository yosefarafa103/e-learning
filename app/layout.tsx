import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import Header from "@/components/Header";
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


import { CookiesProvider } from 'next-client-cookies/server';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/logo2.png" type="image/x-icon" />
        <title>الصفحة الرئيسية | تعلمك</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased dark:bg-black`}
      >
        <Toaster />
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          attribute="class"
        >
          <Header />
          <CookiesProvider>
            <PageWrapper>
              {children}
            </PageWrapper>
          </CookiesProvider>
        </ThemeProvider>

      </body>

    </html >
  );
}
