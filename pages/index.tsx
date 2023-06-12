import Icon, { IconTypes } from "../components/Icon/Icon";
import CityButton from "../components/City/CityButton/CityButton";
import CityTile from "../components/City/CityTile/Citytile";
import Button from "../components/Button/Button";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";


export default function Home() {
  return (
    <>
      <NavBar />

      <Icon type={IconTypes.SEARCH} dimension={20} />
      <Icon type={IconTypes.WEATHER} iconCode="11d" dimension={32} />

      <CityButton cityName="Tokyo" iconCode="11d" />
      <CityTile cityName="Tokyo" iconCode="01d" celsius="18.8" />

      <Button text="test button" action={() => console.log('clicked test button')} />

      <SearchBar />
    </>

  );
}
