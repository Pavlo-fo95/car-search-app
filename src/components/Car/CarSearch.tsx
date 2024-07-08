import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import AnimationWrapper from '../Animations/AnimationWrapper';
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
  [key: string]: any;
}
const CarSearch: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://baza-gai.com.ua/search', {
        headers: {
          'Accept': 'application/json',
          'X-Api-Key': '4be117af1dbedbd5ed4f49f8298805cb',
        },
      });

      const formattedCars = result.data.plates.map((plate: any) => ({
        id: plate.digits,
        vin: plate.digits,
        region: plate.department.title,
        price: 0,
        operation: plate.operation,
        department: plate.department,
        registered_at: plate.registered_at,
        model_year: plate.model_year,
        notes: plate.notes
      }));

      setCars(formattedCars);
    };
    fetchData();
  }, []);

  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <div>
      <div>
        {cars.slice(page * 1, (page + 1) * 1).map(car => (
          <AnimationWrapper key={car.id}>
            <CarCard car={car} />
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default CarSearch;