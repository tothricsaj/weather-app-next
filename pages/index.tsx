import CityTile from "../components/City/CityTile/Citytile";
import classes from "../styles/Home.module.css";

export default function Home(props) {
  const { responseData } = props;
  console.log(props);
  
  return (
    <div className={classes.wrapper}>
      {
        responseData.map(cityData => <CityTile {...cityData} key={ cityData.cityName }/>)
      }
    </div>

  );
}

export async function getStaticProps(context) {
  const apiKey = 'ce8c93d77aad29dd1a0d877564835f66';
  const londonLat = '51.507218';
  const londonLon = '-0.127586';
  const tokyoID = 1850147;
  const berlinID = 2950158;
  const budaPestID = 3054638;

  const groupedCitiesURL = `https://api.openweathermap.org/data/2.5/group?id=${tokyoID},${berlinID},${budaPestID}&appid=${apiKey}&units=metric`;

  const res = await fetch(groupedCitiesURL);
  const data = await res.json();

  let responseData = [];

  data.list.forEach((cityData) => {
    const { name, weather, main } = cityData;
    responseData.push({
      cityName: name,
      iconCode: weather[0].icon,
      celsius: main.temp
    });
  });

  console.log(responseData);
  
  return {
    props: {
      responseData
    }
  }
}
