// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { CarouselProps } from "react-multi-carousel";
import cls from "./Carousel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface CarouselProps {
  images: string[];
  additionalClassName: string;
}

export const GameCarousel = (props: CarouselProps) => {
  const { images, additionalClassName } = props;
  return (
    <Splide
      className={[cls.GameCarousel, additionalClassName].join(" ")}
      aria-label="Screenshots"
      options={{ gap: "1rem" }}
    >
      {images.map((image) => {
        return (
          <SplideSlide className={cls.Item} key={image}>
            <img src={image} alt={"Image"} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
