import Icon, { IconTypeEnum } from "../components/Icon/Icon";

export default function Home() {
  return (
    <>
      <h2>Home</h2>
      <h3>Weather App Next</h3>

      <Icon type={IconTypeEnum.SEARCH} dimension={20} />
      <Icon type={IconTypeEnum.WEATHER} iconCode="11d" dimension={32} />

    </>

  );
}
