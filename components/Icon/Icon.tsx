import { useEffect, useState } from "react";

export enum IconTypeEnum {
  WEATHER = 'WEATHER',
  SEARCH = 'SEARCH'
};
export type IconType = IconTypeEnum.WEATHER | IconTypeEnum.SEARCH;
export interface IconProps {
  type: IconType;
  iconCode?: string;
  dimension?: number;
};

function Icon(props: IconProps) {
  const { type, iconCode, dimension } = props;
  const [iconURL, setIconURL] = useState(null);

  useEffect(() => {
    type === IconTypeEnum.WEATHER
      ? setIconURL(`https://openweathermap.org/img/wn/${iconCode}@2x.png`)
      : setIconURL('/search.png')
  }, [type, iconCode]);

  return (
    <img src={iconURL} alt="icon" width={dimension || 92} height={dimension || 92} />
  );
}

export default Icon;