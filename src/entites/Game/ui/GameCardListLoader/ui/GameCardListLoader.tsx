import cls from "./GameCardListLoader.module.css";
import { GameCardLoader } from "./GameCardLoader/GameCardLoader";

// interface GameCardListProps {
// 	games: Game[]
// }

export const GameCardListLoader = () => {
  const data = new Array(6).fill(<GameCardLoader />, 0);
  return <div className={cls.GamesLoadersList}>{...data}</div>;
};
