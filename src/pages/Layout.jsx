
import Footer from "../components/Footer.jsx"
import WebProjects from "../components/WebProjects.jsx";
import { useState } from "react";
import FormContact from "../components/FormContact.jsx";
import Introduction from "../components/Introduction.jsx";
import Skills from "../components/Skills.jsx";
import Formation from "../components/Formation.jsx";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-6 py-20">

      {/* inicio apresentação */}
      <Introduction setOpen={setOpen}/>

      {/* modal de contato */}
      <FormContact open={open} setOpen={setOpen}/>

      <div id="skills" className="border border-[1px] border-gray-500 w-[15rem] mt-[4rem]" />

      {/* Skills */}
      <Skills/>

      <div id="educacao" className="border border-[1px] border-gray-500 w-[15rem] mt-[4rem]"/>

      {/* Formação */}
      <Formation/>

      <div id="projetos" className="border border-[1px] border-gray-500 w-[15rem] mt-[4rem]" />

      {/* projetos */}
      <WebProjects/>

      <div id="contato" className="border border-[1px] border-gray-500 w-[15rem] mt-[4rem]" />
      {/* contato */}
      <Footer setOpen={setOpen} />
    </div>
  );
};

export default Layout;
