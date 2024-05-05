import React from "react";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import Navbars from "@/app/components/Navbar";
import About from "@/app/components/About";
import "@/app/globals.css";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="purple-dark text-foreground bg-background">
        <Navbars />
        <About />
      </main>
    </NextUIProvider>
  );
}
