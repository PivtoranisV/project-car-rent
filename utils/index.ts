import { CarsProps } from '@/types';

export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': 'b6de78bbeamsh90d05362fb24951p195997jsnda55d587accc',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=fiesta',
    { headers: headers }
  );
  const data = await response.json();
  return data;
};

export const getCarImage = async (
  car: CarsProps,
  page: number,
  qty: number
) => {
  const { make, model } = car;

  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=${qty}&query=${make}-${model}&client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
  );
  const data = await response.json();
  return data;
};
