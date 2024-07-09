import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginator from '../Pagination/Paginator';
import AnimationWrapper from '../Animations/AnimationWrapper';
import { Car } from './Car';
import CarCard from './CarCard';
import './CarCard.css';

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
        photoUrl: plate.photo_url || '',
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
        {cars.slice(page * 10, (page + 1) * 10).map(car => (
          <AnimationWrapper key={car.id}>
            <CarCard car={car} />
          </AnimationWrapper>
        ))}
      </div>
      <Paginator pageCount={Math.ceil(cars.length / 10)} onPageChange={handlePageClick} />
    </div>
  );
};

export default CarSearch;