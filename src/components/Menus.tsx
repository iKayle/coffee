import Link from "next/link";

export function Menus() {
  return (
    <div className="">
      <div className="container flex justify-between py-8 mx-auto ">
        <div className="text-2xl">
          <span className="font-bold">CAFÉ</span> BRIGADEIRO
        </div>
        <div>
          <ul className="flex space-x-6 tracking-wide">
            <li>
              <Link href="/#">
                <a className="hover:text-golden">INÍCIO</a>
              </Link>
            </li>
            <li>
              <Link href="/sobrenos">
                <a className="hover:text-golden">SOBRE NÓS</a>
              </Link>
            </li>
            <li>
              <Link href="/cardapio">
                <a className="hover:text-golden">CARDÁPIO</a>
              </Link>
            </li>
            <li>
              <Link href="/reservas">
                <a className="hover:text-golden">RESERVA</a>
              </Link>
            </li>
            <li>
              <a className="hover:text-golden">CONTATO</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
