"use client";

import { useEffect, useState } from "react";
import SideNav from "@/components/layout/SlideNav";
import MobileHeader from "@/components/layout/MobileHeader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { IDictionary } from "@/app/types/common";
import useWindowResize from "@/hooks/useWindowResize";

interface ILayoutClientProps {
  children: React.ReactNode;
  dict: IDictionary;
}

export default function LayoutClient({ children, dict }: ILayoutClientProps) {
  // State
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [width] = useWindowResize();

  const handleCheckIsMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  // Side Effect
  useEffect(() => {
    handleCheckIsMobile()
  }, [width]);

  return (
    <section id="main-section" className="h-screen">
      <Header dict={dict} />

      <div className="flex  bg-gray-200 h-[90%]">
        <SideNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
          {/* Render the Header component if in mobile mode */}
          {isMobile && (
            <MobileHeader
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />
          )}

          {/* Main content */}
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </section>
  );
}
