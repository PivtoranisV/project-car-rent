export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': 'b6de78bbeamsh90d05362fb24951p195997jsnda55d587accc',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Yaris',
    { headers: headers }
  );
  const data = await response.json();
  return data;
};
