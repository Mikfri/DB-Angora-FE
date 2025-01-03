// src/app/page.tsx
'use client';
import { GiRabbit } from "react-icons/gi";

export default function Home() {
  return (
    // Add padding for content alignment
    <div className="p-4 flex flex-col justify-center items-center mt-20 gap-6 text-zinc-100">
      <GiRabbit size={100} className="text-emerald-500" />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
        Velkommen til DenBlå-Angora
      </h1>
      <p>Dette er en tidlig alpha version af et kanin-register, hvor det er muligt at oprette slette og redigere kaniner af forskellige racer. Vi udruller løbende opdateringer ud så hold øje med siden.</p>      
    </div>
  );
}