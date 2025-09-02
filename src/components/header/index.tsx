import Link from "next/link";
import { FiUser, FiLogOut } from "react-icons/fi";
import { ContainerGRID } from "../containerGRID";

export function Header(){
    return(
        <header className="flex items-center bg-white h-20 shadow-sm">
           <ContainerGRID className="flex items-center justify-between">
                <Link href="/" className="font-bold text-2xl uppercase transition-all ease-linear [&:hover,&:focus]:tracking-widest">
                  <span className="text-blue-500">Dev </span>
                    Controle
                </Link>
                  <div className="flex items-center gap-4">
                    <Link href="/dashboard" aria-label="ir para pagina dashboard">
                        <FiUser size={26} color="#4b5563" />
                    </Link>
                    <button aria-label="botão para deslogar da conta">
                        <FiLogOut size={26} color="#4b5563" />
                    </button>
                 </div>
           </ContainerGRID>
        </header>
    )
}