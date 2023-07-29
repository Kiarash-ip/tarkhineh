import React from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
