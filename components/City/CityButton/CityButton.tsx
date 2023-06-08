import Icon, { IconType, IconTypes } from "../../Icon/Icon";
export interface CityButtonProps {
  cityName: string;
  iconCode: string
};

export default function CityButton(props: CityButtonProps) {
  const { cityName, iconCode } = props;
  return (
    <div>
      <span>{cityName}</span>
      <Icon type={IconTypes.WEATHER} iconCode={iconCode} />
    </div>
  );
}