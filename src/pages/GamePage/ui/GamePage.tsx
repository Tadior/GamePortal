import { useParams } from "react-router-dom";
import { useGetGameByIdQuery } from "../../../data/api/gamesApi";
import cls from "./GamePage.module.css";
import { GameCarousel, Loader, Title } from "../../../shared";
import { useEffect } from "react";
import { useAppDispatch } from "../../../data/store";
import { switchFiltersVisible } from "../../../data/slices/mainSlice";
import { useErrorStatus } from "../../../widgets/Content/ui/Content";

export const GamePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetGameByIdQuery({ id: id! });
  const { changeStatus } = useErrorStatus();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(switchFiltersVisible(false));
  }, []);

  if (isError) {
    changeStatus(true);
    setTimeout(() => {
      changeStatus(false);
    }, 3000);
  }

  return (
    <section className={cls.gamePage}>
      {isLoading && <Loader />}
      <div className={cls.Wrapper}>
        {data && (
          <>
            <div className={cls.Thumbnail}>
              <img
                className={cls.Image}
                src={data.thumbnail}
                alt={`${data.title} thumbnail`}
              />
            </div>
            <div className={cls.Info}>
              <Title text={data.title} />
              <ul className={cls.List}>
                <li className={cls.ListItem}>
                  Description: {data.description}
                </li>
                <li className={cls.ListItem}>Genre: {data.genre}</li>
                <li className={cls.ListItem}>Publisher: {data.publisher}</li>
                <li className={cls.ListItem}>Developer: {data.developer}</li>
                <li className={cls.ListItem}>Release: {data.release_date}</li>
              </ul>
              <ul className={cls.Requirements}>
                Operational requirements:
                <li className={cls.RequirementsItem}>
                  Storage: {data["minimum_system_requirements"].storage}
                </li>
                <li className={cls.RequirementsItem}>
                  Memory: {data["minimum_system_requirements"].memory}
                </li>
                <li className={cls.RequirementsItem}>
                  Operational system: {data["minimum_system_requirements"].os}
                </li>
                <li className={cls.RequirementsItem}>
                  Processor: {data["minimum_system_requirements"].processor}
                </li>
                <li className={cls.RequirementsItem}>
                  Graphics: {data["minimum_system_requirements"].graphics}
                </li>
              </ul>
              <GameCarousel
                additionalClassName={cls.Carousel}
                images={data.screenshots.map((info) => info.image)}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
