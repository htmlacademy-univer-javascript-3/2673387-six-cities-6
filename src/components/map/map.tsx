import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City} from '../../types/city.ts';
import useMap from '../../hooks/useMap.tsx';
import {Location} from '../../types/offer.ts';

export type OffersMapProps = {
  city: City;
  locations: Location[];
}

function Map({city, locations}: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const customIcon = leaflet.icon({
    iconUrl: 'markup/img/pin.svg',
    iconSize: [38, 38],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          },{
            icon:customIcon
          })
          .addTo(map);
      });
    }
  }, [map, locations]);
  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
