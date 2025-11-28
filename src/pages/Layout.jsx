import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx"
import perfil from "../assets/perfil.jpg";
import css from "../assets/css.png"
import JavaScript from "../assets/JavaScript-logo.png"
import php from "../assets/PHP-logo.svg.png"
import reactjs from "../assets/React-icon.svg.png"
import bootstrap from "../assets/Bootstrap.png"
import node from "../assets/Node.png"
import mysql from "../assets/Mysql_logo.png"
import git from "../assets/Git_icon.svg.png"
import tailwind from "../assets/Tailwind.png"
import vscode from "../assets/vscode.png"
import mongodb from "../assets/Mongodb.png"
import WebProjects from "../components/WebProjects.jsx";

const Layout = () => {

  const [width, setWidth] = useState(window.innerWidth)
  const techStacks ={ 
    frontend: [
      { name: "CSS", icon: "fa-brands fa-css3-alt" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "PHP", icon: "fa-brands fa-php" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Tailwind", icon: "fa-brands fa-tailwind" },
    ],
    backend: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
    ],
    database: [
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "MongoDB", icon: "fa-brands fa-mongodb" },
    ],
    tools: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "VS Code", icon: "fa-solid fa-code" },
    ],
  }  

  useEffect(()=>{
    function handleWidth (){
      setWidth(window.innerWidth)
    }
      window.addEventListener("resize", handleWidth);

      return () => window.removeEventListener("resize", handleWidth);
  },[])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-6 py-20">

      {/* inicio apresentação */}
      <section id="inicio" className="flex flex-col p-10 items-center gap-10 lg:flex-row md: md:gap-16 md:mt-[5rem] mt-[2rem]">
        {/* Imagem */}
        <div 
          className="flex w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[400px] rounded-full overflow-hidden items-center justify-center"
          style={{ boxShadow: "0 0 20px 4px rgba(140, 0, 255, 1)" }}
        >
          <img src={perfil} alt="foto de perfil" className="object-cover w-full h-full" />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left gap-4 max-w-[700px] w-full sm:w-[400px] md:w-[500px] lg:w-[450px] xl:w-[700px]">
          <h1 className="text-3xl sm:text-4xl text-white font-Saira">
            Oi, sou a <span className="text-purple-600 font-bold">Zaelly</span>
          </h1>

          <h2 className="text-white text-lg sm:text-xl font-Saira">
            <span className="text-purple-600 font-bold">Desenvolvedora Front-end</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Profissional proativa, com forte capacidade de comunicação, adaptabilidade e foco em resultados. 
            Ao longo da minha trajetória, sempre atuei em áreas ligadas ao atendimento ao público, suporte 
            técnico e desenvolvimento front-end, aplicando conhecimentos em JavaScript, React.js, PHP, HTML e CSS.
            Tenho experiência prática consolidada e, atualmente, atuo como Desenvolvedora Júnior Front-End, 
            em constante aprimoramento para expandir minhas competências e contribuir de forma efetiva para o 
            crescimento da equipe e da organização.
          </p>
          
          {/* Ícones */}
          <div className="flex gap-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/zaellybarbosa" 
              target="_blank"
              className="flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-purple-400"
            >
              <i className="fa-brands fa-linkedin-in text-white text-xl"></i>
            </a>

            <a 
              href="https://github.com/zaelly" 
              target="_blank"
              className="flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-purple-400"
            >
              <i className="fa-brands fa-github text-white text-xl"></i>
            </a>

            {/* Botão */}
            <a href="#" className="px-6 py-2 rounded-full border border-purple-400 text-white hover:bg-purple-400 hover:text-black transition-all duration-300 font-bold">
              Me contrate
            </a>
          </div>
        </div>
      </section>

      <div id="skills" className="border border-gray"></div>
      <div className="section-divider mx-auto"></div>

        {/* Skills */}
      <div className="flex p-10 flex-col px-10 items-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center">
          Habilidades <span className="text-purple-500 font-bold">Técnicas</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-700/40 hover:-translate-y-1 transition transform">
            <p className="text-2xl font-bold text-purple-500 mb-6 text-center">Front-end</p>

            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {techStacks.frontend.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-2">
                    <i className={`${tech.icon} text-5xl hover:scale-110 transition-transform text-accent`} />
                  </div>
                ))}
            </div>
          </div>

         {/* Back-end Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-700/40 hover:-translate-y-1 transition transform">
            <p className="text-2xl font-bold text-accent mb-6 text-center">Back-end</p>
            <div className="flex justify-center">
              {techStacks.backend.map((tech) => (
                <i
                  key={tech.name}
                  className={`${tech.icon} text-8xl hover:scale-110 transition-transform text-accent`}
                />
              ))}
            </div>
          </div>

          {/* Database Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-700/40 hover:-translate-y-1 transition transform">
            <p className="text-2xl font-bold text-accent mb-6 text-center">Banco de Dados</p>
            <div className="flex flex-col gap-6 items-center">
              {techStacks.database.map((tech) => (
                <i
                  key={tech.name}
                  className={`${tech.icon} text-6xl hover:scale-110 transition-transform text-accent`}
                />
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-700/40 hover:-translate-y-1 transition transform">
            <p className="text-2xl font-bold text-accent mb-6 text-center">Ferramentas</p>
            <div className="flex flex-col gap-6 items-center">
              {techStacks.tools.map((tech) => (
                <i
                  key={tech.name}
                  className={`${tech.icon} text-6xl hover:scale-110 transition-transform text-accent`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="educacao" className="border border-gray w-[15rem] mt-[4rem]"></div>

      {/* Formação */}
      <section className="flex py-10 flex-col px-10 items-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center">
          Formação <span className="text-purple-500 font-bold">Acadêmica</span> & Cursos
        </h2>

         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Academic */}
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-purple-700/40 transition">
              <h3 className="text-2xl text-accent font-bold mb-4">Acadêmico</h3>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Análise e Desenvolvimento de Sistemas</p>
                  <span className="text-sm">Uniasselvi (2023 – Atual)</span>
                </div>

                <div className="border-t w-24 my-3" />

                <div>
                  <p className="font-semibold">Ensino Médio Completo</p>
                  <span className="text-sm">Formação em (2023)</span>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-purple-700/40 transition">
              <h3 className="text-2xl text-accent font-bold mb-4">Cursos</h3>

              <div className="space-y-3">
                {[
                  "Desenvolvimento Front-End",
                  "TypeScript e Node.js",
                  "Comunicação Interpessoal",
                  "Informática Avançada",
                ].map((course, index) => (
                  <div key={index}>
                    <p className="font-semibold">{course}</p>
                    {index < 3 && <div className="border-t w-24 my-3" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      <div id="projetos" className="border border-gray w-[15rem] mt-[4rem]"></div>

      {/* projetos */}
      <WebProjects/>

      <div className="border border-gray w-[15rem] mt-[4rem]"></div>

      {/* contato */}
      <Footer/>
    </div>
  );
};

export default Layout;
