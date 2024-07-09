import React from 'react';
import { Car } from './Car';
import './CarResult.css';

interface CarResultProps {
  car: Car;
}

const CarResult: React.FC<CarResultProps> = ({ car }) => {
  return (
    <div className="car-result-card">
      <img src={car.photoUrl} alt={`Photo of ${car.vin}`} />
      <div className="car-result-details">
        <div className="car-result-header">
          <h2>{car.vin} ({car.model_year})</h2>
          <p>Цена: {car.price}</p>
        </div>
        <div className="car-result-info">
          <p><strong>Регистрация:</strong> {car.registered_at}</p>
          <p><strong>Приметы:</strong> {car.notes}</p>
          <p><strong>Операция:</strong> {car.operation.title_uk}</p>
          <p><strong>Адрес:</strong> {car.department.title}, {car.department.address}</p>
        </div>
        <div className="car-result-links">
          <a href="#">Все фото</a>
          <a href="#">Характеристики</a>
        </div>
      </div>
    </div>
  );
};

export default CarResult;