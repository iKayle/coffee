export function Hero() {
  return (
    <div className=" bg1">
      <div className="container flex justify-between py-8 mx-auto text-white ">
        <div className="text-2xl">
          <span className="font-bold">CAFÉ</span> BRIGADEIRO
        </div>
        <div>
          <ul className="flex space-x-6 tracking-wide">
            <li>
              <a className="hover:text-golden" href="#">
                INÍCIO
              </a>
            </li>
            <li>
              <a className="hover:text-golden" href="#">
                SOBRE NÓS
              </a>
            </li>
            <li>
              <a className="hover:text-golden" href="#">
                CARDÁPIO
              </a>
            </li>
            <li>
              <a className="hover:text-golden" href="#">
                RESERVA
              </a>
            </li>
            <li>
              <a className="hover:text-golden" href="#">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-48 text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl text-golden allura">Café forte</h2>
          <h1 className="pb-12 text-6xl"> DOCES DELICIOSOS</h1>
          <p className="pl-2 text-xl tracking-wide border-l-2 hover:border-white border-golden ">
            UM CAFÉ PARA TODOS OS AMANTES DE DOCES
          </p>
        </div>
      </div>
    </div>
  );
}
