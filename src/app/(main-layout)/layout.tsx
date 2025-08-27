import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React, { memo } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Layout">
      <h2 className="text-center text-4xl">Main layout</h2>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
