const FormContact = ({open, setOpen}) => {

  if (!open) return null;
  
  return (
    <div>
        <div className={`fixed inset-0 bg-black/50 bg-opacity-10 flex items-center justify-center z-50 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="relative bg-linear-to-t to-blue-950 from-black to-90% p-8 rounded-lg shadow-lg w-full max-w-md"> 
            <h2 className="text-2xl text-white font-bold mb-4">Entre em Contato</h2>

            <button className="absolute top-4 right-4 font-bold text-white pointer text-2xl" onClick={()=> setOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">Nome</label>
                <input type="text" id="name" className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg" placeholder="Seu Nome"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white">Email</label>
                <input type="email" id="email" className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg" placeholder="seu@email.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white">Mensagem</label>
                <textarea id="message" rows={4} className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg" placeholder="Sua mensagem..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Enviar</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default FormContact