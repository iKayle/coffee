import Link from "next/link";
import { Menus } from "../components/Menus";
export default function Sobrenos() {
  return (
    <div className="">
      <Menus />
      <div className="container flex justify-between mx-auto ">
        <div className="container flex pt-48 mx-auto">
          <div className="container mx-auto">
            <h2 className="text-5xl text-golden allura">Nossa história</h2>
            <h1 className="pb-12 text-5xl"> CAFÉ BRIGADEIRO</h1>
          </div>
        </div>
        <div className="container flex justify-between mx-auto">
          <h1 className="pt-48 text-lg text-gray-600">
            Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab. Adipisci velit sed quia non numquam eius modi tempora incidunt
            ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad
            minima veniam quis nostrum exercitationem ullam corporis.
          </h1>
        </div>
      </div>
      <div className="container flex mx-auto h-100 ">
        <img
          className="flex justify-center object-cover "
          src="/tortared.jpg"
          alt=""
        />
      </div>
      <div className="container flex justify-between pt-10 mx-auto ">
        <div className="container justify-between ">
          <img src="/bolofrutas.jpg " alt="" />
        </div>
        <div className="container space-x-24">
          <p className="px-24 text-lg text-gray-600 ">
            Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut.
          </p>
          <p className="text-lg text-gray-600 ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit sed quia consequuntur magni dolores.
          </p>
          <p className="pb-32 text-lg text-gray-600">
            Veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit sed quia consequuntur magni dolores eos qui ratione voluptatem
            sequi nesciunt neque porro quisquam est qui.
          </p>
        </div>
      </div>
      <div className="container w-full h-px mx-auto mt-2 bg-gray-300">
        <footer className="container flex justify-between pt-5 pb-10 mx-auto text-sm text-gray-600">
          <div>
            <h1>CAFÉ BRIGADEIRO</h1>
            <p>Todos os direitos reservados 2020</p>
          </div>
          <div>
            Desenvolvido por{" "}
            <span className="border-b-2 border-r-8 cursor-pointer text-golden hover:border-golden">
              Kayle
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
