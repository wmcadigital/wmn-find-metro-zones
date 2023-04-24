import { useContext, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
// Import contexts
import { MapContext, AutoCompleteContext } from 'globalState';
import s from '../Map.module.scss';
import metroData from '../../MetroData.json';
import useWindowHeightWidth from './useWindowHeightWidth';

const useMapControls = () => {
  const [mapState, mapDispatch] = useContext(MapContext);
  const { mapRef, reset } = mapState;
  const [autoCompleteState] = useContext(AutoCompleteContext);
  const { windowWidth } = useWindowHeightWidth();

  // Map transform/navigation functions
  const fitToViewer = () => reset();
  const zoomInCenter = () => mapRef.current.zoomOnViewerCenter(1.2);
  const zoomOutCenter = () => mapRef.current.zoomOnViewerCenter(0.9);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const zoomSelection = useCallback(
    // () => {},
    debounce((coords) => {
      const { x, y, width, height } = coords;
      if (mapRef?.current) {
        mapRef.current.fitSelection(x, y, width, height);
      }
    }, 100),
    [mapRef]
  );

  const zoneSpecs = [
    { zone: 1, width: 2044, mobileHeight: 1070, mobileY: 0, x: 0 },
    { zone: 2, width: 2549, mobileHeight: 1387, mobileY: 1078, x: 2052 },
    { zone: 3, width: 1619, mobileHeight: 880, mobileY: 2473, x: 4608 },
    { zone: 4, width: 1350, mobileHeight: 692, mobileY: 3362, x: 6235 },
  ];
  const zoneHeights = [-0, -600, -2100, -2500];
  const zoneX = [-25, -700, -1100, -1400];

  const getZoneCoords = () => {
    // extract all unique zones from selected stationa and filter/remove undefined zones
    const getSelectedZones = [
      ...new Set(
        autoCompleteState.selectedStations
          .map((station) => station.metroZone)
          .filter((zone) => zone)
      ),
    ];

    // get lowest zone number index
    const lowestZone = Math.min(...getSelectedZones) - 1;

    // get highest zone number index
    const highestZone = Math.max(...getSelectedZones);

    // get all width of zone between highest zone number and lowest zone number
    // const getSelectedZonesRangeWidths = zoneWidths.slice(lowestZone, highestZone);
    const getSelectedZonesRange = zoneSpecs.slice(lowestZone, highestZone);
    // accumlate all width ranges
    const sumSelectedZonesRangeWidths = getSelectedZonesRange
      .map((zone) => zone.width)
      .reduce((prevZone, currZone) => prevZone + currZone, 0);
    // accumlate all heights for mobile ranges

    const sumSelectedZonesRangeHeight = getSelectedZonesRange
      .map((zone) => zone.mobileHeight)
      .reduce((prevZone, currZone) => prevZone + currZone, 0);

    return {
      width: sumSelectedZonesRangeWidths,
      x: getSelectedZonesRange[0].x,
      mobileY: getSelectedZonesRange[0].mobileY,
      mobileHeight: sumSelectedZonesRangeHeight,
      zonesCount: getSelectedZonesRange.length,
    };
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    let mounted = true;
    if (mapRef?.current && mapState.mapView) {
      const fitZoneToViewer = (zone, offset) => {
        const svg = mapRef.current.ViewerDOM; // Find svg node
        const zoneNode = svg.querySelector(`#Zone_${zone}`); // Find relevant zone node
        const transitionElement = svg.childNodes[1]; // Get the element of the map which is transformed (to add a transition)
        // Add a transition to smooth zoom effect
        transitionElement.style.transition = 'transform 0.2s ease-out';
        // Remove transition on end to help performance
        transitionElement.ontransitionend = () => {
          transitionElement.style.transition = 'none';
        };
        if (zoneNode) {
          // Get coordinates for zone
          const zoneCoords = zoneNode.getBBox();
          // zoom in to fit zone coordinates to map
          const defaultCoords = {
            x: getZoneCoords().x,
            y: zoneHeights[getZoneCoords().zonesCount - 1],
            width: getZoneCoords().width,
            height: zoneCoords.height + offset,
          };
          const mobileCoords = {
            y: getZoneCoords().mobileY - 80,
            x: zoneX[getZoneCoords().zonesCount - 1],
            width: zoneCoords.width + offset,
            height: getZoneCoords().mobileHeight + 100,
          };
          zoomSelection(windowWidth > 768 ? defaultCoords : mobileCoords);
        }
      };

      const zones = mapState.highlightedZones;

      const zoneName =
        Object.keys(zones)
          .reverse()
          .find((item) => zones[item] === true) || null;
      const resizeMap = () => {
        if (mounted) {
          if (zoneName) {
            const zoneToHighlight = zoneName.replace('zone', '');
            if (zoneToHighlight && zoneToHighlight <= '4') {
              fitZoneToViewer(zoneToHighlight, 50);
            } else {
              fitZoneToViewer(7, 0);
            }
          } else {
            fitZoneToViewer(7, 0);
          }
        }
      };

      resizeMap();

      window.addEventListener('resize', () => {
        resizeMap();
      });
      // Cleanup: remove eventListener
      return () => {
        mounted = false;
        window.removeEventListener('resize', resizeMap);
      };
    }
  }, [mapRef, zoomSelection, mapState.highlightedZones, mapState.mapView]);

  useEffect(() => {
    const { full, partial, parking } = mapState.accessVisibility;
    if (mapRef?.current) {
      const svg = mapRef.current.ViewerDOM; // Find svg node
      metroData.metroStationAccess.forEach((station) => {
        const group =
          svg.querySelector(`[data-name="${station.stationName}"]`) ||
          svg.querySelector(`#${station.stationName.replace(' ', '_').replace(/[^\w-]+/g, '')}`);
        if (group) {
          if (
            (full && station.stepFreeAccess === 'full') ||
            (partial && station.stepFreeAccess === 'partial') ||
            (parking && station.parking)
          ) {
            group.classList.add(s.showStation);
          } else {
            group.classList.remove(s.showStation);
          }
        }
      });
    }
  }, [mapRef, mapState.accessVisibility]);

  // Removes a specific station highlight on the map
  const resetMapStation = (station, selectedStations) => {
    if (mapRef?.current && mapState.mapView) {
      const svg = mapRef.current.ViewerDOM; // Find svg node
      // Find related group in svg map
      if (station && station.stationName) {
        // Find svg <g> related to station name
        const svgGroup =
          svg.querySelector(`[data-name="${station.stationName}"]`) ||
          svg.querySelector(`#${station.stationName.replace(' ', '_').replace(/[^\w-]+/g, '')}`); // regex removes whitespace and non word chars for id search

        // If group is found remove text background from svg map
        if (svgGroup) {
          // remove selected class
          svgGroup.classList.remove(s.selectedStation);
          // remove background from text
          svgGroup.removeChild(svgGroup.querySelector(`#${station.id}_text_bg`));
        }
      }
    }
    // Find related zone in svg map
    const inThisZone = selectedStations.filter((item) => item.metroZone === station.metroZone);
    // If this is the only one of thiszone in selected stations then remove the highlight class from svg map
    if (inThisZone.length < 2) {
      mapDispatch({
        type: 'UPDATE_ZONE_HIGHLIGHT',
        payload: { [`zone${station.metroZone}`]: false },
      });
    }
  };
  // Clear all map highlights
  const resetMap = (selectedStations) => {
    if (mapRef?.current && mapState.mapView) {
      const svg = mapRef.current.ViewerDOM;
      // clear map highlights
      selectedStations.forEach((station) => {
        const textBg = svg.querySelector(`#${station.id}_text_bg`);
        const parkingIconBg = svg.querySelector(`#${station.id}_parking_bg`);
        if (textBg) {
          // remove selected class
          textBg.parentNode.classList.remove(s.selectedStation);
          // remove background from text
          textBg.parentNode.removeChild(textBg);
        }
        if (parkingIconBg) {
          // remove background from parking icons
          parkingIconBg.parentNode.removeChild(parkingIconBg);
        }
      });
      // fitToViewer();
    }
    mapDispatch({ type: 'CLEAR_HIGHLIGHTED_ZONES' });
  };

  return {
    mapState,
    mapDispatch,
    resetMap,
    resetMapStation,
    fitToViewer,
    zoomInCenter,
    zoomOutCenter,
  };
};

export default useMapControls;
