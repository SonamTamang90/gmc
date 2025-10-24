import { BrowserRouter, Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import GlobalLayout from "./components/layouts/GlobalLayout";
import Landing from "./pages/landing";
import { useLenis } from "./hooks/useLenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  // Initialize Lenis smooth scrolling
  useLenis();

  // Reset scroll position and ensure proper initialization
  useEffect(() => {
    // Prevent browser scroll restoration
    window.history.scrollRestoration = "manual";

    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Set ready after a brief delay
    const readyTimer = setTimeout(() => {
      setIsReady(true);
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(readyTimer);
  }, []);

  if (!isReady) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Optional: Add a subtle loading indicator */}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route index path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
