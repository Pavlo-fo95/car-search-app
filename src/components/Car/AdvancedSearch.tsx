import React, { useState } from 'react';
import axios from 'axios';
import './AdvancedSearch.css';

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
          year_from: yearFrom,
          year_to: yearTo,
          region,
          color,
          engine,
          volume_from: volumeFrom,
          volume_to: volumeTo,
          body_type: bodyType,
          operation,
          registered_from: registrationFrom,
          registered_to: registrationTo,
          koatuu,
        },
      });

      console.log('Response data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="advanced-search">
      <h2>Расширенный поиск</h2>
      <form>
        <div className="form-group">
          <label htmlFor="query">Запрос</label>
          <input id="query" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturer">Производитель</label>
          <input id="manufacturer" type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="model">Модель</label>
          <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="yearFrom">Год выпуска от</label>
          <input id="yearFrom" type="number" value={yearFrom} onChange={(e) => setYearFrom(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="yearTo">Год выпуска до</label>
          <input id="yearTo" type="number" value={yearTo} onChange={(e) => setYearTo(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="region">Регион</label>
          <input id="region" type="text" value={region} onChange={(e) => setRegion(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="color">Цвет</label>
          <input id="color" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="engine">Тип двигателя</label>
          <input id="engine" type="text" value={engine} onChange={(e) => setEngine(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="volumeFrom">Объем двигателя от</label>
          <input id="volumeFrom" type="number" value={volumeFrom} onChange={(e) => setVolumeFrom(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="volumeTo">Объем двигателя до</label>
          <input id="volumeTo" type="number" value={volumeTo} onChange={(e) => setVolumeTo(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="bodyType">Тип кузова</label>
          <input id="bodyType" type="text" value={bodyType} onChange={(e) => setBodyType(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="operation">Операция</label>
          <input id="operation" type="text" value={operation} onChange={(e) => setOperation(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationFrom">Регистрация от</label>
          <input id="registrationFrom" type="number" value={registrationFrom} onChange={(e) => setRegistrationFrom(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="registrationTo">Регистрация до</label>
          <input id="registrationTo" type="number" value={registrationTo} onChange={(e) => setRegistrationTo(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label htmlFor="koatuu">KOATUU</label>
          <input id="koatuu" type="text" value={koatuu} onChange={(e) => setKoatuu(e.target.value)} />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleSearch}>Поиск</button>
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearch;