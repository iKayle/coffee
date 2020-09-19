export function Footer() {
  return (
    <div className="container items-end w-full h-px mx-auto mt-2 bg-gray-300">
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
  );
}
