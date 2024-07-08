import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import ukraineTopoJson from './ukraine-topo.json';

interface MapViewProps {
  regions: string[];
}

const MapView: React.FC<MapViewProps> = ({ regions }) => {
  return (
    <ComposableMap>
      <Geographies geography={ukraineTopoJson}>
        {({ geographies }) => (
          geographies.map((geo) => {
            const isHighlighted = regions.includes(geo.properties.name);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: isHighlighted ? '#F53' : '#D6D6DA' },
                  hover: { fill: '#F53' },
                  pressed: { fill: '#E42' }
                }}
              />
            );
          })
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapView;