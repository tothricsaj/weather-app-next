import Icon, { IconTypes } from "../../Icon/Icon";
import { CityButtonProps } from '../CityButton/CityButton';
import classes from "./CityTile.module.css";

export interface CityTileProps extends CityButtonProps {
  celsius: string
};

export default function CityTile(props: CityTileProps) {
  const { cityName, iconCode, celsius } = props;

  return (
    <div className={classes.wrapper}>
      <h2>{cityName}</h2>
      <Icon type={IconTypes.WEATHER} iconCode={iconCode} />
      <span>
        {celsius} &#8451;
      </span>
    </div>
  );
}