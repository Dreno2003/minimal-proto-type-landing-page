// import Footer from "@/components/footer";
import React from "react";
import { Outlet } from "react-router";
interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({}) => {
  return (
    <div className="relative">
      <Outlet />
      {/* <Footer /> */}
      {/* <div className=" bg-gradient-to-t from-background/90 via-background/60 to-transparent w-full fixed bottom-0  backdrop-blur-4xl blur-md backdrop-opacity-35   md:h-16" /> */}
      {/* <CookieConsentBanner /> */}
    </div>
  );
};

export default MainLayout;
