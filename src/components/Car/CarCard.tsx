import React, { useContext } from 'react';
import { useCompare } from '../contexts/CompareContext';
import { Car } from './Car'; 
import './CarCard.css';

interface CarCardProps {
  car: Car;
}

type SanitizedCar = Car & {
  operation: {
    title_ru: string;
  };
  department: {
    address: string;
  };
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { selectedCars, addCar, removeCar } = useCompare();
  const isSelected = selectedCars.some(selectedCar => selectedCar.id === car.id);

  const sanitizedCar: SanitizedCar = {
    ...car,
    operation: {
      ...car.operation,
      title_ru: car.operation.title_ru || 'Поиск',  
    },
    department: {
      ...car.department,
      address: car.department.address || 'https://baza-gai.com.ua',  
    },
  };

  const handleSelect = () => {
    if (isSelected) {
      removeCar(sanitizedCar);
    } else {
      addCar(sanitizedCar);
    }
  };

  return (
    <div className={`car-card ${isSelected ? 'selected' : ''}`}>
      <h2>{car.model_year} {car.vin}</h2>
      <img src={car.photoUrl} alt={`${car.model_year} ${car.vin}`} />
      <p className="detail"><span className="label">Регион:</span> {car.region}</p>
      <p className="detail"><span className="label">Цена:</span> {car.price}</p>
      <p className="detail"><span className="label">Операция:</span> {JSON.stringify(sanitizedCar.operation)}</p>
      <p className="detail"><span className="label">Департамент:</span> {JSON.stringify(sanitizedCar.department)}</p>
      <p className="detail"><span className="label">Дата регистрации:</span> {car.registered_at}</p>
      <p className="detail"><span className="label">Год модели:</span> {car.model_year}</p>
      <p className="detail"><span className="label">Примечания:</span> {car.notes}</p>
      <button onClick={handleSelect}>{isSelected ? 'Убрать из сравнения' : 'Добавить к сравнению'}</button>
    </div>
  );
};

export default CarCard;