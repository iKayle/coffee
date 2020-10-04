import { NextSeo } from "next-seo";
import { Hero } from "../components/Hero";
import { Ofertas } from "../components/Ofertas";
import { Frutas } from "../components/Frutas";
import { Historia } from "../components/Historia";
import { Reservas } from "../components/Reservas";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Exsign Studio"
        description="Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem."
      />
      <Hero />
      <Ofertas />
      <Frutas imgSrc="/bolofrutas.jpg" />
      <Historia />
      <Frutas imgSrc="/tortared.jpg" />
      <Reservas />
      <Footer />
    </>
  );
}
