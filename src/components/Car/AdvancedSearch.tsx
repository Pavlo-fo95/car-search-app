import React, { useState } from 'react';
import axios from 'axios';

const AdvancedSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [yearFrom, setYearFrom] = useState<number | undefined>();
  const [yearTo, setYearTo] = useState<number | undefined>();
  const [region, setRegion] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [engine, setEngine] = useState<string>('');
  const [volumeFrom, setVolumeFrom] = useState<number | undefined>();
  const [volumeTo, setVolumeTo] = useState<number | undefined>();
  const [bodyType, setBodyType] = useState<string>('');
  const [operation, setOperation] = useState<string>('');
  const [registrationFrom, setRegistrationFrom] = useState<number | undefined>();
  const [registrationTo, setRegistrationTo] = useState<number | undefined>();
  const [koatuu, setKoatuu] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://baza-gai.com.ua/search', {
        headers: {
          'Accept': 'application/json',
          'X-Api-Key': '4be117af1dbedbd5ed4f49f8298805cb',
        },
        params: {
          query,
          manufacturer,
          model,
          yearFrom,
          yearTo,
          region,
          color,
          engine,
          volumeFrom,
          volumeTo,
          bodyType,
          operation,
          registrationFrom,
          registrationTo,
          koatuu
        },
      });
      setResults(response.data.results);
      setError(null);
    } catch (error) {
      setError('Error fetching data');
    }
  };

  return (
    <div>
      <h2>Расширенный поиск</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Номерной знак или VIN"
      />
      <input
        type="text"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
        placeholder="Производитель"
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Модель"
      />
      <input
        type="number"
        value={yearFrom}
        onChange={(e) => setYearFrom(parseInt(e.target.value))}
        placeholder="Год выпуска от"
      />
      <input
        type="number"
        value={yearTo}
        onChange={(e) => setYearTo(parseInt(e.target.value))}
        placeholder="Год выпуска до"
      />
      <input
        type="text"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        placeholder="Область"
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Цвет"
      />
      <input
        type="text"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
        placeholder="Двигатель"
      />
      <input
        type="number"
        value={volumeFrom}
        onChange={(e) => setVolumeFrom(parseInt(e.target.value))}
        placeholder="Объем от"
      />
      <input
        type="number"
        value={volumeTo}
        onChange={(e) => setVolumeTo(parseInt(e.target.value))}
        placeholder="Объем до"
      />
      <input
        type="text"
        value={bodyType}
        onChange={(e) => setBodyType(e.target.value)}
        placeholder="Тип кузова"
      />
      <input
        type="text"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        placeholder="Операция"
      />
      <input
        type="number"
        value={registrationFrom}
        onChange={(e) => setRegistrationFrom(parseInt(e.target.value))}
        placeholder="Регистрация от"
      />
      <input
        type="number"
        value={registrationTo}
        onChange={(e) => setRegistrationTo(parseInt(e.target.value))}
        placeholder="Регистрация до"
      />
      <input
        type="text"
        value={koatuu}
        onChange={(e) => setKoatuu(e.target.value)}
        placeholder="Код КОАТУУ"
      />
      <button onClick={handleSearch}>Поиск</button>

      {error && <div>{error}</div>}

      {results.length > 0 && (
        <div>
          <h3>Результаты поиска:</h3>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.title}</li> 
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;