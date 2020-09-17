export function Reservas() {
  return (
    <div className="container flex justify-between pt-32 pb-32 mx-auto">
      <div className="container">
        <p className="text-5xl text-golden allura ">
          Está afim de dar uma passada?
        </p>
        <p className="text-5xl">RESERVE UMA MESA</p>
      </div>
      <div className="container flex flex-col justify-between mx-auto">
        <p className="pb-10 text-lg tracking-wide text-gray-600">
          Aqui é onde o seu texto começa. Basta clicar e começar a escrever.
          Quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit sed quia consequuntur magni.
        </p>
        <p className="flex pb-8 text-lg font-bold text-gray-600 merri">
          Reservas: 55 81 3216 54 98
        </p>
        <div className="container flex justify-between h-full pt-4 mx-auto">
          <button className="px-20 py-3 pt-4 text-xl tracking-wide border border-golden">
            RESERVE UMA MESA
          </button>
        </div>
      </div>
    </div>
  );
}
