import Image from "next/image";

import heroImg from "@/assets/hero.svg";

export default function Home() {
  return (
    <section className="flex items-center justify-center flex-col min-h-[calc(100vh-80px)]">
       <div className="text-center mb-8">
          <span className="font-medium text-2xl">Gerencie sua empresa</span>
          <h1 className="font-bold text-3xl mt-2 text-blue-600 md:text-4xl">Atendimentos, Clientes</h1>
       </div>
       <Image
         src={heroImg}
         alt="Imagem hero dev Controle"
         title="Imagem hero dev Controle"
         className="max-w-sm md:max-w-xl"
         loading="eager"
       />
    </section>
  );
}
