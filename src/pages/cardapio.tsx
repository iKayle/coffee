import Link from "next/link";
import { Footer } from "../components/Footer";
import { Menus } from "../components/Menus";
export default function Cardapio() {
  return (
    <div className="">
      <Menus />
      <div className="container flex items-center justify-between h-full pt-20 pb-48 mx-auto">
        <div className="container justify-center px-10">
          <h2 className="text-5xl text-golden allura">Sobremesas</h2>
          <p className="pb-12 text-5xl">DOCES DELICIOSOS</p>
          <div className="container flex justify-between mx-auto">
            <div className="container justify-between h-full pt-12 mx-auto text-xl">
              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri"> Brigadeiro de colher </p>
                  <p className="text-gray-600">Minima veniam quis nostrum</p>
                </div>
                <div className="font-bold merri"> R$ 6,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">
                    Cheesecake com calda de chocolate
                  </p>
                  <p className="text-gray-600">
                    Adipisci velit sed quia non numquam
                  </p>
                </div>
                <div className="font-bold merri"> R$ 10,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">Torta de maçã com sorvete</p>
                  <p className="text-gray-600">
                    Quia voluptas sit aspernatur aut odit aut
                  </p>
                </div>
                <div className="font-bold merri"> R$ 12,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">Bolo de frutas silvestres</p>
                  <p className="text-gray-600">
                    Ea commodi consequatur quis autem
                  </p>
                </div>
                <div className="font-bold merri"> R$ 12,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />
            </div>
          </div>
        </div>

        <div className="container justify-center px-10 ">
          <h2 className="text-5xl text-golden allura">Bebidas</h2>
          <p className="pb-12 text-5xl">CAFÉ FORTE</p>
          <div className="container flex justify-between mx-auto">
            <div className="container justify-between h-full pt-12 mx-auto text-xl">
              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri"> Café Espresso </p>
                  <p className="text-gray-600">Minima veniam quis nostrum</p>
                </div>
                <div className="font-bold merri"> R$ 5,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">Cappuccino</p>
                  <p className="text-gray-600">
                    Adipisci velit sed quia non numquam
                  </p>
                </div>
                <div className="font-bold merri"> R$ 8,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">Café Gelado</p>
                  <p className="text-gray-600">
                    Quia voluptas sit aspernatur aut odit aut
                  </p>
                </div>
                <div className="font-bold merri"> R$ 10,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />

              <div className="flex justify-between ">
                <div>
                  <p className="font-bold merri ">Chocolate Gelado</p>
                  <p className="text-gray-600">
                    Ea commodi consequatur quis autem
                  </p>
                </div>
                <div className="font-bold merri"> R$ 12,00</div>
              </div>

              <div className="w-full h-px my-3 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
