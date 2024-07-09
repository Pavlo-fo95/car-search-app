import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ukraineTopoJson from './ukraine-topo.json';

const MapView: React.FC = () => {
  return (
    <div className="map-container">
      <h2>Карта Украины</h2>
      <ComposableMap>
        <Geographies geography={ukraineTopoJson}>
          {({ geographies }) => (
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: '#D6D6DA' },
                    hover: { fill: '#F53' },
                    pressed: { fill: '#E42' }
                  }}
                />
              );
            })
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapView;