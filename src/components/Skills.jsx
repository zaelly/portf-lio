const Skills = () => {
    const techStacks = {
      frontend: [
        { name: "HTML", icon: "fa-brands fa-html5" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      ],
      backend: [
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "Laravel", icon: "fa-brands fa-laravel" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
      ],
      database: [
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
      ],
      tools: [
        { name: "Git", icon: "fa-brands fa-git-alt" },
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Figma", icon: "fa-brands fa-figma" },
      ],
    }

    const cardClass = "bg-blue-400/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-blue-700/40 hover:-translate-y-1 transition transform"

  return (
    <div className="flex p-10 flex-col px-10 items-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center font-bold text-shadow">
          Habilidades <span className="text-blue-400 font-bold">Técnicas</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 text-shadow">

          {/* Front-end Card */}
          <div className={cardClass}>
            <p className="text-2xl font-bold text-blue-400 mb-6 text-center">Front-end</p>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {techStacks.frontend.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <i className={`${tech.icon} text-4xl hover:scale-110 transition-transform text-accent`} />
                  <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Back-end Card */}
          <div className={cardClass}>
            <p className="text-2xl font-bold text-blue-400 mb-6 text-center">Back-end</p>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {techStacks.backend.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <i className={`${tech.icon} text-4xl hover:scale-110 transition-transform text-accent`} />
                  <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database Card */}
          <div className={cardClass}>
            <p className="text-2xl font-bold text-blue-400 mb-6 text-center">Banco de Dados</p>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {techStacks.database.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <i className={`${tech.icon} text-4xl hover:scale-110 transition-transform text-accent`} />
                  <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className={cardClass}>
            <p className="text-2xl font-bold text-blue-400 mb-6 text-center">Ferramentas</p>
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              {techStacks.tools.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2">
                  <i className={`${tech.icon} text-4xl hover:scale-110 transition-transform text-accent`} />
                  <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skills