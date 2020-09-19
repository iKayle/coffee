import { Footer } from "../components/Footer";
import { Menus } from "../components/Menus";

export default function Reservas() {
  return (
    <div>
      <Menus />
      <div className="container flex justify-between pt-32 mx-auto">
        <div className="container flex mx-auto">
          <form className="container flex flex-col w-auto">
            <h2 className="text-gray-600 "> Nome</h2>
            <input
              className="px-40 py-3 text-gray-600 border border-golden"
              name="name"
            />
            <h2 className="pt-8 text-gray-600 "> Data</h2>

            <input
              className="px-40 py-3 text-gray-600 border border-golden"
              type="date"
            />
            <h2 className="pt-8 text-gray-600"> Mensagem</h2>
            <textarea className="p-2 text-gray-600 border border-golden" />
          </form>
        </div>
        <div className="container mx-auto ">
          <h2 className="text-5xl allura text-golden">
            Está afim de da uma passada ?
          </h2>
          <h1 className="pb-6 text-5xl"> RESERVE UMA MESA </h1>
          <p className="pb-6 tracking-wide text-gray-600 text-md">
            Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
            <br /> perspiciatis unde omnis iste natus error sit voluptatem
            accusantium <br />
            doloremque laudantium totam rem aperiam eaque ipsa.
          </p>
          <p className="pb-64 font-semibold text-gray-600 merri">
            Reservas: 55 81 3216 54 98
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
