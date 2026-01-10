const Formation = () => {
  return (
    <section className="flex py-10 flex-col px-10 items-center mt-15">
        <h2 className="text-3xl sm:text-4xl text-white font-Saira text-center font-bold text-shadow">
            Formação <span className="text-blue-400 font-bold">Acadêmica</span> & Cursos
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Academic */}
            <div className="text-shadow bg-blue-400/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-blue-700/40 transition">
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
            <div className="bg-blue-400/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-blue-700/40 transition">
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
  )
}

export default Formation