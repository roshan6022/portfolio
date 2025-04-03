import React from "react";
import Navbar from "./components/Navbar";
import HamNav from "./components/HamNav";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HamNav />
      <Profile />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
