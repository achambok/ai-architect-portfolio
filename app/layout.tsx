import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ashley Chamboko – Principal AI & Cloud Architect",
  description:
    "AI Architect specializing in national-scale AI platforms, MLOps, and cloud-native data systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

