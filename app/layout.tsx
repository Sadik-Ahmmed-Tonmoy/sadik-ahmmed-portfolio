import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyContextProvider from "@/lib/MyContextProvider";
import SessionProviderForNextAuth from "@/nextAuth/SessionProviderForNextAuth";
import ReduxStoreProvider from "@/redux/ReduxStoreProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sadik Ahmmed Tonmoy | Full Stack Developer",
    template: "%s | Sadik Ahmmed Tonmoy"
  },
  description: "Full Stack Developer specializing in MERN stack, React, Next.js, and modern web technologies. Available for hire. Let's build something amazing together!",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Bangladesh",
    "JavaScript Developer",
    "Freelance Developer",
    "Sadik Ahmmed Tonmoy",
    "Portfolio"
  ],
  authors: [
    {
      name: "Sadik Ahmmed Tonmoy",
      url: "https://sadik-ahmmed-portfolio.vercel.app/"
    }
  ],
  creator: "Sadik Ahmmed Tonmoy",
  publisher: "Sadik Ahmmed Tonmoy",
  metadataBase: new URL("https://sadik-ahmmed-portfolio.vercel.app/"),
  openGraph: {
    title: "Sadik Ahmmed Tonmoy | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, React, Next.js, and modern web technologies. Available for hire!",
    url: "https://sadik-ahmmed-portfolio.vercel.app/",
    siteName: "Sadik Ahmmed Tonmoy Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sadik Ahmmed Tonmoy - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadik Ahmmed Tonmoy | Full Stack Developer",
    description: "Full Stack Developer specializing in MERN stack, React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@sadikahmmed",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://sadik-ahmmed-portfolio.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning={true} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MyContextProvider>
          <SessionProviderForNextAuth>
            <ReduxStoreProvider>
              <Toaster richColors position="top-right" />
              {children}
            </ReduxStoreProvider>
          </SessionProviderForNextAuth>
        </MyContextProvider>
      </body>
    </html>
  );
}