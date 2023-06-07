import React from 'react';
import useWindowHeightWidth from './customHooks/useWindowHeightWidth';
import MapHorizontal from './Maps/MapHorizontal';
import MapVertical from './Maps/MapVertical';

function MetroZoneMap() {
  const { windowWidth } = useWindowHeightWidth();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{windowWidth > 768 ? <MapHorizontal /> : <MapVertical />}</>;
}

export default MetroZoneMap;
