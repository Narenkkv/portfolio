"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbars from "@/app/components/Navbar";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Experience from "@/app/components/Experience";
import "@/app/globals.css";

export default function Home() {

  return (
    <NextUIProvider>
      <main className="purple-dark text-foreground bg-background">
        <Navbars />
        <div className="page-body">
          <About />
          <div className="page-wrapper">
            <Skills />
            <Experience />
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}
