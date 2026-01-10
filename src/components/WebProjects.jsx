import { useState } from "react"

const WebProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  
  // pego todas as decrições dos projetos que tem nesse array de objetos
  const description_projects = [
    {
      id: "1",
      titulo:"Landing Page: NotasFacil.com",
      textDescription: "Desenvolvimento de uma Landing Page estratégica para um ERP multi-setorial. A plataforma foi projetada para converter visitantes em clientes, destacando módulos críticos como Emissão de NF-e, Frente de Caixa (PDV) de alta performance e um sistema de Comanda Digital otimizado para o setor de Food & Service. Foco total em usabilidade e captura de leads qualificados.",
      href: "https://notasfacil.com",
      img: `https://api.microlink.io/?url=https://notasfacil.com&screenshot=true&meta=false&embed=screenshot.url`,
      tech: ["React", "Tailwind CSS", "Facebook Pixel API", "PHP", "Toast UI", "Vite"],
      linkGit: null
    },
    {
      id: "2",
      titulo:"Forever Drama",
      textDescription: "Hub de entretenimento para fãs de dramas asiáticos, focado na facilidade de descoberta de conteúdo. Uma interface moderna que conecta consumidores através do compartilhamento de mídia, otimizando a busca por títulos estrangeiros favoritos.",
      href: "https://forever-drama.vercel.app",
      img: "https://image.thum.io/get/https://forever-drama.vercel.app",
      tech: ["React", "Tailwind CSS", "Multer JS", "Node.js", "Express.js", "MongoDB", "Middleware", "bcryptjs", "Validator", "JWT", "Mongoose", "dotenv", "Toast UI", "Vite"],
      linkGit: "https://github.com/zaelly/forever_drama"
    },
  ] 

  // se clicar em um dos projetos abre a descrição
  const handleVisible = (project) =>{
    setSelectedProject(project)
  }

  return (
    <section className="flex p-10 flex-col px-10 items-center justify-center mt-15">
      <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center font-bold">
        Meus <span className="text-blue-400">Projetos</span>
      </h2>

      <div className="flex flex-col w-full mt-8 gap-10">   
        <div className="flex flex-wrap gap-6 justify-center">
          {description_projects.map((project)=>(
            <div onMouseEnter={()=> handleVisible(project)} key={project.id} className="cursor-pointer relative 
              h-[200px] group items-center justify-center w-[340px] bg-blue-500/40
              hover:-translate-y-1 shadow-lg backdrop-blur-sm hover:shadow-blue-700/40 transform 
              rounded-2xl border border-white/10 transition overflow-hidden">
              {/* adicionar imagem do projeto */}
              <img src={project.img} alt="" className="w-full bg-auto h-full"/> 
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 
                    group-hover:opacity-900 transition duration-300">
                <div className="text-white text-lg font-bold px-4 py-2 rounded-lg transition text-center flex flex-col gap-3">
                  <p>{project.titulo}</p>
                  <a href={project.href} className="text-sm rounded-full bg-purple-950 border py-2 px-4 border-none text-white">Ver projeto</a>
                </div>
              </div>
            </div>
            ))
          }
        </div>

        <div>       
          {selectedProject && (
            <div className=" bg-blue-500/4 w-full animate-fade-in rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">{selectedProject.titulo}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.textDescription}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mt-2">Tecnologias utilizadas:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span key={index} className="bg-blue-500/20 text-white px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
              {selectedProject.linkGit && (
                <div className="pt-4 border-t border-white/5 mt-4">
                  <a href={selectedProject.linkGit} rel="noreferrer" target="_blank" className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all">
                    <i className="fa-brands fa-square-github text-2xl"></i>
                    Ver código no GitHub
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WebProjects