const Footer = () => {
  return (
    <footer id="contato" className="w-full mt-20 bg-white/10 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-sm hover:shadow-purple-700/40 transition">
      <div className="glass-card p-8 text-center hover:-translate-y-1 transition transform">
        <h2 className="text-3xl font-bold mb-6">
          Entre em <span className="text-accent">Contato</span>
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
            className="icon-container"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-xl" />
          </a>

          <a
            href="https://github.com/zaelly"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl" />
          </a>

          <a
            href="mailto:zaelly@example.com"
            className="icon-container"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope text-xl" />
          </a>
        </div>

        <div className="border-t border-muted-foreground/30 pt-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Zaelly Barbosa. Desenvolvido com React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;