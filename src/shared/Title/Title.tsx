import cls from "./Title.module.css";
interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  return <div className={cls.Title}>{props.text}</div>;
};
