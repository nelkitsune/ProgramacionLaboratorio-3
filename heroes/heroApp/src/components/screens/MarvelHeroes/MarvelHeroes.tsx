import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../ui/ListHeroes/ListHeroes";

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  const handleGetHeroes = () => {
    const result = heroesData.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );
    setHeroes(result);
  };

  useEffect(() => {
    handleGetHeroes();
  });

  return <ListHeroes heroes={heroes} title="Heroes Marvel" />;
};
