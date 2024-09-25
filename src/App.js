import React, { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";

const citiesData = [
  {
    name: "Токио",
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },

  {
    name: "Киото",

    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl:
      "https://media.istockphoto.com/id/1217375820/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0-%D1%8F%D1%81%D0%B0%D0%BA%D0%B0-%D0%BA%D0%B8%D0%BE%D1%82%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=1024x1024&w=is&k=20&c=cr_QhHlgA0Qce9SDes4GYTcmQCkV5I8UN4qL_envu2Y=",

    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },

  {
    name: "Осака",
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl:
      "https://media.istockphoto.com/id/1161555395/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B0%D1%88%D0%BD%D1%8F-%D0%BE%D1%81%D0%B0%D0%BA%D0%B0-%D0%B8-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%BD%D0%B5%D0%BE%D0%BD%D0%BE%D0%B2%D1%83%D1%8E-%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%83-%D0%B2-%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BD%D1%81%D0%B5%D0%BA%D0%B0%D0%B9-%D0%B2-%D1%81%D1%83%D0%BC%D0%B5%D1%80%D0%BA%D0%B0%D1%85-%D0%BE%D1%81%D0%B0%D0%BA%D0%B0-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg?s=1024x1024&w=is&k=20&c=3gkekN7f2_fU-ceRql65HecHjzeXC8kbcF7Rr48h3K4=",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },

  {
    name: "Хоккайдо",
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl:
      "http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },

  {
    name: "Нагоя",
    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl:
      "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName);
    setSelectedCity(city);
  };


  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffe2e9', 
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  };


  const containerStyle = {
    border: '5px solid #333',
    padding: '20px', 
    borderRadius: '10px', 
    maxWidth: '800px', 
    textAlign: 'center', 
    backgroundColor: '#ffe4e1', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  };

  return (
    <div style={appStyle}>
      <div style={containerStyle}>
        <h1>Выберите город</h1>
        <CitySelector cities={citiesData} onSelectCity={handleSelectCity} />
        <CityCard city={selectedCity} />
      </div>
    </div>
  );
}

export default App;
