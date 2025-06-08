import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric Uwizeye",
  description: "About Eric Uwizeye, a software engineer and entrepreneur.",
  keywords: [
    "Eric Uwizeye",
    "Eric",
    "艾克",
    "software engineer",
    "portfolio",
    "web developer",
    "mobile developer",
    "programmer",
    "React",
    "React Native",
    "Redux",
    "Next.js",
  ],
  authors: [{ name: "Eric Uwizeye" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
