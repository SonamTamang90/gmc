import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Outlet } from "react-router";
import Header, { MenuProvider, MenuContext } from "./Header";
import Footer from "./Footer";

const GlobalLayoutContent = () => {
  const { isMenuOpen, menuHeight } = useContext(MenuContext);
  const spacerRef = useRef(null);

  useGSAP(() => {
    if (isMenuOpen) {
      // Expand spacer to push content down
      gsap.to(spacerRef.current, {
        height: menuHeight.current,
        duration: 0.6,
        ease: "power3.inOut",
      });
    } else {
      // Collapse spacer
      gsap.to(spacerRef.current, {
        height: 0,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [isMenuOpen, menuHeight]);

  return (
    <div className="flex flex-col">
      <Header />
      {/* Spacer that expands/collapses to push content */}
      <div ref={spacerRef} style={{ height: 0, overflow: "hidden" }} />
      <div className="relative z-0">
        <main className="relative flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

const GlobalLayout = () => {
  return (
    <MenuProvider>
      <GlobalLayoutContent />
    </MenuProvider>
  );
};

export default GlobalLayout;
