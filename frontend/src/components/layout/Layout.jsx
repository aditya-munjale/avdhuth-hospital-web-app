import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; 


export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-white">
        <Outlet />
      </main>
      <Footer /> {/* <-- Use it here */}
    </div>
  );
}
