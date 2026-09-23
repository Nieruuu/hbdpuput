import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { content } from "@/config/content";
export const metadata: Metadata = { title: content.seo.title, description: content.seo.description, robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
