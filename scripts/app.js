const key = "gzqLTlZW6siYuRTGJpILjCdrkzoqifVx";

const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;

  const res = await fetch(base);
  const data = await res.json();

  return data;
};

const getCityCode = async (searchTerm) => {
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${searchTerm}`;

  const res = await fetch(url);
  const data = await res.json();

  return data[0];
};

async function final(city) {
  const cityDets = await getCityCode(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather,
  };
}


