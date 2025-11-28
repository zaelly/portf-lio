import { useState } from "react";

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const menuItems = [
        {label : "Início", href: "#inicio"},
        {label : "Skills", href: "#skills"},
        {label : "Educação", href: "#educacao"},
        {label : "Projetos/Experiência", href: "#projetos"},
        {label : "Contato", href: "#contato"}
    ]

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 glass-card flex py-3 px-6
        shadow-lg w-[90%] rounded-2xl bg-purple-900 items-center justify-between
        text-white font-Saira z-50 top-4">
    
        {/* Logo */}
        <h1 className="text-lg text-purple-400 font-bold px-6">
            Zaelly Barbosa Dev
        </h1>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-6 font-semibold text-sm px-6">
            {menuItems.map((i)=>(
                <li key={i.label} className="cursor-pointer atext-lg sm:text-sm hover:text-primary">
                    <a className="block" href={i.href}>{i.label}</a>
                </li>
            ))}
        </ul>

        {/* Hamburguer */}
        <button
            className="md:hidden flex flex-col gap-2 cursor-pointer px-6 z-[999]"
            onClick={() => setVisible(!visible)}
            aria-label="toggle menu"
        >
            {visible ? (
                <>
                    {/* Ícone X */}
                    <div className="w-5 h-1 bg-black rotate-45 translate-y-1 rounded"></div>
                    <div className="w-5 h-1 bg-black -rotate-45 -translate-y-2 rounded"></div>
                </>
            ):(
                <>
                    {/* Ícone Hamburguer */}
                    <div className="w-8 h-1 bg-white rounded"></div>
                    <div className="w-8 h-1 bg-white rounded"></div>
                    <div className="w-8 h-1 bg-white rounded"></div>
                </>
            )}
        </button>

        {/* Menu mobile */}
        {visible && (
            <ul className="flex flex-col w-full h-screen fixed top-0 left-0 bg-purple-950 p-8 gap-6 sm:hidden text-white font-semibold z-50">
                {menuItems.map((item)=>(
                    <li key={item.label} className="cursor-pointer text-lg hover:text-primary">
                        <a className="block" href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </nav>
  )
}

export default Navbar