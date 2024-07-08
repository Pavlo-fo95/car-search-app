import React, { createContext, useState, useContext, ReactNode } from 'react';

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

interface CompareContextProps {
  selectedCars: Car[];
  addCar: (car: Car) => void;
  removeCar: (car: Car) => void;
}

const CompareContext = createContext<CompareContextProps | undefined>(undefined);

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const addCar = (car: Car) => {
    setSelectedCars(prevCars => {
      if (prevCars.length < 2) {
        return [...prevCars, car];
      } else {
        return prevCars;
      }
    });
  };

  const removeCar = (car: Car) => {
    setSelectedCars(prevCars => prevCars.filter(c => c.id !== car.id));
  };

  return (
    <CompareContext.Provider value={{ selectedCars, addCar, removeCar }}>
      {children}
    </CompareContext.Provider>
  );
};

export { CompareContext };