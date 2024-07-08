import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VinSearch from '../Car/VinSearch';
import PriceSearch from '../Car/PriceSearch';
import GaiDataCard from '../Car/GaiDataCard';
import MakeModelSearch from '../Car/MakeModelSearch';
import RegionSearch from '../Car/RegionSearch';
import AdvancedSearch from '../Car/AdvancedSearch';  
import ComparePage from '../App/ComparePage';
import CompareIcon from '../App/CompareIcon';
import Header from '../App/Header';
import './App.css';
import { CompareProvider } from '../contexts/CompareContext';

const App: React.FC = () => {
  return (
    <CompareProvider>
      <Router>
        <div className="App">
          <Header />
          <CompareIcon />
          <Routes>
            <Route path="/" element={<VinSearch />} />
            <Route path="/price" element={<PriceSearch />} />
            <Route path="/make-model" element={<MakeModelSearch />} />
            <Route path="/region" element={<RegionSearch />} />
            <Route path="/advanced-search" element={<AdvancedSearch />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </div>
      </Router>
    </CompareProvider>
  );
};

export default App;