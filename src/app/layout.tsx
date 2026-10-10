import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniTransit — Bus Route & Seat Allotment",
  description: "College Bus Route and Seat Allotment System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
