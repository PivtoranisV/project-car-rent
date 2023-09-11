import { CarsProps } from '@/types';

interface CarCardsProps {
  car: CarsProps;
}

const CarCard = ({ car }: CarCardsProps) => {
  return <div>{car.year}</div>;
};

export default CarCard;
