import { Fira_Code } from "next/font/google";
import "../styles/globals.css";
import MainLayout from "@/components/layout";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Tomilayo's Portfolio",
  description: "Tomilayo's Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaCode.variable}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
