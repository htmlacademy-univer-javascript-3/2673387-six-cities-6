import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap.tsx';
import {City, Location} from '../../types/offer.ts';

export type OffersMapProps = {
  city: City;
  locations: Location[];
  activeLocation: Location | null;
}

const pin = leaflet.icon({
  iconUrl: 'markup/img/pin.svg',
  iconSize: [38, 38],
  iconAnchor: [20, 40],
});

const activePin = leaflet.icon({
  iconUrl: 'markup/img/pin-active.svg',
  iconSize: [38, 38],
  iconAnchor: [20, 40],
});

function Map({city, locations, activeLocation}: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = useRef(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.addLayer(markerLayer.current);

      markerLayer.current.clearLayers();

      locations.forEach((location) => {
        const isActive =
          activeLocation &&
          location.latitude === activeLocation.latitude &&
          location.longitude === activeLocation.longitude;
        leaflet
          .marker({
            lat: location.latitude,
            lng: location.longitude,
          },{
            icon: isActive ? activePin : pin
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, locations, activeLocation]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
