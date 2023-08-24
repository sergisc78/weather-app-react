import React, { useState } from 'react'

export const SearchComponent = () => {

  const URLBASE = 'https://api.openweathermap.org/data/2.5/weather'
  const APIKEY = '6a6a72ee53aaf11f24fd65a60dba06ce'

  //const lang='ca'
  const diferencia = 273.15 // PER SABER LA TEMPERATURA EN GRAUS CENTRÍGADS




  // USE STATE PER L'INPUT
  const [search, setSearch] = useState('');

  const [dataWeather, setDataWeather] = useState(null);


  // CAPTURA SI S'ESCRIU ALGUNA COSA
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);

  }

  // SI LA CERCA CONTÉ ALGUNA PARAULA, S'EXECUTA FETCHWEATHER
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length > 0)
      fetchWeather();
  }


  // MOSTRAR LES DADES A TRAVES DE L'API
  const fetchWeather = async () => {

    try {

      const response = await fetch(`${URLBASE}?q=${search}&appid=${APIKEY}`);
      const data = await response.json();
      setDataWeather(data);

    } catch (error) {
      console.error('There is an error', error);

    }

  }


  return (
    <div className='container form'>
      <h2>Search a city or town !</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" value={search} onChange={handleChangeSearch} />
        <button className='search' type="submit">Search</button>
      </form>

      { // SI HI HAN DADES (DATAWEATHER) ES MOSTREN
        dataWeather && (

          <div className="card text-white bg-info mb-3" >
            <h2 className="card-header">{dataWeather.name} - {dataWeather?.sys?.country}</h2>
            <div className="card-body">
              <h5>Temperature: {parseInt(dataWeather?.main?.temp - diferencia)} º C</h5>
              <h5>Description: {dataWeather.weather[0].description}</h5>
              <h5>Feels Like: {parseInt(dataWeather?.main?.feels_like - diferencia)} º C</h5>
              <h5>Max Temperature: {parseInt(dataWeather?.main?.temp_max - diferencia)} º C</h5>
              <h5>Min Temperature: {parseInt(dataWeather?.main?.temp_min - diferencia)} º C</h5>
            </div>
          </div>
        )
      }

    </div>
  )
}
