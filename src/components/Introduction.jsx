import { useTypewriter } from "../hooks/UseTypewriter.jsx";
import perfil from "../assets/perfil.jpeg";

const Introduction = ({setOpen}) => {
    const text = useTypewriter({
        words:[
        "Oi, meu nome é Zaelly! ;)",
        "Desenvolvedora Front-end",
        "Bem vindo(a) ao meu Portfólio!"
        ],
        typingSpeed: 120,
        deletingSpeed: 70,
        delayBetweenWords: 1500,
    })

  return (
    <section id="inicio" className="flex flex-col p-10 items-center gap-10 lg:flex-row md:gap-16 mt-[1rem]">
        {/* Imagem */}
        <div 
            className="flex w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[400px] rounded-full overflow-hidden items-center justify-center"
            style={{ boxShadow: "0 0 20px 4px rgba(0, 140, 255, 1)" }}
        >
            <img src={perfil} alt="foto de perfil" className="object-cover w-full h-full" />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left gap-4 max-w-[700px] w-full sm:w-[400px] md:w-[500px] lg:w-[450px] xl:w-[700px]">
            <h1 className="text-5xl text-white font-Saira font-bold text-shadow min-h-[3.5rem]">
            {text.includes("Zaelly") ? (
                <>
                Oi, meu nome é Zaelly! {";)"}
                </>
            ) : text.includes("Front-end") ? (
                <>
                Desenvolvedora Front-end
                </>
            ) : (
                text
            )}
            <span className="cursor" />
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            Oi! Sou uma desenvolvedora movida por bons resultados e pela curiosidade técnica. 
            Minha trajetória sempre teve o usuário no centro — comecei no atendimento ao público e no
            suporte técnico, o que me deu uma base sólida para entender o que as pessoas precisam.

            Hoje, traduzo essas necessidades em código como Desenvolvedora Front-End Júnior & Freelancer. 
            No meu 'cinto de utilidades' técnico, carrego JavaScript, React, PHP e Tailwind CSS, sempre 
            focada em criar interfaces que sejam funcionais e adaptáveis. Estou em constante atualização, 
            afinal, no mundo dev, o aprendizado é o único código que nunca para de rodar!
            </p>
            
            {/* Ícones */}
            <div className="flex gap-4 mt-2">
            <a 
                href="https://www.linkedin.com/in/zaellybarbosa" 
                target="_blank"
                className="flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-blue-400"
            >
                <i className="fa-brands fa-linkedin-in text-white text-xl"></i>
            </a>

            <a 
                href="https://github.com/zaelly" 
                target="_blank"
                className="flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-blue-400"
            >
                <i className="fa-brands fa-github text-white text-xl"></i>
            </a>

            {/* Botão */}
            <div className="px-6 py-2 rounded-full border-2 border-blue-400 text-white hover:bg-blue-400 hover:text-black transition-all duration-300 font-bold" onClick={()=> setOpen(true)}>
                Me contate
            </div>
            </div>
        </div>
    </section>
  )
}

export default Introduction