import React, { useState } from 'react';
import axios from 'axios';
import CarCard from './CarCard';
import { Car } from './Car';
import Paginator from '../Pagination/Paginator';
import './CarCard.css';

 
const RegionSearch: React.FC = () => {
  const [region, setRegion] = useState<string>('');
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://baza-gai.com.ua/search', {
        headers: {
          'Accept': 'application/json',
          'X-Api-Key': '4be117af1dbedbd5ed4f49f8298805cb',
        },
        params: {
          region,
        },
      });

      console.log('Response data:', response.data);

      const plates = response.data.plates;
      const formattedCars = plates.map((plate: any) => ({
        id: plate.digits || plate.vin,
        vin: plate.digits,
        region: plate.department.title,
        price: 0,
        photoUrl: 'https://baza-gai.com.ua/catalog-images/image.jpg',
        operation: plate.operation,
        department: plate.department,
        registered_at: plate.registered_at,
        model_year: plate.model_year,
        notes: plate.notes,
      }));

      setCars(formattedCars);
      setError(null);
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
        value={region} 
        onChange={(e) => setRegion(e.target.value)} 
        placeholder="Регион" 
      />
      <button onClick={handleSearch}>Поиск</button>
      {error && <div>Error: {error}</div>}
      <div>
        {cars.length > 0 ? (
          cars.slice(page * 10, (page + 1) * 10).map(car => (
            <CarCard key={car.id} car={car} />
          ))
        ) : (
          <div>No cars available</div>
        )}
      </div>
      <Paginator pageCount={Math.ceil(cars.length / 10)} onPageChange={handlePageClick} />
    </div>
  );
};

export default RegionSearch;