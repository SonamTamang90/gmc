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

    // Wait for images and DOM to be fully ready
    const initializeScrollTrigger = () => {
      setIsReady(true);

      // Multiple refreshes to ensure accuracy
      ScrollTrigger.refresh();

      // Additional refresh after a delay to catch any late-loading content
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    };

    // Check if images are already loaded
    const images = Array.from(document.images);
    const imagePromises = images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve); // Handle failed images
      });
    });

    // Wait for all images or timeout after 3 seconds
    Promise.race([
      Promise.all(imagePromises),
      new Promise((resolve) => setTimeout(resolve, 3000))
    ]).then(initializeScrollTrigger);

    return () => {
      // Cleanup
    };
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
