"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("en"); // Empieza en inglés por defecto para reclutadores

  const t = {
    es: {
      name: "Lucas Gariador",
      role: "High-Performance Game Programmer | Unity & C++",
      // AQUI: La frase clave para los reclutadores
      relocation: "Mudándome a Madrid, España (Marzo 2026) • Elegible para Permiso de Trabajo UE",
      description:
        "Especializado en optimización, arquitectura de motores y sistemas escalables. Ex-Core Engineer en Boxitsoft (+100M descargas).",
      download: "Descargar CV",
      // IMPORTANTE: Cambia este link por el de tu NUEVO PDF optimizado
      resumeUrl: "https://drive.google.com/file/d/1UHfU-ypDRqFQJx_REJdcpkSJsdnD0Y3B/view?usp=sharing", 
      portfolio: "Ver Demos",
      
      // --- PROYECTO ESTRELLA (VOXEL) ---
      latest_demo: "Última Demo Técnica",
      voxel_title: "Massive Voxel Physics Engine (Unity DOTS)",
      voxel_desc: "Prototipo de estrés técnico diseñado para llevar Unity DOTS al límite. Gestiona +60.000 entidades físicas activas a 150 FPS. Implementa detección de colisiones desacoplada del Main Thread usando Burst Compiler y C# Job System, con gestión manual de memoria (Memory Chunking) para evitar picos de GC.",
      voxel_tech: ["Unity 6", "DOTS", "ECS", "Burst Compiler", "C# Jobs"],
      view_code: "Ver Código",
      watch_demo: "Ver Demo Completa",
      
      featured: "Otros Proyectos",
      more_info: "Ver más →",
      
      // Proyectos Antiguos
      p1_title: "Mini Doom Raycaster",
      p1_text: "Motor de renderizado pseudo-3D escrito desde cero en C++ y SDL2. Implementa Raycasting con corrección 'fisheye', mapeado de texturas pixel-perfect y gestión manual de Z-buffer. Enfocado en programación gráfica de bajo nivel.",
      
      p2_title: "Drive for Speed (Mobile)",
      p2_text: "Ingeniería Core para un título con +100M de descargas. Optimicé sistemas de gameplay y memoria para dispositivos low-end, asegurando estabilidad en un entorno Live-Ops masivo.",
      
      p3_title: "Far Beyond Reach",
      p3_text: "Juego de exploración espacial hexagonal. Diseñé la arquitectura de eventos y el sistema de pathfinding A* optimizado.",
      
      p4_title: "Unity LLM NPCs",
      p4_text: "Integración de IA Generativa local (Ollama) en Unity para diálogos dinámicos de NPCs en tiempo real.",

      // Skills
      skills: "Habilidades Técnicas",
      skills_core: "Core & Performance",
      skills_engine: "Motores & Herramientas",
      skills_arch: "Arquitectura",

      about: "Sobre mí",
      about_text: "Soy un Game Programmer enfocado en el rendimiento. Tras trabajar en títulos móviles masivos (+100M usuarios), ahora me especializo en Data-Oriented Design (DOTS) y C++ para crear simulaciones complejas que corren suaves como la seda.",
      
      contact: "Contacto",
      contact_sub: "Hablemos sobre oportunidades en Madrid:",
      nav_projects: "Proyectos",
      nav_skills: "Skills",
      nav_about: "Sobre mí",
      nav_contact: "Contacto",
    },
    en: {
      name: "Lucas Gariador",
      role: "High-Performance Game Programmer | Unity & C++",
      // AQUI: La frase clave en inglés (Golden Ticket)
      relocation: "Relocating to Madrid, Spain (March 2026) • Eligible for EU Work Permit",
      description:
        "Specialized in optimization, engine architecture, and scalable systems. Formerly Core Engineer at Boxitsoft (+100M downloads).",
      download: "Download CV",
      resumeUrl: "https://drive.google.com/file/d/1UHfU-ypDRqFQJx_REJdcpkSJsdnD0Y3B/view?usp=sharing",
      portfolio: "View Demos",

      // --- HERO PROJECT (VOXEL) ---
      latest_demo: "Latest Technical Demo",
      voxel_title: "Massive Voxel Physics Engine (Unity DOTS)",
      voxel_desc: "Technical prototype pushing the limits of Unity DOTS. Handles 60,000+ active physical entities at 150 FPS. Features collision detection decoupled from the Main Thread using Burst Compiler & C# Job System, with manual memory chunking to eliminate GC spikes.",
      voxel_tech: ["Unity 6", "DOTS", "ECS", "Burst Compiler", "C# Jobs"],
      view_code: "View Source",
      watch_demo: "Watch Demo",

      featured: "Selected Works",
      more_info: "More info →",

      // Projects
      p1_title: "Mini Doom Raycaster",
      p1_text: "Custom pseudo-3D rendering engine built from scratch in C++ and SDL2. Features Raycasting pipeline with fish-eye correction, pixel-perfect texture mapping, and manual Z-buffering. Focused on low-level graphics programming.",
      
      p2_title: "Drive for Speed (Mobile)",
      p2_text: "Core engineering for a top-tier mobile title with 100M+ downloads. Delivered critical performance optimizations for low-end devices and maintained stability in a massive-scale live-ops environment.",
      
      p3_title: "Far Beyond Reach",
      p3_text: "Hex-based space exploration game. Designed the event architecture and optimized A* pathfinding systems.",
      
      p4_title: "Unity LLM NPCs",
      p4_text: "Real-time integration of local Generative AI (Ollama) within Unity for dynamic, unscripted NPC dialogue.",

      // Skills
      skills: "Technical Skills",
      skills_core: "Core & Performance",
      skills_engine: "Engines & Tools",
      skills_arch: "Architecture",

      about: "About Me",
      about_text: "I am a performance-focused Game Programmer. After shipping features for massive mobile titles (+100M users), I now specialize in Data-Oriented Design (DOTS) and C++ to build complex simulations that run silky smooth.",
      
      contact: "Contact",
      contact_sub: "Let's talk about opportunities in Madrid:",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_about: "About",
      nav_contact: "Contact",
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">
            Lucas<span className="text-sky-500">Gariador</span>
          </span>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#portfolio" className="hover:text-white transition">{t[lang].nav_projects}</a>
            <a href="#skills" className="hover:text-white transition">{t[lang].nav_skills}</a>
            <a href="#about" className="hover:text-white transition">{t[lang].nav_about}</a>
            <a href="#contact" className="hover:text-white transition">{t[lang].nav_contact}</a>
          </div>

          <button
            className="px-3 py-1.5 rounded-md border border-slate-700 text-xs font-bold hover:border-sky-500 hover:text-sky-400 transition"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">

        {/* HERO SECTION */}
        <section className="text-center mb-24">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-sky-900/30 border border-sky-700/50 text-sky-300 text-xs font-semibold tracking-wide uppercase">
            {t[lang].role}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
            {t[lang].name}
          </h1>

          {/* LA LÍNEA DEL GOLDEN TICKET */}
          <h2 className="text-lg md:text-xl text-emerald-400 font-medium mb-6">
            📍 {t[lang].relocation}
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t[lang].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={t[lang].resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold transition shadow-lg shadow-sky-900/20"
            >
              {t[lang].download}
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3.5 rounded-lg border border-slate-700 hover:border-white hover:bg-slate-800 transition font-semibold"
            >
              {t[lang].portfolio}
            </a>
          </div>
        </section>

        {/* FEATURED HERO PROJECT (VOXELS) */}
        <section id="portfolio" className="mb-20">
            <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-white">{t[lang].latest_demo}</h3>
                <div className="h-px bg-slate-800 flex-1"></div>
            </div>

            <article className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-sky-500/50 transition duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                    {
                      <div className="bg-black min-h-[300px] flex items-center justify-center relative overflow-hidden group">
    
    <video 
        src="/demo_planeta.mp4"
        autoPlay 
        loop 
        muted 
        playsInline 
        className="object-cover w-full h-full absolute inset-0 opacity-90 group-hover:opacity-100 transition duration-500"
    />
    
    {/* Gradiente opcional para que el texto se lea mejor si el video es muy claro */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 md:hidden"></div>
</div>
                    }

                    <div className="p-8 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-sky-400 mb-4">{t[lang].voxel_title}</h4>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            {t[lang].voxel_desc}
                        </p>
                        
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {t[lang].voxel_tech.map((tech, i) => (
                                <span key={i} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                             <a href="https://github.com/LucasGariador/ECS-destructible-planets" target="_blank" className="text-white hover:text-sky-400 font-semibold text-sm flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                {t[lang].view_code}
                             </a>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        {/* OTHER PROJECTS GRID */}
        <section className="mb-24">
             <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-slate-300">{t[lang].featured}</h3>
                <div className="h-px bg-slate-800 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
            {[
                { title: t[lang].p1_title, text: t[lang].p1_text, link: "https://github.com/LucasGariador/MiniDoom" },
                { title: t[lang].p2_title, text: t[lang].p2_text, link: "https://play.google.com/store/apps/details?id=com.mastercomlimited.cardriving_t" },
                { title: t[lang].p3_title, text: t[lang].p3_text, link: "" },
                { title: t[lang].p4_title, text: t[lang].p4_text, link: "" },
            ].map((p, index) => (
                <article key={index} className="flex flex-col justify-between p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 hover:border-slate-600 transition group">
                   <div>
                       <h4 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition">{p.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed mb-6">{p.text}</p>
                   </div>
                   {p.link && (
                       <a href={p.link} target="_blank" className="text-xs font-bold text-sky-500 uppercase tracking-wide hover:text-sky-400">
                           {t[lang].more_info}
                       </a>
                   )}
                </article>
            ))}
            </div>
        </section>

        {/* SKILLS SECTION (REORGANIZADO) */}
        <section id="skills" className="mb-24">
           <h3 className="text-3xl font-bold mb-10 text-center">{t[lang].skills}</h3>
           
           <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
             {/* Core */}
             <div className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/50">
               <h4 className="text-sky-400 font-bold mb-4 uppercase text-sm tracking-wider">{t[lang].skills_core}</h4>
               <ul className="space-y-2 text-slate-300 text-sm">
                 <li>C++ & C# (Advanced)</li>
                 <li>Data-Oriented Design</li>
                 <li>Memory Management</li>
                 <li>Multithreading / Jobs</li>
                 <li>Algorithm Optimization</li>
               </ul>
             </div>

             {/* Engine */}
             <div className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/50">
               <h4 className="text-sky-400 font-bold mb-4 uppercase text-sm tracking-wider">{t[lang].skills_engine}</h4>
               <ul className="space-y-2 text-slate-300 text-sm">
                 <li>Unity 6 (DOTS, ECS, Burst)</li>
                 <li>SDL2 (Graphics API)</li>
                 <li>Profiling Tools</li>
                 <li>Git / Plastic SCM</li>
                 <li>Render Pipelines (URP)</li>
               </ul>
             </div>

             {/* Architecture */}
             <div className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/50">
                <h4 className="text-sky-400 font-bold mb-4 uppercase text-sm tracking-wider">{t[lang].skills_arch}</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>System Decoupling</li>
                  <li>ScriptableObject Arch</li>
                  <li>Live-Ops Integration</li>
                  <li>CI/CD Pipelines</li>
                  <li>SOLID Principles</li>
                </ul>
             </div>
           </div>
        </section>

        {/* ABOUT & CONTACT */}
        <div className="grid md:grid-cols-2 gap-12 items-start" id="contact">
            {/* About */}
            <section id="about">
                <h3 className="text-2xl font-bold mb-6">{t[lang].about}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                    {t[lang].about_text}
                </p>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/lucas-nahuel-gariador" target="_blank" className="p-2 rounded bg-slate-800 hover:bg-[#0077b5] hover:text-white transition text-slate-400">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://github.com/LucasGariador" target="_blank" className="p-2 rounded bg-slate-800 hover:bg-[#333] hover:text-white transition text-slate-400">
                         <span className="sr-only">GitHub</span>
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="mailto:gariador.lucas@gmail.com" className="p-2 rounded bg-slate-800 hover:bg-sky-600 hover:text-white transition text-slate-400">
                        <span className="sr-only">Email</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </a>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-sky-900/20 border border-sky-800/30 p-8 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">{t[lang].contact}</h3>
                <p className="text-sky-200 mb-6 text-sm">{t[lang].contact_sub}</p>
                <a href="mailto:gariador.lucas@gmail.com" className="inline-block w-full py-3 bg-white text-slate-900 font-bold rounded hover:bg-sky-50 transition">
                    gariador.lucas@gmail.com
                </a>
            </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
            © {new Date().getFullYear()} Lucas Gariador. Built with Next.js & Tailwind.
        </footer>

      </div>
    </main>
  );
}