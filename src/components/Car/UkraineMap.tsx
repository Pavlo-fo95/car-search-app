import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ukraineTopoJson from './ukraine-topo.json';

const UkraineMap: React.FC = () => {
  return (
    <div>
      <ComposableMap>
        <Geographies geography={ukraineTopoJson}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default UkraineMap;
export {};