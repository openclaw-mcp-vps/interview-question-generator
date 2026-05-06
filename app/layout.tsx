import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Question Generator",
  description: "Generate technical interview questions from job descriptions using AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5dce6590-86e8-4116-927a-c4c0a637115a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
