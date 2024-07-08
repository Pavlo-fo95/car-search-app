import React, { useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import Paginator from '../Pagination/Paginator';
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

const VinSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const carsPerPage = 10;

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://baza-gai.com.ua/api/vin?vin=${query}&apiKey=4be117af1dbedbd5ed4f49f8298805cb`);
      console.log('Response data:', response.data);

      if (response.data && response.data.plates) {
        const formattedCars = response.data.plates.map((plate: any) => ({
          id: plate.digits || plate.vin,
          vin: plate.digits,
          region: plate.department.title,
          price: 0,
          photoUrl: plate.photo_url || 'https://baza-gai.com.ua/catalog-images/image.jpg',
          operation: plate.operation,
          department: plate.department,
          registered_at: plate.registered_at,
          model_year: plate.model_year,
          notes: plate.notes
        }));

        setCars(formattedCars);
        setError(null);
        setPage(0); // Сброс страницы после поиска
      } else {
        setCars([]);
        setError('No cars found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Введите номер или ВИН" 
      />
      <button onClick={handleSearch}>Поиск</button>
      {error && <div>Error: {error}</div>}
      <div>
        {cars.length > 0 ? (
          cars.slice(page * carsPerPage, (page + 1) * carsPerPage).map(car => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <div>No cars available</div>
        )}
      </div>
      <Paginator pageCount={Math.ceil(cars.length / carsPerPage)} onPageChange={handlePageClick} />
      <button>Карта</button>
    </div>
  );
};

export default VinSearch;