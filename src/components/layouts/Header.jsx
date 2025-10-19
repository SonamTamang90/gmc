import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

// Create context to share menu state
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHeight = useRef(0);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, menuHeight }}>
      {children}
    </MenuContext.Provider>
  );
};

const Header = () => {
  const { isMenuOpen, setIsMenuOpen, menuHeight } = useContext(MenuContext);
  const menuPanelRef = useRef(null);
  const menuItemsRef = useRef([]);

  const menuItems = [
    { title: "About Us", href: "#about" },
    { title: "Engage", href: "#engage" },
    { title: "News", href: "#news" },
    { title: "Our Team", href: "#industries" },
    { title: "Careers", href: "#careers" },
    { title: "FAQ", href: "#faq" },
  ];

  // Store menu height for pushing content
  useEffect(() => {
    if (menuPanelRef.current) {
      const innerContent = menuPanelRef.current.querySelector("div");
      if (innerContent) {
        menuHeight.current = innerContent.scrollHeight;
      }
    }
  }, [menuHeight]);

  useGSAP(() => {
    if (isMenuOpen) {
      // Get the full height of the menu content
      const innerContent = menuPanelRef.current.querySelector("div");
      const fullHeight = innerContent ? innerContent.scrollHeight : 0;

      // Animate menu panel height
      gsap.to(menuPanelRef.current, {
        height: fullHeight,
        duration: 0.6,
        ease: "power3.inOut",
      });

      // Stagger animate menu items
      gsap.fromTo(
        menuItemsRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.3,
        },
      );
    } else {
      // Animate menu items out
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in",
      });

      // Close menu panel
      gsap.to(menuPanelRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
        delay: 0.2,
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest("a")?.href === window.location.href
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [setIsMenuOpen]);

  return (
    <>
      {/* Hidden Menu Panel - Behind viewport, positioned absolutely */}
      <div
        ref={menuPanelRef}
        className="fixed top-0 left-0 z-40 w-full overflow-hidden bg-neutral-950"
        style={{ height: 0 }}
        aria-hidden={!isMenuOpen}
      >
        <div className="pt-24 pb-8">
          {/* Navigation Grid */}
          <nav className="font-display border-t border-neutral-800">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group relative isolate border-b border-neutral-800 bg-neutral-950 px-8 py-10 text-4xl font-light tracking-tight text-white sm:py-16 sm:text-5xl sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:text-4xl"
                >
                  <span className="relative z-10 transition-opacity group-hover:opacity-70">
                    {item.title}
                  </span>
                  <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Section */}
          <div className="bg-neutral-950 px-8 py-10 sm:py-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {/* Offices */}
              <div>
                <h3 className="mb-6 text-base font-semibold text-white">
                  Our offices
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-medium text-white">Head Office</h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      Gelephu, Bhutan
                      <br />
                      Mindfulness City
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-medium text-white">
                      Regional Office
                    </h4>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      Thimphu, Bhutan
                      <br />
                      Capital Region
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-6 text-base font-semibold text-white">
                  Follow us
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Button - Fixed Position */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 flex cursor-pointer items-center gap-2 rounded-md bg-gray-900 px-6 py-2 text-white transition-all hover:bg-gray-800"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="text-sm tracking-wider uppercase">Menu</span>
        {isMenuOpen ? (
          <IoClose className="size-6" />
        ) : (
          <HiBars2 className="size-6" />
        )}
      </button>
    </>
  );
};

export default Header;
