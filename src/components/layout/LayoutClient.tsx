"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && <Header />}
      {children}
      {pathname === "/" && <Footer />}
    </>
  );
}
