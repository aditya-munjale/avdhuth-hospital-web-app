import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // A tiny timeout ensures React has fully rendered the new page 
    // before we tell the browser to scroll.
    const scrollTimeout = setTimeout(() => {
      // 1. Scroll the main browser window (Standard)
      window.scrollTo(0, 0);
      
      // 2. Scroll the HTML document (Safari/macOS fallback)
      document.documentElement.scrollTo(0, 0);
      
      // 3. Scroll the root div (If your Tailwind layout has a fixed height container)
      const rootElement = document.getElementById("root");
      if (rootElement) {
        rootElement.scrollTo(0, 0);
      }
    }, 50); // 50ms delay is invisible to the user but fixes the React race-condition

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
}