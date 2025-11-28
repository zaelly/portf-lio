
const WebProjects = () => {
  return (
    <div>
      <section className="flex p-10 flex-col px-10 items-center justify-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center">
          Meus <span className="text-purple-500 font-bold">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          <div className="relative group items-center justify-center w-[250px] h-[250px] bg-white/10 p-8 hover:-translate-y-1 transition transform 
                rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm 
                transition overflow-hidden">
            {/* adicionar imagem do projeto */}
            <img src="" alt="" /> 

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition">
                <a href="">Visitar projeto</a>
              </h2>
            </div>
          </div>
          <div className="relative group items-center justify-center w-[250px] h-[250px] bg-white/10 p-8 hover:-translate-y-1 transition transform 
                rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm 
                transition overflow-hidden">
            {/* adicionar imagem do projeto */}
            <img src="" alt="" /> 

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition">
                <a href="">Visitar projeto</a>
              </h2>
            </div>
          </div>
          <div className="relative group items-center justify-center w-[250px] h-[250px] bg-white/10 p-8 hover:-translate-y-1 transition transform 
                rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm 
                transition overflow-hidden">
            {/* adicionar imagem do projeto */}
            <img src="" alt="" /> 

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 
                  group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-xl font-semibold px-4 py-2 rounded-lg transition">
                <a href="">Visitar projeto</a>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebProjects