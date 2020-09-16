import { NextSeo } from "next-seo";
import { Hero } from "../components/hero";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Exsign Studio"
        description="Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem."
      />
      <Hero />
    </>
  );
}
