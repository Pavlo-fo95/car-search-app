import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ukraineMap from './ukraine-topo.json';

const UkraineMap: React.FC = () => {
  return (
    <ComposableMap projection="geoAlbers">
      <Geographies geography={ukraineMap}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default UkraineMap;
export {};