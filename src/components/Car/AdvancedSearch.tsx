import React, { useState } from 'react';
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

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <div className="advanced-search">
      <h2>Проверка авто по номеру и VIN</h2>
      <div className="basic-search">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Номерной знак или VIN" 
        />
        <button onClick={handleSearch}>Поиск</button>
        <a href="#" className="advanced-search-link">Расширенный поиск</a>
      </div>
      <div className="advanced-search-fields">
        <div className="field-group">
          <label>Производитель</label>
          <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} placeholder="-" />
        </div>
        <div className="field-group">
          <label>Модель</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="-" />
        </div>
        <div className="field-group">
          <label>Год выпуска</label>
          <input type="number" value={yearFrom} onChange={(e) => setYearFrom(Number(e.target.value))} placeholder="От" />
          <input type="number" value={yearTo} onChange={(e) => setYearTo(Number(e.target.value))} placeholder="До" />
        </div>
        <div className="field-group">
          <label>Область</label>
          <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Вся Украина" />
        </div>
        <div className="field-group">
          <label>Цвет</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Любой" />
        </div>
        <div className="field-group">
          <label>Двигатель</label>
          <input type="text" value={engine} onChange={(e) => setEngine(e.target.value)} placeholder="Любой" />
        </div>
        <div className="field-group">
          <label>Объем</label>
          <input type="number" value={volumeFrom} onChange={(e) => setVolumeFrom(Number(e.target.value))} placeholder="От" />
          <input type="number" value={volumeTo} onChange={(e) => setVolumeTo(Number(e.target.value))} placeholder="До" />
        </div>
        <div className="field-group">
          <label>Тип кузова</label>
          <input type="text" value={bodyType} onChange={(e) => setBodyType(e.target.value)} placeholder="Цистерна д/п небез. вантаж" />
        </div>
        <div className="field-group">
          <label>Операция</label>
          <input type="text" value={operation} onChange={(e) => setOperation(e.target.value)} placeholder="Любая" />
        </div>
        <div className="field-group">
          <label>Регистрация</label>
          <input type="number" value={registrationFrom} onChange={(e) => setRegistrationFrom(Number(e.target.value))} placeholder="2013" />
          <input type="number" value={registrationTo} onChange={(e) => setRegistrationTo(Number(e.target.value))} placeholder="2024" />
        </div>
        <div className="field-group">
          <label>КОАТУУ</label>
          <input type="text" value={koatuu} onChange={(e) => setKoatuu(e.target.value)} placeholder="Код КОАТУУ" />
        </div>
        <button className="search-button" onClick={handleSearch}>Поиск</button>
      </div>
    </div>
  );
};

export default AdvancedSearch;