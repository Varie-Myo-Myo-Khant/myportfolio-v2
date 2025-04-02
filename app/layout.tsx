import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Myo Myo Khant | Full Stack Developer | AI & Enterprise Solutions",
    template: "%s | Myo Myo Khant",
  },
  description:
    "Full Stack Developer specializing in AI, Web, and Enterprise Solutions. Expert in Laravel, Django, React, Python, Java, and Big Data Analysis.",
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "Big Data Analysis",
    "Enterprise Software",
    "Web Development",
    "Machine Learning",
    "POS System",
    "Next.js",
    "React",
    "Laravel",
    "Django",
    "Spring Boot",
    "Python",
    "Java",
    "MySQL",
    "NoSQL",
    "Power BI",
    "GitHub",
    "GitLab",
    "Myo Myo Khant",
  ],
  authors: [{ name: "Myo Myo Khant" }],
  creator: "Myo Myo Khant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myomyokhant.site/",
    siteName: "Myo Myo Khant Portfolio",
    title: "Myo Myo Khant | Full Stack Developer & AI Engineer",
    description:
      "Experienced in Full Stack Development, AI Integration, POS Systems, and Big Data Analysis using modern technologies.",
    images: [
      {
        url: "/img/mywebsite.png",
        width: 1200,
        height: 630,
        alt: "Myo Myo Khant - Full Stack Developer & AI Engineer",
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
