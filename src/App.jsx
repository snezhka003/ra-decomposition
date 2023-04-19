import "./App.css";

import newsCategories from "./data/newsСategories";
import newsNames from "./data/newsNames";
import currencyRates from "./data/currencyRates";
import searchСategories from "./data/searchСategories";
import favoritePages from "./data/favoritePages";
import germanMap from "./data/germanMap";
import programmsTV from "./data/programmsTV";
import ether from "./data/ether";

import News from "./components/header/News/News";
import ExchangeRates from "./components/header/ExchangeRates/ExchangeRates";
import Ads from "./components/header/Ads/Ads";
import Image from "./components/header/Images/Image";

import Search from "./components/main/Search";

import Widgets from "./components/footer/Widgets";
import WeatherWidget from "./components/footer/Widgets/WeatherWidget/WeatherWidget";
import FavoritesWidget from "./components/footer/Widgets/FavoritesWidget/FavoritesWidget";
import GermanMapWidget from "./components/footer/Widgets/GermanMapWidget/GermanMapWidget";
import TVProgramWidget from "./components/footer/Widgets/TVProgramWidget/TVProgramWidget";
import EtherWidget from "./components/footer/Widgets/EtherWidget/EtherWidget";

export default function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://picsum.photos/id/2/100"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">

          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://picsum.photos/id/1063/1000"
            alt="Image cap"
          />

        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">

          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMap}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgramWidget
              title="Телепрограмма"
              items={programmsTV}
            />
          </Widgets>

        </div>
      </footer>
    </>
  );
}