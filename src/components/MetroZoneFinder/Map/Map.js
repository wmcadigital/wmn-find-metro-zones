import React, { useContext, useEffect, useRef } from 'react';
import { MapContext } from 'globalState';
import PandR from 'components/shared/PandR/PandR';
import MetroZoneMap from './MetroZoneMap';
import s from './Map.module.scss';

function Map() {
  const [, mapDispatch] = useContext(MapContext);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapDispatch({
      type: 'ADD_MAP_CONTAINER',
      payload: mapContainer,
    });
  }, [mapDispatch, mapContainer]);
  return (
    <div className={`${s.mapView}`}>
      <div className={s.mapContainer} ref={mapContainer}>
        <MetroZoneMap />
      </div>
      <PandR mapView />
    </div>
  );
}

export default Map;
