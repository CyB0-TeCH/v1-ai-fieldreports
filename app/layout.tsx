import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ai-fieldreports | View Pro",
  description: "National AI-Powered Property & Equipment Inspection Engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <header className="bg-blue-700 text-white p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">ai-fieldreports</h1>
            <span className="text-xs bg-blue-600 px-2 py-1 rounded">View Pro Engine</span>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
