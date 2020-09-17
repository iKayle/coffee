export function Ofertas() {
  return (
    <div className="container flex pt-16 pb-16 mx-auto">
      <div className="container flex flex-col justify-between h-full py-8 mx-auto ">
        <h2 className="text-6xl allura text-golden"> Assado na hora</h2>
        <h1 className="text-5xl "> OFERTA DO DIA </h1>
        <p className="pb-6 tracking-wide text-gray-600 text-md">
          Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
          <br /> perspiciatis unde omnis iste natus error sit voluptatem
          accusantium <br />
          doloremque laudantium totam rem aperiam eaque ipsa.
        </p>
        <div className="container flex justify-between h-full pt-4 mx-auto">
          <button className="px-20 py-3 pt-4 text-xl tracking-wide border border-golden">
            CARDÁPIO
          </button>
        </div>
      </div>

      <div className="container h-full px-20 pt-12 mx-auto text-xl">
        <div className="flex justify-between ">
          <div>
            <p className="font-bold merri"> Brigadeiro de colher </p>
            <p className="text-gray-600">Minima veniam quis nostrum</p>
          </div>
          <div className="font-bold merri"> R$ 5,00</div>
        </div>

        <div className="w-full h-px my-3 bg-gray-300" />

        <div className="flex justify-between ">
          <div>
            <p className="font-bold merri ">
              Cheesecake com calda de chocolate
            </p>
            <p className="text-gray-600">Adipisci velit sed quia non numquam</p>
          </div>
          <div className="font-bold merri"> R$ 5,00</div>
        </div>

        <div className="w-full h-px my-3 bg-gray-300" />

        <div className="flex justify-between ">
          <div>
            <p className="font-bold merri ">Torta de maçã com sorvete</p>
            <p className="text-gray-600">
              Quia voluptas sit aspernatur aut odit aut
            </p>
          </div>
          <div className="font-bold merri"> R$ 5,00</div>
        </div>

        <div className="w-full h-px my-3 bg-gray-300" />

        <div className="flex justify-between ">
          <div>
            <p className="font-bold merri ">Bolo de frutas silvestres</p>
            <p className="text-gray-600">Ea commodi consequatur quis autem</p>
          </div>
          <div className="font-bold merri"> R$ 5,00</div>
        </div>

        <div className="w-full h-px my-3 bg-gray-300" />
      </div>
    </div>
  );
}
