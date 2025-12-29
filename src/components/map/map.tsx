import { useRef, useEffect, memo } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City, Location } from '../../types/offer';

export type OffersMapProps = {
  city: City;
  locations: Location[];
  activeLocation: Location | null;
  className: string;
};

const pin = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activePin = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function MapInner({ city, locations, activeLocation, className }: OffersMapProps): JSX.Element {
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
          }, {
            icon: isActive ? activePin : pin
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, locations, activeLocation]);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        { duration: 1 }
      );
    }
  }, [map, city]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

const Map = memo(MapInner);

export default Map;
