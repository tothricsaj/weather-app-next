import Icon, { IconTypes } from "../../Icon/Icon";
import classes from "./CityButton.module.css";
export interface CityButtonProps {
  cityName: string;
  iconCode: string
};

export default function CityButton(props: CityButtonProps) {
  const { cityName, iconCode } = props;
  return (
    <div className={classes.wrapper}>
      <span>{cityName}</span>
      <Icon type={IconTypes.WEATHER} iconCode={iconCode} dimension={70} />
    </div>
  );
}