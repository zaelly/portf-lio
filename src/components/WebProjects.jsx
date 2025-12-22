import { useState } from "react"
import brecho from "../assets/brecho.PNG"
import drama from "../assets/drama.PNG"

const WebProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  
  // pego todas as decrições dos projetos que tem nesse array de objetos
  const description_projects = [
    {
      id: "1",
      titulo:"Reverto Brechó",
      textDescription: "teste 1",
      href: "https://brechoclient.vercel.app",
      img: brecho
    },
    {
      id: "2",
      titulo:"Forever Drama",
      textDescription: "teste 2",
      href: "https://forever-drama.vercel.app",
      img: drama
    },
]

  // se clicar em um dos projetos abre a descrição
  const handleVisible = (project) =>{
    setSelectedProject(project)
  }

  return (
    <div>
      <section className="flex p-10 flex-col px-10 items-center justify-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center font-bold">
          Meus <span className="text-blue-400">Projetos</span>
        </h2>

        <div className="flex gap-9 flex-col">   
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 w-full">
            {description_projects.map((project)=>(
              <div onClick={()=> handleVisible(project)} key={project.id} className="cursor-pointer relative 
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
                    <a href={project.href} className="text-sm rounded-full bg-blue-400 border py-2 px-4 hover:border-blue-800 text-blue-900">Ver projeto</a>
                  </div>
                </div>
              </div>
              ))
            }
          </div>

          {selectedProject && (
            <div className=" bg-blue-500/4 w-full animate-fade-in rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-2">{selectedProject.titulo}</h3>
              <p>{selectedProject.textDescription}</p>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}

export default WebProjects