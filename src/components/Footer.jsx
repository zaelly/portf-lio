const Footer = ({setOpen}) => {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="text-shadow w-full mt-20 bg-blue-500/15 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-blue-700/40 transition">
      <div className="glass-card text-center hover:-translate-y-1 transition transform">
        <h2 className="text-3xl text-white font-Saira text-center font-bold mb-5">
          Entre em <span className="text-blue-400">Contato</span>
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Estou sempre aberta a novas oportunidades e colaborações. 
          Sinta-se à vontade para entrar em contato!
        </p>

        <div className="flex gap-6 justify-center mb-8">
          <a
            href="https://www.linkedin.com/in/zaellybarbosa"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-blue-400"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-xl" />
          </a>

          <a
            href="https://github.com/zaelly"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-blue-400"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl" />
          </a>

          <a
            className="icon-container flex p-3 w-[45px] h-[45px] rounded-full items-center justify-center border border-blue-400"
            aria-label="Email"
            setOpen={setOpen}
          >
            <i className="fa-solid fa-envelope text-xl" />
          </a>
        </div>

        <div className="border-t border-muted-foreground/30 pt-6">
          <p className="text-sm text-muted-foreground">
            Zaelly Barbosa. Desenvolvido com React & Tailwind CSS © {year}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;