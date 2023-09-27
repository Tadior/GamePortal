import { Game } from "../../../../../types/Game";
import cls from "./GameCardList.module.css";
import { GameCard } from "./GameCard/GameCard";

export const GameCardList = (props: { gamesData: Game[] }) => {
  return (
    <div className={cls.GamesList}>
      {props.gamesData.map((game) => {
        return <GameCard gameInfo={game} key={game.id} />;
      })}
    </div>
  );
};
