"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const t = {
    es: {
      name: "Lucas Nahuel Gariador",
      role: "Game Developer — Unity / C# & C++",
      description:
        "Especializado en gameplay, herramientas, prototipos rápidos y optimización. Actualmente desarrollando Far Beyond Reach y un motor estilo Doom en C++.",
      download: "Descargar CV",
      resumeUrl: "https://drive.google.com/file/d/1bmK4KThfCx21FdpVAK_bgpCfcTaPDWUr/view?usp=drive_link",
      portfolio: "Ver Portfolio",
      featured: "Proyectos destacados",
      more_info: "Ver más →",
      p1_title: "Far Beyond Reach",
      p1_text:
        "Juego singleplayer de exploración espacial sobre un mapa hexagonal, con sistema de eventos tipo juego de mesa, resolución por d20 y recursos limitados. Diseñé e implementé pathfinding, eventos y arquitectura.",
      p1_link: "",
      p2_title: "Mini Doom Raycaster",
      p2_text:
        "Motor estilo Doom clásico con raycasting, texturas, corrección de distorsión, z-buffer y sprites. Enfocado en aprender gráficos 3D clásicos y reforzar C++.",
      p2_link: "https://github.com/LucasGariador/MiniDoom",
      p3_title: "NPCs con LLM en Unity",
      p3_text:
        "Prototipo de NPCs con diálogos dinámicos usando un modelo local (Ollama). Implementé prompts en ScriptableObjects, UI de chat y lógica de interacción.",
      p3_link: "",
      p4_title: "Drive for Speed (Mobile)",
      p4_text:
        "Mantenimiento y actualización de juego mobile con millones de descargas. Nuevas features, bugs, optimización y soporte multiplataforma.",
      p4_link: "https://play.google.com/store/apps/details?id=com.mastercomlimited.cardriving_t&pcampaignid=web_share",
      skills: "Habilidades",
      skills_game: "Desarrollo de Juegos",
      skills_tech: "Tecnologías",
      skills_tools: "Herramientas",
      about: "Sobre mí",
      about_text:
      "Soy Game Developer con experiencia en Unity y C#. Me especializo en gameplay, herramientas, prototipos rápidos y optimización. Disfruto diseñar y crear sistemas claros, escalables y con buen rendimiento. Actualmente desarrollo Far Beyond Reach y un motor estilo Doom en C++.",
      contact: "Contacto",
      contact_sub: "Podés escribirme directamente por:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      nav_projects: "Proyectos",
      nav_skills: "Skills",
      nav_about: "Sobre mí",
      nav_contact: "Contacto",


    },
    en: {
      name: "Lucas Nahuel Gariador",
      role: "Game Developer — Unity / C# & C++",
      description:
        "Specialized in gameplay, tools, rapid prototyping and optimization. Currently developing Far Beyond Reach and a Doom-style C++ raycaster engine.",
      download: "Download CV",
      resumeUrl: "https://drive.google.com/file/d/145f2Ckuq7CjZNGYwpzRPSeTFqX2ARDzA/view?usp=drive_link",
      portfolio: "View Portfolio",
      featured: "Featured Projects",
      more_info: "More info →",
      p1_title: "Far Beyond Reach",
      p1_text:
        "Singleplayer sci-fi exploration game on a hex-based map with board-game-style events, d20 resolution and limited resources. Designed and implemented pathfinding, event system and architecture.",
      p1_link: "",
      p2_title: "Mini Doom Raycaster",
      p2_text:
        "Classic Doom-style engine with raycasting, wall textures, distortion correction, z-buffer and sprite rendering. Focused on understanding old-school 3D and reinforcing C++.",
      p2_link: "https://github.com/LucasGariador/MiniDoom",
      p3_title: "Unity LLM NPCs",
      p3_text:
        "Prototype of dynamic NPC dialogues using a local LLM (Ollama). Implemented ScriptableObject prompts, chat UI and character interaction logic.",
      p3_link: "",
      p4_title: "Drive for Speed (Mobile)",
      p4_text:
        "Maintenance and feature development for a mobile game with millions of downloads. Worked on features, bug fixes, optimization and production pipelines.",
      p4_link: "https://play.google.com/store/apps/details?id=com.mastercomlimited.cardriving_t&pcampaignid=web_share",
      skills: "Skills",
      skills_game: "Game Development",
      skills_tech: "Technologies",
      skills_tools: "Tools",
      about: "About Me",
      about_text:
      "I am a Game Developer with experience in Unity and C#. I specialize in gameplay, tools, rapid prototyping and optimization. I enjoy designing and creating clear, scalable and high-performance systems. Currently developing Far Beyond Reach and a Doom-style C++ raycaster engine.",
      contact: "Contact",
      contact_sub: "You can reach me through:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_about: "About",
      nav_contact: "Contact",

    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16 relative">
        {/* NAVBAR */}
    <nav className="fixed top-0 left-0 right-0 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm z-20">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Nombre / “logo” */}
        <span className="font-semibold text-sm md:text-base">
          Lucas Gariador
        </span>

        {/* Links a secciones */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#portfolio" className="hover:text-sky-400 transition">
            {t[lang].nav_projects}
          </a>
          <a href="#skills" className="hover:text-sky-400 transition">
            {t[lang].nav_skills}
          </a>
          <a href="#about" className="hover:text-sky-400 transition">
            {t[lang].nav_about}
          </a>
          <a href="#contact" className="hover:text-sky-400 transition">
            {t[lang].nav_contact}
          </a>
        </div>

        {/* Toggle de idioma */}
        <button
          className="px-3 py-1 rounded-lg border border-slate-600 hover:border-sky-400 hover:text-sky-400 text-xs md:text-sm transition"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>

      <div className="max-w-4xl mx-auto">

        {/* HERO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {t[lang].name}
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-4">
            {t[lang].role}
          </h2>

          <p className="text-sm md:text-base text-slate-400 mb-8">
            {t[lang].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={t[lang].resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 transition font-semibold"
            >
              {t[lang].download}
            </a>

            <a
              href="#portfolio"
              className="px-6 py-3 rounded-lg border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition font-semibold"
            >
              {t[lang].portfolio}
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="portfolio" className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            {t[lang].featured}
          </h3>

          <div className="grid gap-6">

            {/* Project cards */}
            {[
              { title: t[lang].p1_title, text: t[lang].p1_text, link: t[lang].p1_link },
              { title: t[lang].p2_title, text: t[lang].p2_text, link: t[lang].p2_link },
              { title: t[lang].p3_title, text: t[lang].p3_text, link: t[lang].p3_link },
              { title: t[lang].p4_title, text: t[lang].p4_text, link: t[lang].p4_link },
            ].map((p, index) => (
              <article
               key={index}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-500 hover:-translate-y-1 hover:shadow-lg transition"
              >
              <h4 className="text-xl font-semibold mb-1">{p.title}</h4>

                <p className="text-sm text-slate-300 mb-4">{p.text}</p>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 text-sm font-semibold"
      >
                    {t[lang].more_info}
  </a>
</article>

            ))}

          </div>
        </section>
        {/* SKILLS SECTION */}
<section id="skills" className="mt-20">
  <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
    {t[lang].skills}
  </h3>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Game Development */}
    <div>
      <h4 className="text-xl font-semibold mb-3 text-sky-400">
        {t[lang].skills_game}
      </h4>
      <ul className="space-y-2 text-slate-300">
        <li>Unity (C#)</li>
        <li>Gameplay Programming</li>
        <li>Pathfinding (A*)</li>
        <li>ScriptableObjects Architecture</li>
        <li>Event Systems</li>
        <li>AI / State Machines</li>
        <li>Shader Graph / URP</li>
      </ul>
    </div>

    {/* Technologies */}
    <div>
      <h4 className="text-xl font-semibold mb-3 text-sky-400">
        {t[lang].skills_tech}
      </h4>
      <ul className="space-y-2 text-slate-300">
        <li>C++ (SDL2)</li>
        <li>Git / GitHub</li>
        <li>Firebase</li>
        <li>REST APIs</li>
        <li>SQL basics</li>
      </ul>
    </div>

    {/* Tools */}
    <div>
      <h4 className="text-xl font-semibold mb-3 text-sky-400">
        {t[lang].skills_tools}
      </h4>
      <ul className="space-y-2 text-slate-300">
        <li>Visual Studio / VS Code</li>
        <li>Unity Profiler</li>
        <li>Plastic SCM / Git</li>
        <li>Notion (Docs)</li>
        <li>Figma (UI/UX básico)</li>
      </ul>
    </div>

  </div>
</section>
        {/* ABOUT ME SECTION */}
        <section id="about" className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            {t[lang].about}
          </h3>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
            {t[lang].about_text}
          </p>
        </section>
        {/* CONTACT SECTION */}
<section id="contact" className="mt-20 text-center">
  <h3 className="text-2xl md:text-3xl font-bold mb-4">
    {t[lang].contact}
  </h3>

  <p className="text-slate-400 mb-8">
    {t[lang].contact_sub}
  </p>

  <div className="flex flex-col items-center gap-4 text-lg">

    {/* Email */}
    <a
      href="mailto:gariador.lucas@gmail.com"
      className="text-sky-400 hover:text-sky-300 transition font-semibold"
    >
      ✉️ {t[lang].email}
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/lucas-nahuel-gariador/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-400 hover:text-sky-300 transition font-semibold"
    >
      🔗 {t[lang].linkedin}
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/LucasGariador/Presentation"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-400 hover:text-sky-300 transition font-semibold"
    >
      💻 {t[lang].github}
    </a>
  </div>

  <p className="mt-10 text-xs text-slate-600">
    © {new Date().getFullYear()} {t[lang].name}
  </p>
</section>

      </div>
    </main>
  );
}
