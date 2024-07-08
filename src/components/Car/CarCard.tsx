import React, { useContext } from 'react';
import { useCompare } from '../contexts/CompareContext';
import './CarCard.css';

interface Car {
  id: string;
  vin: string;
  region: string;
  price: number;
  photoUrl: string;
  operation: {
    group: string;
    code: number;
    title_ru: string;
    title_uk: string;
  };
  department: {
    title: string;
    address: string;
  };
  registered_at: string;
  model_year: number;
  notes: string;
}

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { selectedCars, addCar, removeCar } = useCompare();
  const isSelected = selectedCars.some(selectedCar => selectedCar.id === car.id);

  const handleSelect = () => {
    if (isSelected) {
      removeCar(car);
    } else {
      addCar(car);
    }
  };

  return (
    <div className={`car-card ${isSelected ? 'selected' : ''}`}>
      <h2>{car.model_year} {car.vin}</h2>
      <img src={car.photoUrl} alt={`${car.model_year} ${car.vin}`} />
      <p className="detail"><span className="label">Регион:</span> {car.region}</p>
      <p className="detail"><span className="label">Цена:</span> {car.price}</p>
      <p className="detail"><span className="label">Операция:</span> {JSON.stringify(car.operation)}</p>
      <p className="detail"><span className="label">Департамент:</span> {JSON.stringify(car.department)}</p>
      <p className="detail"><span className="label">Дата регистрации:</span> {car.registered_at}</p>
      <p className="detail"><span className="label">Год модели:</span> {car.model_year}</p>
      <p className="detail"><span className="label">Примечания:</span> {car.notes}</p>
      <button onClick={handleSelect}>{isSelected ? 'Убрать из сравнения' : 'Добавить к сравнению'}</button>
    </div>
  );
};

export default CarCard;