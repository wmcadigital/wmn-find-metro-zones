import React, { useState, useEffect, useRef, useContext } from 'react';
import { AutoCompleteContext } from 'globalState';
import { ReactSVGPanZoom, TOOL_PAN } from 'react-svg-pan-zoom';
import MapControls from '../MapControls/MapControls';
import useMapMethods from '../customHooks/useMapMethods';
import useWindowHeightWidth from '../customHooks/useWindowHeightWidth';
import s from '../Map.module.scss';

function MapVertical() {
  const { mapState, mapDispatch } = useMapMethods();
  const [tool, setTool] = useState(TOOL_PAN);
  const Viewer = useRef(null);
  const { mapSize } = mapState;
  const { zone1, zone2, zone3, zone4 } = mapState.highlightedZones;
  const [autoCompleteState] = useContext(AutoCompleteContext);
  const { windowWidth } = useWindowHeightWidth();

  const isSelectedStation = (stationName) => {
    const stationIsSelected = autoCompleteState.selectedStations.some(
      (station) => station.stationName === stationName
    );
    return stationIsSelected;
  };

  // initial value for the map 1st render
  const initialValue = {
    SVGHeight: 432,
    SVGMinX: 0,
    SVGMinY: 0,
    SVGWidth: 843,
    a: 0.09870479872631363,
    b: 0,
    c: 0,
    d: 0.09870479872631363,
    e: windowWidth > 768 ? -1.3957982714826396 : 205.3615655472385,
    endX: windowWidth > 768 ? null : 350,
    endY: windowWidth > 768 ? null : 177,
    f: windowWidth > 768 ? 239.63545712988503 : 27.304834979928327,
    focus: false,
    lastAction: null,
    miniatureOpen: true,
    mode: 'idle',
    pinchPointDistance: null,
    prePinchMode: null,
    scaleFactorMax: null,
    scaleFactorMin: null,
    startX: null,
    startY: null,
    version: 3,
    viewerHeight: 432,
    viewerWidth: 843,
  };
  const [value, setValue] = useState(initialValue);

  const setValues = (evt) => {
    setValue(evt);
  };

  useEffect(() => {
    if (Viewer.current) {
      mapDispatch({
        type: 'ADD_MAP',
        payload: {
          Viewer,
          reset: () => {
            setValues(initialValue);
          },
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapDispatch, Viewer]);

  return (
    <>
      <MapControls />
      <ReactSVGPanZoom
        ref={Viewer}
        width={mapSize.width}
        height={mapSize.height}
        tool={tool}
        toolbarProps={{ position: 'none' }}
        miniatureProps={{ position: 'none' }}
        detectWheel={false}
        detectAutoPan={false}
        onChangeTool={setTool}
        value={value}
        background="#fff"
        onChangeValue={setValues}
      >
        <svg width={mapSize.width} height={mapSize.height}>
          <style>
            {
              '.st0{clip-path:url(#SVGID_00000031925839151982136660000012007475375414382978_);}.st1{fill:#0075C9;}.st2{fill:#FFFFFF;}.st3{fill:#3D1152;}.st4{fill:#DED7D6;}.st5{fill:#221E20;}.st6{fill:#EEEAEA;}.st7{fill:#2D2A26;}.st8{fill:#1D1D1C;}'
            }
          </style>

          <symbol id="Interchange" viewBox="-28.4 -28.4 56.8 56.8">
            <g id="Zone_4" data-name={zone4} className={zone4 ? s.zoneSelected : ''}>
              <rect
                x="6841.7998"
                y="21.8"
                className={`st6 ${zone4 ? s.selectedZone : ''}`}
                width="1350.2002"
                height="1341.5"
              />
              <path
                fill="#221E20"
                d="M7447.8999,331.8l72.3999-98.8h42.3999v105.3h28.2998v29.3h-28.2998v37h-33.1001v-37h-81.6001
L7447.8999,331.8z M7529.5,267.2l-51.7998,71.2H7529.5V267.2z"
              />
            </g>
            <g id="Zone_3" data-name={zone3} className={zone3 ? s.zoneSelected : ''}>
              <rect
                x="5214.7002"
                y="21.8"
                className={`st6 ${zone3 ? s.selectedZone : ''}`}
                width="1619.2002"
                height="1341.5"
              />
              <path
                fill="#221E20"
                d="M5993.3999,303.3l46.5-41.2h-77V233h119.8999v27.6L6037,300.1c25.8999,0.7,50.6001,19.9,50.6001,52.1
c0,29.5-23.5,56.2-64.7002,56.2c-39.7002,0-63.3999-25.7-65.6001-54.2l32.3999-6.5c1,18.9,14.5,32,32.8999,32
c19.8999,0,31-12.6,31-27.6c0-19.6-15.2998-27.8-30-27.8c-5.2002,0.1-10.2998,1.2-15,3.4L5993.3999,303.3z"
              />
            </g>
            <g id="Zone_2" data-name={zone2} className={zone2 ? s.zoneSelected : ''}>
              <rect
                x="2658.1001"
                y="21.8"
                className={`st6 ${zone2 ? s.selectedZone : ''}`}
                width="2548.6001"
                height="1341.5"
              />
              <path
                fill="#221E20"
                d="M3868.7,296.7c-0.6001-3.5-1-7.1-1-10.7c0-29.8,22.3-56.7,61.5-56.7c38,0,60.8,24.9,60.8,54.2
c0,22.5-12.3,40.7-32.8999,53.3l-33.3999,20.6c-7.3,4.8-13.8,9.9-16.2,17.9h83.5v29.3h-124.7c0.2-29.8,10.3999-53.3,40.7-71.7
l28.1001-17.4c14.8-9.2,21.1001-18.9,21.1001-31.2c0-13.3-9-25.4-27.6001-25.4c-19.3999,0-28.6001,13.3-28.6001,30.3
c0.1001,3.1,0.3999,6.2,1,9.2L3868.7,296.7z"
              />
            </g>
            <g id="Zone_1" data-name={zone1} className={zone1 ? s.zoneSelected : ''}>
              <rect
                y="21.8"
                className={`st6 ${zone1 ? s.selectedZone : ''}`}
                width="2650.1001"
                height="1341.5"
              />
              <path
                fill="#221E20"
                d="M1323.5,404.7V288h-41.1v-22.8c24.7-0.7,41.9-14.3,45.3-32.2h29.1v171.7H1323.5z"
              />
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000003069446255021647610000017618400458473995136_"
                    x="-28.4"
                    y="-28.4"
                    width="56.7"
                    height="56.7"
                  />
                </defs>
                <clipPath id="SVGID_00000055672309427403342120000000900212245200170907_">
                  <use
                    xlinkHref="#SVGID_00000003069446255021647610000017618400458473995136_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000055672309427403342120000000900212245200170907_)">
                  <path
                    fill="#0075C9"
                    d="M0-28.4c15.7,0,28.4,12.7,28.4,28.4S15.7,28.4,0,28.4S-28.4,15.7-28.4,0l0,0
					C-28.3-15.7-15.7-28.3,0-28.4"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M0-19.6c10.8,0,19.6,8.8,19.6,19.6S10.8,19.6,0,19.6S-19.6,10.8-19.6,0S-10.8-19.6,0-19.6 M0,10.8
					C6,10.8,10.8,6,10.8,0S6-10.8,0-10.8S-10.8-6-10.8,0l0,0C-10.8,6-6,10.8,0,10.8L0,10.8"
                  />
                </g>
              </g>
            </g>
          </symbol>
          <symbol id="Park_and_ride" viewBox="-18.4 -18.4 36.8 36.8">
            <path
              fill="#3D1152"
              d="M15.2-18.4h-30.4c-1.8,0-3.2,1.4-3.2,3.2v30.4c0,1.8,1.4,3.2,3.2,3.2l0,0h30.4c1.8,0,3.2-1.4,3.2-3.2l0,0
		v-30.4C18.4-17,17-18.4,15.2-18.4L15.2-18.4z"
            />
            <path
              fill="#FFFFFF"
              d="M-12.4,1.4v4.3h-2.3V-5.7h4.3c1.9-0.1,3.6,1.3,3.8,3.2c0,0.1,0,0.2,0,0.3c0.1,1.9-1.5,3.5-3.4,3.6
		c-0.1,0-0.2,0-0.4,0C-10.4,1.4-12.4,1.4-12.4,1.4z M-10.7-0.5c1,0.1,1.8-0.5,1.9-1.4c0.1-0.9-0.6-1.7-1.5-1.8c-0.1,0-0.2,0-0.4,0
		h-1.8v3.3h1.8V-0.5z"
            />
            <path
              fill="#FFFFFF"
              d="M1.3,4.5C0.5,5.4-0.6,5.9-1.8,6c-1.8,0.2-3.3-1.1-3.5-2.9c0-0.1,0-0.1,0-0.2c0-1.4,0.8-2.2,1.9-3.1h0.1
		l-0.2-0.2C-4.1-1.1-4.6-2-4.7-3c0-1.7,1.3-3,3-3c0.1,0,0.1,0,0.2,0c1.6-0.1,3,1.1,3.2,2.7c0,0.1,0,0.1,0,0.2C1.6-2,1-1,0.1-0.4
		l-0.4,0.3l1.7,1.8l2.9-3v2.7L2.7,3.1l2.6,2.7H2.5L1.3,4.5z M0,3.1L-2,1l-0.2,0.2c-0.5,0.3-0.9,0.9-0.9,1.5C-3.1,3.4-2.5,4-1.7,4
		l0,0C-1.1,4.1-0.4,3.7,0,3.1z M-2-1.8l0.3,0.3l0.6-0.4c0.4-0.3,0.7-0.7,0.7-1.2c0-0.6-0.5-1.1-1.1-1.1l0,0c-0.6,0-1.1,0.5-1.1,1.1
		V-3C-2.6-2.6-2.3-2.1-2-1.8z"
            />
            <path
              fill="#FFFFFF"
              d="M10,1.3H8.8v4.4H6.6V-5.7h4.5c1.9-0.1,3.5,1.3,3.6,3.2c0,0.1,0,0.2,0,0.3c0,1.5-1,2.9-2.4,3.2l2.4,4.7h-2.5
		L10,1.3z M10.6-0.6c0.9,0.1,1.7-0.5,1.8-1.4S11.9-3.7,11-3.8c-0.1,0-0.2,0-0.4,0H8.8v3.2C8.8-0.6,10.6-0.6,10.6-0.6z"
            />
          </symbol>
          <symbol id="Stop" viewBox="-8.8 -8.8 17.6 17.6">
            <path
              fill="#FFFFFF"
              d="M-8.8,0c0,4.8,3.9,8.8,8.8,8.8s8.8-4,8.8-8.8S4.8-8.8,0-8.8S-8.8-4.8-8.8,0L-8.8,0"
            />
          </symbol>
          <g id="Zone_4" data-name={zone4} className={zone4 ? s.zoneSelected : ''}>
            <rect
              y="3361.6"
              className={`st4 ${zone4 ? s.selectedZone : ''}`}
              width="1216.1"
              height="691.9"
            />
            <path
              className="st5"
              d="M985.6,3732.8l59.8-81.6h35v87h23.4v24.2h-23.4v30.6H1053v-30.6h-67.4L985.6,3732.8z M1053,3679.4l-42.8,58.8
		h42.8L1053,3679.4z"
            />
          </g>
          <g id="Zone_3" data-name={zone3} className={zone3 ? s.zoneSelected : ''}>
            <rect
              y="2473.5"
              className={`st6 ${zone3 ? s.selectedZone : ''}`}
              width="1216.1"
              height="879.9"
            />
            <path
              className="st5"
              d="M1019.4,2915.4l38.4-34h-63.6v-24h99v22.8l-37.8,32.6c21.4,0.6,41.8,16.4,41.8,43c0,24.4-19.4,46.4-53.4,46.4
		c-32.8,0-52.4-21.2-54.2-44.8l26.8-5.4c0.8,15.6,12,26.4,27.2,26.4c16.4,0,25.6-10.4,25.6-22.8c0-16.2-12.6-23-24.8-23
		c-4.3,0.1-8.5,1-12.4,2.8L1019.4,2915.4z"
            />
          </g>
          <g id="Zone_2" data-name={zone2} className={zone2 ? s.zoneSelected : ''}>
            <rect
              y="1078.2"
              className={`st4 ${zone2 ? s.selectedZone : ''}`}
              width="1216.1"
              height="1387.1"
            />
            <path
              className="st5"
              d="M994.5,1768c-0.5-2.9-0.8-5.8-0.8-8.8c0-24.6,18.4-46.8,50.8-46.8c31.4,0,50.2,20.6,50.2,44.8
		c0,18.6-10.2,33.6-27.2,44l-27.6,17c-6,4-11.4,8.2-13.4,14.8h69v24.2h-103c0.2-24.6,8.6-44,33.6-59.2l23.2-14.4
		c12.2-7.6,17.4-15.6,17.4-25.8c0-11-7.4-21-22.8-21c-16,0-23.6,11-23.6,25c0.1,2.6,0.3,5.1,0.8,7.6L994.5,1768z"
            />
          </g>
          <g id="Zone_1" data-name={zone1} className={zone1 ? s.zoneSelected : ''}>
            <rect className={`st6 ${zone1 ? s.selectedZone : ''}`} width="1216.1" height="1070" />
            <path
              className="st5"
              d="M1043.3,598.9v-96.4h-34v-18.8c20.4-0.6,34.6-11.8,37.4-26.6h24v141.8H1043.3z"
            />
          </g>
          <g id="Tram_line">
            <rect x="501.5" y="195.6" fill="#0075C9" width="13.1" height="4018.6001" />
          </g>
          <g id="Blobs">
            <g>
              <g>
                <defs>
                  <rect id="SVGID_1_" x="503.4" y="954" width="9.3" height="9.3" />
                </defs>
                <clipPath id="SVGID_00000033328091487891041010000017087820087033677704_">
                  <use xlinkHref="#SVGID_1_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_00000033328091487891041010000017087820087033677704_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000160190426319408011350000016123457191266989711_"
                        x="503.4062"
                        y="953.9788"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000004522924723848312770000010069883000436211356_">
                      <use
                        xlinkHref="#SVGID_00000160190426319408011350000016123457191266989711_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000004522924723848312770000010069883000436211356_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 958.6428)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000112592317673011855970000010231321793608249735_"
                    x="503.4"
                    y="696.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000126304702769392955550000011972310193797618826_">
                  <use
                    xlinkHref="#SVGID_00000112592317673011855970000010231321793608249735_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000126304702769392955550000011972310193797618826_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000150796663524785628650000003610754879980930454_"
                        x="503.4062"
                        y="696.6688"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000026872752827315610320000001990244025534465666_">
                      <use
                        xlinkHref="#SVGID_00000150796663524785628650000003610754879980930454_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000026872752827315610320000001990244025534465666_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 701.3328)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000101071822779145044430000007632196052412714378_"
                    x="503.3422"
                    y="569.994"
                    transform="matrix(0.0042 -1 1 0.0042 -68.7745 1080.2247)"
                    width="9.3001"
                    height="9.3001"
                  />
                </defs>
                <clipPath id="SVGID_00000053539221176755172820000003285844236561175476_">
                  <use
                    xlinkHref="#SVGID_00000101071822779145044430000007632196052412714378_"
                    overflow="visible"
                  />
                </clipPath>

                <g
                  transform="matrix(1 -4.656613e-10 4.656613e-10 1 -3.051758e-05 6.103516e-05)"
                  clipPath="url(#SVGID_00000053539221176755172820000003285844236561175476_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000070076060548694995750000007007417580140393600_"
                        x="503.4069"
                        y="570.0193"
                        transform="matrix(0.0042 -1 1 0.0042 -68.7355 1080.2898)"
                        width="9.2751"
                        height="9.2751"
                      />
                    </defs>
                    <clipPath id="SVGID_00000067946118906387887990000006339010370428465024_">
                      <use
                        xlinkHref="#SVGID_00000070076060548694995750000007007417580140393600_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000067946118906387887990000006339010370428465024_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(-0.0022 0.53 -0.53 -0.0022 508.0178 574.6833)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000010286834358201396940000003331078793080945074_"
                    x="503.4"
                    y="1334.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000148645687622414883040000001928373825017228707_">
                  <use
                    xlinkHref="#SVGID_00000010286834358201396940000003331078793080945074_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000148645687622414883040000001928373825017228707_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000054249282503626297820000015527892471304656307_"
                        x="503.4062"
                        y="1334.7089"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000058569840293336157880000017092891120481180818_">
                      <use
                        xlinkHref="#SVGID_00000054249282503626297820000015527892471304656307_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000058569840293336157880000017092891120481180818_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1339.3728)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000058576291006190785820000001541199173977586569_"
                    x="503.4"
                    y="1842.1"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000067958871030530240440000001246560504349357213_">
                  <use
                    xlinkHref="#SVGID_00000058576291006190785820000001541199173977586569_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000067958871030530240440000001246560504349357213_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000164488924286679026640000008506243742888121258_"
                        x="503.4062"
                        y="1842.0588"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000093882561822446903260000016705295022821407655_">
                      <use
                        xlinkHref="#SVGID_00000164488924286679026640000008506243742888121258_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000093882561822446903260000016705295022821407655_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1846.7228)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000155136470622682429760000016283371147086431163_"
                    x="503.4"
                    y="1588.3"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000088835967630051395210000017668688794091241862_">
                  <use
                    xlinkHref="#SVGID_00000155136470622682429760000016283371147086431163_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000088835967630051395210000017668688794091241862_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000129176241030416697320000011535559048400007322_"
                        x="503.4062"
                        y="1588.3188"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000147898929934639010260000012713972694342241667_">
                      <use
                        xlinkHref="#SVGID_00000129176241030416697320000011535559048400007322_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000147898929934639010260000012713972694342241667_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1592.9828)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000021806471155063613910000003376284244921019574_"
                    x="503.4"
                    y="2095.8"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000011028134774634047410000014561744602641816478_">
                  <use
                    xlinkHref="#SVGID_00000021806471155063613910000003376284244921019574_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000011028134774634047410000014561744602641816478_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000078008786300120889220000018101954463384081058_"
                        x="503.4062"
                        y="2095.7888"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000131345257364421976220000003683497218427715769_">
                      <use
                        xlinkHref="#SVGID_00000078008786300120889220000018101954463384081058_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000131345257364421976220000003683497218427715769_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2100.4529)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000141429100367079803250000002585823634655245188_"
                    x="503.4"
                    y="2222.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000040545920850623338310000005946362189799730339_">
                  <use
                    xlinkHref="#SVGID_00000141429100367079803250000002585823634655245188_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000040545920850623338310000005946362189799730339_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000173841112259353797160000016443180352085479355_"
                        x="503.4062"
                        y="2222.6587"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000084521375176845562130000011312017776457218229_">
                      <use
                        xlinkHref="#SVGID_00000173841112259353797160000016443180352085479355_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000084521375176845562130000011312017776457218229_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2227.3228)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000156555893474718958440000015750285116022764677_"
                    x="503.4"
                    y="2476.3999"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000170273225265697605430000005746261249680600961_">
                  <use
                    xlinkHref="#SVGID_00000156555893474718958440000015750285116022764677_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000170273225265697605430000005746261249680600961_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000018236174383887922280000013561221455718417583_"
                        x="503.4062"
                        y="2476.3987"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000071525826129905391720000012130583178754762137_">
                      <use
                        xlinkHref="#SVGID_00000018236174383887922280000013561221455718417583_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000071525826129905391720000012130583178754762137_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2481.0627)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000091011785010862813360000015549123320659817611_"
                    x="503.4"
                    y="2730.2"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000166666739366032484310000004123405367141769092_">
                  <use
                    xlinkHref="#SVGID_00000091011785010862813360000015549123320659817611_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000166666739366032484310000004123405367141769092_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000142161649513127186910000002792516519668850853_"
                        x="503.4062"
                        y="2730.1387"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000161609129841404949360000009367315208889827727_">
                      <use
                        xlinkHref="#SVGID_00000142161649513127186910000002792516519668850853_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000161609129841404949360000009367315208889827727_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2734.8027)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000131327731606822798410000015085328583403644818_"
                    x="503.4"
                    y="3364.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000032627160693618572970000005794345713857776806_">
                  <use
                    xlinkHref="#SVGID_00000131327731606822798410000015085328583403644818_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000032627160693618572970000005794345713857776806_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000013877282627556840300000012106438003272219283_"
                        x="503.4062"
                        y="3364.4587"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000072993919223492887500000014063618362913267361_">
                      <use
                        xlinkHref="#SVGID_00000013877282627556840300000012106438003272219283_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000072993919223492887500000014063618362913267361_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3369.1228)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000175295105622928679760000014694355619603037087_"
                    x="503.3882"
                    y="3618.1201"
                    transform="matrix(0.9998 -0.0189 0.0189 0.9998 -68.2531 10.2288)"
                    width="9.2998"
                    height="9.2998"
                  />
                </defs>
                <clipPath id="SVGID_00000080908805609296447920000011704281846470601133_">
                  <use
                    xlinkHref="#SVGID_00000175295105622928679760000014694355619603037087_"
                    overflow="visible"
                  />
                </clipPath>

                <g
                  transform="matrix(1 -1.862645e-09 1.862645e-09 1 3.051758e-05 0)"
                  clipPath="url(#SVGID_00000080908805609296447920000011704281846470601133_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000111172778143969476480000013418107551495623068_"
                        x="503.4225"
                        y="3618.2251"
                        transform="matrix(0.9998 -0.0189 0.0189 0.9998 -68.2533 10.229)"
                        width="9.2767"
                        height="9.2767"
                      />
                    </defs>
                    <clipPath id="SVGID_00000059311354271776313620000002873767195735864476_">
                      <use
                        xlinkHref="#SVGID_00000111172778143969476480000013418107551495623068_"
                        overflow="visible"
                      />
                    </clipPath>

                    <g
                      transform="matrix(1 -1.862645e-09 1.862645e-09 1 0 0)"
                      clipPath="url(#SVGID_00000059311354271776313620000002873767195735864476_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.01 0.53 -0.53 0.01 508.0348 3622.8904)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000125560545214875432910000003554114653496231097_"
                    x="503.4"
                    y="3871.8999"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000137121339683507926130000016572929809812535985_">
                  <use
                    xlinkHref="#SVGID_00000125560545214875432910000003554114653496231097_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000137121339683507926130000016572929809812535985_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000020376713951569574840000008123374497536044428_"
                        x="503.4062"
                        y="3871.9287"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000163757732655688194240000006804649908248708003_">
                      <use
                        xlinkHref="#SVGID_00000020376713951569574840000008123374497536044428_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000163757732655688194240000006804649908248708003_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3876.5928)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000136387537167147756190000015240039932807116970_"
                    x="493"
                    y="4199.5"
                    width="30.1"
                    height="30"
                  />
                </defs>
                <clipPath id="SVGID_00000036963160436614223340000000647126665471317153_">
                  <use
                    xlinkHref="#SVGID_00000136387537167147756190000015240039932807116970_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000036963160436614223340000000647126665471317153_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000120542822050369183360000006576106164745200295_"
                        x="492.9855"
                        y="4199.4536"
                        width="30.051"
                        height="30.051"
                      />
                    </defs>
                    <clipPath id="SVGID_00000152951448895958868400000001719436958530321550_">
                      <use
                        xlinkHref="#SVGID_00000120542822050369183360000006576106164745200295_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000152951448895958868400000001719436958530321550_)">
                      <use
                        xlinkHref="#Interchange"
                        width="56.8"
                        height="56.8"
                        x="-28.4"
                        y="-28.4"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.9845 4214.5054)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000055694074368307265220000000700650397759832727_"
                    x="503.4"
                    y="1207.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000003077294134433571590000015036255074213770880_">
                  <use
                    xlinkHref="#SVGID_00000055694074368307265220000000700650397759832727_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000003077294134433571590000015036255074213770880_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000098918294208017388670000001072844218464009111_"
                        x="503.4062"
                        y="1207.7189"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000134251257303742488580000013982291620880112297_">
                      <use
                        xlinkHref="#SVGID_00000098918294208017388670000001072844218464009111_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000134251257303742488580000013982291620880112297_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1212.3828)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000142164639828847928380000005002849885959991193_"
                    x="503"
                    y="442.8"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000127005451073560655100000012932497403776647574_">
                  <use
                    xlinkHref="#SVGID_00000142164639828847928380000005002849885959991193_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000127005451073560655100000012932497403776647574_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000155130150427873815300000000971751976665006249_"
                        x="503.0562"
                        y="442.7788"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000012449305831131976160000006678984620721584800_">
                      <use
                        xlinkHref="#SVGID_00000155130150427873815300000000971751976665006249_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000012449305831131976160000006678984620721584800_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.6672 447.4428)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000161605152773546244200000012274919246095944086_"
                    x="503"
                    y="315.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000109722959876817562390000002090045027153347468_">
                  <use
                    xlinkHref="#SVGID_00000161605152773546244200000012274919246095944086_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000109722959876817562390000002090045027153347468_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000000211383022533434080000011126907539875953338_"
                        x="503.0562"
                        y="315.8488"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000124865347326817860390000010356282184725293997_">
                      <use
                        xlinkHref="#SVGID_00000000211383022533434080000011126907539875953338_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000124865347326817860390000010356282184725293997_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.6672 320.5128)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000174595776579368991840000012399073021946135965_"
                    x="492.6"
                    y="178.6"
                    width="30.1"
                    height="30"
                  />
                </defs>
                <clipPath id="SVGID_00000090981448760494438930000013170270083836687016_">
                  <use
                    xlinkHref="#SVGID_00000174595776579368991840000012399073021946135965_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000090981448760494438930000013170270083836687016_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000082334662571367263340000012168210420753181600_"
                        x="492.6355"
                        y="178.5235"
                        width="30.051"
                        height="30.051"
                      />
                    </defs>
                    <clipPath id="SVGID_00000135670969941443898250000011113599837891117749_">
                      <use
                        xlinkHref="#SVGID_00000082334662571367263340000012168210420753181600_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000135670969941443898250000011113599837891117749_)">
                      <use
                        xlinkHref="#Interchange"
                        width="56.8"
                        height="56.8"
                        x="-28.4"
                        y="-28.4"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.6345 193.5755)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000060011218782270130960000004395017210802642868_"
                    x="503.4"
                    y="827.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000119096609782805600950000006982571341211240078_">
                  <use
                    xlinkHref="#SVGID_00000060011218782270130960000004395017210802642868_"
                    overflow="visible"
                  />
                </clipPath>
                <g
                  transform="matrix(1 0 0 1 0 -6.103516e-05)"
                  clipPath="url(#SVGID_00000119096609782805600950000006982571341211240078_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000084492527065504695090000010011767338866214017_"
                        x="503.4062"
                        y="827.9188"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000039821348514178424470000010520256353434566298_">
                      <use
                        xlinkHref="#SVGID_00000084492527065504695090000010011767338866214017_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 -6.103516e-05)"
                      clipPath="url(#SVGID_00000039821348514178424470000010520256353434566298_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 832.5828)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000134961783206017814120000000167110393682310835_"
                    x="503.4"
                    y="1080.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000062176782938308241230000014575585913001612471_">
                  <use
                    xlinkHref="#SVGID_00000134961783206017814120000000167110393682310835_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000062176782938308241230000014575585913001612471_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000170262051946974122870000001248976519234719419_"
                        x="503.4062"
                        y="1080.9089"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000111193615160634028210000002551443848437333673_">
                      <use
                        xlinkHref="#SVGID_00000170262051946974122870000001248976519234719419_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000111193615160634028210000002551443848437333673_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1085.5729)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000077294621666766768390000016529070886999174327_"
                    x="503.4"
                    y="1461.4"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000132801079081803555080000009946945229223190708_">
                  <use
                    xlinkHref="#SVGID_00000077294621666766768390000016529070886999174327_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000132801079081803555080000009946945229223190708_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000102529953979391455010000018442691868254797496_"
                        x="503.4062"
                        y="1461.4089"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000101783770508317869170000011562675865494536085_">
                      <use
                        xlinkHref="#SVGID_00000102529953979391455010000018442691868254797496_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000101783770508317869170000011562675865494536085_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1466.0729)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000130630097701110982900000017707146007315197611_"
                    x="503.4"
                    y="1715.1"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000035509965814389969900000007634180996258569378_">
                  <use
                    xlinkHref="#SVGID_00000130630097701110982900000017707146007315197611_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000035509965814389969900000007634180996258569378_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000014631479553559431110000000787043116651976629_"
                        x="503.4062"
                        y="1715.1089"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000103258984586624935660000002803106459543884177_">
                      <use
                        xlinkHref="#SVGID_00000014631479553559431110000000787043116651976629_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000103258984586624935660000002803106459543884177_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1719.7728)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000166645393899766418830000009035749732498225326_"
                    x="503.4"
                    y="1968.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000177475820824229455570000010701703087744520593_">
                  <use
                    xlinkHref="#SVGID_00000166645393899766418830000009035749732498225326_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000177475820824229455570000010701703087744520593_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000166638403645434875090000012870021711107119790_"
                        x="503.4062"
                        y="1968.8489"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000178909402765581683760000016274055445075303857_">
                      <use
                        xlinkHref="#SVGID_00000166638403645434875090000012870021711107119790_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000178909402765581683760000016274055445075303857_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1973.5128)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000072997607059645214580000011062426272149076912_"
                    x="503.4"
                    y="2349.6001"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000163036622862139499490000013353234185347816379_">
                  <use
                    xlinkHref="#SVGID_00000072997607059645214580000011062426272149076912_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000163036622862139499490000013353234185347816379_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000099644018429757903860000009325039895013471396_"
                        x="503.4062"
                        y="2349.5588"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000123420685680837439810000018232474524954430854_">
                      <use
                        xlinkHref="#SVGID_00000099644018429757903860000009325039895013471396_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000123420685680837439810000018232474524954430854_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2354.2229)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000112602575861173971600000010115110058191528077_"
                    x="503.4"
                    y="2603.3"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000052793870402440330840000011223066650958389376_">
                  <use
                    xlinkHref="#SVGID_00000112602575861173971600000010115110058191528077_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000052793870402440330840000011223066650958389376_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000039848141604118206100000011426082645975407266_"
                        x="503.4062"
                        y="2603.2588"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000143575836496745984000000017538580860107341703_">
                      <use
                        xlinkHref="#SVGID_00000039848141604118206100000011426082645975407266_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000143575836496745984000000017538580860107341703_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2607.9229)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000098209600078685248270000009406943325903111574_"
                    x="503.4"
                    y="2857"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000003089337045502710520000012863541772553656509_">
                  <use
                    xlinkHref="#SVGID_00000098209600078685248270000009406943325903111574_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000003089337045502710520000012863541772553656509_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000007428792992715813830000016517587685159826055_"
                        x="503.4062"
                        y="2856.9988"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000176006835131402092950000001772185097567791266_">
                      <use
                        xlinkHref="#SVGID_00000007428792992715813830000016517587685159826055_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000176006835131402092950000001772185097567791266_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2861.6628)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000176033175144663997270000010114631562392511369_"
                    x="503.4"
                    y="2983.8999"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000090267214552622196140000006168615227778623394_">
                  <use
                    xlinkHref="#SVGID_00000176033175144663997270000010114631562392511369_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000090267214552622196140000006168615227778623394_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000115504458338406158500000016739943289555375517_"
                        x="503.4062"
                        y="2983.8289"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000183949882187206383270000001176957487131780009_">
                      <use
                        xlinkHref="#SVGID_00000115504458338406158500000016739943289555375517_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000183949882187206383270000001176957487131780009_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2988.4929)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000002371884161751032280000017859756187595400868_"
                    x="503.4"
                    y="3110.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000092447899098089957430000011248481099508991121_">
                  <use
                    xlinkHref="#SVGID_00000002371884161751032280000017859756187595400868_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000092447899098089957430000011248481099508991121_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000066514810274128198250000000932389447915006599_"
                        x="503.4062"
                        y="3110.6787"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000104671246115157063670000016525540901950103693_">
                      <use
                        xlinkHref="#SVGID_00000066514810274128198250000000932389447915006599_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000104671246115157063670000016525540901950103693_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3115.3428)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000092428525164130357680000014525201153294141312_"
                    x="503.4"
                    y="3237.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000125597222561146027530000001847037903688725925_">
                  <use
                    xlinkHref="#SVGID_00000092428525164130357680000014525201153294141312_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000125597222561146027530000001847037903688725925_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000183241719653982388430000013439043367185377921_"
                        x="503.4062"
                        y="3237.6787"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000167378265009418019980000007349921076129972399_">
                      <use
                        xlinkHref="#SVGID_00000183241719653982388430000013439043367185377921_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000167378265009418019980000007349921076129972399_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3242.3428)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000039820883382382614850000007986372151816072079_"
                    x="503.4"
                    y="3491.3999"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000003105458969503958480000012199718469271191966_">
                  <use
                    xlinkHref="#SVGID_00000039820883382382614850000007986372151816072079_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000003105458969503958480000012199718469271191966_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000001639959414535589290000012952114350126548654_"
                        x="503.4062"
                        y="3491.3987"
                        width="9.275"
                        height="9.275"
                      />
                    </defs>
                    <clipPath id="SVGID_00000087408487446023825370000007052101013381780140_">
                      <use
                        xlinkHref="#SVGID_00000001639959414535589290000012952114350126548654_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000087408487446023825370000007052101013381780140_)">
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3496.0627)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000019679991329479065670000006527915365076036229_"
                    x="503.3889"
                    y="3745.0173"
                    transform="matrix(0.9998 -0.0189 0.0189 0.9998 -70.647 10.2514)"
                    width="9.2998"
                    height="9.2998"
                  />
                </defs>
                <clipPath id="SVGID_00000176726162227241809630000015186148479189200061_">
                  <use
                    xlinkHref="#SVGID_00000019679991329479065670000006527915365076036229_"
                    overflow="visible"
                  />
                </clipPath>

                <g
                  transform="matrix(1 -1.862645e-09 1.862645e-09 1 0 0)"
                  clipPath="url(#SVGID_00000176726162227241809630000015186148479189200061_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000145741714756972878540000010548778015265957280_"
                        x="503.4225"
                        y="3745.0852"
                        transform="matrix(0.9998 -0.0189 0.0189 0.9998 -70.6465 10.2516)"
                        width="9.2767"
                        height="9.2767"
                      />
                    </defs>
                    <clipPath id="SVGID_00000119805029751741188620000009433093656668678807_">
                      <use
                        xlinkHref="#SVGID_00000145741714756972878540000010548778015265957280_"
                        overflow="visible"
                      />
                    </clipPath>

                    <g
                      transform="matrix(1 -1.862645e-09 1.862645e-09 1 0 0)"
                      clipPath="url(#SVGID_00000119805029751741188620000009433093656668678807_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.01 0.53 -0.53 0.01 508.0348 3749.7505)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="Wolverhampton">
            <path
              fill="#2D2A26"
              d="M395.3,4259.1001h5.6l-7.8,28.3999h-5.7l-6.5-20.2002l-6.5,20.2002h-5.8l-7.9-28.3999h5.8l5.2,19.5
		l6.3-19.5h5.7l6.3,19.6001L395.3,4259.1001z"
            />
            <path
              fill="#2D2A26"
              d="M422.9,4277.6001c-0.1,5.7002-4.7,10.2998-10.4,10.2002c-5.7-0.1001-10.3-4.7002-10.2-10.3999
		c0.1-5.7002,4.7-10.2002,10.3-10.2002c5.6-0.1001,10.2,4.2998,10.3,9.8999C422.9,4277.2002,422.9,4277.3999,422.9,4277.6001z
		 M417.6,4277.6001c0-3.7002-2.4-5.6001-5-5.6001s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S417.6,4281.2998,417.6,4277.6001z"
            />
            <path fill="#2D2A26" d="M426.6,4287.3999v-29h5.4v29H426.6z" />
            <path
              fill="#2D2A26"
              d="M448.1,4287.3999h-5.3l-8-19.7002h5.8l4.9,13.2002l4.7-13.2002h5.6L448.1,4287.3999z"
            />
            <path
              fill="#2D2A26"
              d="M476.1,4281.7998c-1,3.3999-4.1,6.2002-9,6.2002c-5.4,0-10.2-3.8999-10.2-10.5
		c0-6.2998,4.6-10.3999,9.7-10.3999c6.1,0,9.7,3.8999,9.7,10.2002c0,0.7998-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5
		c2,0.2002,3.9-1.1001,4.5-3L476.1,4281.7998z M471.1,4275.3999c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999
		H471.1z"
            />
            <path
              fill="#2D2A26"
              d="M492.1,4273c-0.5-0.1001-1.1-0.2002-1.6-0.2002c-2.7,0-5.1,1.2998-5.1,5.6001v9h-5.3v-19.7002h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L492.1,4273L492.1,4273z"
            />
            <path
              fill="#2D2A26"
              d="M500.6,4287.3999h-5.3v-29h5.3v10.8999c1.4-1.3999,3.3-2.2002,5.3-2.2002c5,0,7.3,3.5,7.3,7.7998v12.3999
		h-5.3V4276c0-2.2002-1.1-3.8999-3.6-3.8999c-2.2,0-3.6,1.7002-3.7,3.7998V4287.3999z"
            />
            <path
              fill="#2D2A26"
              d="M522.8,4276.1001l4.8-0.7002c1.1-0.2002,1.5-0.7002,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2002-3.6,1.2998-3.8,3.2002l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7002
		c0,1,0.1,2.1001,0.2,3.1001h-4.9c-0.1-0.7998-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.7998-6.8-5.8999
		C517,4278.5,519.5,4276.6001,522.8,4276.1001z M529.2,4279.5v-0.8999l-4.4,0.7002c-1.4,0-2.4,1.1001-2.4,2.5
		c0,1.2998,1.1,2.2998,2.3,2.2998c0.1,0,0.2,0,0.2,0C527.1,4284,529.2,4283,529.2,4279.5L529.2,4279.5z"
            />
            <path
              fill="#2D2A26"
              d="M539.2,4287.3999v-19.7002h5.1v2.3999c1.3-1.8999,3.5-3,5.8-3c2.4-0.2002,4.7,1.1001,5.8,3.2998
		c1.3-2.2002,3.7-3.3999,6.2-3.2998c3.6,0,7.1,2.2002,7.1,7.5v12.7998h-5.2v-11.7002c0-2.1001-1-3.7002-3.5-3.7002
		c-2,0-3.6,1.6001-3.6,3.6001c0,0.1001,0,0.2002,0,0.2998v11.5h-5.3v-11.7002c0-2.1001-1.1-3.7002-3.5-3.7002
		c-2-0.1001-3.6,1.5-3.7,3.5c0,0.1001,0,0.2002,0,0.3999v11.5L539.2,4287.3999z"
            />
            <path
              fill="#2D2A26"
              d="M574.2,4295v-27.2998h5.2v2.3999c0.9-1.5,3.1-2.7998,6-2.7998c5.8,0,9.1,4.3999,9.1,10.2002
		s-3.7,10.3999-9.3,10.3999c-2.2,0.1001-4.3-0.7998-5.7-2.3999v9.5h-5.3V4295z M584.3,4272c-2.7,0-4.9,2-4.9,5.5
		s2.2,5.6001,4.9,5.6001s4.9-2,4.9-5.6001S587.1,4272.1001,584.3,4272L584.3,4272z"
            />
            <path
              fill="#2D2A26"
              d="M604.8,4267.7998h4v4.7002h-4v8.2002c0,1.7002,0.8,2.2998,2.3,2.2998c0.6,0,1.1,0,1.6-0.2002v4.3999
		c-1,0.2998-2,0.5-3,0.5c-3.8,0-6.2-2.2998-6.2-6.1001v-9.2002h-3.6v-4.7002h1c1.6,0.1001,2.9-1.1001,3-2.7002
		c0-0.2002,0-0.2998,0-0.5v-2.7998h4.8L604.8,4267.7998z"
            />
            <path
              fill="#2D2A26"
              d="M631.8,4277.6001c-0.1,5.7002-4.7,10.2998-10.4,10.2002c-5.7-0.1001-10.3-4.7002-10.2-10.3999
		c0.1-5.7002,4.7-10.2002,10.3-10.2002c5.6-0.1001,10.2,4.2998,10.3,9.8999C631.8,4277.2002,631.8,4277.3999,631.8,4277.6001z
		 M626.5,4277.6001c0-3.7002-2.4-5.6001-5-5.6001s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S626.5,4281.2998,626.5,4277.6001z"
            />
            <path
              fill="#2D2A26"
              d="M640.8,4287.3999h-5.3v-19.7002h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.7998v12.3999
		h-5.3V4276c0-2.2002-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.7998-3.7,4.1001L640.8,4287.3999z"
            />
            <path
              fill="#2D2A26"
              d="M414.4,4307.3999c-0.4-2.5-2.7-4.2002-5.2-4c-2.7,0-4.4,1.7002-4.4,3.6001c0,1.6001,1,2.7998,3.1,3.2002
		l4,0.7998c5.2,1,7.9,4.3999,7.9,8.3999c0,4.3999-3.6,8.7998-10.2,8.7998c-7.5,0-10.8-4.7998-11.3-8.8999l5.1-1.3999
		c0.2,2.7998,2.2,5.2998,6.2,5.2998c3,0,4.6-1.5,4.6-3.5c0-1.6001-1.2-2.8999-3.4-3.3999l-4-0.7998
		c-4.5-0.8999-7.4-3.7998-7.4-8.1001c0-5,4.5-8.8999,9.9-8.8999c6.9,0,9.5,4.2002,10.2,7.3999L414.4,4307.3999z"
            />
            <path
              fill="#2D2A26"
              d="M430.1,4307.7998h4v4.7002h-4v8.2002c0,1.7002,0.8,2.2998,2.3,2.2998c0.6,0,1.1,0,1.6-0.2002v4.3999
		c-1,0.2998-2,0.5-3,0.5c-3.8,0-6.2-2.2998-6.2-6.1001v-9.2002h-3.6v-4.7002h1c1.6,0.1001,2.9-1.1001,3-2.7002
		c0-0.2002,0-0.2998,0-0.5v-2.7998h4.8L430.1,4307.7998z"
            />
            <path
              fill="#2D2A26"
              d="M441.3,4320.3999c2,0,3.6,1.6001,3.6,3.6001s-1.6,3.6001-3.6,3.6001S437.7,4326,437.7,4324
		C437.7,4322.1001,439.3,4320.3999,441.3,4320.3999z"
            />
            <path
              fill="#2D2A26"
              d="M480.9,4327.3999l-0.4-3.2002c-1.3,1.8999-4.1,3.7998-8.4,3.7998c-7.6,0-14.2-5.6001-14.2-14.7998
		s6.8-14.7998,14.5-14.7998c7.4,0,11.6,4.3999,13,8.7002L480.1,4309c-1-3.3999-4.2-5.6001-7.7-5.3999c-4.3,0-8.9,2.8999-8.9,9.6001
		c0,6.3999,4.2,9.7002,9,9.7002c5.2,0,7.3-3.5,7.6-5.5h-9v-4.7998h14.2v14.7998L480.9,4327.3999z"
            />
            <path
              fill="#2D2A26"
              d="M507.7,4321.7998c-1,3.3999-4.1,6.2002-9,6.2002c-5.4,0-10.2-3.8999-10.2-10.5
		c0-6.2998,4.6-10.3999,9.7-10.3999c6.1,0,9.7,3.8999,9.7,10.2002c0,0.7998-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5
		c2,0.2002,3.9-1.1001,4.5-3L507.7,4321.7998z M502.7,4315.3999c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999
		H502.7z"
            />
            <path
              fill="#2D2A26"
              d="M530.9,4317.6001c-0.1,5.7002-4.7,10.2998-10.4,10.2002c-5.7-0.1001-10.3-4.7002-10.2-10.3999
		c0.1-5.7002,4.7-10.2002,10.3-10.2002c5.6-0.1001,10.2,4.2998,10.3,9.8999C530.9,4317.2002,530.9,4317.3999,530.9,4317.6001z
		 M525.6,4317.6001c0-3.7002-2.4-5.6001-5-5.6001s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S525.6,4321.2998,525.6,4317.6001z"
            />
            <path
              fill="#2D2A26"
              d="M546.6,4313c-0.5-0.1001-1.1-0.2002-1.6-0.2002c-2.7,0-5.1,1.2998-5.1,5.6001v9h-5.3v-19.7002h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L546.6,4313z"
            />
            <path
              fill="#2D2A26"
              d="M553.2,4327.2002c0.4,2.2002,2.3,3.7998,4.6,3.7002c3.4,0,5.2-1.7002,5.2-5.5v-1.5
		c-0.8,1.2998-2.6,2.5-5.5,2.5c-5.2,0-9.2-4-9.2-9.6001c0-5.2002,3.8-9.6001,9.2-9.6001c3.1,0,4.9,1.3999,5.6,2.7002v-2.2998h5.1
		v17.6001c0,5.3999-2.9,10.2998-10.3,10.2998c-5.4,0-9-3.3999-9.6-7.1001L553.2,4327.2002z M563.1,4317c0.2-2.6001-1.8-4.7998-4.4-5
		c-2.6-0.2002-4.8,1.7998-5,4.3999c0,0.2002,0,0.3999,0,0.6001c0,3.1001,2,5,4.7,5S563.1,4320,563.1,4317L563.1,4317z"
            />
            <path
              fill="#2D2A26"
              d="M590.8,4321.7998c-1,3.3999-4.1,6.2002-9,6.2002c-5.4,0-10.2-3.8999-10.2-10.5
		c0-6.2998,4.6-10.3999,9.7-10.3999c6.1,0,9.7,3.8999,9.7,10.2002c0,0.7998-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5
		c2,0.2002,3.9-1.1001,4.5-3L590.8,4321.7998z M585.8,4315.3999c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999
		H585.8z"
            />
            <path
              fill="#2D2A26"
              d="M596.5,4298.7998c2,0,3.5,1.7002,3.5,3.7002c0,0.1001,0,0.1001,0,0.2002c0,5.3999-3.7,7.2998-6.2,7.6001
		v-2.3999c1.7-0.2998,3.1-1.7002,3.3-3.3999c-0.3,0.1001-0.5,0.2002-0.8,0.2002c-1.5,0.1001-2.8-1-2.9-2.5
		c0-0.1001,0-0.2002,0-0.2998c0-1.7002,1.4-3,3.1-2.8999C596.4,4298.7998,596.5,4298.7998,596.5,4298.7998z"
            />
            <path
              fill="#2D2A26"
              d="M606.6,4321c0.1,1.7998,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.7998-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7002l-4.4,1
		c-0.2-1.6001-1.6-2.7998-3.2-2.6001c-1.4,0-2.5,0.7998-2.5,2c0,1,0.7,1.6001,1.8,1.7998l2.8,0.6001c3.9,0.7998,5.8,3.2002,5.8,6
		c0,3.2002-2.5,6.5-7.6,6.5c-5.9,0-8-3.7998-8.2-6.1001L606.6,4321z"
            />
          </g>
          <g id="The_Royal">
            <path
              fill="#2D2A26"
              d="M571.9,3868.1001v23.1001h-5.6v-23.1001h-9v-5.2h23.5v5.2H571.9z"
            />
            <path
              fill="#2D2A26"
              d="M589.2,3891.2h-5.3v-29h5.3v10.8999c1.4-1.3999,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.3999h-5.3v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.2,0-3.6,1.7-3.7,3.8V3891.2z"
            />
            <path
              fill="#2D2A26"
              d="M624.4,3885.6001c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L624.4,3885.6001z
		 M619.4,3879.1001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H619.4z"
            />
            <path
              fill="#2D2A26"
              d="M646.6,3880.3h-2.9V3891.2h-5.6V3862.8h11.1c5.5,0,9,3.8,9,8.7c0.1,3.7-2.4,7.1001-6,8l6.1,11.6001h-6.2
		L646.6,3880.3z M648.2,3875.5c2.8,0,4.4-1.6001,4.4-3.8999s-1.6-4-4.4-4h-4.5v7.8999H648.2z"
            />
            <path
              fill="#2D2A26"
              d="M681.5,3881.3999c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.3999s4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C681.5,3881,681.5,3881.2,681.5,3881.3999z M676.1,3881.3999c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S676.1,3885.1001,676.1,3881.3999z"
            />
            <path
              fill="#2D2A26"
              d="M686.3,3899l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L692,3899H686.3z"
            />
            <path
              fill="#2D2A26"
              d="M711.8,3879.8999l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999
		C705.9,3882.3,708.5,3880.3999,711.8,3879.8999z M718.1,3883.2V3882.3l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3
		c0.1,0,0.2,0,0.2,0C716,3887.8,718.1,3886.7,718.1,3883.2z"
            />
            <path fill="#2D2A26" d="M728.2,3891.2v-29h5.3v29H728.2z" />
          </g>
          <g id="Priestfield">
            {!isSelectedStation('Priestfield') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M263.9,3712.8999h205.7c5.2,0,9.3,4.2,9.3,9.3v53.8c0,5.2-4.2,9.3-9.3,9.3H263.9c-5.2,0-9.3-4.2-9.3-9.3
		v-53.8C254.6,3717.1001,258.8,3712.8999,263.9,3712.8999z"
                />
                <path
                  fill="#1D1D1C"
                  d="M469.7,3713.8999c4.6,0,8.4,3.7,8.4,8.3999l0,0v53.8c0,4.6001-3.7,8.3999-8.3,8.3999l0,0H263.9
		c-4.6,0-8.4-3.7-8.4-8.3999l0,0v-53.8c0-4.6001,3.7-8.3999,8.3-8.3999l0,0H469.7 M469.7,3711.8999H263.9
		c-5.7,0-10.3,4.6001-10.3,10.3v53.8c0,5.7,4.6,10.3,10.3,10.3h205.8c5.7,0,10.3-4.6001,10.3-10.3v-53.8
		C480,3716.6001,475.3,3712,469.7,3711.8999L469.7,3711.8999z"
                />
              </>
            )}
            <path
              fill="#2D2A26"
              d="M282.5,3752.3999v10.7H277v-28.3h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H282.5z M286.9,3747.6001
		c2.8,0,4.4-1.6001,4.4-4s-1.7-4.1001-4.4-4.1001h-4.4v8.1001H286.9z"
            />
            <path
              fill="#2D2A26"
              d="M312.3,3748.7c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.1v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001v5.3999H312.3z"
            />
            <path
              fill="#2D2A26"
              d="M318.1,3733.6001c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.3999-3.3-3.2
		C314.8,3735.1001,316.3,3733.6001,318.1,3733.6001L318.1,3733.6001z M315.5,3763.1001v-19.7h5.3v19.7H315.5z"
            />
            <path
              fill="#2D2A26"
              d="M343.7,3757.3999c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L343.7,3757.3999z
		 M338.7,3751c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H338.7z"
            />
            <path
              fill="#2D2A26"
              d="M350.5,3756.6001c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.4,0-2.5,0.8-2.5,2c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L350.5,3756.6001z"
            />
            <path
              fill="#2D2A26"
              d="M372.2,3743.3999h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L372.2,3743.3999z"
            />
            <path
              fill="#2D2A26"
              d="M386.4,3747.8999V3763H381v-15.1001h-3.3v-4.6001h3.3v-2.2c0-4.3999,2.8-7.3,7.2-7.3
		c0.9,0,1.8,0.1001,2.6,0.3999v4.5c-0.5-0.1001-1.1-0.2-1.7-0.2c-1.4-0.1001-2.6,0.8999-2.8,2.3c0,0.2,0,0.3,0,0.5v2.2h13.2v19.7
		h-5.3v-15.1001L386.4,3747.8999z M396.9,3733.6001c1.8,0,3.3,1.5,3.3,3.3l0,0c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3
		S395.1,3733.6001,396.9,3733.6001L396.9,3733.6001z"
            />
            <path
              fill="#2D2A26"
              d="M422.5,3757.3999c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L422.5,3757.3999z
		 M417.5,3751c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H417.5z"
            />
            <path fill="#2D2A26" d="M426.5,3763.1001v-29h5.3v29H426.5z" />
            <path
              fill="#2D2A26"
              d="M455.7,3759.5c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V3759.5z M445.7,3758.8
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S442.9,3758.8,445.7,3758.8z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000086678309069689914720000003710991039992874112_"
                    x="443.2"
                    y="3660.7"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000116224407791928811950000018249496239494009522_">
                  <use
                    xlinkHref="#SVGID_00000086678309069689914720000003710991039992874112_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000116224407791928811950000018249496239494009522_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000093887224650260919770000012845510942392247710_"
                        x="443.265"
                        y="3660.6851"
                        width="36.9"
                        height="36.9"
                      />
                    </defs>
                    <clipPath id="SVGID_00000142166527769024223380000013532543614173211048_">
                      <use
                        xlinkHref="#SVGID_00000093887224650260919770000012845510942392247710_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000142166527769024223380000013532543614173211048_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="36.8"
                        height="36.8"
                        x="-18.4"
                        y="-18.4"
                        transform="matrix(1 0 0 1 461.665 3679.085)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="The_Crescent">
            <path fill="#2D2A26" d="M571.9,3611.8v23.1001h-5.6V3611.8h-9v-5.2h23.5v5.2H571.9z" />
            <path
              fill="#2D2A26"
              d="M589.2,3634.8999h-5.3v-29h5.3v10.8999c1.4-1.3999,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.3999h-5.3v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.2,0-3.6,1.7-3.7,3.8V3634.8999z"
            />
            <path
              fill="#2D2A26"
              d="M624.4,3629.3c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L624.4,3629.3z
		 M619.4,3622.8c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H619.4z"
            />
            <path
              fill="#2D2A26"
              d="M636.5,3620.8c-0.3-7.8999,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.3999L658.7,3617
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.3999,8.8,9.3999c3.7,0.2,7-2.2,8-5.8l5.2,1.6001
		c-1.1,4.3999-5.2,9.6001-13.1,9.6001S636.5,3629.8,636.5,3620.8z"
            />
            <path
              fill="#2D2A26"
              d="M679.9,3620.5c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.1v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L679.9,3620.5z"
            />
            <path
              fill="#2D2A26"
              d="M700.7,3629.3c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14.1c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L700.7,3629.3z
		 M695.7,3622.8c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H695.7z"
            />
            <path
              fill="#2D2A26"
              d="M707.5,3628.3999c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.3-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.2-0.1001-2.4,0.7-2.5,2l0,0c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L707.5,3628.3999z"
            />
            <path
              fill="#2D2A26"
              d="M726.5,3625.1001c0,3.6001,2.3,5.6001,5,5.6001c2.1,0.1001,4-1.3,4.5-3.3l4.7,1.6001
		c-1.2,4.1001-5,6.8-9.2,6.6001c-5.6,0.1001-10.3-4.3999-10.4-10c0-0.1001,0-0.3,0-0.3999c-0.2-5.6001,4.1-10.2,9.7-10.3999
		c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6001l-4.8,1.6001c-0.5-2-2.3-3.3999-4.4-3.3C728.7,3619.6001,726.5,3621.5,726.5,3625.1001
		z"
            />
            <path
              fill="#2D2A26"
              d="M761.8,3629.3c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L761.8,3629.3z
		 M756.8,3622.8c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H756.8z"
            />
            <path
              fill="#2D2A26"
              d="M771.1,3634.8999h-5.3v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.3999h-5.3
		v-11.5c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001v11.3999H771.1z"
            />
            <path
              fill="#2D2A26"
              d="M795.2,3615.2h4v4.8h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.5v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L795.2,3615.2z"
            />
          </g>
          <g id="Bilston_Central">
            <path
              fill="#2D2A26"
              d="M203.3,3481.2c5.5,0,8.6,3.2,8.6,7.6001c0.1,2.7-1.6,5.1001-4.1,6.1001c3,0.8,5.1,3.6001,5,6.7
		c0,4.6001-3.4,7.8999-8.8,7.8999h-11v-28.3999L203.3,3481.2z M202.5,3492.8999c2.5,0,4-1.3999,4-3.6001s-1.4-3.5-4.1-3.5h-3.9
		v7.1001H202.5z M203,3504.8999c2.7,0,4.3-1.3999,4.3-3.7s-1.4-3.8-4.2-3.8h-4.6V3505L203,3504.8999z"
            />
            <path
              fill="#2D2A26"
              d="M219.3,3480.1001c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.2
		C216,3481.6001,217.4,3480.1001,219.3,3480.1001L219.3,3480.1001z M216.6,3509.6001v-19.7h5.3v19.7H216.6z"
            />
            <path fill="#2D2A26" d="M227.1,3509.6001v-29h5.3v29H227.1z" />
            <path
              fill="#2D2A26"
              d="M240.5,3503.1001c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.4,0-2.5,0.8-2.5,2c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L240.5,3503.1001z"
            />
            <path
              fill="#2D2A26"
              d="M262.2,3489.8999h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L262.2,3489.8999z"
            />
            <path
              fill="#2D2A26"
              d="M289.2,3499.7c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1001-10.3-4.7-10.2-10.3999c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C289.2,3499.3,289.2,3499.5,289.2,3499.7z M283.9,3499.7c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S283.9,3503.3999,283.9,3499.7z"
            />
            <path
              fill="#2D2A26"
              d="M298.3,3509.6001H293v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8V3509.5h-5.3
		V3498c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L298.3,3509.6001z"
            />
            <path
              fill="#2D2A26"
              d="M323.9,3495.3999c-0.3-7.8999,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.3999l-5.2,1.6001
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.3999,8.8,9.3999c3.7,0.2,7-2.2,8-5.8l5.2,1.6001
		c-1.1,4.3999-5.2,9.6001-13.1,9.6001S323.9,3504.3999,323.9,3495.3999z"
            />
            <path
              fill="#2D2A26"
              d="M372.9,3503.8999c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L372.9,3503.8999z
		 M367.9,3497.5c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H367.9z"
            />
            <path
              fill="#2D2A26"
              d="M382.3,3509.6001H377v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8V3509.5h-5.3
		V3498c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L382.3,3509.6001z"
            />
            <path
              fill="#2D2A26"
              d="M406.4,3489.8999h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L406.4,3489.8999z"
            />
            <path
              fill="#2D2A26"
              d="M426.3,3495.1001c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L426.3,3495.1001L426.3,3495.1001z"
            />
            <path
              fill="#2D2A26"
              d="M434.1,3498.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001H441
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C428.2,3500.7,430.8,3498.7,434.1,3498.2z
		 M440.4,3501.6001v-0.8999l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0
		C438.3,3506.1001,440.4,3505.1001,440.4,3501.6001z"
            />
            <path fill="#2D2A26" d="M450.5,3509.6001v-29h5.3v29H450.5z" />
          </g>
          <g id="Loxdale">
            <path fill="#2D2A26" d="M560,3382.6001v-28.3999h5.5v23.1001h12.6v5.3H560V3382.6001z" />
            <path
              fill="#2D2A26"
              d="M600.7,3372.8c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.3999s4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C600.7,3372.3999,600.7,3372.6001,600.7,3372.8z M595.3,3372.8c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S595.3,3376.5,595.3,3372.8z"
            />
            <path
              fill="#2D2A26"
              d="M609,3372.8l-7-9.8h6.3c0.7,1.1001,3.2,4.8,3.9,5.8l3.9-5.8h6l-6.9,9.6001l7.1,10h-6.2l-4.1-6
		c-0.7,1.1001-3.4,5-4,6h-6L609,3372.8z"
            />
            <path
              fill="#2D2A26"
              d="M644,3379.1001c0,1.3,0.1,2.8,0.2,3.6001H639c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.3V3379.1001z M634,3378.3999
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S631.2,3378.3999,634,3378.3999z"
            />
            <path
              fill="#2D2A26"
              d="M653.9,3371.3l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C648,3373.8,650.6,3371.8,653.9,3371.3z
		 M660.2,3374.7V3373.8l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0
		C658.2,3379.2,660.2,3378.1001,660.2,3374.7L660.2,3374.7z"
            />
            <path fill="#2D2A26" d="M670.3,3382.6001v-29h5.3v29H670.3z" />
            <path
              fill="#2D2A26"
              d="M698.5,3377c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L698.5,3377z
		 M693.5,3370.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H693.5z"
            />
          </g>
          <g id="Bradley_Lane">
            <path
              fill="#2D2A26"
              d="M236.4,3224.8c5.5,0,8.6,3.2,8.6,7.6001c0.1,2.7-1.6,5.1001-4.1,6.1001c3,0.8,5.1,3.6001,5,6.7
		c0,4.6001-3.4,7.8999-8.8,7.8999h-11v-28.3999h10.3V3224.8z M235.6,3236.5c2.5,0,4-1.3999,4-3.6001s-1.4-3.5-4.1-3.5h-3.9v7.1001
		H235.6z M236.1,3248.5c2.7,0,4.3-1.3999,4.3-3.7s-1.4-3.8-4.2-3.8h-4.6v7.5H236.1z"
            />
            <path
              fill="#2D2A26"
              d="M261.7,3238.8c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001V3238.8z"
            />
            <path
              fill="#2D2A26"
              d="M269.6,3241.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.6001c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C263.7,3244.3,266.3,3242.3,269.6,3241.8z
		 M275.9,3245.2V3244.3l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0
		C273.8,3249.8,275.9,3248.7,275.9,3245.2L275.9,3245.2z"
            />
            <path
              fill="#2D2A26"
              d="M304.7,3249.6001c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V3249.6001z M294.7,3248.8999
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S291.9,3248.8999,294.7,3248.8999L294.7,3248.8999z"
            />
            <path fill="#2D2A26" d="M310,3253.2v-29h5.3v29H310z" />
            <path
              fill="#2D2A26"
              d="M338.2,3247.5c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L338.2,3247.5z
		 M333.2,3241.1001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H333.2z"
            />
            <path
              fill="#2D2A26"
              d="M343.3,3260.8999l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.3999H343.3z"
            />
            <path fill="#2D2A26" d="M373.9,3253.2V3224.8h5.5v23.1001H392v5.3L373.9,3253.2z" />
            <path
              fill="#2D2A26"
              d="M400.1,3241.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.6001c0,1,0.1,2.1001,0.2,3.1001H407
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C394.2,3244.3,396.8,3242.3,400.1,3241.8z
		 M406.4,3245.2V3244.3l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0
		C404.3,3249.8,406.4,3248.7,406.4,3245.2L406.4,3245.2z"
            />
            <path
              fill="#2D2A26"
              d="M421.8,3253.2h-5.3v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.3999h-5.3
		v-11.5c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L421.8,3253.2z"
            />
            <path
              fill="#2D2A26"
              d="M457,3247.5c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L457,3247.5z
		 M452,3241.1001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H452z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000021081663581187557870000014606794404673400483_"
                    x="419.8"
                    y="3161.1001"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000163756030696294171210000009483781595672972931_">
                  <use
                    xlinkHref="#SVGID_00000021081663581187557870000014606794404673400483_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000163756030696294171210000009483781595672972931_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000071546359596902222530000008271272172536001716_"
                        x="419.835"
                        y="3161.1252"
                        width="36.9"
                        height="36.9"
                      />
                    </defs>
                    <clipPath id="SVGID_00000094604557584480319650000009511147272343375022_">
                      <use
                        xlinkHref="#SVGID_00000071546359596902222530000008271272172536001716_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000094604557584480319650000009511147272343375022_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="36.8"
                        height="36.8"
                        x="-18.4"
                        y="-18.4"
                        transform="matrix(1 0 0 1 438.235 3179.5251)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="Wednesbury_Parkway">
            <path
              fill="#2D2A26"
              d="M591.7,3080.3h5.6l-7.8,28.3999h-5.7l-6.5-20.2l-6.5,20.2H565l-7.9-28.3999h5.8l5.2,19.5l6.3-19.5h5.7
		l6.3,19.6001L591.7,3080.3z"
            />
            <path
              fill="#2D2A26"
              d="M617.8,3103c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L617.8,3103z
		 M612.8,3096.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H612.8z"
            />
            <path
              fill="#2D2A26"
              d="M640.6,3105.1001c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2L640.6,3105.1001z M630.6,3104.3
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S627.8,3104.3,630.6,3104.3z"
            />
            <path
              fill="#2D2A26"
              d="M651.2,3108.6001h-5.3v-19.7h5.1v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8V3108.5h-5.3
		V3097c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001V3108.6001z"
            />
            <path
              fill="#2D2A26"
              d="M686.4,3103c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L686.4,3103z
		 M681.4,3096.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H681.4z"
            />
            <path
              fill="#2D2A26"
              d="M693.3,3102.1001c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.4,0-2.5,0.8-2.5,2c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L693.3,3102.1001z"
            />
            <path
              fill="#2D2A26"
              d="M708.3,3108.6001v-29h5.2V3091c0.9-1.3999,3-2.7,6-2.7c5.8,0,9.1,4.3999,9.1,10.3S724.9,3109,719.3,3109
		c-2.3,0.1001-4.5-1-5.8-2.8999v2.3999L708.3,3108.6001z M718.4,3093.2c-2.7,0-4.9,2-4.9,5.6001s2.2,5.6001,4.9,5.6001
		s4.9-2,4.9-5.6001S721.2,3093.2,718.4,3093.2L718.4,3093.2z"
            />
            <path
              fill="#2D2A26"
              d="M745.1,3106.5c-1.2,1.8-3.3,2.8-5.4,2.6001c-4.8,0-7.5-3.5-7.5-7.8v-12.3999h5.3V3100.3
		c0,2.2,1.1,3.8999,3.6,3.8999c2,0.1001,3.6-1.3999,3.7-3.3c0-0.2,0-0.3999,0-0.5V3089h5.3v16.1001c0,1.2,0.1,2.3999,0.2,3.6001
		h-5.1C745.1,3107.8999,745.1,3107.2,745.1,3106.5z"
            />
            <path
              fill="#2D2A26"
              d="M767.3,3094.2c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3V3089h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L767.3,3094.2z"
            />
            <path
              fill="#2D2A26"
              d="M771.6,3116.3999l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.3,27.3999H771.6z"
            />
            <path
              fill="#2D2A26"
              d="M565.5,3137.8999v10.7H560V3120.2h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8h-5.1V3137.8999z
		 M569.9,3133.2c2.8,0,4.4-1.6001,4.4-4s-1.7-4.1001-4.4-4.1001h-4.4v8.1001H569.9z"
            />
            <path
              fill="#2D2A26"
              d="M588,3137.3l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001c-1.9-0.2-3.6,1.3-3.8,3.2
		l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9c-0.1-0.8-0.2-1.6001-0.2-2.3999
		c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C582.2,3139.7,584.8,3137.8,588,3137.3z M594.3,3140.7V3139.8l-4.4,0.7
		c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.1,0,0.2,0C592.3,3145.2,594.3,3144.1001,594.3,3140.7L594.3,3140.7z"
            />
            <path
              fill="#2D2A26"
              d="M616.4,3134.2c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3V3129h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L616.4,3134.2z"
            />
            <path
              fill="#2D2A26"
              d="M630.8,3137.2l8,11.3999h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3V3136.2l6.8-7.3h7L630.8,3137.2z"
            />
            <path
              fill="#2D2A26"
              d="M658.2,3128.8999l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.3999l-4.5,13.3999h-5.4l-6.3-19.7h5.6
		l3.6,12.6001l4.3-12.6001H658.2z"
            />
            <path
              fill="#2D2A26"
              d="M678.9,3137.3l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C673,3139.7,675.6,3137.8,678.9,3137.3z
		 M685.2,3140.7V3139.8l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.1,0,0.2,0
		C683.2,3145.2,685.2,3144.1001,685.2,3140.7L685.2,3140.7z"
            />
            <path
              fill="#2D2A26"
              d="M696.5,3156.3999l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.3,27.3999H696.5z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000122719155654834374470000016255197665905594024_"
                    x="559.4"
                    y="3016.7"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000036212777862994776110000008094756131658521503_">
                  <use
                    xlinkHref="#SVGID_00000122719155654834374470000016255197665905594024_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000036212777862994776110000008094756131658521503_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000159446889608860103310000005078614411124494743_"
                        x="559.425"
                        y="3016.7251"
                        width="36.9"
                        height="36.9"
                      />
                    </defs>
                    <clipPath id="SVGID_00000052068889079859164270000000251544702557966988_">
                      <use
                        xlinkHref="#SVGID_00000159446889608860103310000005078614411124494743_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000052068889079859164270000000251544702557966988_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="36.8"
                        height="36.8"
                        x="-18.4"
                        y="-18.4"
                        transform="matrix(1 0 0 1 577.825 3035.125)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="Wednesbury">
            <path
              fill="#2D2A26"
              d="M260.3,2954.3h5.6l-7.8,28.3999h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.3999h5.8l5.2,19.5l6.3-19.5h5.7
		l6.3,19.6001L260.3,2954.3z"
            />
            <path
              fill="#2D2A26"
              d="M286.4,2977.1001c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L286.4,2977.1001z
		 M281.4,2970.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H281.4z"
            />
            <path
              fill="#2D2A26"
              d="M309.1,2979.1001c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V2979.1001z M299.1,2978.3999
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S296.3,2978.3999,299.1,2978.3999z"
            />
            <path
              fill="#2D2A26"
              d="M319.7,2982.7h-5.3V2963h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.3999h-5.3v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L319.7,2982.7z"
            />
            <path
              fill="#2D2A26"
              d="M354.9,2977.1001c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L354.9,2977.1001z
		 M349.9,2970.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H349.9z"
            />
            <path
              fill="#2D2A26"
              d="M361.8,2976.2c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.4,0-2.5,0.8-2.5,1.8999c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L361.8,2976.2z"
            />
            <path
              fill="#2D2A26"
              d="M376.9,2982.7v-29h5.2v11.3999c0.9-1.3999,3-2.7,6-2.7c5.8,0,9.1,4.3999,9.1,10.3s-3.7,10.3999-9.3,10.3999
		c-2.3,0.1001-4.5-1-5.8-2.8999v2.3999L376.9,2982.7z M387,2967.2c-2.7,0-4.9,2-4.9,5.6001s2.2,5.6001,4.9,5.6001s4.9-2,4.9-5.6001
		S389.7,2967.2,387,2967.2z"
            />
            <path
              fill="#2D2A26"
              d="M413.6,2980.6001c-1.2,1.8-3.3,2.8-5.4,2.6001c-4.8,0-7.5-3.5-7.5-7.8V2963h5.3v11.3999c0,2.2,1.1,4,3.6,4
		c2,0.1001,3.6-1.3999,3.7-3.3999c0-0.2,0-0.3,0-0.5V2963h5.3v16.1001c0,1.2,0.1,2.3999,0.2,3.6001h-5.1
		C413.7,2982,413.6,2981.3,413.6,2980.6001z"
            />
            <path
              fill="#2D2A26"
              d="M435.9,2968.3c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3V2963h5.1v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L435.9,2968.3z"
            />
            <path
              fill="#2D2A26"
              d="M440.2,2990.3999l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.3999H440.2z"
            />
            <path
              fill="#2D2A26"
              d="M206.4,3015.7l-0.3-2.8c-1.4,2.1001-3.8,3.3999-6.4,3.2c-5,0-9.6-3.6001-9.6-10.3999s4.9-10.3,9.8-10.3
		c4.3,0,7.6,2.3999,8.8,6l-2.5,1.1001c-0.8-2.8-3.4-4.7-6.3-4.5c-3.6,0-7,2.6001-7,7.8s3.4,7.8999,6.9,7.8999
		c4.4,0,6-3.1001,6.1-5.2H199v-2.3999h9.5v9.7L206.4,3015.7z"
            />
            <path
              fill="#2D2A26"
              d="M220.1,3004.8999c-0.4-0.1001-0.8-0.1001-1.1-0.1001c-2.2,0-3.7,1.2-3.7,4.1001v6.8h-2.6v-13.5h2.6v2.3999
		c0.7-1.6001,2.3-2.6001,4-2.6001c0.3,0,0.6,0,0.9,0.1001L220.1,3004.8999z"
            />
            <path
              fill="#2D2A26"
              d="M234.6,3011.8999c-0.8,2.6001-3.3,4.3-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3.1-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L234.6,3011.8999z M231.9,3007.6001c0-1.8999-1.4-3.3999-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V3007.6001z"
            />
            <path
              fill="#2D2A26"
              d="M241.3,3008l3.6-0.5c0.8-0.1001,1-0.5,1-1c0-1.3-0.9-2.3999-2.9-2.3999c-1.6-0.1001-2.9,1.1001-3,2.7l0,0
		l-2.5-0.6001c0.3-2.6001,2.6-4.3999,5.5-4.3999c4,0,5.6,2.3,5.6,4.8999v6.8c0,0.7,0.1,1.5,0.2,2.2h-2.6
		c-0.1-0.6001-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.5-4.5-3.8999v-0.1001C237.2,3009.7,239,3008.3,241.3,3008z
		 M246,3009.8999v-0.6001l-4.1,0.6001c-1.1,0-2,0.8999-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0
		C244.2,3013.8999,246,3012.8999,246,3009.8999L246,3009.8999z"
            />
            <path
              fill="#2D2A26"
              d="M256.2,3002.2h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8999,1.9,1.8999c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999H251v-2.3999h0.7c1,0.1001,2-0.6001,2.1-1.7
		c0-0.1001,0-0.3,0-0.3999v-2.1001h2.4V3002.2z"
            />
            <path
              fill="#2D2A26"
              d="M292.3,2995.8h2.8l-5.6,19.8999h-2.8l-5.2-16.1001l-5.1,16.1001h-2.8l-5.7-19.8999h2.8l4.4,15.5l5-15.5h2.9
		l5.1,15.7L292.3,2995.8z"
            />
            <path
              fill="#2D2A26"
              d="M309.5,3011.8999c-0.8,2.6001-3.3,4.3-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L309.5,3011.8999z M306.8,3007.6001c0-1.8999-1.4-3.3999-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V3007.6001z"
            />
            <path
              fill="#2D2A26"
              d="M314,3011.3999c0.2,1.6001,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.8999-3.4-3.8c0.2-2.5,2.3-4.3999,4.8-4.3c3.7,0,4.8,2.3999,5.1,3.6001l-2.3,0.8999c-0.2-1.3999-1.4-2.3999-2.8-2.2
		c-1.1-0.1001-2.1,0.6001-2.2,1.7c0,0,0,0,0,0.1001c0,0.8,0.5,1.3999,1.5,1.6001l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.3999-5.5-3.8999L314,3011.3999z"
            />
            <path
              fill="#2D2A26"
              d="M329.1,3002.2h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8999,1.9,1.8999c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.1001-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999h-2.5v-2.3999h0.7
		c1,0.1001,2-0.6001,2.1-1.7c0-0.1001,0-0.3,0-0.3999v-2.1001h2.4L329.1,3002.2z"
            />
            <path
              fill="#2D2A26"
              d="M347.3,3011.8999c-0.8,2.6001-3.3,4.3999-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001-0.1,0.8h-10.1c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L347.3,3011.8999z M344.6,3007.6001c0-1.8999-1.5-3.3999-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V3007.6001z"
            />
            <path
              fill="#2D2A26"
              d="M358.2,3004.8999c-0.4-0.1001-0.8-0.1001-1.1-0.1001c-2.2,0-3.7,1.2-3.7,4.1001v6.8h-2.6v-13.5h2.6v2.3999
		c0.7-1.6001,2.3-2.6001,4-2.6001c0.3,0,0.6,0,0.9,0.1001L358.2,3004.8999z"
            />
            <path
              fill="#2D2A26"
              d="M363.6,3015.7H361v-13.5h2.6v1.8999c0.8-1.5,2.4-2.3999,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1001
		c0-1.8999-0.8-3.3999-3.1-3.3999c-2.1,0-3.1,1.6001-3.1,3.7L363.6,3015.7z"
            />
            <path
              fill="#2D2A26"
              d="M394.2,3001.2c-0.3-2-2.1-3.5-4.2-3.3999c-2.2,0-3.8,1.3999-3.8,3.3c0,1.5,1.1,2.7,2.5,2.8999l3,0.6001
		c3.3,0.7,5.2,2.8,5.2,5.6001c0,3.1001-2.6,5.8999-6.9,5.8999c-4.8,0-7.1-3.1001-7.4-5.8999l2.6-0.8c0.1,2.5,2.2,4.3999,4.7,4.3l0,0
		c2.7,0,4.1-1.3999,4.1-3.2c0-1.3999-1-2.7-3-3.1001l-2.8-0.6001c-2.8-0.6001-4.8-2.5-4.8-5.3999s2.9-5.8999,6.5-5.8999
		c4.5,0,6.3,2.8,6.7,4.8999L394.2,3001.2z"
            />
            <path
              fill="#2D2A26"
              d="M403.8,3002.2h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8999,1.9,1.8999c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.1001-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999h-2.6v-2.3999h0.7
		c1,0.1001,2-0.6001,2.1-1.7c0-0.1001,0-0.3,0-0.3999v-2.1001h2.4L403.8,3002.2z"
            />
            <path
              fill="#2D2A26"
              d="M417.7,3004.8999c-0.4-0.1001-0.8-0.1001-1.1-0.1001c-2.2,0-3.7,1.2-3.7,4.1001v6.8h-2.6v-13.5h2.6v2.3999
		c0.7-1.6001,2.3-2.6001,4-2.6001c0.3,0,0.6,0,0.9,0.1001L417.7,3004.8999z"
            />
            <path
              fill="#2D2A26"
              d="M432.3,3011.8999c-0.8,2.6001-3.3,4.3-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L432.3,3011.8999z M429.6,3007.6001c0-1.8999-1.4-3.3999-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V3007.6001z"
            />
            <path
              fill="#2D2A26"
              d="M447.4,3011.8999c-0.8,2.6001-3.3,4.3999-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001,0,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L447.4,3011.8999z M444.8,3007.6001c0-1.8999-1.5-3.3999-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V3007.6001z"
            />
            <path
              fill="#2D2A26"
              d="M454.4,3002.2h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8999,1.9,1.8999c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999h-2.5v-2.3999h0.7c1,0.1001,2-0.6001,2.1-1.7
		c0-0.1001,0-0.3,0-0.3999v-2.1001h2.4L454.4,3002.2z"
            />
          </g>
          <g id="Black_Lake">
            {!isSelectedStation('Black Lake') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M547.2,2825.6001h215.9c5.4,0,9.8,4.3999,9.8,9.8v52.8c0,5.3999-4.4,9.8-9.8,9.8H547.2
		c-5.4,0-9.8-4.3999-9.8-9.8v-52.8C537.4,2830,541.8,2825.6001,547.2,2825.6001z"
                />
                <path
                  fill="#1D1D1C"
                  d="M763.1,2826.8c4.7,0,8.6,3.8,8.6,8.6001l0,0v52.8c0,4.7-3.8,8.6001-8.6,8.6001l0,0H547.2
		c-4.7,0-8.6-3.8-8.6-8.6001l0,0v-52.8c0-4.7,3.8-8.6001,8.6-8.6001l0,0H763.1 M763.1,2824.3H547.2c-6.1,0-11.1,5-11.1,11.1001v52.8
		c0,6.1001,5,11.1001,11.1,11.1001h215.9c6.1,0,11.1-5,11.1-11.1001v-52.8C774.2,2829.3,769.2,2824.3,763.1,2824.3z"
                />
              </>
            )}
            <path
              fill="#2D2A26"
              d="M570.2,2847c5.5,0,8.6,3.2,8.6,7.6001c0.1,2.7-1.6,5.1001-4.1,6.1001c3,0.8,5.1,3.6001,5,6.7
		c0,4.6001-3.4,7.8999-8.8,7.8999h-11V2847H570.2z M569.3,2858.7c2.5,0,4-1.3999,4-3.6001s-1.4-3.5-4.1-3.5h-3.9v7.1001H569.3z
		 M569.9,2870.7c2.7,0,4.3-1.3999,4.3-3.7s-1.4-3.8-4.2-3.8h-4.6v7.5H569.9z"
            />
            <path fill="#2D2A26" d="M583.5,2875.3999v-29h5.3v29H583.5z" />
            <path
              fill="#2D2A26"
              d="M598.7,2864.1001l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999
		C592.8,2866.5,595.4,2864.6001,598.7,2864.1001z M605,2867.3999V2866.5l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3
		c0.1,0,0.2,0,0.2,0C603,2872,605,2870.8999,605,2867.3999L605,2867.3999z"
            />
            <path
              fill="#2D2A26"
              d="M619,2865.6001c0,3.6001,2.3,5.6001,5,5.6001c2.1,0.1001,4-1.3,4.5-3.3l4.7,1.6001
		c-1.2,4.1001-5,6.8-9.2,6.6001c-5.6,0.1001-10.3-4.3999-10.4-10c0-0.1001,0-0.3,0-0.3999c-0.2-5.6001,4.1-10.2,9.7-10.3999
		c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6001l-4.8,1.6001c-0.5-2-2.3-3.3999-4.4-3.3C621.2,2860,619,2862,619,2865.6001z"
            />
            <path
              fill="#2D2A26"
              d="M647.8,2864l8,11.3999h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3V2863l6.8-7.3h7L647.8,2864z"
            />
            <path fill="#2D2A26" d="M668.3,2875.3999V2847h5.5v23.1001h12.6v5.3L668.3,2875.3999z" />
            <path
              fill="#2D2A26"
              d="M694.5,2864.1001l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999
		C688.6,2866.5,691.2,2864.6001,694.5,2864.1001z M700.8,2867.3999V2866.5l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C698.7,2872,700.8,2870.8999,700.8,2867.3999L700.8,2867.3999z"
            />
            <path
              fill="#2D2A26"
              d="M722.1,2864l8,11.3999h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3V2863l6.8-7.3h7L722.1,2864z"
            />
            <path
              fill="#2D2A26"
              d="M750.4,2869.8c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L750.4,2869.8z
		 M745.4,2863.3c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H745.4z"
            />
          </g>

          <g id="Dudley_Street">
            <path
              fill="#2D2A26"
              d="M211.5,2730.3999V2702h10.1c8.1,0,14,5.2,14,14.2s-6,14.1001-14,14.1001L211.5,2730.3999z M221.4,2725.3
		c4.6,0,8.5-2.8999,8.5-9s-3.8-9.1001-8.5-9.1001H217V2725.3H221.4z"
            />
            <path
              fill="#2D2A26"
              d="M252.3,2728.3c-1.2,1.8-3.3,2.8-5.4,2.6001c-4.8,0-7.5-3.5-7.5-7.8v-12.3999h5.3v11.3999
		c0,2.2,1.1,3.8999,3.6,3.8999c2,0.1001,3.6-1.3999,3.7-3.3c0-0.2,0-0.3999,0-0.5V2710.8h5.3v16.1001c0,1.2,0.1,2.3999,0.2,3.6001
		h-5.1C252.3,2729.7,252.3,2729,252.3,2728.3z"
            />
            <path
              fill="#2D2A26"
              d="M281.3,2726.8c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V2726.8z M271.3,2726.1001
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S268.5,2726.1001,271.3,2726.1001L271.3,2726.1001z"
            />
            <path fill="#2D2A26" d="M286.5,2730.3999v-29h5.3v29H286.5z" />
            <path
              fill="#2D2A26"
              d="M314.7,2724.8c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L314.7,2724.8z
		 M309.7,2718.3c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H309.7z"
            />
            <path
              fill="#2D2A26"
              d="M319.9,2738.2l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L325.4,2738.2H319.9z"
            />
            <path
              fill="#2D2A26"
              d="M364.5,2710.3c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6001c0,1.6001,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.3999,7.9,8.3999c0,4.3999-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.8999l5.1-1.3999c0.2,2.8,2.2,5.3,6.2,5.3
		c3,0,4.6-1.5,4.6-3.5c0-1.6001-1.2-2.8999-3.4-3.3999l-4-0.8c-4.5-0.8999-7.4-3.8-7.4-8.1001c0-5,4.5-8.8999,9.9-8.8999
		c6.9,0,9.5,4.2,10.2,7.3999L364.5,2710.3z"
            />
            <path
              fill="#2D2A26"
              d="M380.3,2710.7h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.1001v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L380.3,2710.7z"
            />
            <path
              fill="#2D2A26"
              d="M400.1,2716c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L400.1,2716L400.1,2716z"
            />
            <path
              fill="#2D2A26"
              d="M420.9,2724.8c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L420.9,2724.8z
		 M415.9,2718.3c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H415.9z"
            />
            <path
              fill="#2D2A26"
              d="M442.6,2724.8c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L442.6,2724.8z
		 M437.6,2718.3c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H437.6z"
            />
            <path
              fill="#2D2A26"
              d="M453.1,2710.7h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.1001v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L453.1,2710.7z"
            />
            <path
              fill="#2D2A26"
              d="M317.8,2763.3999l-0.3-2.8c-1.4,2.1001-3.8,3.3999-6.4,3.2c-5,0-9.6-3.6001-9.6-10.3999s4.9-10.3,9.8-10.3
		c4.3,0,7.6,2.3999,8.8,6l-2.5,1.1001c-0.8-2.8-3.4-4.7-6.3-4.5c-3.5,0-7,2.6001-7,7.8s3.4,7.8999,6.9,7.8999
		c4.4,0,6-3.1001,6.1-5.2h-6.9v-2.5h9.5v9.7H317.8z"
            />
            <path
              fill="#2D2A26"
              d="M328.9,2763.8c-3.1,0-5-2.3999-5-5.3999v-8.5h2.6v8.1001c0,1.8999,0.8,3.5,3,3.5s3.2-1.3999,3.2-3.3999
		v-8.1001h2.6v11c0,0.8,0.1,1.7,0.1,2.5H333c-0.1-0.5-0.1-1.1001-0.1-1.6001C332,2763.1001,330.5,2763.8999,328.9,2763.8z"
            />
            <path
              fill="#2D2A26"
              d="M342.4,2763.3999h-2.6v-13.5h2.6v1.8999c0.8-1.5,2.4-2.3999,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6
		v-8.1001c0-1.8999-0.8-3.3999-3.1-3.3999c-2.1,0-3.1,1.7-3.1,3.7L342.4,2763.3999z"
            />
            <path
              fill="#2D2A26"
              d="M356.7,2759.1001c0.2,1.6001,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.8999-3.4-3.8c0.2-2.5,2.3-4.3999,4.8-4.2c3.7,0,4.8,2.3999,5.1,3.6001l-2.3,0.8999c-0.2-1.3999-1.4-2.3999-2.8-2.2
		c-1.1-0.1001-2.1,0.6001-2.2,1.7c0,0,0,0,0,0.1001c0,0.8,0.5,1.3999,1.5,1.6001l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.3999-5.5-3.8999L356.7,2759.1001z"
            />
            <path
              fill="#2D2A26"
              d="M388.2,2743.6001h2.9l-7.6,19.8999h-2.7l-7.5-19.8999h2.9l6,16.3L388.2,2743.6001z"
            />
            <path
              fill="#2D2A26"
              d="M394.9,2742.8999c1,0,1.9,0.8,1.9,1.8999c0,1-0.8,1.8999-1.9,1.8999c-1,0-1.9-0.8-1.9-1.8999l0,0
		C393,2743.8,393.8,2742.8999,394.9,2742.8999z M393.6,2763.3999v-13.5h2.6v13.5H393.6z"
            />
            <path fill="#2D2A26" d="M400.7,2763.3999v-20.3h2.6v20.3H400.7z" />
            <path fill="#2D2A26" d="M407.8,2763.3999v-20.3h2.6v20.3H407.8z" />
            <path
              fill="#2D2A26"
              d="M418.1,2755.7l3.6-0.5c0.8-0.1001,1-0.5,1-1c0-1.3-0.9-2.3999-2.9-2.3999c-1.6-0.1001-2.9,1.1001-3,2.6001
		c0,0,0,0,0,0.1001l-2.5-0.6001c0.3-2.6001,2.6-4.3999,5.5-4.3999c4,0,5.6,2.3,5.6,4.8999v6.8c0,0.7,0,1.5,0.2,2.2H423
		c-0.1-0.6001-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.5-4.5-3.8999V2759.8
		C414.1,2757.3999,415.8,2756,418.1,2755.7z M422.8,2757.6001V2757l-4.1,0.6001c-1.1,0-2,0.8999-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0
		C421.1,2761.6001,422.8,2760.6001,422.8,2757.6001z"
            />
            <path
              fill="#2D2A26"
              d="M431.1,2763.5c0.1,1.8999,1.8,3.3999,3.7,3.3c2.8,0,4.1-1.5,4.1-4.3999v-1.8999
		c-0.9,1.3999-2.4,2.3-4.1,2.2c-3.6,0-6.2-2.7-6.2-6.5c0-3.6001,2.5-6.6001,6.2-6.6001c2.1,0,3.5,0.8,4.1,2.1001v-1.8999h2.6v12.5
		c0,3.3999-1.7,6.7-6.8,6.7c-3.4,0-5.9-2.1001-6.2-5L431.1,2763.5z M439,2756.2c0-2.6001-1.6-4.3-3.8-4.3s-3.9,1.7-3.9,4.3
		s1.5,4.3,3.9,4.3S439,2758.8,439,2756.2L439,2756.2z"
            />
            <path
              fill="#2D2A26"
              d="M457.5,2759.6001c-0.8,2.6001-3.3,4.3-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001,0,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L457.5,2759.6001z M454.8,2755.3c0-1.8999-1.5-3.3999-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V2755.3z"
            />
          </g>
          <g id="Dartmouth_Street">
            <path
              fill="#2D2A26"
              d="M560,2622.3V2594h10.2c8.1,0,14,5.2,14,14.2s-6,14.1001-14,14.1001H560z M569.9,2617.2
		c4.6,0,8.5-2.8999,8.5-9s-3.8-9.1001-8.5-9.1001h-4.4V2617.2H569.9z"
            />
            <path
              fill="#2D2A26"
              d="M592.8,2611l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001c-1.9-0.2-3.6,1.3-3.8,3.2
		l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9c-0.1-0.8-0.2-1.6001-0.2-2.3999
		c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C586.9,2613.3999,589.5,2611.5,592.8,2611z M599.1,2614.3999V2613.5
		l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C597,2618.8999,599.1,2617.8999,599.1,2614.3999
		L599.1,2614.3999z"
            />
            <path
              fill="#2D2A26"
              d="M621.2,2607.8999c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L621.2,2607.8999z"
            />
            <path
              fill="#2D2A26"
              d="M630.9,2602.6001h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2V2622c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2H622v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L630.9,2602.6001z"
            />
            <path
              fill="#2D2A26"
              d="M638.8,2622.3v-19.7h5.1V2605c1.3-1.8999,3.5-3.1001,5.8-3c2.4-0.2,4.7,1.1001,5.8,3.3
		c1.3-2.2,3.7-3.3999,6.2-3.3c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2v-11.7c0-2.1001-1-3.7-3.5-3.7c-2,0-3.6,1.6001-3.6,3.6001
		c0,0.1001,0,0.2,0,0.3v11.5h-5.3v-11.7c0-2.1001-1.1-3.7-3.5-3.7c-2-0.1001-3.6,1.5-3.7,3.5c0,0.1001,0,0.2,0,0.3999v11.5
		L638.8,2622.3z"
            />
            <path
              fill="#2D2A26"
              d="M692.9,2612.5c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.3999s4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C692.9,2612.1001,692.9,2612.3,692.9,2612.5z M687.5,2612.5c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S687.5,2616.2,687.5,2612.5z"
            />
            <path
              fill="#2D2A26"
              d="M709.3,2620.2c-1.2,1.8-3.3,2.8-5.4,2.6001c-4.8,0-7.5-3.5-7.5-7.8v-12.3999h5.3V2614c0,2.2,1.1,4,3.6,4
		c2,0.1001,3.6-1.3999,3.7-3.3999c0-0.2,0-0.3,0-0.5v-11.3999h5.3v16.1001c0,1.2,0.1,2.3999,0.2,3.6001h-5.1
		C709.3,2621.6001,709.3,2620.8999,709.3,2620.2z"
            />
            <path
              fill="#2D2A26"
              d="M726.1,2602.6001h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2V2622c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L726.1,2602.6001z"
            />
            <path
              fill="#2D2A26"
              d="M739.3,2622.3H734v-29h5.3V2604.2c1.4-1.3999,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8V2622.2h-5.3v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.2,0-3.6,1.7-3.7,3.8V2622.3z"
            />
            <path
              fill="#2D2A26"
              d="M780.8,2602.2c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6001c0,1.6001,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.3999,7.9,8.3999c0,4.3999-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.8999l5.1-1.3999c0.2,2.8,2.2,5.3,6.2,5.3
		c3,0,4.6-1.5,4.6-3.5c0-1.6001-1.2-2.8999-3.4-3.3999l-4-0.8c-4.5-0.8999-7.4-3.8-7.4-8.1001c0-5,4.5-8.8999,9.9-8.8999
		c6.9,0,9.5,4.2,10.2,7.3999L780.8,2602.2z"
            />
            <path
              fill="#2D2A26"
              d="M796.5,2602.6001h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2V2622c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.5v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L796.5,2602.6001z"
            />
            <path
              fill="#2D2A26"
              d="M816.4,2607.8999c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L816.4,2607.8999z"
            />
            <path
              fill="#2D2A26"
              d="M837.2,2616.7c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L837.2,2616.7z
		 M832.2,2610.2c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H832.2z"
            />
            <path
              fill="#2D2A26"
              d="M858.8,2616.7c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L858.8,2616.7z
		 M853.8,2610.2c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H853.8z"
            />
            <path
              fill="#2D2A26"
              d="M869.4,2602.6001h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2V2622c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L869.4,2602.6001z"
            />
          </g>
          <g id="Lodge_Road">
            <path fill="#2D2A26" d="M245.6,2480.3V2452h5.5v23.1001h12.6v5.3L245.6,2480.3z" />
            <path
              fill="#2D2A26"
              d="M286.3,2470.5c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1001-10.3-4.7-10.2-10.3999c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C286.3,2470.1001,286.3,2470.3,286.3,2470.5z M281,2470.5c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S281,2474.2,281,2470.5L281,2470.5z"
            />
            <path
              fill="#2D2A26"
              d="M308.8,2476.8c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V2476.8z M298.8,2476.1001
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S296,2476.1001,298.8,2476.1001z"
            />
            <path
              fill="#2D2A26"
              d="M317.5,2480.1001c0.4,2.2,2.3,3.8,4.6,3.7c3.4,0,5.2-1.7,5.2-5.5v-1.3999c-0.8,1.3-2.6,2.5-5.5,2.5
		c-5.2,0-9.2-4-9.2-9.6001c0-5.2,3.8-9.6001,9.2-9.6001c3.1,0,4.9,1.3999,5.6,2.7v-2.3h5.1V2478.2c0,5.3999-2.9,10.3-10.3,10.3
		c-5.4,0-9-3.3999-9.6-7.1001L317.5,2480.1001z M327.4,2469.8999c0.2-2.6001-1.8-4.8-4.4-5s-4.8,1.8-5,4.3999
		c0,0.2,0,0.3999,0,0.6001c0,3.1001,2,5,4.7,5S327.4,2472.8999,327.4,2469.8999z"
            />
            <path
              fill="#2D2A26"
              d="M355.1,2474.7c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L355.1,2474.7z
		 M350.1,2468.3c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H350.1z"
            />
            <path
              fill="#2D2A26"
              d="M377.3,2469.3999h-2.9v10.8999h-5.6V2452H380c5.5,0,9,3.8,9,8.7c0.1,3.7-2.4,7.1001-6,8l6.1,11.6001h-6.2
		L377.3,2469.3999z M378.9,2464.7c2.8,0,4.4-1.6001,4.4-3.8999s-1.6-4-4.4-4h-4.5v7.8999H378.9z"
            />
            <path
              fill="#2D2A26"
              d="M412.2,2470.5c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1001-10.3-4.7-10.2-10.3999c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C412.2,2470.1001,412.2,2470.3,412.2,2470.5z M406.9,2470.5c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S406.9,2474.2,406.9,2470.5z"
            />
            <path
              fill="#2D2A26"
              d="M420.6,2469l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001c-1.9-0.2-3.6,1.3-3.8,3.2
		l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9c-0.1-0.8-0.2-1.6001-0.2-2.3999
		c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C414.7,2471.5,417.3,2469.5,420.6,2469z M426.9,2472.3999V2471.5l-4.4,0.7
		c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C424.8,2476.8999,426.9,2475.8999,426.9,2472.3999
		L426.9,2472.3999z"
            />
            <path
              fill="#2D2A26"
              d="M455.7,2476.8c0,1.3,0.1,2.8,0.2,3.6001h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.8999-5.5,2.8
		c-5.6,0-9.6-4.3999-9.6-10.3999c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.3999,5.6,2.3999v-11.2h5.2V2476.8z M445.7,2476.1001
		c2.7,0,4.8-2.1001,4.8-5.6001s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S442.9,2476.1001,445.7,2476.1001z"
            />
            <path
              fill="#2D2A26"
              d="M149.6,2493.5h2.8l-5.6,19.8999H144l-5.2-16.1001l-5.1,16.1001H131l-5.7-19.8999h2.9l4.4,15.5l5-15.5h2.9
		l5.1,15.7L149.6,2493.5z"
            />
            <path
              fill="#2D2A26"
              d="M166.8,2509.5c-0.8,2.6001-3.3,4.3-6,4.2c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3.1-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1001c0.1,0,0.1,0,0.2,0c1.7,0.1001,3.3-1,3.8-2.7
		L166.8,2509.5z M164.1,2505.2c0-1.8999-1.4-3.3999-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V2505.2z"
            />
            <path
              fill="#2D2A26"
              d="M171.4,2509c0.2,1.6001,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.8999-3.4-3.8c0.2-2.5,2.3-4.3999,4.8-4.2c3.7,0,4.8,2.3999,5.1,3.6001L177,2504c-0.2-1.3999-1.4-2.3-2.8-2.2
		c-1.1-0.1001-2.1,0.6001-2.2,1.7c0,0,0,0,0,0.1001c0,0.8,0.5,1.3999,1.5,1.6001l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.3999-5.5-3.8999L171.4,2509z"
            />
            <path
              fill="#2D2A26"
              d="M186.4,2499.8999h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999h-2.6v-2.3999h0.7c1,0.1001,2-0.7,2.1-1.7
		c0-0.1001,0-0.3,0-0.3999v-2.2h2.4L186.4,2499.8999z"
            />
            <path
              fill="#2D2A26"
              d="M206.6,2493.5c3.8,0,6,2.2,6,5.3999c0,1.8999-1.2,3.7-3,4.3c2.2,0.6001,3.7,2.6001,3.6,4.8
		c0,3.1001-2.5,5.3999-6.1,5.3999h-6.9V2493.5H206.6z M206.3,2502.2c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1001-3.6-3.1001h-3.3v6.3H206.3z
		 M206.7,2510.8999c2.2,0,3.7-1.2,3.7-3.2s-1.2-3.2-3.6-3.2h-3.9v6.3999H206.7z"
            />
            <path
              fill="#2D2A26"
              d="M224.2,2502.5c-0.4-0.1001-0.8-0.1001-1.1-0.1001c-2.2,0-3.7,1.2-3.7,4.1001v6.7h-2.6v-13.5h2.6v2.3999
		c0.7-1.6001,2.3-2.6001,4-2.6001c0.3,0,0.6,0,0.9,0.1001L224.2,2502.5z"
            />
            <path
              fill="#2D2A26"
              d="M239.6,2506.6001c-0.1,3.8-3.3,6.8-7.1,6.6001c-3.8-0.1001-6.8-3.3-6.6-7.1001
		c0.1-3.7,3.2-6.6001,6.9-6.6001c3.8-0.1001,6.8,2.8999,6.9,6.7C239.6,2506.3,239.6,2506.3999,239.6,2506.6001z M236.9,2506.6001
		c0-3.1001-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8S236.9,2509.7,236.9,2506.6001z"
            />
            <path
              fill="#2D2A26"
              d="M243,2513.3v-13.5h2.5v1.8c0.9-1.3999,2.4-2.2,4.1-2.2c1.7-0.1001,3.3,1,4,2.6001
		c0.9-1.7,2.6-2.6001,4.5-2.6001c2.4,0,4.6,1.6001,4.6,5.1001v8.7h-2.6v-8.3999c0-1.8-0.9-3.1001-2.9-3.1001
		c-1.7,0-3.1,1.3999-3.1,3.2c0,0.1001,0,0.2,0,0.2v8.1001h-2.6v-8.3999c0-1.7-0.8-3.1001-2.9-3.1001c-1.7,0-3.1,1.3999-3.2,3.1001
		c0,0.1001,0,0.2,0,0.3v8.1001L243,2513.3z"
            />
            <path
              fill="#2D2A26"
              d="M277.3,2499.8999L280.8,2510l3-10.1001h2.8l-4.4,13.5h-2.7l-3.6-10.2l-3.5,10.2h-2.8l-4.4-13.5h2.8
		L271,2510l3.5-10.1001H277.3z"
            />
            <path
              fill="#2D2A26"
              d="M290.5,2492.8999c1,0,1.9,0.8,1.9,1.8999c0,1-0.8,1.8999-1.9,1.8999c-1,0-1.9-0.8-1.9-1.8999l0,0
		C288.6,2493.7,289.4,2492.8999,290.5,2492.8999z M289.2,2513.3v-13.5h2.6v13.5H289.2z"
            />
            <path
              fill="#2D2A26"
              d="M297.8,2506.6001c0,3.1001,1.9,4.7,4.1,4.7c1.8,0.1001,3.3-1.1001,3.8-2.8l2.3,1
		c-0.9,2.6001-3.3,4.3-6.1,4.2c-3.8,0-6.8-3.1001-6.8-6.8c0-0.1001,0-0.2,0-0.3c0-4.2,2.9-7.1001,6.8-7.1001
		c2.8-0.2,5.3,1.6001,6,4.3l-2.4,1c-0.3-1.7-1.9-2.8999-3.6-2.8999C299.8,2501.8999,297.8,2503.3999,297.8,2506.6001z"
            />
            <path
              fill="#2D2A26"
              d="M313.7,2513.3h-2.6V2493h2.6v8.3999c0.9-1.3,2.5-2.1001,4.1-2c3.2,0,4.8,2.3,4.8,5.3v8.5H320v-8.1001
		c0-1.8999-0.8-3.3999-3.1-3.3999c-2,0-3.1,1.6001-3.1,3.6001L313.7,2513.3z"
            />
            <path fill="#2D2A26" d="M341.3,2496v17.3h-2.7V2496H332v-2.6001h16V2496H341.3z" />
            <path
              fill="#2D2A26"
              d="M363.1,2506.6001c-0.1,3.8-3.3,6.8-7.1,6.6001c-3.8-0.1001-6.8-3.3-6.6-7.1001
		c0.1-3.7,3.2-6.6001,6.9-6.6001c3.7-0.1001,6.8,2.8999,6.9,6.7C363.1,2506.3,363.1,2506.3999,363.1,2506.6001z M360.4,2506.6001
		c0-3.1001-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8S360.4,2509.7,360.4,2506.6001z"
            />
            <path
              fill="#2D2A26"
              d="M376.7,2499.8999L380.2,2510l3-10.1001h2.8l-4.4,13.5h-2.7l-3.6-10.2l-3.5,10.2H369l-4.4-13.5h2.9
		l3,10.1001l3.5-10.1001H376.7z"
            />
            <path
              fill="#2D2A26"
              d="M391.3,2513.3h-2.6v-13.5h2.6v1.8999c0.8-1.5,2.4-2.3999,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1001
		c0-1.8999-0.8-3.3999-3.1-3.3999c-2.1,0-3.1,1.7-3.1,3.7L391.3,2513.3z"
            />
            <path
              fill="#2D2A26"
              d="M424.5,2513.3v-8.8h-10.1v8.8h-2.8v-19.8999h2.8v8.5h10.1v-8.5h2.8V2513.3H424.5z"
            />
            <path
              fill="#2D2A26"
              d="M435.3,2505.6001l3.6-0.5c0.8-0.1001,1-0.5,1-1c0-1.3-0.9-2.3999-2.9-2.3999
		c-1.6-0.1001-2.9,1.1001-3.1,2.6001c0,0,0,0,0,0.1001l-2.5-0.6001c0.3-2.6001,2.6-4.3999,5.5-4.3999c4,0,5.6,2.3,5.6,4.8999v6.8
		c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6001-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.6001-4.5-3.8999v-0.1001
		C431.2,2507.3,433,2506,435.3,2505.6001z M440,2507.6001V2507l-4.1,0.6001c-1.1,0-2,0.8999-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0
		C438.2,2511.5,440,2510.5,440,2507.6001L440,2507.6001z"
            />
            <path fill="#2D2A26" d="M446.7,2513.3V2493h2.6v20.3H446.7z" />
            <path fill="#2D2A26" d="M453.8,2513.3V2493h2.6v20.3H453.8z" />
          </g>
          <g id="West_Bromwich">
            <path
              fill="#2D2A26"
              d="M591.7,2325.3h5.6l-7.8,28.3999h-5.7l-6.5-20.2l-6.5,20.2H565l-7.9-28.3999h5.8l5.2,19.5l6.3-19.5h5.7
		l6.3,19.6001L591.7,2325.3z"
            />
            <path
              fill="#2D2A26"
              d="M617.8,2348.1001c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L617.8,2348.1001z
		 M612.8,2341.6001c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H612.8z"
            />
            <path
              fill="#2D2A26"
              d="M624.7,2347.2c0.1,1.8,1.7,3.1001,3.5,3h0.1c1.8,0,2.6-0.8999,2.6-2c0-0.8999-0.6-1.6001-2.1-1.8999
		l-2.6-0.6001c-3.8-0.8-5.5-3.1001-5.5-5.8999c0-3.5,3.1-6.3999,7.4-6.3999c5.6,0,7.5,3.6001,7.7,5.7l-4.4,1
		c-0.2-1.6001-1.6-2.8-3.2-2.6001c-1.4,0-2.5,0.8-2.5,2c0,1,0.7,1.6001,1.8,1.8l2.8,0.6001c3.9,0.8,5.8,3.2,5.8,6
		c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1001L624.7,2347.2z"
            />
            <path
              fill="#2D2A26"
              d="M646.3,2334h4v4.7h-4v8.3c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.8h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L646.3,2334z"
            />
            <path
              fill="#2D2A26"
              d="M674.2,2325.3c5.5,0,8.6,3.2,8.6,7.6001c0.1,2.7-1.6,5.1001-4.1,6.1001c3,0.8,5.1,3.6001,5,6.7
		c0,4.6001-3.4,7.8999-8.8,7.8999h-11v-28.3999L674.2,2325.3z M673.4,2337.1001c2.5,0,4-1.3999,4-3.6001s-1.4-3.5-4-3.5h-3.9v7.1001
		H673.4z M673.9,2349.1001c2.7,0,4.3-1.3999,4.3-3.7s-1.5-3.8-4.2-3.8h-4.6v7.5H673.9z"
            />
            <path
              fill="#2D2A26"
              d="M699.5,2339.3c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3V2334h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L699.5,2339.3L699.5,2339.3z"
            />
            <path
              fill="#2D2A26"
              d="M721.9,2343.8999c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.3999s4.7-10.2,10.3-10.2
		c5.6-0.1001,10.2,4.3,10.3,9.8999C721.9,2343.5,721.9,2343.7,721.9,2343.8999z M716.5,2343.8999c0-3.7-2.4-5.6001-5-5.6001
		s-5,1.8999-5,5.6001s2.4,5.6001,5,5.6001S716.5,2347.6001,716.5,2343.8999z"
            />
            <path
              fill="#2D2A26"
              d="M725.6,2353.7V2334h5.1v2.3999c1.3-1.8999,3.4-3.1001,5.8-3c2.4-0.2,4.7,1.1001,5.8,3.3
		c1.3-2.2,3.7-3.3999,6.2-3.3c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2V2342c0-2.1001-1-3.7-3.5-3.7c-2,0-3.6,1.6001-3.6,3.6001
		c0,0.1001,0,0.2,0,0.3v11.5h-5.3V2342c0-2.1001-1.1-3.7-3.5-3.7c-2,0-3.6,1.5-3.7,3.5c0,0.1001,0,0.2,0,0.3999v11.5H725.6z"
            />
            <path
              fill="#2D2A26"
              d="M777.3,2334l4.2,12.7l3.6-12.7h5.3l-6.2,19.7H779l-4.6-13.3999l-4.5,13.3999h-5.4l-6.3-19.7h5.6
		l3.6,12.6001L771.7,2334H777.3z"
            />
            <path
              fill="#2D2A26"
              d="M795.9,2324.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.3999-3.3-3.2
		C792.6,2325.8,794.1,2324.3,795.9,2324.2L795.9,2324.2z M793.3,2353.7V2334h5.3v19.7H793.3z"
            />
            <path
              fill="#2D2A26"
              d="M807.7,2343.8999c0,3.6001,2.3,5.6001,5,5.6001c2.1,0.1001,4-1.3,4.5-3.3l4.7,1.6001
		c-1.2,4.1001-5,6.8-9.2,6.6001c-5.6,0.1001-10.3-4.3999-10.4-10c0-0.1001,0-0.3,0-0.3999c-0.2-5.6001,4.1-10.2,9.7-10.3999
		c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6001l-4.8,1.6001c-0.5-2-2.3-3.3999-4.4-3.3C809.9,2338.3,807.7,2340.3,807.7,2343.8999z"
            />
            <path
              fill="#2D2A26"
              d="M830.7,2353.7h-5.3v-29h5.3v10.8999c1.4-1.3999,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.3999H838v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.2,0-3.6,1.7-3.7,3.8V2353.7z"
            />
            <path
              fill="#2D2A26"
              d="M558,2376.8c0-6.6001,4.9-10.3,9.8-10.3c4.5,0,7.7,2.5,8.7,6.3L574,2373.7c-0.6-2.8999-3.2-4.8999-6.2-4.7
		c-3.6,0-7,2.6001-7,7.8s3.4,7.8,7,7.8c3,0.1001,5.6-1.8999,6.3-4.8l2.4,0.8999c-1.1,3.8999-4.7,6.6001-8.8,6.3999
		C562.7,2387.1001,558,2383.3999,558,2376.8z"
            />
            <path
              fill="#2D2A26"
              d="M591.7,2382.8999c-0.8,2.6001-3.3,4.3999-6,4.3c-3.6,0-6.8-2.6001-6.8-7.2c0-4.2,3-7.1001,6.4-7.1001
		c4.1,0,6.5,2.8999,6.5,7.1001c0,0.3,0,0.6001,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1001h0.1c1.7,0.1001,3.3-1,3.8-2.7L591.7,2382.8999z
		 M589.1,2378.6001c0-1.8999-1.5-3.3999-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.3999h7.4V2378.6001z"
            />
            <path
              fill="#2D2A26"
              d="M597.8,2386.7h-2.6v-13.5h2.6v1.8999c0.8-1.5,2.4-2.3999,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1001
		c0-1.8999-0.8-3.3999-3.1-3.3999c-2.1,0-3.1,1.6001-3.1,3.7v7.9001H597.8z"
            />
            <path
              fill="#2D2A26"
              d="M614.4,2373.2h2.9v2.3999h-2.9v7c0,1.2,0.5,1.8999,1.9,1.8999c0.3,0,0.7,0,1-0.1001v2.2
		c-0.6,0.2-1.2,0.3-1.8,0.2c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.3999,0-0.6001v-7.3999h-2.6v-2.3999h0.8c1,0.1001,2-0.7,2.1-1.7
		c0-0.1001,0-0.3,0-0.3999v-2.1001h2.4L614.4,2373.2z"
            />
            <path
              fill="#2D2A26"
              d="M628.3,2375.8999c-0.4-0.1001-0.8-0.1001-1.2-0.1001c-2.2,0-3.7,1.2-3.7,4.1001v6.8h-2.6v-13.5h2.6v2.3999
		c0.7-1.6001,2.3-2.6001,4-2.6001c0.3,0,0.6,0,0.9,0.1001V2375.8999z"
            />
            <path
              fill="#2D2A26"
              d="M634.4,2379l3.6-0.5c0.8-0.1001,1-0.5,1-1c0-1.3-0.9-2.3999-2.9-2.3999c-1.6-0.1001-2.9,1.1001-3,2.7l0,0
		l-2.5-0.6001c0.3-2.6001,2.6-4.3999,5.5-4.3999c4,0,5.6,2.3,5.6,4.8999v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6001-0.1-1.2-0.1-1.8
		c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.6001-4.5-3.8999v-0.1001C630.3,2380.7,632,2379.3,634.4,2379z M639,2380.8999v-0.6001
		l-4.1,0.6001c-1.1,0-2,0.8999-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0C637.3,2384.8999,639,2383.8999,639,2380.8999L639,2380.8999z"
            />
            <path fill="#2D2A26" d="M645.8,2386.7v-20.3h2.6v20.3H645.8z" />
          </g>
          <g id="Trinity_Way">
            <path fill="#2D2A26" d="M260.5,2215.8999V2239H255v-23.1001h-9v-5.2h23.5v5.2H260.5z" />
            <path
              fill="#2D2A26"
              d="M284.5,2224.6001c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L284.5,2224.6001L284.5,2224.6001z"
            />
            <path
              fill="#2D2A26"
              d="M290.3,2209.6001c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.3999-3.3-3.2
		C287,2211.1001,288.4,2209.6001,290.3,2209.6001L290.3,2209.6001z M287.7,2239v-19.7h5.3v19.7H287.7z"
            />
            <path
              fill="#2D2A26"
              d="M303.5,2239h-5.3v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.3999h-5.3v-11.5
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L303.5,2239z"
            />
            <path
              fill="#2D2A26"
              d="M323.7,2209.6001c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.3999-3.3-3.2
		C320.4,2211.1001,321.8,2209.6001,323.7,2209.6001L323.7,2209.6001z M321.1,2239v-19.7h5.3v19.7H321.1z"
            />
            <path
              fill="#2D2A26"
              d="M338.1,2219.3999h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.3999c-1,0.3999-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1001v-9.2h-3.6v-4.7h1c1.6,0.1001,2.9-1.1001,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L338.1,2219.3999z"
            />
            <path
              fill="#2D2A26"
              d="M347.2,2246.8l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L352.7,2246.8H347.2z"
            />
            <path
              fill="#2D2A26"
              d="M409.5,2210.7h5.6l-7.8,28.3h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.3h5.8l5.2,19.5l6.3-19.5h5.7
		l6.3,19.6001L409.5,2210.7z"
            />
            <path
              fill="#2D2A26"
              d="M422.6,2227.7l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999
		C416.7,2230.1001,419.3,2228.2,422.6,2227.7z M428.9,2231.1001v-0.8999l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3
		c0.1,0,0.2,0,0.2,0C426.9,2235.6001,428.9,2234.6001,428.9,2231.1001z"
            />
            <path
              fill="#2D2A26"
              d="M440.2,2246.8l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L445.7,2246.8H440.2z"
            />
          </g>
          <g id="Kenrick_Park">
            <path
              fill="#2D2A26"
              d="M569,2100.8l-3.5,3.8999v7.8999H560V2084.2h5.5v12.8l11.4-12.8h7.2l-11.2,12.3999l11.3,16h-6.9L569,2100.8z
		"
            />
            <path
              fill="#2D2A26"
              d="M604.7,2106.8999c-1,3.3999-4.1,6.2-9,6.2c-5.4,0-10.2-3.8999-10.2-10.5c0-6.3,4.6-10.3999,9.7-10.3999
		c6.1,0,9.7,3.8999,9.7,10.2c0,0.8-0.1,1.6001-0.1,1.6001h-14c0.2,2.6001,2.4,4.6001,5,4.5c2,0.2,3.9-1.1001,4.5-3L604.7,2106.8999z
		 M599.7,2100.5c-0.1-2-1.4-3.8999-4.4-3.8999c-2.3-0.1001-4.2,1.6001-4.4,3.8999H599.7z"
            />
            <path
              fill="#2D2A26"
              d="M614,2112.5h-5.3v-19.7h5.2v2.3999c1.2-1.8999,3.4-3.1001,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.3999h-5.3V2101
		c0-2.2-1.1-3.8999-3.6-3.8999c-2.3,0-3.7,1.8-3.7,4.1001L614,2112.5z"
            />
            <path
              fill="#2D2A26"
              d="M643.5,2098.1001c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.2v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L643.5,2098.1001z"
            />
            <path
              fill="#2D2A26"
              d="M649.3,2083.1001c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.3999-3.3-3.2
		C646,2084.6001,647.5,2083.1001,649.3,2083.1001L649.3,2083.1001z M646.7,2112.5v-19.7h5.3v19.7H646.7z"
            />
            <path
              fill="#2D2A26"
              d="M661.1,2102.7c0,3.6001,2.3,5.6001,5,5.6001c2.1,0.1001,4-1.3,4.5-3.3l4.7,1.6001
		c-1.1,4.1001-5,6.8-9.2,6.6001c-5.6,0.1001-10.3-4.3999-10.4-10c0-0.1001,0-0.3,0-0.3999c-0.2-5.6001,4.1-10.2,9.7-10.3999
		c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6001l-4.8,1.6001c-0.5-2-2.3-3.3999-4.4-3.3C663.3,2097.2,661.1,2099.1001,661.1,2102.7z"
            />
            <path
              fill="#2D2A26"
              d="M690,2101.1001l8,11.3999h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3v16.6001l6.8-7.3h7L690,2101.1001z"
            />
            <path
              fill="#2D2A26"
              d="M716,2101.8999v10.7h-5.5V2084.2H721c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8h-5V2101.8999z
		 M720.4,2097.1001c2.8,0,4.4-1.6001,4.4-4S723.1,2089,720.4,2089H716v8.1001H720.4z"
            />
            <path
              fill="#2D2A26"
              d="M738.5,2101.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.3999c0-1.3999-1.1-2.6001-3.3-2.6001
		c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1c0.3-3.1001,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1001,0.2,3.1001h-4.9
		c-0.1-0.8-0.2-1.6001-0.2-2.3999c-1.3,1.8999-3.5,3-5.8,2.8999c-4.2,0-6.8-2.8-6.8-5.8999C732.6,2103.7,735.2,2101.7,738.5,2101.2z
		 M744.8,2104.6001v-0.8999l-4.4,0.7c-1.4,0-2.4,1.1001-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0
		C742.7,2109.1001,744.8,2108.1001,744.8,2104.6001L744.8,2104.6001z"
            />
            <path
              fill="#2D2A26"
              d="M766.9,2098.1001c-0.5-0.1001-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6001v9h-5.3v-19.7h5.1v2.8999
		c1.2-2.6001,3.9-3.1001,5.6-3.1001c0.4,0,0.8,0,1.2,0.1001L766.9,2098.1001z"
            />
            <path
              fill="#2D2A26"
              d="M781.2,2101.1001l8,11.3999h-6.5l-5.2-7.5l-2.2,2.3v5.2H770v-29h5.3v16.6001l6.8-7.3h7L781.2,2101.1001z"
            />
          </g>
          <g id="The_Hawthorns">
            <path fill="#2D2A26" d="M195.7,1961.3v23.1h-5.6v-23.1h-9v-5.2h23.5v5.2H195.7z" />
            <path
              fill="#2D2A26"
              d="M212.9,1984.4h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V1984.4z"
            />
            <path
              fill="#2D2A26"
              d="M248.1,1978.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.1-3.9-10.1-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L248.1,1978.8z M243.1,1972.3
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H243.1z"
            />
            <path
              fill="#2D2A26"
              d="M279.8,1984.4v-11.8h-12.4v11.8h-5.5V1956h5.5v11.4h12.4V1956h5.6v28.4H279.8z"
            />
            <path
              fill="#2D2A26"
              d="M295.7,1973.1l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C289.8,1975.5,292.4,1973.6,295.7,1973.1z M302,1976.4v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C299.9,1981,302,1979.9,302,1976.4L302,1976.4z"
            />
            <path
              fill="#2D2A26"
              d="M328.8,1964.7l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4H316l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H328.8z"
            />
            <path
              fill="#2D2A26"
              d="M351.4,1964.7h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L351.4,1964.7z"
            />
            <path
              fill="#2D2A26"
              d="M364.6,1984.4h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L364.6,1984.4L364.6,1984.4z"
            />
            <path
              fill="#2D2A26"
              d="M401.3,1974.6c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C401.3,1974.2,401.3,1974.4,401.3,1974.6z M396,1974.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S396,1978.3,396,1974.6L396,1974.6z"
            />
            <path
              fill="#2D2A26"
              d="M417,1970c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H405v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L417,1970L417,1970z"
            />
            <path
              fill="#2D2A26"
              d="M425.5,1984.4h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L425.5,1984.4z"
            />
            <path
              fill="#2D2A26"
              d="M445.9,1977.9c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L445.9,1977.9z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000088823658378865556980000018345426093780146571_"
                    x="421.2"
                    y="1892.4"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000010302939014482764730000013058518546460521910_">
                  <use
                    xlinkHref="#SVGID_00000088823658378865556980000018345426093780146571_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000010302939014482764730000013058518546460521910_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000098916857775323764570000003759118467822472607_"
                        x="421.235"
                        y="1892.415"
                        width="36.9"
                        height="36.9"
                      />
                    </defs>
                    <clipPath id="SVGID_00000090988466916722402210000009672404020859844258_">
                      <use
                        xlinkHref="#SVGID_00000098916857775323764570000003759118467822472607_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000090988466916722402210000009672404020859844258_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="36.8"
                        height="36.8"
                        x="-18.4"
                        y="-18.4"
                        transform="matrix(1 0 0 1 439.635 1910.8151)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="Handsworth">
            <path
              fill="#2D2A26"
              d="M577.9,1844.2v-11.8h-12.4v11.8H560v-28.4h5.5v11.4h12.4v-11.4h5.5v28.4H577.9z"
            />
            <path
              fill="#2D2A26"
              d="M593.7,1832.9l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C587.8,1835.3,590.4,1833.3,593.7,1832.9z M600,1836.2v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C598,1840.8,600,1839.7,600,1836.2L600,1836.2z"
            />
            <path
              fill="#2D2A26"
              d="M615.4,1844.2h-5.3v-19.7h5.2v2.5c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L615.4,1844.2z"
            />
            <path
              fill="#2D2A26"
              d="M651.7,1840.6c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.3c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2L651.7,1840.6z M641.7,1839.9
		c2.7,0,4.8-2.1,4.8-5.6s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S639,1839.9,641.7,1839.9L641.7,1839.9z"
            />
            <path
              fill="#2D2A26"
              d="M659.9,1837.7c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L659.9,1837.7z"
            />
            <path
              fill="#2D2A26"
              d="M691.7,1824.5l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H691.7z"
            />
            <path
              fill="#2D2A26"
              d="M726.9,1834.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C726.9,1834,726.9,1834.2,726.9,1834.3z M721.6,1834.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S721.6,1838.1,721.6,1834.3z"
            />
            <path
              fill="#2D2A26"
              d="M742.6,1829.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L742.6,1829.8L742.6,1829.8z"
            />
            <path
              fill="#2D2A26"
              d="M752.3,1824.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.5,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L752.3,1824.5z"
            />
            <path
              fill="#2D2A26"
              d="M765.5,1844.2h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.5,1.7-3.7,3.8V1844.2z"
            />
            <path
              fill="#2D2A26"
              d="M565.7,1857.3c3.8,0,6,2.2,6,5.4c0.1,1.9-1.2,3.7-3,4.3c2.2,0.6,3.7,2.6,3.6,4.8c0,3.1-2.5,5.4-6.1,5.4
		h-6.9v-19.9L565.7,1857.3z M565.4,1866c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1-3.6-3.1H562v6.3L565.4,1866z M565.8,1874.8
		c2.2,0,3.7-1.2,3.7-3.2s-1.2-3.2-3.6-3.2H562v6.4h3.8V1874.8z"
            />
            <path
              fill="#2D2A26"
              d="M588.5,1870.4c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8,0,6.8,3,6.9,6.7C588.5,1870.2,588.5,1870.3,588.5,1870.4z M585.8,1870.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S585.8,1873.6,585.8,1870.4z"
            />
            <path
              fill="#2D2A26"
              d="M604.5,1870.4c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8,0,6.8,3,6.9,6.7C604.5,1870.2,604.5,1870.3,604.5,1870.4z M601.8,1870.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S601.8,1873.6,601.8,1870.4z"
            />
            <path
              fill="#2D2A26"
              d="M611.4,1863.7h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.5v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L611.4,1863.7
		L611.4,1863.7z"
            />
            <path
              fill="#2D2A26"
              d="M620.5,1877.2h-2.6v-20.3h2.6v8.4c0.9-1.3,2.5-2.1,4.1-2c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2,0-3.1,1.6-3.1,3.6v8H620.5z"
            />
            <path
              fill="#2D2A26"
              d="M651,1862.7c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.7,4.3l0,0
		c2.7,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L651,1862.7z"
            />
            <path
              fill="#2D2A26"
              d="M660.7,1863.7h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L660.7,1863.7z"
            />
            <path
              fill="#2D2A26"
              d="M674.6,1866.4c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8h-2.6v-13.5h2.6v2.3
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1V1866.4z"
            />
            <path
              fill="#2D2A26"
              d="M689.1,1873.3c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6-0.1,0.8H679c0,2.2,1.7,4,3.9,4.1h0.1c1.8,0.1,3.3-1,3.8-2.7L689.1,1873.3z M686.4,1869.1c0-1.9-1.4-3.4-3.3-3.5
		c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V1869.1z"
            />
            <path
              fill="#2D2A26"
              d="M704.3,1873.3c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.2,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L704.3,1873.3z M701.6,1869.1
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V1869.1z"
            />
            <path
              fill="#2D2A26"
              d="M711.2,1863.7h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4H706v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4V1863.7z"
            />
          </g>
          <g id="Winson_Green">
            <path
              fill="#2D2A26"
              d="M233.9,1688.8h5.6l-7.8,28.4H226l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L233.9,1688.8z"
            />
            <path
              fill="#2D2A26"
              d="M245.1,1687.7c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2
		C241.8,1689.2,243.2,1687.7,245.1,1687.7C245,1687.7,245,1687.7,245.1,1687.7z M242.4,1717.1v-19.7h5.3v19.7H242.4z"
            />
            <path
              fill="#2D2A26"
              d="M258.3,1717.2H253v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L258.3,1717.2z"
            />
            <path
              fill="#2D2A26"
              d="M278.7,1710.7c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L278.7,1710.7z"
            />
            <path
              fill="#2D2A26"
              d="M312.9,1707.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C312.9,1706.9,312.9,1707.1,312.9,1707.3z M307.6,1707.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S307.6,1711,307.6,1707.3z"
            />
            <path
              fill="#2D2A26"
              d="M322,1717.2h-5.3v-19.7h5.1v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L322,1717.2z"
            />
            <path
              fill="#2D2A26"
              d="M370.5,1717.2l-0.4-3.2c-1.3,1.9-4.1,3.8-8.4,3.8c-7.6,0-14.2-5.6-14.2-14.8s6.8-14.8,14.5-14.8
		c7.4,0,11.6,4.4,13,8.7l-5.3,1.9c-1-3.4-4.2-5.6-7.7-5.4c-4.3,0-8.9,2.9-8.9,9.6c0,6.4,4.2,9.7,9,9.7c5.2,0,7.3-3.5,7.6-5.5h-9
		v-4.8H375v14.8L370.5,1717.2z"
            />
            <path
              fill="#2D2A26"
              d="M391.7,1702.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L391.7,1702.8L391.7,1702.8z"
            />
            <path
              fill="#2D2A26"
              d="M412.5,1711.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L412.5,1711.5z M407.5,1705.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H407.5z"
            />
            <path
              fill="#2D2A26"
              d="M434.1,1711.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L434.1,1711.5z M429.1,1705.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H429.1z"
            />
            <path
              fill="#2D2A26"
              d="M443.5,1717.2h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L443.5,1717.2z"
            />
            <path
              fill="#2D2A26"
              d="M313.7,1729.9c5.7-0.2,10.5,4.3,10.7,10s-4.3,10.5-10,10.7s-10.5-4.3-10.7-10c0-0.1,0-0.2,0-0.4
		c-0.2-5.5,4-10.1,9.4-10.3C313.3,1729.9,313.5,1729.9,313.7,1729.9z M313.7,1748.1c3.7,0,7.2-2.7,7.2-7.8s-3.5-7.8-7.2-7.8
		s-7.2,2.6-7.2,7.8S310,1748.1,313.7,1748.1z"
            />
            <path
              fill="#2D2A26"
              d="M332.1,1750.6c-3.1,0-5-2.3-5-5.4v-8.5h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.4v-8.1h2.6v11
		c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C335.2,1749.9,333.7,1750.7,332.1,1750.6z"
            />
            <path
              fill="#2D2A26"
              d="M346.5,1736.7h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L346.5,1736.7z"
            />
            <path
              fill="#2D2A26"
              d="M364.7,1746.3c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L364.7,1746.3z M362,1742
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-2,0-3.6,1.5-3.7,3.4h7.4V1742z"
            />
            <path
              fill="#2D2A26"
              d="M375.6,1739.3c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.3
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1L375.6,1739.3z"
            />
            <path
              fill="#2D2A26"
              d="M384.4,1740.2c0-6.6,4.9-10.3,9.9-10.3c4.5,0,7.7,2.5,8.7,6.3l-2.5,0.9c-0.6-2.9-3.2-4.9-6.2-4.7
		c-3.6,0-7,2.6-7,7.8s3.4,7.8,7,7.8c3,0.1,5.6-1.9,6.3-4.8l2.4,0.9c-1.1,3.9-4.7,6.6-8.8,6.4
		C389.2,1750.6,384.4,1746.8,384.4,1740.2z"
            />
            <path
              fill="#2D2A26"
              d="M407.7,1729.7c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C405.8,1730.5,406.7,1729.7,407.7,1729.7L407.7,1729.7z M406.4,1750.2v-13.5h2.6v13.5H406.4z"
            />
            <path
              fill="#2D2A26"
              d="M421,1739.3c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.3
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1L421,1739.3z"
            />
            <path
              fill="#2D2A26"
              d="M425.3,1743.4c0,3.1,1.9,4.7,4.1,4.7c1.8,0.1,3.3-1.1,3.8-2.8l2.3,1c-0.9,2.6-3.3,4.3-6.1,4.2
		c-3.9,0-6.8-3.1-6.8-7.2s2.9-7.1,6.8-7.1c2.8-0.2,5.3,1.6,6,4.3l-2.4,1c-0.3-1.7-1.9-2.9-3.6-2.8
		C427.3,1738.7,425.3,1740.3,425.3,1743.4z"
            />
            <path fill="#2D2A26" d="M438.6,1750.2v-20.3h2.6v20.3H438.6z" />
            <path
              fill="#2D2A26"
              d="M457.5,1746.3c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L457.5,1746.3z M454.8,1742
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V1742z"
            />
          </g>
          <g id="Soho">
            <path
              fill="#2D2A26"
              d="M574.1,1570.1c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.3,7.9,8.3c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L574.1,1570.1z"
            />
            <path
              fill="#2D2A26"
              d="M602.4,1580.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C602.4,1579.9,602.4,1580.1,602.4,1580.3z M597.1,1580.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S597.1,1584,597.1,1580.3z"
            />
            <path
              fill="#2D2A26"
              d="M611.5,1590.1h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V1590.1z"
            />
            <path
              fill="#2D2A26"
              d="M648.2,1580.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C648.2,1579.9,648.2,1580.1,648.2,1580.3z M642.9,1580.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S642.9,1584,642.9,1580.3z"
            />
            <path
              fill="#2D2A26"
              d="M565.7,1603.3c3.8,0,6,2.2,6,5.4c0,1.9-1.2,3.7-3,4.3c2.2,0.6,3.7,2.6,3.6,4.8c0,3.1-2.5,5.4-6.1,5.4h-6.9
		v-19.8L565.7,1603.3z M565.4,1612c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1-3.6-3.1H562v6.3L565.4,1612z M565.8,1620.7
		c2.2,0,3.7-1.2,3.7-3.2s-1.2-3.2-3.6-3.2H562v6.4h3.8V1620.7z"
            />
            <path
              fill="#2D2A26"
              d="M587.6,1619.3c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.2,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L587.6,1619.3z M584.9,1615
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V1615z"
            />
            <path
              fill="#2D2A26"
              d="M593.7,1623.1H591v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7V1623.1z"
            />
            <path
              fill="#2D2A26"
              d="M607.9,1618.8c0.2,1.6,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.9-3.4-3.8c0.2-2.5,2.3-4.4,4.8-4.3c3.7,0,4.8,2.4,5.1,3.6l-2.3,0.9c-0.2-1.4-1.4-2.3-2.8-2.2
		c-1.1-0.1-2.1,0.6-2.2,1.7c0,0,0,0,0,0.1c0,0.8,0.5,1.4,1.5,1.6l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.4-5.5-3.9L607.9,1618.8z"
            />
            <path
              fill="#2D2A26"
              d="M632.1,1616.4c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8-0.1,6.8,2.9,6.9,6.7C632.1,1616.1,632.1,1616.2,632.1,1616.4z M629.4,1616.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S629.4,1619.5,629.4,1616.4z"
            />
            <path
              fill="#2D2A26"
              d="M638.1,1623.1h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L638.1,1623.1z"
            />
            <path
              fill="#2D2A26"
              d="M664.2,1615h-3v8.1h-2.8v-19.8h7.5c3.2-0.2,5.9,2.2,6.1,5.4c0,0.2,0,0.3,0,0.5c0.1,2.8-2,5.3-4.8,5.6
		l4.7,8.3h-3.2L664.2,1615z M665.4,1612.5c2.2,0,3.8-1.3,3.8-3.4s-1.5-3.4-3.8-3.4h-4.2v6.8H665.4z"
            />
            <path
              fill="#2D2A26"
              d="M688.2,1616.4c0,4.1-2.8,7.2-6.9,7.2s-6.9-3-6.9-7.2c-0.1-3.8,2.8-7,6.6-7.1s7,2.8,7.1,6.6
		C688.2,1616,688.2,1616.2,688.2,1616.4z M685.5,1616.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S685.5,1619.5,685.5,1616.4z"
            />
            <path
              fill="#2D2A26"
              d="M694.8,1615.4l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7l0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9v-0.1C690.7,1617.1,692.4,1615.8,694.8,1615.4z M699.4,1617.4v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2s0.9,2,2,2
		c0.1,0,0.1,0,0.2,0C697.7,1621.3,699.4,1620.3,699.4,1617.4L699.4,1617.4z"
            />
            <path
              fill="#2D2A26"
              d="M715.6,1621.1c-0.8,1.5-2.4,2.5-4.2,2.4c-4,0-6.4-3.1-6.4-7.1c0-3.8,2.6-7.1,6.4-7.1c2.4,0,3.7,1.2,4.1,2.3
		v-8.7h2.6v17.8c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.6-0.1-1.2-0.1-1.8L715.6,1621.1L715.6,1621.1z M711.7,1621.2
		c2.4,0,3.9-2.1,3.9-4.9s-1.5-4.7-3.9-4.7s-4,2-4,4.7S709.2,1621.2,711.7,1621.2L711.7,1621.2z"
            />
          </g>
          <g id="Jewellery_Quarter">
            {!isSelectedStation('Jewellery Quarter') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M269.9,1407.7h198.6c5.8,0,10.5,4.7,10.5,10.4v90.5c0,5.8-4.7,10.4-10.5,10.4H269.9
		c-5.8,0-10.5-4.7-10.5-10.4v-90.5C259.5,1412.4,264.2,1407.7,269.9,1407.7z"
                />
                <path
                  fill="#1D1D1C"
                  d="M468.5,1408.7c5.2,0,9.5,4.2,9.5,9.5v90.5c0,5.2-4.3,9.5-9.5,9.5H269.9c-5.2,0-9.5-4.2-9.5-9.5v-90.5
		c0-5.2,4.2-9.5,9.5-9.5l0,0H468.5 M468.5,1406.7H269.9c-6.3,0-11.4,5.1-11.4,11.4v90.5c0,6.3,5.1,11.4,11.4,11.4h198.6
		c6.3,0,11.4-5.1,11.4-11.4v-90.5C479.9,1411.8,474.8,1406.7,468.5,1406.7L468.5,1406.7z"
                />
              </>
            )}
            <path
              fill="#2D2A26"
              d="M281.3,1446.4l5.3-1v2.6c0,2.9,1.7,4.2,3.9,4.2s3.8-1.6,3.8-4.1v-19.6h5.5v19.6c0.2,5-3.8,9.2-8.8,9.4
		c-0.2,0-0.3,0-0.5,0c-5.6,0-9.3-3.7-9.3-9.2L281.3,1446.4z"
            />
            <path
              fill="#2D2A26"
              d="M322.8,1451.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L322.8,1451.3z M317.8,1444.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H317.8z"
            />
            <path
              fill="#2D2A26"
              d="M343.5,1437.3l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4L336,1457h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H343.5z"
            />
            <path
              fill="#2D2A26"
              d="M377.2,1451.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L377.2,1451.3z M372.2,1444.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H372.2z"
            />
            <path fill="#2D2A26" d="M381.2,1457v-29h5.3v29H381.2z" />
            <path fill="#2D2A26" d="M391.7,1457v-29h5.3v29H391.7z" />
            <path
              fill="#2D2A26"
              d="M419.9,1451.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L419.9,1451.3z M414.9,1444.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H414.9z"
            />
            <path
              fill="#2D2A26"
              d="M435.9,1442.6c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L435.9,1442.6z"
            />
            <path
              fill="#2D2A26"
              d="M440.2,1464.7l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4h-5.5V1464.7z"
            />
            <path
              fill="#2D2A26"
              d="M332,1468c7.9-0.2,14.4,6.1,14.6,14c0,0.3,0,0.5,0,0.8c0.1,3.6-1.2,7.1-3.5,9.8l3.4,3.8l-3.6,3.1l-3.5-3.8
		c-2.3,1.3-4.8,1.9-7.4,1.9c-8.2-0.2-14.6-7-14.4-15.2C317.8,1474.5,324.1,1468.2,332,1468L332,1468z M332,1492.2
		c1.2,0,2.5-0.2,3.6-0.7l-4.4-4.9l3.7-3.2l4.4,5c1.1-1.7,1.6-3.6,1.6-5.6c0-6.4-4.5-9.4-8.9-9.4s-8.8,3-8.8,9.4
		S327.6,1492.2,332,1492.2L332,1492.2z"
            />
            <path
              fill="#2D2A26"
              d="M363.2,1494.8c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C363.3,1496.3,363.2,1495.6,363.2,1494.8z"
            />
            <path
              fill="#2D2A26"
              d="M378.1,1485.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1H385c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C372.3,1488.1,374.9,1486.1,378.1,1485.6z M384.5,1489v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C382.4,1493.6,384.5,1492.5,384.5,1489L384.5,1489z"
            />
            <path
              fill="#2D2A26"
              d="M406.5,1482.6c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L406.5,1482.6L406.5,1482.6z"
            />
            <path
              fill="#2D2A26"
              d="M416.3,1477.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.6c0-0.2,0-0.3,0-0.5v-2.8h4.8L416.3,1477.3z"
            />
            <path
              fill="#2D2A26"
              d="M441.8,1491.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L441.8,1491.3z M436.8,1484.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H436.8z"
            />
            <path
              fill="#2D2A26"
              d="M457.8,1482.6c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L457.8,1482.6L457.8,1482.6z"
            />
          </g>
          <g id="St_Pauls">
            <path
              fill="#2D2A26"
              d="M574.1,1331.8c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L574.1,1331.8z"
            />
            <path
              fill="#2D2A26"
              d="M589.8,1332.2h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2H581v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8V1332.2z"
            />
            <path
              fill="#2D2A26"
              d="M601.1,1344.9c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6
		C597.4,1346.5,599.1,1344.9,601.1,1344.9z"
            />
            <path
              fill="#2D2A26"
              d="M625,1341.2v10.7h-5.5v-28.4h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H625V1341.2z M629.4,1336.5
		c2.8,0,4.4-1.6,4.4-4s-1.7-4.1-4.4-4.1H625v8.1H629.4z"
            />
            <path
              fill="#2D2A26"
              d="M647.5,1340.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C641.6,1343,644.2,1341.1,647.5,1340.6z M653.8,1343.9v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C651.8,1348.5,653.8,1347.4,653.8,1343.9z"
            />
            <path
              fill="#2D2A26"
              d="M676.6,1349.8c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C676.6,1351.2,676.6,1350.5,676.6,1349.8z"
            />
            <path fill="#2D2A26" d="M686.9,1351.9v-29h5.3v29H686.9z" />
            <path
              fill="#2D2A26"
              d="M699.1,1323.3c2,0.1,3.5,1.7,3.5,3.7c0,0.1,0,0.1,0,0.2c0,5.4-3.7,7.3-6.2,7.6v-2.4
		c1.7-0.3,3.1-1.7,3.3-3.4c-0.3,0.1-0.5,0.2-0.8,0.2c-1.5,0.1-2.8-1-2.9-2.5c0-0.1,0-0.2,0-0.3c0-1.7,1.4-3,3.1-2.9
		C699,1323.3,699.1,1323.3,699.1,1323.3z"
            />
            <path
              fill="#2D2A26"
              d="M709.2,1345.4c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.3-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L709.2,1345.4z"
            />
          </g>
          <g id="St_Chads">
            <path
              fill="#2D2A26"
              d="M300,1203.9c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.3L300,1203.9z"
            />
            <path
              fill="#2D2A26"
              d="M315.7,1204.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L315.7,1204.3z"
            />
            <path
              fill="#2D2A26"
              d="M327,1217c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6S325,1217,327,1217z"
            />
            <path
              fill="#2D2A26"
              d="M343.7,1209.8c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S343.7,1218.8,343.7,1209.8z"
            />
            <path
              fill="#2D2A26"
              d="M380.4,1224h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L380.4,1224L380.4,1224z"
            />
            <path
              fill="#2D2A26"
              d="M402.6,1212.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C396.7,1215.1,399.3,1213.1,402.6,1212.6z M408.9,1216v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C406.9,1220.6,408.9,1219.5,408.9,1216z"
            />
            <path
              fill="#2D2A26"
              d="M437.8,1220.4c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4V1195h5.2V1220.4z M427.8,1219.7c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S425,1219.7,427.8,1219.7z"
            />
            <path
              fill="#2D2A26"
              d="M445.9,1217.5c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L445.9,1217.5z"
            />
          </g>
          <g id="Bull_Street">
            <path
              fill="#2D2A26"
              d="M570.2,1070.2c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9
		h-11v-28.4h10.3V1070.2z M569.3,1081.9c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1H569.3z M569.9,1093.9c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.5H569.9z"
            />
            <path
              fill="#2D2A26"
              d="M596.2,1096.5c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.3c0-0.2,0-0.4,0-0.5v-11.5h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C596.3,1097.9,596.2,1097.2,596.2,1096.5z"
            />
            <path fill="#2D2A26" d="M606.5,1098.6v-29h5.3v29H606.5z" />
            <path fill="#2D2A26" d="M617,1098.6v-29h5.3v29H617z" />
            <path
              fill="#2D2A26"
              d="M651.4,1078.5c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L651.4,1078.5z"
            />
            <path
              fill="#2D2A26"
              d="M667.2,1078.9h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L667.2,1078.9z"
            />
            <path
              fill="#2D2A26"
              d="M687,1084.2c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H675v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1084.2z"
            />
            <path
              fill="#2D2A26"
              d="M707.8,1092.9c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L707.8,1092.9z M702.8,1086.5
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H702.8z"
            />
            <path
              fill="#2D2A26"
              d="M729.5,1092.9c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L729.5,1092.9z M724.5,1086.5
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H724.5z"
            />
            <path
              fill="#2D2A26"
              d="M740,1078.9h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.7-0.1v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8v5.9999H740z"
            />
          </g>
          <g id="Corporation_Street">
            <path
              fill="#2D2A26"
              d="M237.8,935.5c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S237.8,944.5,237.8,935.5z"
            />
            <path
              fill="#2D2A26"
              d="M288.3,939.8c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C288.3,939.4,288.3,939.6,288.3,939.8z M283,939.8c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S283,943.5,283,939.8L283,939.8z"
            />
            <path
              fill="#2D2A26"
              d="M304,935.2c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H292V930h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L304,935.2z"
            />
            <path
              fill="#2D2A26"
              d="M307.2,957.2V930h5.2v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5L307.2,957.2z M317.3,934.2c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6
		S320.1,934.3,317.3,934.2L317.3,934.2z"
            />
            <path
              fill="#2D2A26"
              d="M350.3,939.8c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.6,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C350.3,939.4,350.3,939.6,350.3,939.8z M345,939.8c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S345,943.5,345,939.8L345,939.8z"
            />
            <path
              fill="#2D2A26"
              d="M366.1,935.2c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3V930h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L366.1,935.2L366.1,935.2z"
            />
            <path
              fill="#2D2A26"
              d="M373.9,938.3l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C368,940.8,370.6,938.8,373.9,938.3z M380.2,941.7v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C378.1,946.2,380.2,945.2,380.2,941.7z"
            />
            <path
              fill="#2D2A26"
              d="M396.9,930h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2H388V930h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5V924h4.8L396.9,930z"
            />
            <path
              fill="#2D2A26"
              d="M407.4,920.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2
		C404.1,921.7,405.5,920.2,407.4,920.2L407.4,920.2z M404.7,949.6V930h5.3v19.7L404.7,949.6z"
            />
            <path
              fill="#2D2A26"
              d="M434.4,939.8c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C434.4,939.4,434.4,939.6,434.4,939.8z M429.1,939.8c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S429.1,943.5,429.1,939.8z"
            />
            <path
              fill="#2D2A26"
              d="M443.5,949.6h-5.3V930h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L443.5,949.6z"
            />
            <path
              fill="#2D2A26"
              d="M364.5,969.5c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.3c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L364.5,969.5z"
            />
            <path
              fill="#2D2A26"
              d="M380.3,970h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6V970h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5V964h4.8L380.3,970z"
            />
            <path
              fill="#2D2A26"
              d="M400.1,975.2c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3V970h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L400.1,975.2L400.1,975.2z"
            />
            <path
              fill="#2D2A26"
              d="M420.9,984c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L420.9,984z M415.9,977.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H415.9z"
            />
            <path
              fill="#2D2A26"
              d="M442.6,984c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L442.6,984z M437.6,977.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H437.6z"
            />
            <path
              fill="#2D2A26"
              d="M453.1,970h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6V970h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5V964h4.8L453.1,970z"
            />
          </g>
          <g id="Grand_Central">
            <path
              fill="#2D2A26"
              d="M581.2,832.1l-0.3-3.2c-1.3,1.9-4.1,3.8-8.4,3.8c-7.6,0-14.2-5.6-14.2-14.8s6.8-14.8,14.5-14.8
		c7.4,0,11.5,4.4,13,8.7l-5.3,1.9c-1-3.4-4.2-5.6-7.7-5.4c-4.3,0-8.9,2.9-8.9,9.6c0,6.4,4.2,9.7,9,9.7c5.2,0,7.3-3.5,7.6-5.5h-9
		v-4.8h14.2v14.8H581.2z"
            />
            <path
              fill="#2D2A26"
              d="M602.3,817.7c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L602.3,817.7z"
            />
            <path
              fill="#2D2A26"
              d="M610.2,820.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1H617c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C604.3,823.2,606.9,821.3,610.2,820.8z M616.5,824.1v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C614.4,828.7,616.5,827.6,616.5,824.1L616.5,824.1z"
            />
            <path
              fill="#2D2A26"
              d="M631.9,832.1h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8V832h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L631.9,832.1z"
            />
            <path
              fill="#2D2A26"
              d="M668.2,828.5c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2L668.2,828.5L668.2,828.5z M658.2,827.8
		c2.7,0,4.8-2.1,4.8-5.6s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S655.4,827.8,658.2,827.8L658.2,827.8z"
            />
            <path
              fill="#2D2A26"
              d="M681.6,818c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S681.6,827,681.6,818z"
            />
            <path
              fill="#2D2A26"
              d="M730.6,826.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L730.6,826.5z M725.6,820
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H725.6z"
            />
            <path
              fill="#2D2A26"
              d="M739.9,832.1h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8V832h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L739.9,832.1z"
            />
            <path
              fill="#2D2A26"
              d="M764.1,812.4h3.9v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L764.1,812.4z"
            />
            <path
              fill="#2D2A26"
              d="M783.9,817.7c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H772v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L783.9,817.7z"
            />
            <path
              fill="#2D2A26"
              d="M791.8,820.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C785.9,823.2,788.5,821.3,791.8,820.8z M798.1,824.1v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C796,828.7,798.1,827.6,798.1,824.1L798.1,824.1z"
            />
            <path fill="#2D2A26" d="M808.2,832.1v-29h5.3v29H808.2z" />
            <path
              fill="#2D2A26"
              d="M572.7,865.1L562,848.9v16.2h-2.7v-19.8h3.7l9.9,15.2v-15.2h2.7v19.8L572.7,865.1L572.7,865.1z"
            />
            <path
              fill="#2D2A26"
              d="M592.1,861.3c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8H582c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L592.1,861.3z M589.4,857
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4h7.4V857z"
            />
            <path
              fill="#2D2A26"
              d="M605.8,851.6l3.5,10.1l3-10.1h2.8l-4.4,13.5H608l-3.6-10.2l-3.5,10.2h-2.8l-4.4-13.5h2.9l3,10.1l3.5-10.1
		H605.8z"
            />
            <path
              fill="#2D2A26"
              d="M635.2,850.6c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.7
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.2,2.5,2.3,4.4,4.8,4.2c2.7,0,4.1-1.4,4.1-3.2
		c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L635.2,850.6z"
            />
            <path
              fill="#2D2A26"
              d="M644.9,851.6h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6V854h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L644.9,851.6z"
            />
            <path
              fill="#2D2A26"
              d="M658.8,854.3c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.4
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1V854.3z"
            />
            <path
              fill="#2D2A26"
              d="M673.3,861.3c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L673.3,861.3z M670.6,857
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4h7.4V857z"
            />
            <path
              fill="#2D2A26"
              d="M688.5,861.3c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L688.5,861.3z M685.8,857
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V857z"
            />
            <path
              fill="#2D2A26"
              d="M695.4,851.6h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6V854h-2.6v-2.4h0.8c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L695.4,851.6z"
            />
            <path
              fill="#2D2A26"
              d="M719.3,850.6c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.7
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.7,4.3l0,0
		c2.7,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L719.3,850.6z"
            />
            <path
              fill="#2D2A26"
              d="M729,851.6h2.9v2.4H729v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6V854h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4v4.3H729z"
            />
            <path
              fill="#2D2A26"
              d="M738.6,857.4l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7l0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9v-0.1C734.5,859.1,736.3,857.8,738.6,857.4z M743.3,859.3v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2s0.9,2,2,2
		c0.1,0,0.1,0,0.2,0C741.6,863.3,743.3,862.3,743.3,859.3L743.3,859.3z"
            />
            <path
              fill="#2D2A26"
              d="M753.6,851.6h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6V854h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L753.6,851.6z"
            />
            <path
              fill="#2D2A26"
              d="M761.3,844.6c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C759.4,845.5,760.2,844.7,761.3,844.6L761.3,844.6z M760,865.1v-13.5h2.6v13.5H760z"
            />
            <path
              fill="#2D2A26"
              d="M779.7,858.4c-0.1,3.8-3.3,6.8-7.1,6.6s-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6c3.8-0.1,6.8,2.9,6.9,6.7
		C779.7,858.1,779.7,858.2,779.7,858.4z M777,858.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8S777,861.5,777,858.4
		L777,858.4z"
            />
            <path
              fill="#2D2A26"
              d="M785.7,865.1h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5H792v-8
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L785.7,865.1z"
            />
          </g>
          <g id="Town_Hall">
            <path fill="#2D2A26" d="M289.4,675.4v23.1h-5.6v-23.1h-9v-5.2h23.5v5.2H289.4z" />
            <path
              fill="#2D2A26"
              d="M320.6,688.7c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C320.6,688.3,320.6,688.5,320.6,688.7z M315.2,688.7c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S315.2,692.4,315.2,688.7z"
            />
            <path
              fill="#2D2A26"
              d="M341,678.9l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H341z"
            />
            <path
              fill="#2D2A26"
              d="M362.4,698.6H357v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L362.4,698.6z"
            />
            <path
              fill="#2D2A26"
              d="M407.6,698.6v-11.8h-12.4v11.8h-5.5v-28.4h5.5v11.4h12.4v-11.4h5.6v28.4H407.6z"
            />
            <path
              fill="#2D2A26"
              d="M423.4,687.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C417.6,689.7,420.2,687.7,423.4,687.2z M429.8,690.6v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C427.7,695.2,429.8,694.1,429.8,690.6z"
            />
            <path fill="#2D2A26" d="M439.8,698.6v-29h5.3v29H439.8z" />
            <path fill="#2D2A26" d="M450.4,698.6v-29h5.3v29H450.4z" />
            <path
              fill="#2D2A26"
              d="M284.4,711.7h2.9l-7.6,19.9H277l-7.5-19.9h2.9l6,16.3L284.4,711.7z"
            />
            <path
              fill="#2D2A26"
              d="M290.7,711.1c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C288.8,711.9,289.7,711.1,290.7,711.1L290.7,711.1z M289.4,731.6v-13.5h2.6v13.5H289.4z"
            />
            <path
              fill="#2D2A26"
              d="M297.8,724.8c0,3.1,1.9,4.7,4.1,4.7c1.8,0.1,3.3-1.1,3.8-2.8l2.3,1c-0.9,2.6-3.3,4.3-6.1,4.2
		c-3.9,0-6.8-3.1-6.8-7.2s2.9-7.1,6.8-7.1c2.8-0.2,5.3,1.6,6,4.3l-2.4,1c-0.3-1.7-1.9-2.9-3.6-2.9
		C299.7,720.1,297.8,721.7,297.8,724.8z"
            />
            <path
              fill="#2D2A26"
              d="M314.2,718.1h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4H309V718h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4V718.1z"
            />
            <path
              fill="#2D2A26"
              d="M332.9,724.8c0.2,3.7-2.7,7-6.4,7.2c-0.2,0-0.3,0-0.5,0c-4,0-6.9-3.1-6.9-7.2c-0.1-3.8,2.8-7,6.6-7.1
		c3.8-0.1,7,2.8,7.1,6.6C332.9,724.5,332.9,724.6,332.9,724.8L332.9,724.8z M330.2,724.8c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S330.2,727.9,330.2,724.8z"
            />
            <path
              fill="#2D2A26"
              d="M343.4,720.8c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8H336v-13.5h2.6v2.3
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1v2.8H343.4z"
            />
            <path
              fill="#2D2A26"
              d="M347.2,711.1c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9l0,0
		C345.3,712,346.2,711.1,347.2,711.1z M345.9,731.6v-13.5h2.6v13.5H345.9z"
            />
            <path
              fill="#2D2A26"
              d="M355.9,723.9l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0.1
		l-2.5-0.6c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.7c0,0.7,0,1.5,0.2,2.2h-2.5c-0.1-0.6-0.2-1.2-0.1-1.8
		c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.6-4.5-3.9v-0.1C351.8,725.5,353.6,724.2,355.9,723.9z M360.6,725.8v-0.6l-4.1,0.6
		c-1.1,0-2,0.9-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0C358.8,729.8,360.6,728.7,360.6,725.8z"
            />
            <path
              fill="#2D2A26"
              d="M384.1,717.1c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.1,2.8,5.1,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.8,4.3l0,0
		c2.8,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L384.1,717.1z"
            />
            <path
              fill="#2D2A26"
              d="M399.4,736.9v-7.2c-0.9,1.5-2.5,2.4-4.2,2.3c-3.9,0-6.4-3.2-6.4-7.1s2.4-7,6.3-7c1.8-0.1,3.5,0.8,4.3,2.4
		v-2.1h2.6v18.8L399.4,736.9z M395.4,729.6c2.4,0,4-2,4-4.8s-1.6-4.7-4-4.7s-4,1.9-4,4.7S393,729.6,395.4,729.6L395.4,729.6z"
            />
            <path
              fill="#2D2A26"
              d="M410.7,732c-3.1,0-5-2.4-5-5.4v-8.5h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.4v-8.1h2.6v11
		c0,0.8,0.1,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C413.9,731.3,412.3,732.1,410.7,732z"
            />
            <path
              fill="#2D2A26"
              d="M424.6,723.9l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.6c0,0,0,0,0,0.1
		l-2.5-0.6c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.7c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8
		c-0.9,1.5-2.6,2.3-4.3,2.3c-2.3,0.2-4.3-1.6-4.5-3.9V728C420.5,725.5,422.3,724.2,424.6,723.9z M429.3,725.8v-0.6l-4.1,0.6
		c-1.1,0-2,0.9-2,2s0.9,2,2,2c0.1,0,0.1,0,0.2,0C427.5,729.8,429.3,728.7,429.3,725.8L429.3,725.8z"
            />
            <path
              fill="#2D2A26"
              d="M443.1,720.8c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8h-2.6v-13.5h2.6v2.3
		c0.7-1.6,2.3-2.6,4-2.6c0.3,0,0.6,0,0.9,0.1L443.1,720.8z"
            />
            <path
              fill="#2D2A26"
              d="M457.3,727.7c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L457.3,727.7z M454.7,723.4
		c0-1.9-1.5-3.4-3.3-3.4c-0.1,0-0.2,0-0.3,0c-2,0-3.6,1.5-3.7,3.5L454.7,723.4z"
            />
          </g>
          <g id="Library">
            <path fill="#2D2A26" d="M560,572.5v-28.3h5.5v23.1h12.6v5.3L560,572.5z" />
            <path
              fill="#2D2A26"
              d="M584.2,543.1c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2
		C580.8,544.6,582.3,543.1,584.2,543.1C584.1,543.1,584.1,543.1,584.2,543.1z M581.5,572.5v-19.7h5.3v19.7H581.5z"
            />
            <path
              fill="#2D2A26"
              d="M592,572.5v-29h5.2V555c0.9-1.4,3-2.7,6-2.7c5.8,0,9.1,4.4,9.1,10.3S608.6,573,603,573
		c-2.3,0.1-4.5-1-5.8-2.9v2.4H592z M602.1,557c-2.7,0-4.9,2-4.9,5.6s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S604.8,557,602.1,557L602.1,557z"
            />
            <path
              fill="#2D2A26"
              d="M628,558.1c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H616v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V558.1z"
            />
            <path
              fill="#2D2A26"
              d="M635.9,561.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C630,563.6,632.6,561.7,635.9,561.2z M642.2,564.5v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C640.1,569.1,642.2,568,642.2,564.5L642.2,564.5z"
            />
            <path
              fill="#2D2A26"
              d="M664.3,558.1c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1L664.3,558.1z"
            />
            <path
              fill="#2D2A26"
              d="M668.6,580.2l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.3,27.4H668.6z"
            />
            <path
              fill="#2D2A26"
              d="M558,595.5c0-6.6,4.9-10.3,9.9-10.3c4.5,0,7.7,2.5,8.7,6.3l-2.5,0.9c-0.6-2.9-3.2-4.9-6.2-4.7
		c-3.6,0-7.1,2.6-7.1,7.8s3.4,7.8,7.1,7.8c3,0.1,5.6-1.9,6.3-4.8l2.4,0.9c-1.1,3.9-4.7,6.6-8.8,6.4C562.7,605.9,558,602.2,558,595.5
		z"
            />
            <path
              fill="#2D2A26"
              d="M591.7,601.7c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L591.7,601.7z M589.1,597.4
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4h7.4V597.4z"
            />
            <path
              fill="#2D2A26"
              d="M597.8,605.5h-2.6V592h2.6v2c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7v7.8H597.8z"
            />
            <path
              fill="#2D2A26"
              d="M614.4,592h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6V592h0.8c1,0.1,1.9-0.7,2-1.8c0-0.1,0-0.2,0-0.2v-2.2h2.4L614.4,592z"
            />
            <path
              fill="#2D2A26"
              d="M632.6,601.7c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L632.6,601.7z M629.9,597.4
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V597.4z"
            />
            <path
              fill="#2D2A26"
              d="M638.7,605.5H636V592h2.6v2c0.8-1.5,2.4-2.4,4.2-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5H645v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L638.7,605.5z"
            />
            <path
              fill="#2D2A26"
              d="M655,597.8l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7l0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9v-0.1C650.9,599.5,652.7,598.1,655,597.8z M659.7,599.7v-0.6l-4.1,0.6c-1.1,0.1-2,1-1.9,2.1s1,2,2.1,1.9
		C657.9,603.7,659.7,602.7,659.7,599.7z"
            />
            <path
              fill="#2D2A26"
              d="M673.9,594.7c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V592h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1V594.7z"
            />
            <path
              fill="#2D2A26"
              d="M677.2,611.1l3.4-7.1l-5.8-12h3l4.2,9.3l4-9.3h2.8l-8.7,19.1H677.2z"
            />
            <path
              fill="#2D2A26"
              d="M708.8,591c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.8,4.3c2.8,0,4.1-1.4,4.1-3.2
		c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L708.8,591z"
            />
            <path
              fill="#2D2A26"
              d="M724.4,610.8v-7.2c-0.9,1.5-2.5,2.4-4.2,2.3c-3.9,0-6.4-3.2-6.4-7.2s2.4-7,6.3-7c1.8-0.1,3.5,0.8,4.3,2.4
		V592h2.6v18.8H724.4z M720.4,603.5c2.4,0,4-2,4-4.8s-1.6-4.7-4-4.7s-4,1.9-4,4.7S718,603.5,720.4,603.5L720.4,603.5z"
            />
            <path
              fill="#2D2A26"
              d="M736.1,605.9c-3.1,0-5-2.3-5-5.4V592h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.5V592h2.6v11
		c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C739.2,605.2,737.7,606,736.1,605.9z"
            />
            <path
              fill="#2D2A26"
              d="M750.3,597.8l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7l0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9v-0.1C746.2,599.5,748,598.1,750.3,597.8z M755,599.7v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2s0.9,2,2,2
		c0.1,0,0.1,0,0.2,0C753.2,603.7,755,602.7,755,599.7L755,599.7z"
            />
            <path
              fill="#2D2A26"
              d="M769.2,594.7c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V592h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L769.2,594.7z"
            />
            <path
              fill="#2D2A26"
              d="M783.7,601.7c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3.1-7.1,6.4-7.1c4.2,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L783.7,601.7z M781,597.4
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4h7.4V597.4z"
            />
          </g>
          <g id="Brindleyplace">
            <path
              fill="#2D2A26"
              d="M222.3,427.9c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9
		h-11v-28.4h10.3V427.9z M221.4,439.6c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1H221.4z M222,451.6c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.5H222z"
            />
            <path
              fill="#2D2A26"
              d="M247.6,441.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9
		c1.2-2.6,3.9-3.1,5.6-3.1c0.4,0,0.8,0,1.2,0.1v5.4H247.6z"
            />
            <path
              fill="#2D2A26"
              d="M253.4,426.8c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2
		C250.1,428.3,251.5,426.8,253.4,426.8L253.4,426.8z M250.8,456.3v-19.7h5.3v19.7H250.8z"
            />
            <path
              fill="#2D2A26"
              d="M266.6,456.3h-5.3v-19.7h5.1v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L266.6,456.3L266.6,456.3z"
            />
            <path
              fill="#2D2A26"
              d="M302.9,452.7c0,1.3,0.1,2.8,0.2,3.6H298c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V452.7z M292.9,452c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S290.1,452,292.9,452L292.9,452z"
            />
            <path fill="#2D2A26" d="M308.2,456.3v-29h5.3v29H308.2z" />
            <path
              fill="#2D2A26"
              d="M336.3,450.6c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L336.3,450.6z M331.3,444.2
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H331.3z"
            />
            <path
              fill="#2D2A26"
              d="M341.5,464l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L347.1,464H341.5z"
            />
            <path
              fill="#2D2A26"
              d="M362.3,463.9v-27.3h5.2v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5L362.3,463.9z M372.4,440.9c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6
		S375.1,440.9,372.4,440.9L372.4,440.9z"
            />
            <path fill="#2D2A26" d="M386.3,456.3v-29h5.3v29H386.3z" />
            <path
              fill="#2D2A26"
              d="M401.5,444.9l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C395.6,447.4,398.2,445.4,401.5,444.9z M407.8,448.3v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C405.7,452.9,407.8,451.8,407.8,448.3z"
            />
            <path
              fill="#2D2A26"
              d="M421.7,446.4c0,3.6,2.3,5.6,5,5.6c2.1,0.1,4-1.3,4.5-3.3l4.7,1.6c-1.2,4.1-5,6.8-9.2,6.6
		c-5.6,0.1-10.3-4.4-10.4-10c0-0.1,0-0.3,0-0.4c-0.2-5.6,4.2-10.2,9.7-10.4c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6l-4.8,1.6
		c-0.5-2-2.3-3.4-4.4-3.3C424,440.9,421.7,442.9,421.7,446.4z"
            />
            <path
              fill="#2D2A26"
              d="M457,450.6c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L457,450.6z M452,444.2
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H452z"
            />
          </g>
          <g id="Five_Ways">
            <path fill="#2D2A26" d="M560,334.7v-28.4h17.9v5.2h-12.4v7h11v5.1h-11v11L560,334.7z" />
            <path
              fill="#2D2A26"
              d="M584.2,305.2c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2
		C580.9,306.7,582.4,305.3,584.2,305.2L584.2,305.2z M581.6,334.7V315h5.3v19.7H581.6z"
            />
            <path fill="#2D2A26" d="M603,334.7h-5.3l-8-19.7h5.8l4.9,13.2l4.7-13.2h5.6L603,334.7z" />
            <path
              fill="#2D2A26"
              d="M631.1,329c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L631.1,329z M626.1,322.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H626.1z"
            />
            <path
              fill="#2D2A26"
              d="M676.6,306.3h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2H650l-7.9-28.4h5.9l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L676.6,306.3z"
            />
            <path
              fill="#2D2A26"
              d="M689.8,323.4l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C683.9,325.8,686.5,323.8,689.8,323.4z M696.1,326.7v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C694,331.3,696.1,330.2,696.1,326.7z"
            />
            <path
              fill="#2D2A26"
              d="M707.3,342.4l4.7-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L713,342.4H707.3z"
            />
            <path
              fill="#2D2A26"
              d="M731,328.2c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.5,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L731,328.2z"
            />
          </g>
          <g id="Edgbaston_Village">
            <path
              fill="#2D2A26"
              d="M347.2,153.5v-28.4H365v5.2h-12.2v6.5h11.1v4.9h-11.1v6.6H365v5.2H347.2z"
            />
            <path
              fill="#2D2A26"
              d="M388.4,149.9c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V149.9z M378.4,149.2c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S375.6,149.2,378.4,149.2z"
            />
            <path
              fill="#2D2A26"
              d="M397.1,153.3c0.4,2.2,2.3,3.8,4.6,3.7c3.4,0,5.2-1.7,5.2-5.5v-1.4c-0.8,1.3-2.6,2.5-5.5,2.5
		c-5.2,0-9.2-4-9.2-9.6c0-5.2,3.8-9.6,9.2-9.6c3.1,0,4.9,1.4,5.6,2.7v-2.3h5.1v17.6c0,5.4-2.9,10.3-10.3,10.3c-5.4,0-9-3.4-9.6-7.1
		L397.1,153.3z M407,143c0.2-2.6-1.8-4.8-4.4-5s-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6c0,3.1,2,5,4.7,5S407,146.1,407,143z"
            />
            <path
              fill="#2D2A26"
              d="M417.1,153.5v-29h5.2V136c0.9-1.4,3-2.7,6-2.7c5.8,0,9.1,4.4,9.1,10.3s-3.7,10.4-9.3,10.4
		c-2.3,0.1-4.5-1-5.8-2.9v2.4H417.1z M427.2,138c-2.7,0-4.9,2-4.9,5.6s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S429.9,138,427.2,138z"
            />
            <path
              fill="#2D2A26"
              d="M445.8,142.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C439.9,144.6,442.5,142.6,445.8,142.2z M452.1,145.5v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C450,150.1,452.1,149,452.1,145.5z"
            />
            <path
              fill="#2D2A26"
              d="M465,147c0.1,1.8,1.7,3.1,3.5,3h0.1c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L465,147z"
            />
            <path
              fill="#2D2A26"
              d="M486.7,133.8h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L486.7,133.8z"
            />
            <path
              fill="#2D2A26"
              d="M513.7,143.6c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C513.7,143.3,513.7,143.4,513.7,143.6z M508.4,143.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S508.4,147.4,508.4,143.6L508.4,143.6z"
            />
            <path
              fill="#2D2A26"
              d="M522.8,153.5h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3V142
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L522.8,153.5z"
            />
            <path
              fill="#2D2A26"
              d="M568.1,125.1h5.9l-10.5,28.4h-5.7l-10.5-28.4h6l7.4,21.1L568.1,125.1z"
            />
            <path
              fill="#2D2A26"
              d="M579.4,124c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3s-3.3-1.4-3.3-3.2C576.1,125.5,577.5,124,579.4,124
		C579.3,124,579.4,124,579.4,124z M576.7,153.4v-19.7h5.3v19.7H576.7z"
            />
            <path fill="#2D2A26" d="M587.2,153.5v-29h5.3v29H587.2z" />
            <path fill="#2D2A26" d="M597.8,153.5v-29h5.3v29H597.8z" />
            <path
              fill="#2D2A26"
              d="M613,142.2l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2l0,0l-4.7-1
		c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4c-1.3,1.9-3.5,3-5.8,2.9
		c-4.2,0-6.8-2.8-6.8-5.9C607.1,144.6,609.7,142.6,613,142.2z M619.3,145.5v-0.9l-4.4,0.7c-1.4,0-2.4,1.1-2.4,2.5
		c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C617.2,150.1,619.3,149,619.3,145.5L619.3,145.5z"
            />
            <path
              fill="#2D2A26"
              d="M632.8,153.3c0.4,2.2,2.3,3.8,4.6,3.7c3.4,0,5.2-1.7,5.2-5.5v-1.4c-0.8,1.3-2.6,2.5-5.5,2.5
		c-5.2,0-9.2-4-9.2-9.6c0-5.2,3.8-9.6,9.2-9.6c3.1,0,4.9,1.4,5.6,2.7v-2.3h5.1v17.6c0,5.4-2.9,10.3-10.3,10.3c-5.4,0-9-3.4-9.6-7.1
		L632.8,153.3z M642.7,143c0.2-2.6-1.8-4.8-4.4-5c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6c0,3.1,2,5,4.7,5S642.7,146.1,642.7,143z
		"
            />
            <path
              fill="#2D2A26"
              d="M670.4,147.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L670.4,147.8z M665.4,141.4
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H665.4z"
            />
          </g>
        </svg>
      </ReactSVGPanZoom>
    </>
  );
}

export default MapVertical;
