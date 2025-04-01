import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Myo Myo Khant | Next.js & React Developer | AI Integration Specialist",
    template: "%s | Myo Myo Khant",
  },
  description:
    "Senior Full Stack Developer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "AI Integration",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Performance Optimization",
    "Myo Myo Khant",
  ],
  authors: [{ name: "Myo Myo Khant" }],
  creator: "Myo Myo Khant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myomyokhant.site/",
    siteName: "Myo Myo Khant Portfolio",
    title: "Myo Myo Khant | Next.js & React Developer",
    description:
      "Senior Full Stack Developer specializing in Next.js, React, and AI Integration. Building high-performance web applications.",
    images: [
      {
        url: "/img/website.png",
        width: 1200,
        height: 630,
        alt: "Myo Myo Khant - Next.js & React Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://myomyokhant.site",
  },
  icons: {
    icon: "/img/fav.svg",
    apple: "/img/fav.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
