import React from 'react';
import { useCompare } from '../contexts/CompareContext';

const ComparePage: React.FC = () => {
  const { selectedCars } = useCompare();

  if (selectedCars.length !== 2) {
    return <div>Пожалуйста, выберите два автомобиля для сравнения.</div>;
  }

  const [car1, car2] = selectedCars;
  const keys = Object.keys(car1);

  return (
    <table>
      <thead>
        <tr>
          <th>Характеристика</th>
          <th>Авто 1</th>
          <th>Авто 2</th>
        </tr>
      </thead>
      <tbody>
        {keys.map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{typeof car1[key] === 'object' ? JSON.stringify(car1[key]) : car1[key]}</td>
            <td>{typeof car2[key] === 'object' ? JSON.stringify(car2[key]) : car2[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparePage;