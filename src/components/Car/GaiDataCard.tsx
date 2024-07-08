import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GaiDataCard.css';

type CatalogModel = {
  id: number;
  vendor_id: number;
  slug: string;
  title: string;
  plate_count: number;
  years: string;
  is_current: boolean;
  description: string;
  year_from: number;
  year_to: number | null;
  photo_url: string;
};

type GaiData = {
  id: number;
  title: string;
  slug: string;
  full_title: string;
  catalog_model: CatalogModel;
};

const GaiDataCard: React.FC = () => {
  const [gaiData, setGaiData] = useState<GaiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://baza-gai.com.ua/make/lamborghini/huracan', {
      headers: {
        'Accept': 'application/json',
        'X-Api-Key': '4be117af1dbedbd5ed4f49f8298805cb'  
      }
    })
    .then(response => {
      setGaiData(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!gaiData) {
    return null;
  }

  return (
    <div className="gai-data-card">
      <h2>{gaiData.full_title} ({gaiData.catalog_model.years})</h2>
      <p className="detail"><span className="label">ID:</span> {gaiData.id}</p>
      <p className="detail"><span className="label">Vendor ID:</span> {gaiData.catalog_model.vendor_id}</p>
      <p className="detail"><span className="label">Title:</span> {gaiData.catalog_model.title}</p>
      <p className="detail"><span className="label">Plate Count:</span> {gaiData.catalog_model.plate_count}</p>
      <p className="detail"><span className="label">Year From:</span> {gaiData.catalog_model.year_from}</p>
      <p className="detail"><span className="label">Year To:</span> {gaiData.catalog_model.year_to ? gaiData.catalog_model.year_to : 'н.в.'}</p>
      <img src={gaiData.catalog_model.photo_url} alt={`${gaiData.full_title} фото`} className="car-photo" />
    </div>
  );
};

export default GaiDataCard;
export {};