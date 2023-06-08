import Icon, { IconTypes } from "../components/Icon/Icon";
import CityButton from "../components/City/CityButton/CityButton";
import CityTile from "../components/City/CityTile/Citytile";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <h3>Weather App Next</h3>

      <Icon type={IconTypes.SEARCH} dimension={20} />
      <Icon type={IconTypes.WEATHER} iconCode="11d" dimension={32} />

      <CityButton cityName="Tokyo" iconCode="11d" />
      <CityTile cityName="Tokyo" iconCode="01d" celsius="18.8" />
    </>

  );
}
