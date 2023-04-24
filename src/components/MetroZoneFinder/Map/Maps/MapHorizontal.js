import React, { useState, useEffect, useRef, useContext } from 'react';
import { AutoCompleteContext } from 'globalState';
import { ReactSVGPanZoom, TOOL_PAN } from 'react-svg-pan-zoom';
import MapControls from '../MapControls/MapControls';
import useMapMethods from '../customHooks/useMapMethods';
import useWindowHeightWidth from '../customHooks/useWindowHeightWidth';
import s from '../Map.module.scss';

function MapHorizontal() {
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
              '.st0 {clip-path:url(#SVGID_00000046312892275571864610000008328776898878226325_);}.st1{fill:#0075C9;}.st2 {fill: #FFFFFF;}.st3 {fill: #3D1152;}.st4 {fill: #DED7D6;}.st5{fill: #221E20;}.st6{fill: #EEEAEA;}.st7{fill: #2D2A26;}.st8{fill:#1D1D1C;}'
            }
          </style>
          <symbol id="Interchange" viewBox="-28.4 -28.4 56.8 56.8">
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000133498096538904066720000005392261307537896623_"
                    x="-28.4"
                    y="-28.4"
                    width="56.7"
                    height="56.7"
                  />
                </defs>
                <clipPath id="SVGID_00000103232942265104766680000016797755651437433757_">
                  <use
                    xlinkHref="#SVGID_00000133498096538904066720000005392261307537896623_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000103232942265104766680000016797755651437433757_)">
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
          <symbol id="Park_and_ride" viewBox="-36.05 -36.05 72.1 72.1">
            <path
              fill="#3D1152"
              d="M29.75-36.05h-59.5c-3.5,0-6.3,2.8-6.3,6.3v59.5c0,3.5,2.8,6.3,6.3,6.3l0,0h59.5c3.5,0,6.3-2.8,6.3-6.3l0,0
v-59.5C36.05-33.15,33.15-36.05,29.75-36.05L29.75-36.05z"
            />
            <path
              fill="#FFFFFF"
              d="M-24.45,2.85v8.5h-4.4v-22.4h8.4c4.4,0,7.4,2.9,7.4,7s-3,7-7.4,7L-24.45,2.85z M-20.95-0.85
c2.2,0,3.5-1.3,3.5-3.2s-1.3-3.2-3.5-3.2h-3.5v6.4C-24.45-0.85-20.95-0.85-20.95-0.85z"
            />
            <path
              fill="#FFFFFF"
              d="M2.45,8.85c-1.5,1.7-3.7,2.8-6,2.8c-4.4,0-6.8-3-6.8-6c0-2.8,1.5-4.4,3.8-6.1l0.2-0.1l-0.4-0.4
c-1.1-1.1-2.5-2.8-2.5-4.9c0-3.3,2.7-5.9,6-5.9c0.1,0,0.1,0,0.2,0c3.6,0,6.2,2.3,6.2,5.7c0,2.3-1.5,3.9-3.2,5.1l-0.8,0.6l3.4,3.6
l5.7-5.9v5.2l-3.1,3.4l5.1,5.3h-5.5L2.45,8.85z M-0.15,6.15l-3.8-4l-0.5,0.3c-1.1,0.6-1.8,1.8-1.8,3c0.1,1.5,1.2,2.7,2.7,2.6l0,0
C-2.15,7.95-0.95,7.25-0.15,6.15z M-3.95-3.45l0.6,0.7l1.2-0.8c0.8-0.5,1.4-1.4,1.4-2.4c0-1.2-1-2.2-2.2-2.2h-0.1
c-1.2,0-2.2,0.9-2.2,2.1c0,0.1,0,0.1,0,0.2C-5.05-4.95-4.65-4.05-3.95-3.45L-3.95-3.45z"
            />
            <path
              fill="#FFFFFF"
              d="M19.45,2.65h-2.3v8.6h-4.4v-22.4h8.8c4.4,0,7.2,3,7.2,6.9c0.1,3-1.9,5.6-4.8,6.4l4.8,9.2h-4.8L19.45,2.65z
M20.65-1.05c2.2,0,3.5-1.3,3.5-3.1s-1.2-3.2-3.5-3.2h-3.5v6.2h3.5V-1.05z"
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
          <g id="Tram_line">
            <rect x="322.1" y="911.9" fill="#0075C9" width="1170.7" height="24" />
            <rect x="1492.2" y="911.9" fill="#0075C9" width="6045.7998" height="23.9" />
          </g>
          <g id="Blobs">
            <g>
              <g>
                <defs>
                  <rect id="SVGID_1_" x="1715.3" y="915.4" width="17" height="17" />
                </defs>
                <clipPath id="SVGID_00000033328923154228461530000011392171552881048490_">
                  <use xlinkHref="#SVGID_1_" overflow="visible" />
                </clipPath>
                <g clipPath="url(#SVGID_00000033328923154228461530000011392171552881048490_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000013174424655800619930000002143126314097568410_"
                        x="1715.2314"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000177450458933712544120000009048717848102971054_">
                      <use
                        xlinkHref="#SVGID_00000013174424655800619930000002143126314097568410_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000177450458933712544120000009048717848102971054_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 1723.7543 923.8867)"
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
                    id="SVGID_00000052808999528695500800000014438113078919373752_"
                    x="1243.8"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000111160291538327990010000011445016544428923564_">
                  <use
                    xlinkHref="#SVGID_00000052808999528695500800000014438113078919373752_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000111160291538327990010000011445016544428923564_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000085968736345570509190000011488819418841173388_"
                        x="1243.7906"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000049927816751953697240000009245029384466522241_">
                      <use
                        xlinkHref="#SVGID_00000085968736345570509190000011488819418841173388_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000049927816751953697240000009245029384466522241_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 1252.3135 923.8867)"
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
                    id="SVGID_00000159467154315723819340000016542400986391808951_"
                    x="1011.8235"
                    y="915.9905"
                    transform="matrix(0.0042 -1 1 0.0042 91.5672 1940.9327)"
                    width="17.0002"
                    height="17.0001"
                  />
                </defs>
                <clipPath id="SVGID_00000088130154104924498450000012450105728786984606_">
                  <use
                    xlinkHref="#SVGID_00000159467154315723819340000016542400986391808951_"
                    overflow="visible"
                  />
                </clipPath>
                <g
                  transform="matrix(1 0 0 1 0 -6.103516e-05)"
                  clipPath="url(#SVGID_00000088130154104924498450000012450105728786984606_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000054961694521231509240000010172528919670415282_"
                        x="1011.7396"
                        y="916.019"
                        transform="matrix(0.0042 -1 1 0.0042 91.455 1940.8259)"
                        width="16.9489"
                        height="16.9489"
                      />
                    </defs>
                    <clipPath id="SVGID_00000011008750784179042190000015437560256357131423_">
                      <use
                        xlinkHref="#SVGID_00000054961694521231509240000010172528919670415282_"
                        overflow="visible"
                      />
                    </clipPath>

                    <g
                      transform="matrix(1 0 0 1 6.103516e-05 -6.103516e-05)"
                      clipPath="url(#SVGID_00000011008750784179042190000015437560256357131423_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0.0041 -0.0041 0.9685 1020.2622 924.5421)"
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
                    id="SVGID_00000088106308627425738080000013027391501687816068_"
                    x="3342.3999"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000023969783563700306060000001846643145451160225_">
                  <use
                    xlinkHref="#SVGID_00000088106308627425738080000013027391501687816068_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000023969783563700306060000001846643145451160225_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000036937402727417131360000003857938774948031150_"
                        x="3342.354"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000053516050115992699300000008380356591932308645_">
                      <use
                        xlinkHref="#SVGID_00000036937402727417131360000003857938774948031150_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000053516050115992699300000008380356591932308645_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 3350.8767 923.8867)"
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
                    id="SVGID_00000132085494702659273600000007816144597084061325_"
                    x="2877.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000131332590356026338350000012858421539615563953_">
                  <use
                    xlinkHref="#SVGID_00000132085494702659273600000007816144597084061325_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000131332590356026338350000012858421539615563953_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000031893063306517034230000017039734358404314275_"
                        x="2877.4604"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000023261477727930949530000007166295207997641612_">
                      <use
                        xlinkHref="#SVGID_00000031893063306517034230000017039734358404314275_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000023261477727930949530000007166295207997641612_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 2885.9832 923.8867)"
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
                    id="SVGID_00000005962223864949403920000009869475605701089956_"
                    x="3807.3"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000130637274816771321490000001189871372788848280_">
                  <use
                    xlinkHref="#SVGID_00000005962223864949403920000009869475605701089956_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000130637274816771321490000001189871372788848280_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000173147940412368698750000010581169858090636446_"
                        x="3807.2375"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000131357160331666486700000013051606701880010919_">
                      <use
                        xlinkHref="#SVGID_00000173147940412368698750000010581169858090636446_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000131357160331666486700000013051606701880010919_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 3815.7603 923.8867)"
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
                    id="SVGID_00000000906072656563782370000005512498220656388527_"
                    x="4039.7002"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000031904741755522333740000016569434312004815262_">
                  <use
                    xlinkHref="#SVGID_00000000906072656563782370000005512498220656388527_"
                    overflow="visible"
                  />
                </clipPath>
                <g
                  transform="matrix(1 0 0 1 2.441406e-04 0)"
                  clipPath="url(#SVGID_00000031904741755522333740000016569434312004815262_)"
                >
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000111161454867561067850000000423468582215726270_"
                        x="4039.6794"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000007414019545756557330000002498922680675744912_">
                      <use
                        xlinkHref="#SVGID_00000111161454867561067850000000423468582215726270_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0.0002 0)"
                      clipPath="url(#SVGID_00000007414019545756557330000002498922680675744912_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 4048.2021 923.8867)"
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
                    id="SVGID_00000164484114985438717760000007612332425571456924_"
                    x="4504.6001"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000104673466183782373610000002592237522627560862_">
                  <use
                    xlinkHref="#SVGID_00000164484114985438717760000007612332425571456924_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000104673466183782373610000002592237522627560862_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000163066865575350736990000010472852896050462398_"
                        x="4504.5923"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000160187068730080090200000003035484980817603461_">
                      <use
                        xlinkHref="#SVGID_00000163066865575350736990000010472852896050462398_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000160187068730080090200000003035484980817603461_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 4513.1152 923.8867)"
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
                    id="SVGID_00000079481959733384635170000006354854557574026883_"
                    x="4969.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000067232815495054964580000001822311584756036019_">
                  <use
                    xlinkHref="#SVGID_00000079481959733384635170000006354854557574026883_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000067232815495054964580000001822311584756036019_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000119821366799429003330000003611395289517502393_"
                        x="4969.4854"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000153695973073088604740000012117834246617008010_">
                      <use
                        xlinkHref="#SVGID_00000119821366799429003330000003611395289517502393_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000153695973073088604740000012117834246617008010_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 4978.0083 923.8867)"
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
                    id="SVGID_00000133530543599380829310000004651465113172232100_"
                    x="6131.7002"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000183964159258770991790000007772747720660795314_">
                  <use
                    xlinkHref="#SVGID_00000133530543599380829310000004651465113172232100_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000183964159258770991790000007772747720660795314_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000078033347042803016040000001477006949254487741_"
                        x="6131.6855"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000170969303063895689950000003657825051922592419_">
                      <use
                        xlinkHref="#SVGID_00000078033347042803016040000001477006949254487741_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000170969303063895689950000003657825051922592419_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 6140.2085 923.8867)"
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
                    id="SVGID_00000037671729891289890750000000802021323196090004_"
                    x="6596.5674"
                    y="915.3958"
                    transform="matrix(0.9999 -0.0138 0.0138 0.9999 -12.1106 91.1567)"
                    width="16.9999"
                    height="16.9999"
                  />
                </defs>
                <clipPath id="SVGID_00000052077486819373075390000014568850041511304608_">
                  <use
                    xlinkHref="#SVGID_00000037671729891289890750000000802021323196090004_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000052077486819373075390000014568850041511304608_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000010283538669660007780000009516605645806350738_"
                        x="6596.5967"
                        y="915.3621"
                        transform="matrix(0.9999 -0.0138 0.0138 0.9999 -12.1092 91.1522)"
                        width="16.9504"
                        height="16.9504"
                      />
                    </defs>
                    <clipPath id="SVGID_00000051352057462514138160000001721408283686775724_">
                      <use
                        xlinkHref="#SVGID_00000010283538669660007780000009516605645806350738_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 -0.0005 0)"
                      clipPath="url(#SVGID_00000051352057462514138160000001721408283686775724_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 -0.0134 0.0134 0.9685 6605.1211 923.8851)"
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
                    id="SVGID_00000064328300156593046770000005816811594647016834_"
                    x="7061.5"
                    y="915.1"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000132772154967545050500000012554647374093550752_">
                  <use
                    xlinkHref="#SVGID_00000064328300156593046770000005816811594647016834_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000132772154967545050500000012554647374093550752_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000042731388194721376850000007826733546639572869_"
                        x="7061.4722"
                        y="915.1023"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000101073128444144070060000002111265628097106336_">
                      <use
                        xlinkHref="#SVGID_00000042731388194721376850000007826733546639572869_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000101073128444144070060000002111265628097106336_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 7069.9951 923.6251)"
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
                    id="SVGID_00000167372263040726088090000016997261999311358137_"
                    x="7507.5"
                    y="896.4"
                    width="54.8999"
                    height="54.9"
                  />
                </defs>
                <clipPath id="SVGID_00000001659153786904727560000012632548591012151192_">
                  <use
                    xlinkHref="#SVGID_00000167372263040726088090000016997261999311358137_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000001659153786904727560000012632548591012151192_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000168800072042197367760000014949321138203284612_"
                        x="7507.4126"
                        y="896.3813"
                        width="54.914"
                        height="54.914"
                      />
                    </defs>
                    <clipPath id="SVGID_00000137109858135802767660000011852336810750433961_">
                      <use
                        xlinkHref="#SVGID_00000168800072042197367760000014949321138203284612_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000137109858135802767660000011852336810750433961_)"
                    >
                      <use
                        xlinkHref="#Interchange"
                        width="56.8"
                        height="56.8"
                        x="-28.4"
                        y="-28.4"
                        transform="matrix(0.9685 0 0 0.9685 7534.918 923.8867)"
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
                    id="SVGID_00000041975635633431834320000014108682715525806236_"
                    x="2180.2"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000108296609926301345920000014448068938083641769_">
                  <use
                    xlinkHref="#SVGID_00000041975635633431834320000014108682715525806236_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000108296609926301345920000014448068938083641769_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000029007478254013426790000009434334442518226345_"
                        x="2180.125"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000160178424674447153520000010443862169493740191_">
                      <use
                        xlinkHref="#SVGID_00000029007478254013426790000009434334442518226345_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000160178424674447153520000010443862169493740191_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 2188.6477 923.8867)"
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
                    id="SVGID_00000066517872487843424620000005396434122852707505_"
                    x="780.3"
                    y="916.1"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000016774499425239239420000008583321205010517913_">
                  <use
                    xlinkHref="#SVGID_00000066517872487843424620000005396434122852707505_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000016774499425239239420000008583321205010517913_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000026844336067278371330000007889391283001376957_"
                        x="780.2919"
                        y="916.0225"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000106864510127896712550000013447223469183236499_">
                      <use
                        xlinkHref="#SVGID_00000026844336067278371330000007889391283001376957_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000106864510127896712550000013447223469183236499_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 788.8147 924.5453)"
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
                    id="SVGID_00000081619350401632707720000016688464526490199192_"
                    x="546.9"
                    y="916.1"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000136385777954432342060000006395379732081192374_">
                  <use
                    xlinkHref="#SVGID_00000081619350401632707720000016688464526490199192_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000136385777954432342060000006395379732081192374_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000016051401437028959520000005071549635941423794_"
                        x="546.8621"
                        y="916.0225"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000094609747556390467470000008985554345239681184_">
                      <use
                        xlinkHref="#SVGID_00000016051401437028959520000005071549635941423794_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000094609747556390467470000008985554345239681184_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 555.3849 924.5453)"
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
                    id="SVGID_00000007406944171225691860000013651735976462822538_"
                    x="294.5"
                    y="897.1"
                    width="54.9"
                    height="54.9"
                  />
                </defs>
                <clipPath id="SVGID_00000121987722768852299810000004492809384265489835_">
                  <use
                    xlinkHref="#SVGID_00000007406944171225691860000013651735976462822538_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000121987722768852299810000004492809384265489835_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000021089662744185718200000011717886514204326048_"
                        x="294.4497"
                        y="897.0399"
                        width="54.914"
                        height="54.914"
                      />
                    </defs>
                    <clipPath id="SVGID_00000018951316451150212410000017885620045707560364_">
                      <use
                        xlinkHref="#SVGID_00000021089662744185718200000011717886514204326048_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000018951316451150212410000017885620045707560364_)"
                    >
                      <use
                        xlinkHref="#Interchange"
                        width="56.8"
                        height="56.8"
                        x="-28.4"
                        y="-28.4"
                        transform="matrix(0.9685 0 0 0.9685 321.9551 924.5453)"
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
                    id="SVGID_00000160151887117382454270000010170019691289723048_"
                    x="1484.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000078013622651045479380000000063779374987223433_">
                  <use
                    xlinkHref="#SVGID_00000160151887117382454270000010170019691289723048_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000078013622651045479380000000063779374987223433_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000165204014181115796810000005951300094283027879_"
                        x="1484.4652"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000162328525905777980210000007696556730270582163_">
                      <use
                        xlinkHref="#SVGID_00000165204014181115796810000005951300094283027879_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000162328525905777980210000007696556730270582163_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 1492.988 923.8867)"
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
                    id="SVGID_00000173850463674823710100000011126978387502701960_"
                    x="4272.2002"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000132056132888917913870000000843289056001612222_">
                  <use
                    xlinkHref="#SVGID_00000173850463674823710100000011126978387502701960_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000132056132888917913870000000843289056001612222_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000024683127424511311920000014984548005578814135_"
                        x="4272.1309"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000005956922567933320020000016320841610178039988_">
                      <use
                        xlinkHref="#SVGID_00000024683127424511311920000014984548005578814135_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000005956922567933320020000016320841610178039988_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 4280.6538 923.8867)"
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
                    id="SVGID_00000072962265816033831620000012810639806755709063_"
                    x="1947.7"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000014619563372617419250000010805580618075312806_">
                  <use
                    xlinkHref="#SVGID_00000072962265816033831620000012810639806755709063_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000014619563372617419250000010805580618075312806_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000039123415586511184680000003818181017388794809_"
                        x="1947.6831"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000086654220368345629510000009103242942831078574_">
                      <use
                        xlinkHref="#SVGID_00000039123415586511184680000003818181017388794809_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000086654220368345629510000009103242942831078574_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 1956.2059 923.8867)"
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
                    id="SVGID_00000176026171644670158400000012843948331708514725_"
                    x="2412.6001"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000019669426416681327160000010717400204129353090_">
                  <use
                    xlinkHref="#SVGID_00000176026171644670158400000012843948331708514725_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000019669426416681327160000010717400204129353090_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000089548672108341360510000007091958392026303643_"
                        x="2412.5767"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000176028844365404732910000008624170730932479132_">
                      <use
                        xlinkHref="#SVGID_00000089548672108341360510000007091958392026303643_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000176028844365404732910000008624170730932479132_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 2421.0994 923.8867)"
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
                    id="SVGID_00000138546503513374776100000004102871594843784849_"
                    x="2645.1001"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000126298937271257539130000017241291895518420869_">
                  <use
                    xlinkHref="#SVGID_00000138546503513374776100000004102871594843784849_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000126298937271257539130000017241291895518420869_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000166642738103332423230000003570618646763322526_"
                        x="2645.0283"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000084525423304984719690000010656131620999598778_">
                      <use
                        xlinkHref="#SVGID_00000166642738103332423230000003570618646763322526_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000084525423304984719690000010656131620999598778_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 2653.551 923.8867)"
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
                    id="SVGID_00000109728694893257730700000010502895798477139898_"
                    x="3110"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000089570571763131634280000007298296290641439886_">
                  <use
                    xlinkHref="#SVGID_00000109728694893257730700000010502895798477139898_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000089570571763131634280000007298296290641439886_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000046338663819350090230000010931997567367608716_"
                        x="3109.9121"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000048487515466309648310000007786495225031255207_">
                      <use
                        xlinkHref="#SVGID_00000046338663819350090230000010931997567367608716_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000048487515466309648310000007786495225031255207_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 3118.4348 923.8867)"
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
                    id="SVGID_00000152968221794245575860000013365792697520462507_"
                    x="3574.8"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000054953983214468982850000015729267760213690039_">
                  <use
                    xlinkHref="#SVGID_00000152968221794245575860000013365792697520462507_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000054953983214468982850000015729267760213690039_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000172405203894502768690000007207282795213619112_"
                        x="3574.8054"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000053547776631094766020000004397023877495559355_">
                      <use
                        xlinkHref="#SVGID_00000172405203894502768690000007207282795213619112_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000053547776631094766020000004397023877495559355_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 3583.3281 923.8867)"
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
                    id="SVGID_00000143616538879853104740000008669491100676968118_"
                    x="4737.1001"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000042014816436212997640000003914047759473259648_">
                  <use
                    xlinkHref="#SVGID_00000143616538879853104740000008669491100676968118_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000042014816436212997640000003914047759473259648_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000069374510449402442230000015302228229117583262_"
                        x="4737.0439"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000025438274501292541310000012826529977697528483_">
                      <use
                        xlinkHref="#SVGID_00000069374510449402442230000015302228229117583262_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000025438274501292541310000012826529977697528483_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 4745.5669 923.8867)"
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
                    id="SVGID_00000109746711598964445470000015289748797591755160_"
                    x="5202"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000167369834766854073300000003211659194520248981_">
                  <use
                    xlinkHref="#SVGID_00000109746711598964445470000015289748797591755160_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000167369834766854073300000003211659194520248981_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000181795098845009963970000015937960364914833321_"
                        x="5201.937"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000146477807396982447770000009743110315525155765_">
                      <use
                        xlinkHref="#SVGID_00000181795098845009963970000015937960364914833321_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000146477807396982447770000009743110315525155765_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 5210.46 923.8867)"
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
                    id="SVGID_00000098937219055532128520000000238953001186792888_"
                    x="5434.3999"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000169541614139072388500000008203946044178475453_">
                  <use
                    xlinkHref="#SVGID_00000098937219055532128520000000238953001186792888_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000169541614139072388500000008203946044178475453_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000093875683345546216010000014453102333182214073_"
                        x="5434.3887"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000083066246842096024730000007319696047526360732_">
                      <use
                        xlinkHref="#SVGID_00000093875683345546216010000014453102333182214073_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000083066246842096024730000007319696047526360732_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 5442.9116 923.8867)"
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
                    id="SVGID_00000183930886149810457680000013110456430494060951_"
                    x="5666.8999"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000143618103178723006310000013791389145629957556_">
                  <use
                    xlinkHref="#SVGID_00000183930886149810457680000013110456430494060951_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000143618103178723006310000013791389145629957556_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000060734434770397967800000000882232813005364137_"
                        x="5666.8403"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000091001154724337413730000012931841425276284069_">
                      <use
                        xlinkHref="#SVGID_00000060734434770397967800000000882232813005364137_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000091001154724337413730000012931841425276284069_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 5675.3633 923.8867)"
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
                    id="SVGID_00000017485266562207423820000009326413576450986655_"
                    x="5899.2998"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000178195325565205308590000012004943589700813999_">
                  <use
                    xlinkHref="#SVGID_00000017485266562207423820000009326413576450986655_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000178195325565205308590000012004943589700813999_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000131341098838108178350000002352553141045179530_"
                        x="5899.292"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000029031856468089215160000017385549425025802173_">
                      <use
                        xlinkHref="#SVGID_00000131341098838108178350000002352553141045179530_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000029031856468089215160000017385549425025802173_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 5907.8149 923.8867)"
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
                    id="SVGID_00000154401248847949482430000003611926264097688454_"
                    x="6364.2002"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000109012969373559233550000002247210476880914071_">
                  <use
                    xlinkHref="#SVGID_00000154401248847949482430000003611926264097688454_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000109012969373559233550000002247210476880914071_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000170965452872080907210000001394337207713137325_"
                        x="6364.1948"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000014613497590814766560000017694646589756826542_">
                      <use
                        xlinkHref="#SVGID_00000170965452872080907210000001394337207713137325_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000014613497590814766560000017694646589756826542_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 6372.7178 923.8867)"
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
                    id="SVGID_00000132061319164152671290000010775018374367735469_"
                    x="6829.1001"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000019669977932658803840000007886869448236257933_">
                  <use
                    xlinkHref="#SVGID_00000132061319164152671290000010775018374367735469_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000019669977932658803840000007886869448236257933_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000067195547298882954160000001626900819770743970_"
                        x="6829.0981"
                        y="915.3639"
                        width="16.9487"
                        height="16.9487"
                      />
                    </defs>
                    <clipPath id="SVGID_00000091725221896102974130000009053221626683967673_">
                      <use
                        xlinkHref="#SVGID_00000067195547298882954160000001626900819770743970_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g
                      transform="matrix(1 0 0 1 0 0)"
                      clipPath="url(#SVGID_00000091725221896102974130000009053221626683967673_)"
                    >
                      <use
                        xlinkHref="#Stop"
                        width="17.6"
                        height="17.6"
                        x="-8.8"
                        y="-8.8"
                        transform="matrix(0.9685 0 0 0.9685 6837.6211 923.8867)"
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
              d="M7381.7998,782.4h7.6001l-10.7002,38.5h-7.7002l-8.7998-27.4l-8.7998,27.4h-7.7998l-10.7002-38.5h7.8999
l7.1001,26.5l8.5-26.5h7.7002l8.6001,26.6L7381.7998,782.4z"
            />
            <path
              fill="#2D2A26"
              d="M7419.2998,807.6c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S7419.2998,799.3,7419.2998,807.6z
M7412.1001,807.6c0-5-3.2002-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6s3.2998,7.6,6.7998,7.6S7412.1001,812.6,7412.1001,807.6z"
            />
            <path fill="#2D2A26" d="M7424.2998,820.9v-39.3h7.2002v39.3H7424.2998z" />
            <path
              fill="#2D2A26"
              d="M7453.3999,820.9h-7.2002l-10.8999-26.7h7.8999l6.6001,17.9l6.2998-17.9h7.6001L7453.3999,820.9z"
            />
            <path
              fill="#2D2A26"
              d="M7491.3999,813.2c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L7491.3999,813.2z M7484.7002,804.5
c-0.1001-2.7-1.8999-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H7484.7002z"
            />
            <path
              fill="#2D2A26"
              d="M7513.1001,801.4c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7
v4c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V801.4z"
            />
            <path
              fill="#2D2A26"
              d="M7524.7002,820.9H7517.5v-39.3h7.2002v14.8c1.8999-1.9,4.5-3,7.2002-2.9c6.7998,0,9.8999,4.7,9.8999,10.6
v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.7998,2.3-5,5.2V820.9z"
            />
            <path
              fill="#2D2A26"
              d="M7554.7998,805.5l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C7546.7998,808.9,7550.2998,806.2,7554.7998,805.5z M7563.3999,810.1v-1.2l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C7560.5,816.3,7563.3999,814.8,7563.3999,810.1L7563.3999,810.1z"
            />
            <path
              fill="#2D2A26"
              d="M7577,820.9v-26.7h6.8999v3.3c1.5-2.6,4.7998-4,7.7998-4c3.6001,0,6.6001,1.6,7.8999,4.4
c1.7998-2.9,5-4.6,8.5-4.4c4.8999,0,9.7002,3,9.7002,10.1v17.3h-7v-15.8c0-2.9-1.3999-5-4.7002-5c-3.1001,0-4.8999,2.4-4.8999,5.3
v15.6h-7.2002v-15.8c0-2.9-1.5-5-4.7002-5c-3.2998,0-5,2.3-5,5.3v15.6H7577V820.9z"
            />
            <path
              fill="#2D2A26"
              d="M7624.3999,831.2v-37h7v3.3c1.2002-2.1,4.2002-3.9,8.2002-3.9c7.7998,0,12.2998,6,12.2998,13.9
c0,8.1-5,14-12.6001,14c-3.7002,0-6.3999-1.5-7.7002-3.2v12.9H7624.3999z M7638.2002,800.1c-3.7002,0-6.7002,2.8-6.7002,7.5
s3,7.5,6.7002,7.5s6.6001-2.8,6.6001-7.5C7644.7998,802.8,7641.8999,800.1,7638.2002,800.1L7638.2002,800.1z"
            />
            <path
              fill="#2D2A26"
              d="M7665.8999,794.2h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L7665.8999,794.2z"
            />
            <path
              fill="#2D2A26"
              d="M7702.5,807.6c0.2002,7.6-5.7002,13.9-13.2002,14.1c-0.2002,0-0.5,0-0.7002,0c-8,0-14-6-14-14.2
s6-14.2,14-14.2C7696.5,793.4,7702.5,799.3,7702.5,807.6z M7695.2998,807.6c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6
s3.2998,7.6,6.7998,7.6C7692.1001,815.1,7695.2998,812.6,7695.2998,807.6z"
            />
            <path
              fill="#2D2A26"
              d="M7714.7998,820.9h-7.2002v-26.7h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6
v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L7714.7998,820.9z"
            />
            <path
              fill="#2D2A26"
              d="M7407.7002,847c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2002,4.3l5.3999,1
c7,1.4,10.7002,5.9,10.7002,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2002,0-14.7002-6.6-15.2998-12l6.8999-1.8
c0.2998,3.8,3,7.2,8.3999,7.2c4,0,6.2002-2,6.2002-4.7c0-2.2-1.7002-4-4.7002-4.6l-5.3999-1.1c-6.1001-1.2-10.1001-5.2-10.1001-11
c0-6.8,6.1001-12,13.3999-12c9.2998,0,12.8999,5.6,13.7998,10L7407.7002,847z"
            />
            <path
              fill="#2D2A26"
              d="M7429,847.5h5.3999v6.4H7429V865c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L7429,847.5z"
            />
            <path
              fill="#2D2A26"
              d="M7444.2998,864.7c2.7002,0,4.8999,2.2,4.8999,4.9s-2.2002,4.9-4.8999,4.9s-4.8999-2.2-4.8999-4.9
C7439.2998,866.9,7441.5,864.7,7444.2998,864.7z"
            />
            <path
              fill="#2D2A26"
              d="M7498,874.2l-0.5-4.4c-1.7002,2.6-5.5,5.2-11.2998,5.2c-10.3999,0-19.2002-7.6-19.2002-20
s9.2998-20.1,19.7002-20.1c10.1001,0,15.7002,5.9,17.6001,11.8l-7.2002,2.5c-1-3.4-4.2002-7.4-10.3999-7.4
c-5.7998,0-12.1001,4-12.1001,13.1c0,8.7,5.7002,13.2,12.1001,13.2c7.1001,0,9.8999-4.8,10.2998-7.5h-12.1001v-6.5h19.2002v20H7498
V874.2z"
            />
            <path
              fill="#2D2A26"
              d="M7534.2998,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2H7515.5
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L7534.2998,866.5z M7527.6001,857.8
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H7527.6001z"
            />
            <path
              fill="#2D2A26"
              d="M7565.7002,860.8c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2
C7559.7002,846.7,7565.7002,852.6,7565.7002,860.8z M7558.5,860.8c0-5-3.2002-7.6-6.7998-7.6c-3.5,0-6.7998,2.5-6.7998,7.6
s3.2998,7.6,6.7998,7.6C7555.2002,868.4,7558.6001,865.9,7558.5,860.8L7558.5,860.8z"
            />
            <path
              fill="#2D2A26"
              d="M7587,854.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V854.6z"
            />
            <path
              fill="#2D2A26"
              d="M7595.8999,873.9c0.5,3,3.1001,5.2,6.2002,5.1c4.6001,0,7.1001-2.3,7.1001-7.4v-1.9
c-1.1001,1.7-3.6001,3.4-7.3999,3.4c-7.1001,0-12.3999-5.5-12.3999-13c0-7.1,5.1001-13,12.3999-13c4.2002,0,6.7002,1.8,7.6001,3.6
v-3.1h6.8999v23.8c0,7.3-4,14-14,14c-7.2998,0-12.2002-4.6-13-9.7L7595.8999,873.9z M7609.3999,860c0-4.1-2.7998-6.8-6.2998-6.8
s-6.3999,2.6-6.3999,6.8s2.7002,6.8,6.3999,6.8S7609.3999,864.1,7609.3999,860z"
            />
            <path
              fill="#2D2A26"
              d="M7647,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L7647,866.5z M7640.2002,857.8c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H7640.2002z"
            />
            <path
              fill="#2D2A26"
              d="M7654.7002,835.4c2.8999,0,4.7002,2.4,4.7002,5.3c0,7.3-5,9.9-8.3999,10.2v-3.3
c2.3999-0.4,4.2002-2.2,4.3999-4.6c-0.2998,0.2-0.7002,0.3-1.1001,0.3c-2,0.1-3.7998-1.4-4-3.5c0-0.1,0-0.3,0-0.4
c0.1001-2.3,2-4.1,4.2002-4C7654.7002,835.4,7654.7002,835.4,7654.7002,835.4z"
            />
            <path
              fill="#2D2A26"
              d="M7668.3999,865.4c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4
c-0.2998-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L7668.3999,865.4z"
            />
          </g>
          <g id="The_Royal">
            <path
              fill="#2D2A26"
              d="M6968.7998,974.3v31.4h-7.5v-31.4h-12.1001v-7.1h31.7998v7.1H6968.7998z"
            />
            <path
              fill="#2D2A26"
              d="M6992.2002,1005.7H6985v-39.3h7.2002v14.8c1.7002-2.1,4.7002-2.9,7.2002-2.9
c6.7998,0,9.8999,4.7,9.8999,10.6v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.7998,2.3-5,5.2V1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M7039.8999,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L7039.8999,998z M7033.2002,989.3c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H7033.2002z"
            />
            <path
              fill="#2D2A26"
              d="M7070.1001,990.9h-3.8999v14.8h-7.5v-38.5h15c7.5,0,12.2998,5.2,12.2998,11.8
c0.2002,5.1-3.2002,9.6-8.2002,10.9l8.2002,15.7h-8.2998L7070.1001,990.9z M7072.2998,984.4c3.7998,0,6-2.2,6-5.3
s-2.2002-5.4-6-5.4h-6.1001v10.7H7072.2998z"
            />
            <path
              fill="#2D2A26"
              d="M7117.2998,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S7117.2998,984.1,7117.2998,992.3z
M7110.1001,992.3c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6s3.2998,7.6,6.7998,7.6
C7106.8999,999.9,7110.1001,997.4,7110.1001,992.3L7110.1001,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M7124,1016.2l6.2998-13.9L7119,979h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.7998,37.2H7124z"
            />
            <path
              fill="#2D2A26"
              d="M7158.5,990.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C7150.5,993.6,7154,991,7158.5,990.3z M7167,994.9v-1.2l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4c0,1.6,1.1001,3.1,3.5,3.1
C7164.2002,1001.1,7167,999.6,7167,994.9L7167,994.9z"
            />
            <path fill="#2D2A26" d="M7180.7002,1005.7v-39.3h7.2002v39.3H7180.7002z" />
          </g>
          <g id="Priestfield">
            {!isSelectedStation('Priestfield') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M6697.3999,816.2h280.2002c7,0,12.7998,5.7,12.7998,12.8v47.8c0,7-5.7002,12.8-12.7998,12.8h-280.2002
c-7,0-12.7998-5.7-12.7998-12.8V829C6684.6001,821.9,6690.3999,816.2,6697.3999,816.2z"
                />
                <path
                  fill="#1D1D1C"
                  d="M6977.6001,817.6c6.2002,0,11.2998,5.1,11.2998,11.3v47.8c0,6.2-5.1001,11.3-11.2998,11.3h-280.2002
c-6.2002,0-11.2998-5.1-11.2998-11.3l0,0v-47.8c0-6.2,5.1001-11.3,11.2998-11.3H6977.6001 M6977.6001,814.7h-280.2002
c-7.7998,0-14.2002,6.4-14.2002,14.2v47.8c0,7.8,6.3999,14.2,14.2002,14.2h280.2002c7.7998,0,14.2002-6.4,14.2002-14.2v-47.8
C6991.7998,821.1,6985.5,814.7,6977.6001,814.7z"
                />
              </>
            )}
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000120524039036719959980000004229744032039352496_"
                    x="6803.2002"
                    y="720.7"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000013912737238761923630000016807939395793770905_">
                  <use
                    xlinkHref="#SVGID_00000120524039036719959980000004229744032039352496_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000013912737238761923630000016807939395793770905_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000094581862459823821390000013664588346061619612_"
                        x="6803.2041"
                        y="720.6609"
                        width="68.4373"
                        height="68.4373"
                      />
                    </defs>
                    <clipPath id="SVGID_00000064312764517831242220000006165501284887892638_">
                      <use
                        xlinkHref="#SVGID_00000094581862459823821390000013664588346061619612_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000064312764517831242220000006165501284887892638_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="72.1"
                        height="72.1"
                        x="-36.05"
                        y="-36.05"
                        transform="matrix(0.9492 0 0 0.9492 6837.5176 754.8795)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              fill="#2D2A26"
              d="M6724,859.7v14.5h-7.5v-38.5h14.3999c7.6001,0,12.6001,5,12.6001,12c0,6.9-5,12-12.6001,12H6724z
M6730,853.2c3.7002,0,6-2.2,6-5.5s-2.2998-5.5-6-5.5h-5.8999v11H6730z"
            />
            <path
              fill="#2D2A26"
              d="M6764.5,854.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V854.6z"
            />
            <path
              fill="#2D2A26"
              d="M6772.3999,834.2c2.5,0,4.3999,2,4.3999,4.4s-2,4.4-4.3999,4.4s-4.3999-2-4.3999-4.4
C6767.8999,836.3,6769.8999,834.3,6772.3999,834.2C6772.2998,834.2,6772.3999,834.2,6772.3999,834.2z M6768.7998,874.2v-26.7H6776
v26.7H6768.7998z"
            />
            <path
              fill="#2D2A26"
              d="M6807,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L6807,866.5z M6800.2002,857.8c-0.1001-2.7-1.7998-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H6800.2002z"
            />
            <path
              fill="#2D2A26"
              d="M6816.2998,865.4c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4
c-0.2998-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L6816.2998,865.4z"
            />
            <path
              fill="#2D2A26"
              d="M6845.7002,847.5h5.3999v6.4h-5.3999V865c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
V847.5H6845.7002z"
            />
            <path
              fill="#2D2A26"
              d="M6865,853.7v20.5h-7.2998v-20.5h-4.3999v-6.2h4.3999v-3c0-6,3.7998-9.9,9.7002-9.9
c1.2002,0,2.3999,0.2,3.6001,0.5v6.1c-0.7002-0.2-1.5-0.3-2.2998-0.3c-1.8999-0.2-3.6001,1.2-3.7002,3.1c0,0.2,0,0.4,0,0.6v2.9
h17.7998v26.7h-7.2002v-20.5L6865,853.7L6865,853.7z M6879.2002,834.2c2.5,0,4.5,2,4.5,4.5c-0.1001,2.5-2.2002,4.4-4.7002,4.2
c-2.2998-0.1-4.1001-1.9-4.2002-4.2C6874.7998,836.2,6876.7002,834.2,6879.2002,834.2L6879.2002,834.2z"
            />
            <path
              fill="#2D2A26"
              d="M6913.7998,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2H6895
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L6913.7998,866.5z M6907.1001,857.8
c-0.1001-2.7-1.8999-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H6907.1001z"
            />
            <path fill="#2D2A26" d="M6919.2998,874.2v-39.3h7.2002v39.3H6919.2998z" />
            <path
              fill="#2D2A26"
              d="M6959,869.3c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L6959,869.3z M6945.3999,868.4c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C6938.7998,865.6,6941.6001,868.4,6945.3999,868.4L6945.3999,868.4z"
            />
          </g>
          <g id="The_Crescent">
            <path
              fill="#2D2A26"
              d="M6460.2002,974.3v31.4h-7.5v-31.4H6440.5v-7.1h31.7998v7.1H6460.2002z"
            />
            <path
              fill="#2D2A26"
              d="M6483.7002,1005.7H6476.5v-39.3h7.2002v14.8c1.7002-2.1,4.7002-2.9,7.2002-2.9
c6.7998,0,9.8999,4.7,9.8999,10.6v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.7998,2.3-5,5.2V1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M6531.3999,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L6531.3999,998z M6524.7002,989.3c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H6524.7002z"
            />
            <path
              fill="#2D2A26"
              d="M6547.7998,986.5c0-12.3,9.2998-20.1,19.6001-20.1c10.7002,0,16.1001,6.5,17.6001,12.7l-7,2.2
c-1-3.7-3.8999-7.7-10.6001-7.7c-5.7002,0-11.7998,4.1-11.7998,12.9c0,8.2,5.7002,12.7,11.8999,12.7c5,0.2,9.5-3,10.7998-7.9l7,2.1
c-1.5,5.9-7,13.1-17.7998,13.1S6547.7998,998.7,6547.7998,986.5z"
            />
            <path
              fill="#2D2A26"
              d="M6606.6001,986.1c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002V979h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7002,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M6634.7998,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2H6616
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L6634.7998,998z M6628.1001,989.3c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H6628.1001z"
            />
            <path
              fill="#2D2A26"
              d="M6644.1001,996.9c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4
c-0.2002-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.3L6644.1001,996.9z"
            />
            <path
              fill="#2D2A26"
              d="M6669.7998,992.3c0,4.8,3.1001,7.5,6.7998,7.5c2.7998,0.1,5.3999-1.8,6.1001-4.5l6.2998,2.1
c-1.2002,4.4-5.3999,9-12.5,9c-7.6001,0.1-13.8999-5.9-14.1001-13.6c0-0.2,0-0.4,0-0.6c0-8.2,6.1001-14.2,13.7998-14.2
c7.2998,0,11.3999,4.5,12.5,9l-6.5,2.2c-0.6001-2.7-3.1001-4.6-5.8999-4.5C6672.8999,984.8,6669.7998,987.5,6669.7998,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M6717.7002,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L6717.7002,998z M6711,989.3c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H6711z"
            />
            <path
              fill="#2D2A26"
              d="M6730.2998,1005.7h-7.2002V979h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6v16.8
h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L6730.2998,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M6763,979h5.3999v6.4H6763v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998V979h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2V971h6.5
L6763,979z"
            />
          </g>
          <g id="Bilston_Central">
            <path
              fill="#2D2A26"
              d="M6208.6001,835.7c7.5,0,11.7002,4.4,11.7002,10.4c0.1001,3.7-2.2002,7-5.6001,8.2
c4.1001,1.1,6.8999,4.9,6.7998,9.1c0,6.2-4.7002,10.7-11.8999,10.7h-14.7998v-38.5h13.7998V835.7z M6207.5,851.6
c3.3999,0,5.5-1.9,5.5-4.8s-1.8999-4.8-5.5-4.8h-5.2998v9.6H6207.5z M6208.2998,867.9c3.6001,0,5.7998-1.9,5.7998-5
s-1.8999-5.2-5.7002-5.2h-6.2002v10.1L6208.2998,867.9z"
            />
            <path
              fill="#2D2A26"
              d="M6230.2998,834.2c2.5,0,4.3999,2,4.3999,4.4s-2,4.4-4.3999,4.4s-4.3999-2-4.3999-4.4
C6225.7998,836.3,6227.7998,834.3,6230.2998,834.2C6230.2002,834.2,6230.2998,834.2,6230.2998,834.2z M6226.7002,874.2v-26.7
h7.2002v26.7H6226.7002z"
            />
            <path fill="#2D2A26" d="M6241,874.2v-39.3h7.2002v39.3H6241z" />
            <path
              fill="#2D2A26"
              d="M6259.1001,865.4c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.2002,4.8,10.5,7.7l-6,1.4
c-0.2998-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L6259.1001,865.4z"
            />
            <path
              fill="#2D2A26"
              d="M6288.5,847.5h5.3999v6.4H6288.5V865c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.2998c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L6288.5,847.5z"
            />
            <path
              fill="#2D2A26"
              d="M6325.1001,860.8c0,7.7-6.2002,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
S6325.1001,852.6,6325.1001,860.8z M6317.8999,860.8c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6s3.2998,7.6,6.7998,7.6
C6314.7002,868.4,6317.8999,865.9,6317.8999,860.8z"
            />
            <path
              fill="#2D2A26"
              d="M6337.3999,874.2h-7.2002v-26.7h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6
v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L6337.3999,874.2z"
            />
            <path
              fill="#2D2A26"
              d="M6372.2002,855c0-12.3,9.2998-20.1,19.6001-20.1c10.7002,0,16.1001,6.5,17.6001,12.7l-7.1001,2.2
c-0.8999-3.7-3.8999-7.7-10.6001-7.7c-5.7998,0-11.7998,4.1-11.7998,12.9c0,8.2,5.7998,12.7,11.8999,12.7c5,0.2,9.5-3,10.7998-7.9
l7,2.1c-1.5,5.9-7,13.1-17.7998,13.1S6372.2002,867.2,6372.2002,855z"
            />
            <path
              fill="#2D2A26"
              d="M6438.7002,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L6438.7002,866.5z M6431.8999,857.8
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H6431.8999z"
            />
            <path
              fill="#2D2A26"
              d="M6451.2998,874.2h-7.2002v-26.7h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6
v16.8h-7.2998v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L6451.2998,874.2z"
            />
            <path
              fill="#2D2A26"
              d="M6484,847.5h5.3999v6.4H6484V865c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L6484,847.5z"
            />
            <path
              fill="#2D2A26"
              d="M6511,854.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V854.6z"
            />
            <path
              fill="#2D2A26"
              d="M6521.6001,858.8l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C6513.6001,862.1,6517.1001,859.5,6521.6001,858.8z M6530.2002,863.4v-1.2l-6,0.9c-1.8999,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C6527.2998,869.6,6530.2002,868.1,6530.2002,863.4z"
            />
            <path fill="#2D2A26" d="M6543.7998,874.2v-39.3H6551v39.3H6543.7998z" />
          </g>
          <g id="Loxdale">
            <path fill="#2D2A26" d="M6047.3999,1005.7v-38.5h7.5v31.3H6072v7.2H6047.3999z" />
            <path
              fill="#2D2A26"
              d="M6102.6001,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S6102.6001,984.1,6102.6001,992.3z
M6095.3999,992.3c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6s3.2998,7.6,6.7998,7.6
C6092.1001,999.9,6095.3999,997.4,6095.3999,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M6113.8999,992.3l-9.5-13.3H6113c0.8999,1.5,4.3999,6.5,5.2998,7.9l5.2998-7.9h8.2002l-9.2998,13.1
l9.7002,13.6h-8.5l-5.6001-8.2c-1,1.5-4.6001,6.7-5.5,8.2H6104.5L6113.8999,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M6161.2998,1000.8c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14.1c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L6161.2998,1000.8z M6147.7002,999.9c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C6141.1001,997,6143.8999,999.9,6147.7002,999.9L6147.7002,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M6174.7998,990.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C6166.7002,993.6,6170.2998,991,6174.7998,990.3z M6183.2998,994.9v-1.2l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C6180.5,1001.1,6183.2998,999.6,6183.2998,994.9L6183.2998,994.9z"
            />
            <path fill="#2D2A26" d="M6197,1005.7v-39.3h7.2002v39.3H6197z" />
            <path
              fill="#2D2A26"
              d="M6235.2002,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L6235.2002,998z M6228.5,989.3c-0.1001-2.7-1.7998-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H6228.5z"
            />
          </g>
          <g id="Bradley_Lane">
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000183226333368062881820000002612078498711689878_"
                    x="5873.5"
                    y="729.4"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000162332766921898115260000001993337264488554908_">
                  <use
                    xlinkHref="#SVGID_00000183226333368062881820000002612078498711689878_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000162332766921898115260000001993337264488554908_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000126322462497232271900000004187042032315926174_"
                        x="5873.4263"
                        y="729.3778"
                        width="68.4373"
                        height="68.4373"
                      />
                    </defs>
                    <clipPath id="SVGID_00000079450321197675955230000005459491127630064559_">
                      <use
                        xlinkHref="#SVGID_00000126322462497232271900000004187042032315926174_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000079450321197675955230000005459491127630064559_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="72.1"
                        height="72.1"
                        x="-36.05"
                        y="-36.05"
                        transform="matrix(0.9492 0 0 0.9492 5907.7397 763.5964)"
                        overflow="visible"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              fill="#2D2A26"
              d="M5766.2002,835.7c7.5,0,11.7002,4.4,11.7002,10.4c0.1001,3.7-2.1001,7-5.6001,8.2
c4.1001,1.1,6.8999,4.9,6.7998,9.1c0,6.2-4.7002,10.7-11.8999,10.7h-14.8999v-38.5h13.8999V835.7z M5765.1001,851.6
c3.3999,0,5.5-1.9,5.5-4.8s-1.8999-4.8-5.5-4.8h-5.2998v9.6H5765.1001z M5765.7998,867.9c3.6001,0,5.7998-1.9,5.7998-5
s-1.8999-5.2-5.7002-5.2h-6.2002v10.1L5765.7998,867.9z"
            />
            <path
              fill="#2D2A26"
              d="M5800.5,854.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V854.6z"
            />
            <path
              fill="#2D2A26"
              d="M5811.2002,858.8l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2H5820.5
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5803.2002,862.1,5806.7002,859.5,5811.2002,858.8z M5819.7002,863.4v-1.2l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5816.8999,869.6,5819.7002,868.1,5819.7002,863.4L5819.7002,863.4z"
            />
            <path
              fill="#2D2A26"
              d="M5858.7998,869.3c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L5858.7998,869.3z M5845.2998,868.4c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C5838.7002,865.6,5841.5,868.4,5845.2998,868.4L5845.2998,868.4z"
            />
            <path fill="#2D2A26" d="M5866,874.2v-39.3h7.2002v39.3H5866z" />
            <path
              fill="#2D2A26"
              d="M5904.2002,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5904.2002,866.5z M5897.5,857.8c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H5897.5z"
            />
            <path
              fill="#2D2A26"
              d="M5911.2002,884.7l6.2998-13.9l-11.2998-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.7998,37.2
H5911.2002z"
            />
            <path fill="#2D2A26" d="M5952.6001,874.2v-38.5h7.5V867h17.1001v7.2H5952.6001z" />
            <path
              fill="#2D2A26"
              d="M5988.1001,858.8l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5980.2002,862.1,5983.7002,859.5,5988.1001,858.8z M5996.7002,863.4v-1.2l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5993.8999,869.6,5996.7002,868.1,5996.7002,863.4L5996.7002,863.4z"
            />
            <path
              fill="#2D2A26"
              d="M6017.6001,874.2h-7.2002v-26.7h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6
v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L6017.6001,874.2z"
            />
            <path
              fill="#2D2A26"
              d="M6065.2998,866.5c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2H6046.5
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L6065.2998,866.5z M6058.6001,857.8
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H6058.6001z"
            />
          </g>
          <g id="Wednesbury_Parkway">
            <path
              fill="#2D2A26"
              d="M5564.6001,967.2h7.7002l-10.7002,38.5h-7.7002l-8.7998-27.4l-8.7998,27.4h-7.7998l-10.7002-38.5h7.8999
l7.1001,26.5l8.5-26.5h7.7002l8.6001,26.6L5564.6001,967.2z"
            />
            <path
              fill="#2D2A26"
              d="M5600,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5600,998z M5593.2998,989.3c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H5593.2998z"
            />
            <path
              fill="#2D2A26"
              d="M5630.7998,1000.8c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14.1c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L5630.7998,1000.8z M5617.2998,999.9c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C5610.7002,997.1,5613.5,999.9,5617.2998,999.9L5617.2998,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M5645.2002,1005.7H5638V979h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6v16.8
h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L5645.2002,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M5692.8999,998c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L5692.8999,998z M5686.2002,989.3
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H5686.2002z"
            />
            <path
              fill="#2D2A26"
              d="M5702.2998,996.9c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.2002,4.8,10.5,7.7l-6,1.4
c-0.2998-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L5702.2998,996.9z"
            />
            <path
              fill="#2D2A26"
              d="M5722.7002,1005.7v-39.3h7.1001v15.5c1.2002-1.9,4.1001-3.6,8.1001-3.6c7.7998,0,12.2998,6,12.2998,13.9
c0,8.1-5,14.1-12.6001,14.1c-3.7002,0-6.5-1.6-7.8999-3.9v3.3H5722.7002z M5736.3999,984.7c-3.6001,0-6.7002,2.7-6.7002,7.5
s3,7.6,6.7002,7.6c3.6001,0,6.6001-2.7,6.6001-7.6S5740.1001,984.7,5736.3999,984.7L5736.3999,984.7z"
            />
            <path
              fill="#2D2A26"
              d="M5772.5,1002.8c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5V979h7.2002v15.4
c0,3,1.5,5.4,4.7998,5.4c3.2002,0,5-2.2,5-5.3V979h7.2002v21.9c0,1.6,0.1001,3.2,0.2998,4.8h-6.8999
C5772.6001,1004.7,5772.5,1003.8,5772.5,1002.8z"
            />
            <path
              fill="#2D2A26"
              d="M5802.7002,986.1c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002V979h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M5808.5,1016.2l6.2998-13.9L5803.5,979h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.8999,37.2H5808.5z"
            />
            <path
              fill="#2D2A26"
              d="M5580,1044.5v14.5h-7.5v-38.5h14.3999c7.6001,0,12.6001,5,12.6001,12c0,6.9-5,12-12.6001,12H5580z
M5586,1038c3.7002,0,6-2.2,6-5.5s-2.2998-5.5-6-5.5h-5.8999v11H5586z"
            />
            <path
              fill="#2D2A26"
              d="M5610.5,1043.6l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5602.6001,1046.9,5606.1001,1044.2,5610.5,1043.6z M5619.1001,1048.2v-1.2l-6,1c-1.8999,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5616.2998,1054.3,5619.1001,1052.9,5619.1001,1048.2L5619.1001,1048.2z"
            />
            <path
              fill="#2D2A26"
              d="M5649,1039.4c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V1039.4z"
            />
            <path
              fill="#2D2A26"
              d="M5668.5,1043.5l10.8999,15.5h-8.7998l-7.1001-10.2l-3,3.1v7.1h-7.2002v-39.3h7.2002V1042.2l9.2002-9.9
h9.3999L5668.5,1043.5z"
            />
            <path
              fill="#2D2A26"
              d="M5705.7002,1032.2l5.7998,17.2l4.8999-17.2h7.2002l-8.3999,26.7H5708l-6.2002-18.2l-6.1001,18.2h-7.3999
l-8.5-26.7h7.6001l4.8999,17.1l5.7998-17.1H5705.7002z"
            />
            <path
              fill="#2D2A26"
              d="M5733.7998,1043.6l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5725.7998,1046.9,5729.2998,1044.2,5733.7998,1043.6z M5742.3999,1048.2v-1.2l-6,1c-1.8999,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5739.5,1054.3,5742.2998,1052.9,5742.3999,1048.2L5742.3999,1048.2z"
            />
            <path
              fill="#2D2A26"
              d="M5757.6001,1069.5l6.2998-13.9l-11.2998-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.7998,37.2
L5757.6001,1069.5z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000028316440503898555940000014790879272940276369_"
                    x="5640.7002"
                    y="1103"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000157991658795564230870000014500053256685941420_">
                  <use
                    xlinkHref="#SVGID_00000028316440503898555940000014790879272940276369_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000157991658795564230870000014500053256685941420_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000102531499154163192030000000411339750443936440_"
                        x="5640.6938"
                        y="1102.9276"
                        width="68.4373"
                        height="68.4373"
                      />
                    </defs>
                    <clipPath id="SVGID_00000081630491267674633210000016414553137189470908_">
                      <use
                        xlinkHref="#SVGID_00000102531499154163192030000000411339750443936440_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000081630491267674633210000016414553137189470908_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="72.1"
                        height="72.1"
                        x="-36.05"
                        y="-36.05"
                        transform="matrix(0.9492 0 0 0.9492 5675.0073 1137.1462)"
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
              d="M5332.1001,731.8h7.7002l-10.7002,38.5h-7.7002l-8.7998-27.4l-8.7998,27.4h-7.7998l-10.7002-38.5h7.8999
l7.1001,26.5l8.5-26.5h7.7002l8.6001,26.6L5332.1001,731.8z"
            />
            <path
              fill="#2D2A26"
              d="M5367.5,762.6c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5367.5,762.6z M5360.7998,753.9c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H5360.7998z"
            />
            <path
              fill="#2D2A26"
              d="M5398.3999,765.5c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3V731h7.1001
v34.5H5398.3999z M5384.7998,764.5c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C5378.2002,761.7,5381,764.5,5384.7998,764.5L5384.7998,764.5z"
            />
            <path
              fill="#2D2A26"
              d="M5412.7998,770.3h-7.2002v-26.7h7v3.3c1.7002-2.6,4.6001-4.1,7.7002-4c6.6001,0,9.7002,4.7,9.7002,10.6
v16.8h-7.2002v-15.6c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L5412.7998,770.3z"
            />
            <path
              fill="#2D2A26"
              d="M5460.5,762.6c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14.1,13.1001-14.1c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5460.5,762.6z M5453.7998,753.9c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H5453.7998z"
            />
            <path
              fill="#2D2A26"
              d="M5469.7998,761.5c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4
c-0.2002-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L5469.7998,761.5z"
            />
            <path
              fill="#2D2A26"
              d="M5490.2998,770.3V731h7.1001v15.5c1.2002-1.9,4.1001-3.6,8.1001-3.6c7.7998,0,12.2998,6,12.2998,13.9
c0,8.1-5,14.1-12.6001,14.1c-3.7002,0-6.5-1.6-7.8999-3.9v3.3H5490.2998z M5503.8999,749.3c-3.6001,0-6.7002,2.7-6.7002,7.5
c0,4.9,3,7.6,6.7002,7.6c3.6001,0,6.6001-2.7,6.6001-7.6C5510.6001,752,5507.6001,749.3,5503.8999,749.3L5503.8999,749.3z"
            />
            <path
              fill="#2D2A26"
              d="M5540.1001,767.4c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5v-16.9h7.2002V759
c0,3,1.5,5.4,4.7998,5.4c3.2002,0,5-2.2,5-5.3v-15.5h7.2002v21.9c0,1.6,0.1001,3.2,0.2998,4.8h-6.8999
C5540.1001,769.3,5540.1001,768.4,5540.1001,767.4z"
            />
            <path
              fill="#2D2A26"
              d="M5570.2002,750.8c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7
v4c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7002,0.1V750.8z"
            />
            <path
              fill="#2D2A26"
              d="M5576.1001,780.8l6.2998-13.9l-11.2998-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.7998,37.2
H5576.1001z"
            />
            <path
              fill="#2D2A26"
              d="M5315.2998,823.6l-0.3999-4.7c-1.5,2.7-5.1001,5.5-10.7998,5.5c-8.3999,0-16.2998-6.2-16.2998-17.6
s8.3999-17.5,16.7002-17.5c7.2998,0,13,4.1,14.8999,10.2l-4.2002,1.8c-1.3999-4.7-5.7998-7.9-10.7002-7.7
c-6,0-11.8999,4.3-11.8999,13.2s5.7002,13.3,11.7002,13.3c7.5,0,10.2002-5.3,10.3999-8.8H5303v-4.2h16.1001v16.5H5315.2998z"
            />
            <path
              fill="#2D2A26"
              d="M5338.3999,805.2c-0.6001-0.1-1.2998-0.1-1.8999-0.1c-3.7002,0-6.2998,2-6.2998,7v11.4h-4.5v-22.8h4.3999v4
c1.2002-2.7,3.8999-4.5,6.7998-4.4c0.5,0,1,0.1,1.5,0.1V805.2z"
            />
            <path
              fill="#2D2A26"
              d="M5363,817c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2002-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2002,0,0.2998,0
c3,0.2,5.6001-1.7,6.3999-4.6L5363,817z M5358.5,809.8c-0.1001-3.3-2.2002-5.8-6.2998-5.8c-3.2998,0-6,2.5-6.2002,5.8H5358.5z"
            />
            <path
              fill="#2D2A26"
              d="M5374.3999,810.5l6.2002-0.9c1.3999-0.2,1.7998-0.9,1.7998-1.7c0-2.2-1.5-4.1-4.8999-4.1
c-2.7002-0.2-5,1.8-5.2002,4.5v0.1l-4.2998-1c0.5-4.4,4.3999-7.4,9.2998-7.4c6.7998,0,9.5,3.9,9.5,8.3v11.4
c0,1.3,0.1001,2.5,0.2998,3.7h-4.3999c-0.2002-1-0.2998-2.1-0.2002-3.1c-1.6001,2.5-4.3999,3.9-7.3999,3.8
c-4.6001,0-7.6001-3.2-7.6001-6.8C5367.5,813.3,5370.5,811.1,5374.3999,810.5z M5382.2998,813.8v-1l-7,1
c-1.8999,0.3-3.2998,1.4-3.2998,3.4c0.1001,1.9,1.7002,3.4,3.6001,3.3h0.1001C5379.3999,820.5,5382.2998,818.8,5382.2998,813.8z"
            />
            <path
              fill="#2D2A26"
              d="M5399.7002,800.7h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2002c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7
v-3.7h4.1001v7.2H5399.7002z"
            />
            <path
              fill="#2D2A26"
              d="M5460.7998,789.9h4.7998l-9.6001,33.6h-4.7998l-8.7998-27.3l-8.7002,27.3h-4.7002l-9.7002-33.6h4.7998
l7.3999,26.3l8.3999-26.3h4.8999l8.6001,26.6L5460.7998,789.9z"
            />
            <path
              fill="#2D2A26"
              d="M5490,817c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2002-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2002,0,0.2998,0
c3,0.2,5.6001-1.7,6.3999-4.6L5490,817z M5485.3999,809.8c-0.1001-3.3-2.2002-5.8-6.2998-5.8c-3.2998,0-6,2.5-6.2002,5.8H5485.3999
z"
            />
            <path
              fill="#2D2A26"
              d="M5497.7002,816.2c0.2998,2.4,2.1001,4.3,5.2998,4.3c2.5,0,3.8999-1.4,3.8999-3c0-1.4-1-2.5-2.8999-2.9
l-3.8999-0.9c-3.6001-0.8-5.7002-3.2-5.7002-6.4c0-3.9,3.7002-7.2,8.1001-7.2c6.2998,0,8.2002,4.1,8.7002,6.1l-3.8999,1.5
c-0.2998-2.3-2.3999-4-4.7002-3.8c-2.2998,0-3.7998,1.5-3.7998,3c0,1.4,0.8999,2.4,2.6001,2.8l3.7002,0.8
c4.1001,0.9,6.2998,3.4,6.2998,6.8s-2.7002,7.1-8.2998,7.1c-6.2998,0-8.8999-4-9.2998-6.6L5497.7002,816.2z"
            />
            <path
              fill="#2D2A26"
              d="M5523.2002,800.7h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2002c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7
v-3.7h4.1001v7.2H5523.2002z"
            />
            <path
              fill="#2D2A26"
              d="M5554,817c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2002-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2002,0,0.2998,0
c3,0.2,5.6001-1.7,6.3999-4.6L5554,817z M5549.5,809.8c-0.1001-3.3-2.2002-5.8-6.2998-5.8c-3.2998,0-6,2.5-6.2002,5.8H5549.5z"
            />
            <path
              fill="#2D2A26"
              d="M5572.5,805.2c-0.6001-0.1-1.2998-0.1-1.8999-0.1c-3.7002,0-6.2998,2-6.2998,7v11.4h-4.5v-22.8h4.3999v4
c1.1001-2.7,3.8999-4.5,6.7998-4.4c0.5,0,1,0.1,1.5,0.1V805.2z"
            />
            <path
              fill="#2D2A26"
              d="M5581.7002,823.6h-4.5v-22.8h4.3999v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2002,3.9,8.2002,9v14.5h-4.5
v-13.7c0-3.2-1.2998-5.7-5.2998-5.7c-3.5,0-5.2998,2.8-5.2998,6.3V823.6H5581.7002z"
            />
            <path
              fill="#2D2A26"
              d="M5399.1001,852.3c-0.6001-3.5-3.6001-5.9-7.1001-5.7c-3.7998,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.2998,4.8
l5,1.1c5.6001,1.2,8.7002,4.7,8.7002,9.4c0,5.2-4.5,10-11.6001,10c-8.1001,0-12-5.2-12.6001-10l4.5-1.4
c0.2002,4.2,3.7998,7.4,8,7.2l0,0c4.6001,0,6.8999-2.4,6.8999-5.4c0-2.4-1.7002-4.5-5-5.2l-4.7998-1
c-4.7998-1-8.2002-4.2-8.2002-9.2c0-5.3,4.8999-10,11.1001-10c7.6001,0,10.7002,4.7,11.3999,8.4L5399.1001,852.3z"
            />
            <path
              fill="#2D2A26"
              d="M5415.3999,854h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5V858h-4.3999v-4h1.2002c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7
h4.1001L5415.3999,854z"
            />
            <path
              fill="#2D2A26"
              d="M5439,858.5c-0.6001-0.1-1.2998-0.1-1.8999-0.1c-3.7998,0-6.2998,2-6.2998,7v11.4h-4.5V854h4.2998v4
c1.1001-2.7,3.8999-4.5,6.7998-4.4c0.5,0,1,0.1,1.5,0.1L5439,858.5z"
            />
            <path
              fill="#2D2A26"
              d="M5463.6001,870.3c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2
c0-7.2,5.2002-12,10.8999-12c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9
c0.1001,0,0.2002,0,0.2998,0c3,0.2,5.6001-1.7,6.3999-4.6L5463.6001,870.3z M5459.1001,863.1c-0.1001-3.3-2.2002-5.8-6.2998-5.8
c-3.2998,0-6,2.5-6.2002,5.8H5459.1001z"
            />
            <path
              fill="#2D2A26"
              d="M5489.2998,870.3c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2
c0-7.2,5.2002-12,10.8999-12c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9
c0.1001,0,0.2002,0,0.2998,0c3,0.2,5.6001-1.7,6.3999-4.6L5489.2998,870.3z M5484.7998,863.1c-0.1001-3.3-2.2002-5.8-6.2998-5.8
c-3.2998,0-6,2.5-6.2002,5.8H5484.7998z"
            />
            <path
              fill="#2D2A26"
              d="M5501.2002,854h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5V858h-4.3999v-4h1.2998c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7
h4.1001L5501.2002,854z"
            />
          </g>
          <g id="Black_Lake">
            {!isSelectedStation('Black Lake') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M5070.3999,957H5350.5c7.1001,0,12.7998,5.7,12.7998,12.8v62.1c0,7.1-5.7002,12.8-12.7998,12.8h-280.1001
c-7.1001,0-12.7998-5.7-12.7998-12.8v-62.1C5057.6001,962.7,5063.2998,957,5070.3999,957z"
                />
                <path
                  fill="#2D2A26"
                  d="M5350.5,958.5c6.2998,0,11.3999,5.1,11.3999,11.3l0,0v62.2c0,6.3-5.1001,11.4-11.3999,11.4l0,0h-280.2002
c-6.2998,0-11.3999-5.1-11.3999-11.4l0,0v-62.2c0-6.3,5.1001-11.4,11.3999-11.4l0,0H5350.5 M5350.5,955.5h-280.1001
c-7.8999,0-14.2998,6.4-14.2998,14.3v62.2c0,7.9,6.3999,14.3,14.2998,14.3H5350.5c7.8999,0,14.2998-6.3,14.2998-14.2l0,0v-62.2
C5364.7998,961.9,5358.3999,955.6,5350.5,955.5L5350.5,955.5z"
                />
              </>
            )}
            <path
              fill="#2D2A26"
              d="M5096.2002,982.2c7.5,0,11.7002,4.4,11.7002,10.4c0.1001,3.7-2.1001,7-5.6001,8.2
c4.1001,1.1,6.8999,4.9,6.7998,9.1c0,6.2-4.7002,10.7-11.8999,10.7h-14.8999v-38.5h13.8999V982.2z M5095.1001,998.1
c3.3999,0,5.5-1.9,5.5-4.8s-1.8999-4.8-5.5-4.8h-5.2998v9.6H5095.1001z M5095.8999,1014.4c3.6001,0,5.7998-1.9,5.7998-5
s-1.8999-5.2-5.7002-5.2h-6.2002v10.1h6.1006V1014.4z"
            />
            <path fill="#2D2A26" d="M5114.2998,1020.6v-39.3h7.2002v39.3H5114.2998z" />
            <path
              fill="#2D2A26"
              d="M5134.8999,1005.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5126.8999,1008.6,5130.5,1005.9,5134.8999,1005.3z M5143.5,1009.8v-1.2l-6,1c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5140.6001,1016,5143.5,1014.5,5143.5,1009.8z"
            />
            <path
              fill="#2D2A26"
              d="M5162.3999,1007.3c0,4.8,3.1001,7.5,6.7998,7.5c2.7998,0.1,5.3999-1.8,6.1001-4.5l6.2998,2.1
c-1.2002,4.5-5.3999,9-12.5,9c-7.6001,0.1-13.8999-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.3,6.1001-14.2,13.7998-14.2
c7.2998,0,11.3999,4.5,12.5,9l-6.5,2.2c-0.6001-2.7-3.1001-4.6-5.8999-4.5C5165.3999,999.8,5162.3999,1002.4,5162.3999,1007.3z"
            />
            <path
              fill="#2D2A26"
              d="M5201.5,1005.2l10.8999,15.5h-8.7998l-7.1001-10.2l-3,3.1v7.1h-7.2002v-39.3h7.2002v22.5l9.2002-9.9h9.3999
L5201.5,1005.2z"
            />
            <path fill="#2D2A26" d="M5229.2998,1020.6v-38.5h7.5v31.3h17.1001v7.2H5229.2998z" />
            <path
              fill="#2D2A26"
              d="M5264.7998,1005.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C5256.7998,1008.6,5260.3999,1005.9,5264.7998,1005.3z M5273.3999,1009.8v-1.2l-6,1c-1.8999,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C5270.5,1016,5273.3999,1014.5,5273.3999,1009.8z"
            />
            <path
              fill="#2D2A26"
              d="M5302.2002,1005.2l10.8999,15.5h-8.7998l-7.1001-10.2l-3,3.1v7.1H5287v-39.3h7.2002v22.5l9.2002-9.9h9.3999
L5302.2002,1005.2z"
            />
            <path
              fill="#2D2A26"
              d="M5340.6001,1013c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L5340.6001,1013z M5333.8999,1004.3
c-0.1001-2.7-1.8999-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H5333.8999z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000026157508560155716750000011874338359449664941_"
                    x="5176.1001"
                    y="1069.1"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000177484093213640598470000007617362861794957952_">
                  <use
                    xlinkHref="#SVGID_00000026157508560155716750000011874338359449664941_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000177484093213640598470000007617362861794957952_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000119823225056173177670000014323356023673871007_"
                        x="5176.0327"
                        y="1069.0283"
                        width="68.4373"
                        height="68.4373"
                      />
                    </defs>
                    <clipPath id="SVGID_00000165938936939445405430000011555570818608195461_">
                      <use
                        xlinkHref="#SVGID_00000119823225056173177670000014323356023673871007_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000165938936939445405430000011555570818608195461_)" />
                  </g>
                </g>
              </g>
            </g>
            <use
              xlinkHref="#Park_and_ride"
              width="72.1"
              height="72.1"
              x="-36.05"
              y="-36.05"
              transform="matrix(0.9492 0 0 0.9492 5210.3462 1103.2469)"
              overflow="visible"
            />
          </g>
          <g id="Dudley_Street">
            <path
              fill="#2D2A26"
              d="M4812.6001,823.6v-38.5h13.7998c11,0,19,7.1,19,19.3c0,12.1-8.1001,19.2-19,19.2H4812.6001z M4826,816.6
c6.2998,0,11.6001-3.9,11.6001-12.3c0-8.4-5.2002-12.3-11.5-12.3h-6v24.6H4826z"
            />
            <path
              fill="#2D2A26"
              d="M4867.8999,820.7c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5v-16.9h7.2002v15.4
c0,3,1.5,5.4,4.7998,5.4c3.2002,0,5-2.2,5-5.3v-15.5h7.2002v21.9c0,1.6,0.1001,3.2,0.2998,4.8H4868
C4868,822.6,4867.8999,821.6,4867.8999,820.7z"
            />
            <path
              fill="#2D2A26"
              d="M4907.2002,818.7c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L4907.2002,818.7z M4893.7002,817.8c3.7002,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C4887.1001,814.9,4889.8999,817.7,4893.7002,817.8L4893.7002,817.8z"
            />
            <path fill="#2D2A26" d="M4914.3999,823.6v-39.3h7.2002v39.3H4914.3999z" />
            <path
              fill="#2D2A26"
              d="M4952.6001,815.9c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L4952.6001,815.9z M4945.8999,807.2
c-0.1001-2.7-1.8999-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H4945.8999z"
            />
            <path
              fill="#2D2A26"
              d="M4959.6001,834.1l6.2998-13.9l-11.2998-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7002l-16.7998,37.2
H4959.6001z"
            />
            <path
              fill="#2D2A26"
              d="M5020.2002,796.3c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2002,4.3
l5.3999,1c7,1.4,10.7002,5.9,10.7002,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2002,0-14.7002-6.6-15.2998-12l6.8999-1.8
c0.2998,3.8,3,7.2,8.3999,7.2c4,0,6.2002-2,6.2002-4.7c0-2.2-1.7002-4-4.7002-4.6l-5.3999-1.1c-6.1001-1.2-10.1001-5.2-10.1001-11
c0-6.8,6.1001-12,13.3999-12c9.2998,0,12.8999,5.6,13.7998,10L5020.2002,796.3z"
            />
            <path
              fill="#2D2A26"
              d="M5041.5,796.9h5.3999v6.4H5041.5v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.8h6.5
L5041.5,796.9z"
            />
            <path
              fill="#2D2A26"
              d="M5068.3999,804c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7v4
c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7002,0.1V804z"
            />
            <path
              fill="#2D2A26"
              d="M5096.6001,815.9c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5096.6001,815.9z M5089.8999,807.2
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H5089.8999z"
            />
            <path
              fill="#2D2A26"
              d="M5126,815.9c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L5126,815.9z M5119.2998,807.2c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H5119.2998z"
            />
            <path
              fill="#2D2A26"
              d="M5140.2998,796.9h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.8h6.5
L5140.2998,796.9z"
            />
            <path
              fill="#2D2A26"
              d="M4873.3999,876.8L4873,872.1c-1.5,2.7-5.1001,5.5-10.7998,5.5c-8.5,0-16.2998-6.2-16.2998-17.6
s8.2998-17.5,16.7002-17.5c7.2998,0,12.8999,4.1,14.8999,10.2l-4.2002,1.8c-1.3999-4.7-5.7998-7.9-10.7002-7.7
c-6,0-11.8999,4.3-11.8999,13.2s5.7002,13.3,11.7002,13.3c7.5,0,10.2002-5.3,10.3999-8.8h-11.6001v-4.2h16.1001v16.5H4873.3999z"
            />
            <path
              fill="#2D2A26"
              d="M4892.2002,877.5c-5.2998,0-8.5-4-8.5-9.2V854h4.5v13.7c0,3.1,1.3999,5.9,5.2002,5.9
c3.7002,0,5.3999-2.4,5.3999-5.8V854h4.5v18.6c0,1.4,0.1001,2.8,0.2002,4.2h-4.2998c-0.1001-0.9-0.2002-1.8-0.2002-2.8
C4897.7002,876.4,4894.7998,877.5,4892.2002,877.5z"
            />
            <path
              fill="#2D2A26"
              d="M4915.2002,876.8h-4.5V854h4.3999v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2002,3.9,8.2002,9v14.5h-4.5
v-13.7c0-3.2-1.2998-5.7-5.2998-5.7c-3.5,0-5.2998,2.8-5.2998,6.3V876.8H4915.2002z"
            />
            <path
              fill="#2D2A26"
              d="M4939.2998,869.5c0.2998,2.4,2.1001,4.3,5.2998,4.3c2.5,0,3.8999-1.4,3.8999-3c0-1.4-1-2.5-2.8999-2.9
l-3.8999-0.9c-3.6001-0.8-5.7002-3.2-5.7002-6.4c0-3.9,3.7002-7.2,8.1001-7.2c6.2998,0,8.2002,4.1,8.7002,6.1l-3.8999,1.5
c-0.2998-2.3-2.3999-4-4.7002-3.8c-2.2998,0-3.7998,1.5-3.7998,3c0,1.4,0.8999,2.4,2.6001,2.8l3.7002,0.8
c4.1001,0.9,6.2998,3.4,6.2998,6.8s-2.7002,7.1-8.2998,7.1c-6.2998,0-8.8999-4-9.2998-6.6L4939.2998,869.5z"
            />
            <path
              fill="#2D2A26"
              d="M4992.7002,843.2h4.8999l-13,33.6H4980l-12.7002-33.6h4.8999l10.2002,27.7L4992.7002,843.2z"
            />
            <path
              fill="#2D2A26"
              d="M5004.1001,842.1c1.7998,0,3.2002,1.4,3.2002,3.2s-1.3999,3.2-3.2002,3.2c-1.7998,0-3.2002-1.4-3.2002-3.2
C5000.8999,843.6,5002.2998,842.2,5004.1001,842.1L5004.1001,842.1z M5001.8999,876.8V854h4.3999v22.8H5001.8999z"
            />
            <path fill="#2D2A26" d="M5013.8999,876.8v-34.4h4.5v34.4H5013.8999z" />
            <path fill="#2D2A26" d="M5026,876.8v-34.4h4.5v34.4H5026z" />
            <path
              fill="#2D2A26"
              d="M5043.5,863.8l6.2002-0.9c1.3999-0.2,1.7998-0.9,1.7998-1.7c0-2.2-1.5-4.1-4.8999-4.1
c-2.7002-0.2-5,1.8-5.2002,4.5v0.1l-4.2998-1c0.5-4.4,4.3999-7.4,9.2998-7.4c6.7998,0,9.5,3.9,9.5,8.3v11.4
c0,1.3,0.1001,2.5,0.2998,3.7h-4.3999c-0.2002-1-0.2998-2.1-0.2002-3.1c-1.6001,2.5-4.3999,3.9-7.3999,3.8
c-4.6001,0-7.6001-3.2-7.6001-6.8C5036.6001,866.6,5039.6001,864.3,5043.5,863.8z M5051.5,867v-1l-7,1
c-1.8999,0.3-3.2998,1.4-3.2998,3.4c0.1001,1.9,1.7002,3.4,3.6001,3.3h0.1001C5048.5,873.8,5051.5,872,5051.5,867z"
            />
            <path
              fill="#2D2A26"
              d="M5065.5,877.1c0.2998,3.2,3,5.7,6.2002,5.6c4.7998,0,7-2.5,7-7.4V872c-1.1001,2.1-3.6001,3.7-7,3.7
c-6.1001,0-10.5-4.6-10.5-11.1c0-6.2,4.2002-11.1,10.5-11.1c3.5,0,5.8999,1.3,7,3.6V854h4.3999v21.1
c0,5.8-2.7998,11.4-11.3999,11.4c-5.7002,0-10-3.6-10.5-8.5L5065.5,877.1z M5078.8999,864.7c0-4.4-2.7002-7.3-6.5-7.3
s-6.6001,2.9-6.6001,7.3c0,4.4,2.6001,7.3,6.6001,7.3C5076.2002,872,5078.8999,869.1,5078.8999,864.7L5078.8999,864.7z"
            />
            <path
              fill="#2D2A26"
              d="M5110.2002,870.3c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2
c0-7.2,5.2002-12,10.8999-12c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4H5093c-0.1001,3.7,2.8999,6.8,6.6001,6.9
c0.1001,0,0.2002,0,0.2998,0c3,0.2,5.6001-1.7,6.3999-4.6L5110.2002,870.3z M5105.6001,863.1c-0.1001-3.3-2.2002-5.8-6.2998-5.8
c-3.2998,0-6,2.5-6.2002,5.8H5105.6001z"
            />
          </g>
          <g id="Dartmouth_Street">
            <path
              fill="#2D2A26"
              d="M4615.8999,1006.1v-38.5h13.7998c11,0,19,7.1,19,19.3s-8.1001,19.2-19,19.2H4615.8999z M4629.2998,999.1
c6.2998,0,11.5-3.9,11.5-12.3c0-8.4-5.2002-12.3-11.5-12.3h-6v24.6H4629.2998z"
            />
            <path
              fill="#2D2A26"
              d="M4660.2998,990.7l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C4652.2998,994,4655.7998,991.4,4660.2998,990.7z M4668.7998,995.3v-1.2l-6,1c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C4666,1001.5,4668.7998,1000,4668.7998,995.3z"
            />
            <path
              fill="#2D2A26"
              d="M4698.7998,986.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7
v4c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V986.6z"
            />
            <path
              fill="#2D2A26"
              d="M4712,979.4h5.3999v6.4H4712V997c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
V979.4H4712z"
            />
            <path
              fill="#2D2A26"
              d="M4722.6001,1006.1v-26.7h6.8999v3.3c1.5-2.6,4.7998-4,7.7998-4c3.6001,0,6.6001,1.6,7.8999,4.4
c1.7998-2.9,5-4.6,8.5-4.4c4.8999,0,9.7002,3,9.7002,10.1v17.3h-7v-15.8c0-2.9-1.3999-5-4.7002-5c-3.1001,0-4.8999,2.4-4.8999,5.3
v15.6h-7.2002v-15.8c0-2.9-1.5-5-4.7002-5c-3.2998,0-5,2.3-5,5.3v15.6h-7.2993V1006.1z"
            />
            <path
              fill="#2D2A26"
              d="M4796,992.8c0,7.7-6.2002,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
S4796,984.5,4796,992.8z M4788.7998,992.8c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6c0,5,3.2998,7.6,6.7998,7.6
C4785.6001,1000.3,4788.7998,997.8,4788.7998,992.8L4788.7998,992.8z"
            />
            <path
              fill="#2D2A26"
              d="M4818.2998,1003.2c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5v-16.9H4808v15.4
c0,3,1.5,5.4,4.7998,5.4c3.2002,0,5-2.2,5-5.3v-15.5H4825v21.9c0,1.6,0.1001,3.2,0.2998,4.8h-6.8999
C4818.3999,1005.2,4818.2998,1004.2,4818.2998,1003.2z"
            />
            <path
              fill="#2D2A26"
              d="M4841.1001,979.4h5.3999v6.4h-5.3999V997c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L4841.1001,979.4z"
            />
            <path
              fill="#2D2A26"
              d="M4859,1006.1h-7.2002v-39.3H4859v14.8c1.8999-1.9,4.5-3,7.2002-2.9c6.7998,0,9.8999,4.7,9.8999,10.6v16.8
h-7.2998v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.7998,2.3-5,5.2L4859,1006.1z"
            />
            <path
              fill="#2D2A26"
              d="M4693.5,1032.1c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2002,4.3l5.3999,1
c7,1.4,10.7002,5.9,10.7002,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2002,0-14.7002-6.6-15.2998-12l6.8999-1.8
c0.2998,3.8,3,7.2,8.3999,7.2c4,0,6.2002-2,6.2002-4.7c0-2.2-1.7002-4-4.7002-4.6l-5.3999-1.1c-6.1001-1.2-10.1001-5.2-10.1001-11
c0-6.8,6.1001-12,13.3999-12c9.2998,0,12.8999,5.6,13.7998,10L4693.5,1032.1z"
            />
            <path
              fill="#2D2A26"
              d="M4714.7998,1032.7h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L4714.7998,1032.7z"
            />
            <path
              fill="#2D2A26"
              d="M4741.7998,1039.8c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7
h7v4c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V1039.8z"
            />
            <path
              fill="#2D2A26"
              d="M4770,1051.7c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2998,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L4770,1051.7z M4763.2998,1043c-0.1001-2.7-1.8999-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H4763.2998z"
            />
            <path
              fill="#2D2A26"
              d="M4799.2998,1051.7c-1.3999,4.6-5.6001,8.5-12.2002,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7998,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L4799.2998,1051.7z M4792.6001,1043
c-0.1001-2.7-1.7998-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H4792.6001z"
            />
            <path
              fill="#2D2A26"
              d="M4813.7002,1032.7h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
v7.7999H4813.7002z"
            />
          </g>
          <g id="Lodge_Road">
            <path fill="#2D2A26" d="M4370.8999,769v-38.5h7.5v31.3H4395.5v7.2H4370.8999z" />
            <path
              fill="#2D2A26"
              d="M4426,755.6c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S4426,747.4,4426,755.6z M4418.7998,755.6
c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6c0,5,3.2998,7.6,6.7998,7.6C4415.5,763.2,4418.7998,760.7,4418.7998,755.6z"
            />
            <path
              fill="#2D2A26"
              d="M4456.5,764.1c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
L4456.5,764.1z M4442.8999,763.2c3.7002,0,6.6001-2.8,6.6001-7.7s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C4436.2998,760.3,4439.1001,763.2,4442.8999,763.2z"
            />
            <path
              fill="#2D2A26"
              d="M4468.2998,768.7c0.5,3,3.2002,5.2,6.2002,5c4.6001,0,7.1001-2.3,7.1001-7.4v-1.9
c-1.1001,1.7-3.6001,3.4-7.3999,3.4c-7.1001,0-12.3999-5.5-12.3999-13c0-7.1,5.1001-13,12.3999-13c4.2002,0,6.7002,1.8,7.6001,3.6
v-3.1h6.8999v23.8c0,7.3-4,14-14,14c-7.2998,0-12.2002-4.6-13-9.7L4468.2998,768.7z M4481.7002,754.8c0-4.1-2.7998-6.7-6.2998-6.7
s-6.3999,2.6-6.3999,6.7s2.7002,6.8,6.3999,6.8S4481.7002,758.9,4481.7002,754.8L4481.7002,754.8z"
            />
            <path
              fill="#2D2A26"
              d="M4519.2998,761.3c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2H4500.5
c0.2002,3.5,3.2002,6.2,6.7002,6.1c3.3999,0,5.2002-1.7,6.1001-4.1L4519.2998,761.3z M4512.6001,752.6
c-0.1001-2.7-1.8999-5.3-6-5.3c-3.1001-0.1-5.7002,2.2-6,5.3H4512.6001z"
            />
            <path
              fill="#2D2A26"
              d="M4549.5,754.2h-3.8999V769h-7.5v-38.5h15c7.5,0,12.2998,5.2,12.2998,11.8
c0.2002,5.1-3.2002,9.6-8.2002,10.9l8.2002,15.7H4557L4549.5,754.2z M4551.6001,747.7c3.7998,0,6-2.2,6-5.3s-2.2002-5.4-6-5.4
H4545.5v10.7H4551.6001z"
            />
            <path
              fill="#2D2A26"
              d="M4596.7002,755.6c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S4596.7002,747.4,4596.7002,755.6z
M4589.5,755.6c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6c0,5,3.2998,7.6,6.7998,7.6
C4586.2998,763.2,4589.5,760.7,4589.5,755.6L4589.5,755.6z"
            />
            <path
              fill="#2D2A26"
              d="M4608.1001,753.6l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C4600.1001,756.9,4603.6001,754.3,4608.1001,753.6z M4616.7002,758.2V757l-6,0.9c-1.7998,0.3-3.2998,1.3-3.2998,3.4
c0,1.6,1.1001,3.1,3.5,3.1C4613.7998,764.4,4616.7002,762.9,4616.7002,758.2z"
            />
            <path
              fill="#2D2A26"
              d="M4655.7998,764.1c0,1.8,0.1001,3.7,0.2002,4.8h-6.8999c-0.2002-1-0.2998-2.1-0.2998-3.1
c-1.2002,2.1-3.8999,3.7-7.5,3.7c-7.6001,0-13-6-13-14c0-7.8,5.2998-13.9,12.7998-13.9c4.6001,0,6.7998,1.9,7.5,3.3v-15.3h7.1001
v34.5H4655.7998z M4642.2998,763.2c3.7002,0,6.6001-2.8,6.6001-7.7s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5
C4635.6001,760.3,4638.3999,763.2,4642.2998,763.2z"
            />
            <path
              fill="#2D2A26"
              d="M4385.7998,788.6h4.7998l-9.6001,33.6h-4.7998l-8.7998-27.3l-8.7002,27.3h-4.7002l-9.7002-33.6h4.7998
l7.3999,26.3l8.3999-26.3h4.8999l8.6001,26.6L4385.7998,788.6z"
            />
            <path
              fill="#2D2A26"
              d="M4415,815.7c-1.3999,4.4-5.6001,7.4-10.2002,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2002-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2002,0,0.2998,0
c3,0.2,5.6001-1.7,6.3999-4.6L4415,815.7z M4410.5,808.5c-0.1001-3.3-2.2002-5.8-6.2998-5.8c-3.2998,0-6,2.5-6.2002,5.8H4410.5z"
            />
            <path
              fill="#2D2A26"
              d="M4422.7998,814.9c0.2998,2.4,2.1001,4.3,5.2998,4.3c2.5,0,3.8999-1.4,3.8999-3c0-1.4-1-2.5-2.8999-2.9
l-3.8999-0.9c-3.6001-0.8-5.7002-3.2-5.7002-6.4c0-3.9,3.7002-7.2,8.1001-7.2c6.2998,0,8.2002,4.1,8.7002,6.1l-3.8999,1.5
c-0.2998-2.3-2.3999-4-4.7002-3.8c-2.2998,0-3.7998,1.5-3.7998,3c0,1.4,0.8999,2.4,2.6001,2.8l3.7002,0.8
c4.1001,0.9,6.2998,3.4,6.2998,6.8s-2.7002,7.1-8.2998,7.1c-6.2998,0-8.8999-4-9.2998-6.6L4422.7998,814.9z"
            />
            <path
              fill="#2D2A26"
              d="M4448.2998,799.4h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5H4439.5v-4h1.2002c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.4,0-0.7
v-3.7h4.1001v7.2H4448.2998z"
            />
            <path
              fill="#2D2A26"
              d="M4482.3999,788.6c6.3999,0,10.2002,3.8,10.2002,9.1c0.1001,3.3-1.8999,6.2-5,7.3
c3.7002,0.9,6.2002,4.3,6.1001,8.1c0,5.3-4.2002,9.2-10.3999,9.2h-11.7002v-33.6h10.7998V788.6z M4481.8999,803.3
c3.7002,0,6-2.2,6-5.4c0-3.1-2.2998-5.3-6.2002-5.3h-5.6001v10.7H4481.8999z M4482.6001,818.2c3.7002,0,6.2998-2.1,6.2998-5.4
s-2-5.5-6.1001-5.5h-6.6001v10.9H4482.6001z"
            />
            <path
              fill="#2D2A26"
              d="M4512.2998,803.9c-0.6001-0.1-1.2998-0.1-1.8999-0.1c-3.7002,0-6.2998,2-6.2998,7v11.4h-4.5v-22.8H4504v4
c1.1001-2.7,3.8999-4.5,6.7998-4.4c0.5,0,1,0.1,1.5,0.1V803.9z"
            />
            <path
              fill="#2D2A26"
              d="M4538.5,810.8c0,7-4.7998,12.1-11.7002,12.1s-11.7002-5.2-11.7002-12.1c0-7,4.7998-12.1,11.7002-12.1
S4538.5,803.9,4538.5,810.8z M4533.8999,810.8c0-5.3-3.2998-8.1-7.1001-8.1c-3.7998,0-7.1001,2.8-7.1001,8.1s3.2998,8.2,7.1001,8.2
S4533.8999,816.1,4533.8999,810.8z"
            />
            <path
              fill="#2D2A26"
              d="M4544.2002,822.2v-22.8h4.2998v3c1.5-2.4,4.1001-3.8,6.8999-3.7c3-0.1,5.7002,1.6,6.7998,4.3
c1.5-2.8,4.5-4.5,7.6001-4.3c4,0,7.8999,2.7,7.8999,8.7v14.8h-4.3999v-14.3c0-3-1.5-5.2-4.7998-5.2
c-3.1001,0-5.2998,2.5-5.2998,5.7v13.8h-4.5v-14.3c0-2.9-1.3999-5.2-4.7998-5.2c-3.2002,0-5.2998,2.4-5.2998,5.8v13.8
L4544.2002,822.2z"
            />
            <path
              fill="#2D2A26"
              d="M4602.2998,799.4l5.8999,17.2l5-17.2h4.7002l-7.3999,22.8h-4.6001l-6.1001-17.4l-5.8999,17.4h-4.7002
l-7.5-22.8h4.7998l5.1001,17.2l5.8999-17.2H4602.2998z"
            />
            <path
              fill="#2D2A26"
              d="M4624.6001,787.5c1.7998,0,3.2002,1.4,3.2002,3.2s-1.3999,3.2-3.2002,3.2c-1.7998,0-3.2002-1.4-3.2002-3.2
l0,0C4621.5,789,4622.8999,787.6,4624.6001,787.5L4624.6001,787.5z M4622.5,822.2v-22.8h4.3999v22.8H4622.5z"
            />
            <path
              fill="#2D2A26"
              d="M4637.1001,810.8c0,5.2,3.2998,8,7,8c3,0.2,5.6001-1.8,6.3999-4.7l3.8999,1.7
c-1.5,4.4-5.7002,7.3-10.2998,7.1c-6.6001,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1001,0,9.2002,3.8,10.2002,7.3l-4,1.7
c-0.6001-2.9-3.2002-5-6.1001-4.8C4640.5,802.8,4637.1001,805.5,4637.1001,810.8z"
            />
            <path
              fill="#2D2A26"
              d="M4664.1001,822.2h-4.5v-34.3h4.5v14.2c1.6001-2.2,4.2002-3.5,6.8999-3.3c5.5,0,8.2002,3.9,8.2002,9v14.5
h-4.5v-13.8c0-3.2-1.2998-5.7-5.2998-5.7c-3.3999,0-5.2002,2.7-5.2998,6v13.4H4664.1001z"
            />
            <path
              fill="#2D2A26"
              d="M4421.7998,846.2v29.3h-4.6001v-29.3h-11.2002v-4.3h27.1001v4.3H4421.7998z"
            />
            <path
              fill="#2D2A26"
              d="M4458.7998,864.1c0,7-4.7998,12.1-11.7002,12.1s-11.7002-5.2-11.7002-12.1s4.7998-12.1,11.7002-12.1
S4458.7998,857.1,4458.7998,864.1z M4454.2002,864.1c0-5.3-3.2998-8.1-7.1001-8.1c-3.7998,0-7.1001,2.8-7.1001,8.1
s3.2998,8.2,7.1001,8.2C4450.8999,872.2,4454.2002,869.4,4454.2002,864.1z"
            />
            <path
              fill="#2D2A26"
              d="M4481.8999,852.7l5.8999,17.2l5-17.2h4.7002l-7.3999,22.8H4485.5l-6.1001-17.4l-5.8999,17.4h-4.7002
l-7.5-22.8h4.8999l5.1001,17.2l5.8999-17.2H4481.8999z"
            />
            <path
              fill="#2D2A26"
              d="M4506.5,875.5h-4.5v-22.8h4.3999v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2002,3.9,8.2002,9v14.5h-4.5v-13.8
c0-3.2-1.2998-5.7-5.2998-5.7c-3.5,0-5.2998,2.8-5.2998,6.3v13.1H4506.5z"
            />
            <path
              fill="#2D2A26"
              d="M4562.8999,875.5v-15h-17.2002v15h-4.6001v-33.6h4.6001v14.4h17.2002v-14.4h4.6001v33.6H4562.8999z"
            />
            <path
              fill="#2D2A26"
              d="M4581.1001,862.5l6.2002-0.9c1.3999-0.2,1.7998-0.9,1.7998-1.7c0-2.2-1.5-4.1-4.8999-4.1
c-2.7002-0.2-5,1.8-5.2002,4.5v0.1l-4.2998-1c0.5-4.4,4.3999-7.4,9.2998-7.4c6.7998,0,9.5,3.9,9.5,8.3v11.4
c0,1.3,0.1001,2.5,0.2998,3.7h-4.3999c-0.2002-1-0.2998-2.1-0.2002-3.1c-1.6001,2.5-4.3999,3.9-7.3999,3.8
c-4.6001,0-7.6001-3.2-7.6001-6.8C4574.2002,865.3,4577.2002,863,4581.1001,862.5z M4589.1001,865.8v-1l-7,1
c-1.8999,0.3-3.2998,1.4-3.2998,3.4c0.1001,1.9,1.7002,3.4,3.6001,3.3h0.1001C4586.1001,872.5,4589.1001,870.7,4589.1001,865.8
L4589.1001,865.8z"
            />
            <path fill="#2D2A26" d="M4600.5,875.5v-34.3h4.5v34.4L4600.5,875.5z" />
            <path fill="#2D2A26" d="M4612.5,875.5v-34.3h4.5v34.4L4612.5,875.5z" />
          </g>
          <g id="West_Bromwich">
            <path
              fill="#2D2A26"
              d="M4132,967.6h7.6001l-10.7002,38.5h-7.7002l-8.7002-27.4l-8.7998,27.4h-7.8l-10.7-38.5h7.8999l7.1001,26.5
l8.5-26.5h7.7002L4125,994.2L4132,967.6z"
            />
            <path
              fill="#2D2A26"
              d="M4167.5,998.4c-1.3999,4.6-5.6001,8.5-12.2002,8.5c-7.2998,0-13.7998-5.3-13.7998-14.3
c0-8.5,6.2998-14,13.1001-14c8.2002,0,13.2002,5.3,13.2002,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001
c0.2002,3.5,3.2002,6.2,6.7002,6.1c2.7002,0.2,5.2002-1.5,6.1001-4.1L4167.5,998.4z M4160.7002,989.7c-0.1001-2.7-1.7998-5.3-6-5.3
c-3.1001-0.1-5.7002,2.2-6,5.3H4160.7002z"
            />
            <path
              fill="#2D2A26"
              d="M4176.7998,997.3c0.2002,2.1,1.7002,4.1,4.7998,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.7998-2.2-2.8999-2.6
l-3.5-0.8c-5.2002-1.1-7.5-4.2-7.5-8c0-4.8,4.2002-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4
c-0.2998-2.2-2.2002-3.8-4.3999-3.6c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.7998,0.8
c5.2998,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8c-8,0-10.7998-5.2-11.1001-8.2L4176.7998,997.3z"
            />
            <path
              fill="#2D2A26"
              d="M4206.1001,979.4h5.3999v6.4h-5.3999V997c0,2.3,1.1001,3.1,3.1001,3.1c0.7002,0,1.5-0.1,2.2002-0.2v6
c-1.2998,0.5-2.7002,0.7-4.1001,0.6c-5.2002,0-8.5-3.1-8.5-8.2v-12.4h-4.7998v-6.4h1.3999c2.7998,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L4206.1001,979.4z"
            />
            <path
              fill="#2D2A26"
              d="M4243.8999,967.6c7.5,0,11.7002,4.4,11.7002,10.4c0.1001,3.7-2.1001,7-5.6001,8.2
c4.1001,1.1,6.8999,4.9,6.7998,9.1c0,6.2-4.7002,10.7-11.8999,10.7H4230v-38.5h13.8999V967.6z M4242.7998,983.5
c3.3999,0,5.5-1.9,5.5-4.8s-1.8999-4.8-5.5-4.8H4237.5v9.6H4242.7998z M4243.5,999.9c3.6001,0,5.7998-1.9,5.7998-5
s-1.8999-5.2-5.7002-5.2h-6.2002v10.1L4243.5,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M4278.2998,986.6c-0.7002-0.1-1.3999-0.2-2.2002-0.2c-3.7002,0-6.8999,1.8-6.8999,7.5v12.2h-7.2002v-26.7h7
v4c1.6001-3.5,5.2998-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7002,0.1V986.6z"
            />
            <path
              fill="#2D2A26"
              d="M4308.5,992.8c0,7.7-6.2002,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
C4302.5,978.6,4308.5,984.5,4308.5,992.8z M4301.2998,992.8c0-5-3.2998-7.6-6.7998-7.6s-6.7998,2.5-6.7998,7.6
c0,5,3.2998,7.6,6.7998,7.6C4298.1001,1000.3,4301.2998,997.8,4301.2998,992.8L4301.2998,992.8z"
            />
            <path
              fill="#2D2A26"
              d="M4313.6001,1006.1v-26.7h6.8999v3.3c1.5-2.6,4.7998-4,7.7998-4c3.6001,0,6.6001,1.6,7.8999,4.4
c1.7998-2.9,5-4.6,8.5-4.4c4.8999,0,9.7002,3,9.7002,10.1v17.3h-7v-15.8c0-2.9-1.3999-5-4.7002-5c-3.1001,0-4.8999,2.4-4.8999,5.3
v15.6h-7.2002v-15.8c0-2.9-1.5-5-4.7002-5c-3.2998,0-5,2.3-5,5.3v15.6h-7.2993V1006.1z"
            />
            <path
              fill="#2D2A26"
              d="M4383.7002,979.4l5.7998,17.2l4.8999-17.2h7.2002l-8.3999,26.7H4386l-6.2002-18.2l-6.1001,18.2h-7.2998
l-8.5-26.7h7.6001l4.8999,17.1l5.7998-17.1H4383.7002z"
            />
            <path
              fill="#2D2A26"
              d="M4409,966.2c2.5,0,4.3999,2,4.3999,4.4c0,2.5-2,4.4-4.3999,4.4s-4.3999-2-4.3999-4.4
C4404.5,968.2,4406.5,966.2,4409,966.2C4408.8999,966.2,4409,966.2,4409,966.2z M4405.3999,1006.1v-26.7h7.2002v26.7H4405.3999z"
            />
            <path
              fill="#2D2A26"
              d="M4424.8999,992.8c0,4.8,3.1001,7.5,6.7998,7.5c2.7998,0.1,5.3999-1.8,6.1001-4.5l6.2998,2.1
c-1.2002,4.5-5.3999,9-12.5,9c-7.6001,0.1-13.8999-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.3,6.1001-14.2,13.7998-14.2
c7.2998,0,11.3999,4.5,12.5,9l-6.5,2.2c-0.6001-2.7-3.1001-4.6-5.8999-4.5C4428,985.3,4424.8999,987.9,4424.8999,992.8z"
            />
            <path
              fill="#2D2A26"
              d="M4456.1001,1006.1h-7.2002v-39.3h7.2002v14.8c1.8999-2,4.5-3,7.2002-2.9c6.7998,0,9.8999,4.7,9.8999,10.6
v16.8H4466v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.7998,2.3-5,5.2V1006.1z"
            />
            <path
              fill="#2D2A26"
              d="M4203.2002,1042.5c0-11.2,8.3999-17.5,16.7002-17.5c7.7002,0,13.1001,4.2,14.7998,10.7l-4.2998,1.5
c-1.2998-5.1-5-7.9-10.5-7.9c-6.1001,0-12,4.5-12,13.2s5.7998,13.3,12,13.3c5,0.2,9.5-3.2,10.7002-8.1l4.1001,1.5
c-1.7998,6.3-7.1001,10.8-14.7998,10.8C4211.2002,1060.1,4203.2002,1053.8,4203.2002,1042.5z"
            />
            <path
              fill="#2D2A26"
              d="M4260.3999,1052.9c-1.3999,4.4-5.6001,7.4-10.2998,7.2c-6.1001,0-11.5-4.5-11.5-12.2
c0-7.2,5.2002-12,10.8999-12c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2002c-0.1001,3.7,2.8999,6.8,6.6001,6.9
c0.1001,0,0.2002,0,0.2002,0c3,0.2,5.6001-1.7,6.3999-4.6L4260.3999,1052.9z M4255.7998,1045.6c-0.1001-3.3-2.2002-5.8-6.2998-5.8
c-3.2998-0.1-6,2.5-6.2002,5.8H4255.7998z"
            />
            <path
              fill="#2D2A26"
              d="M4270.7002,1059.4h-4.5v-22.8h4.3999v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2002,3.9,8.2002,9v14.5h-4.5
v-13.7c0-3.2-1.2998-5.7-5.2998-5.7c-3.5,0-5.2998,2.8-5.2998,6.3L4270.7002,1059.4z"
            />
            <path
              fill="#2D2A26"
              d="M4298.8999,1036.5h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2002,3.1c0.6001,0,1.2002-0.1,1.7998-0.2v3.8
c-1,0.3-2,0.5-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2002c1.7998,0.2,3.2998-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7
v-3.7h4.1001L4298.8999,1036.5z"
            />
            <path
              fill="#2D2A26"
              d="M4322.3999,1041c-0.6001-0.1-1.2998-0.1-1.8999-0.1c-3.7002,0-6.2998,2-6.2998,7v11.4h-4.5v-22.8h4.3999v4
c1.1001-2.7,3.7998-4.5,6.7998-4.4c0.5,0,1,0.1,1.5,0.1V1041z"
            />
            <path
              fill="#2D2A26"
              d="M4332.6001,1046.3l6.2002-0.9c1.3999-0.2,1.7998-0.9,1.7998-1.7c0-2.2-1.5-4.1-4.8999-4.1
c-2.7002-0.2-5,1.8-5.2002,4.5v0.1l-4.2998-1c0.5-4.4,4.3999-7.4,9.2998-7.4c6.7998,0,9.5,3.9,9.5,8.3v11.4
c0,1.3,0.1001,2.5,0.2998,3.7h-4.3999c-0.2002-1-0.2998-2-0.2002-3.1c-1.6001,2.5-4.3999,3.9-7.3999,3.8
c-4.6001,0-7.6001-3.2-7.6001-6.8C4325.7002,1049.2,4328.7002,1046.9,4332.6001,1046.3z M4340.6001,1049.6v-1l-7,1
c-1.8999,0.3-3.2998,1.4-3.2998,3.4c0.1001,1.9,1.7002,3.4,3.6001,3.3h0.1001C4337.6001,1056.3,4340.6001,1054.6,4340.6001,1049.6z
"
            />
            <path fill="#2D2A26" d="M4352,1059.4V1025h4.5v34.4H4352z" />
          </g>
          <g id="Trinity_Way">
            <path fill="#2D2A26" d="M3924.2,842.3v31.3h-7.5v-31.3h-12.1001v-7.1h31.8v7.1H3924.2z" />
            <path
              fill="#2D2A26"
              d="M3956.7,854.2c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2V847h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7,0.1v7.3H3956.7z"
            />
            <path
              fill="#2D2A26"
              d="M3964.6001,833.8c2.5,0,4.3999,2,4.3999,4.4c0,2.5-2,4.4-4.3999,4.4s-4.3999-2-4.3999-4.4
C3960.1001,835.8,3962,833.8,3964.6001,833.8C3964.5,833.8,3964.5,833.8,3964.6001,833.8z M3961,873.7V847h7.2v26.7H3961z"
            />
            <path
              fill="#2D2A26"
              d="M3982.5,873.7h-7.2V847h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.3v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5V873.7z"
            />
            <path
              fill="#2D2A26"
              d="M4009.8999,833.8c2.5,0,4.3999,2,4.3999,4.4c0,2.5-2,4.4-4.3999,4.4s-4.3999-2-4.3999-4.4
C4005.3999,835.8,4007.3,833.8,4009.8999,833.8C4009.8,833.8,4009.8,833.8,4009.8999,833.8z M4006.3,873.7V847h7.2v26.7H4006.3z"
            />
            <path
              fill="#2D2A26"
              d="M4029.3999,847h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.7c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8V847h1.3999c2.8,0,4.1001-1.8,4.1001-4.2V839h6.5L4029.3999,847z"
            />
            <path
              fill="#2D2A26"
              d="M4041.7,884.2l6.3-13.9l-11.3-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7l-16.8,37.2H4041.7z"
            />
            <path
              fill="#2D2A26"
              d="M4126.1001,835.2h7.7002l-10.7002,38.5h-7.7002l-8.7998-27.4l-8.7002,27.4h-7.8l-10.7-38.5h7.8l7.1001,26.5
l8.4998-26.5h7.7002l8.6001,26.6L4126.1001,835.2z"
            />
            <path
              fill="#2D2A26"
              d="M4144,858.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.2998-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.2c0,1.4,0.1001,2.8,0.2998,4.2h-6.6001
c-0.2002-1.1-0.2998-2.1-0.2998-3.2c-1.7002,2.6-4.7002,4.1-7.8999,4c-5.7002,0-9.2002-3.9-9.2002-8
C4136,861.6,4139.6001,859,4144,858.3z M4152.6001,862.9v-1.2l-6,0.9c-1.8999,0.3-3.2998,1.3-3.2998,3.4c0,1.6,1.1001,3.1,3.5,3.1
C4149.7002,869.1,4152.6001,867.6,4152.6001,862.9z"
            />
            <path
              fill="#2D2A26"
              d="M4167.7998,884.2l6.2998-13.9l-11.2998-23.3h8.1001L4178,862.6l6.6001-15.6h7.7002l-16.7998,37.2H4167.7998
z"
            />
          </g>
          <g id="Kenrick_Park">
            <path
              fill="#2D2A26"
              d="M3674.6001,989.7l-4.8,5.3v10.7h-7.5v-38.4h7.5v17.4l15.3999-17.4h9.8l-15.2,16.8l15.3,21.7h-9.3999
L3674.6001,989.7z"
            />
            <path
              fill="#2D2A26"
              d="M3722.8999,998c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c3.3999,0,5.2-1.7,6.1001-4.1L3722.8999,998
z M3716.1001,989.3c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H3716.1001z"
            />
            <path
              fill="#2D2A26"
              d="M3735.5,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3735.5,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M3775.6001,986.1c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2V979h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7,0.1v7.2H3775.6001z"
            />
            <path
              fill="#2D2A26"
              d="M3783.5,965.7c2.5,0,4.3999,2,4.3999,4.5s-2,4.4-4.5,4.4c-2.3999,0-4.3999-2-4.3999-4.4
S3781,965.8,3783.5,965.7C3783.3999,965.7,3783.5,965.7,3783.5,965.7z M3779.8999,1005.7V979h7.2v26.7H3779.8999z"
            />
            <path
              fill="#2D2A26"
              d="M3799.3999,992.3c0,4.8,3.1001,7.5,6.8,7.5c2.8,0.1,5.3999-1.8,6.1001-4.5l6.3,2.1
c-1.2,4.4-5.3999,9-12.5,9c-7.6001,0.1-13.8999-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.2,6.1001-14.2,13.8-14.2
c7.3,0,11.3999,4.5,12.5,9l-6.5,2.2c-0.6001-2.7-3.1001-4.6-5.8999-4.5C3802.5,984.8,3799.3999,987.5,3799.3999,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M3838.5,990.2l10.8999,15.5h-8.8l-7.1001-10.2l-3,3.1v7.1h-7.2v-39.3h7.3v22.5l9.2-9.9h9.3999L3838.5,990.2
z"
            />
            <path
              fill="#2D2A26"
              d="M3873.8,991.2v14.5h-7.5v-38.5H3880.7c7.6001,0,12.6001,5,12.6001,12c0,6.9-5,12-12.6001,12H3873.8z
M3879.8,984.7c3.7,0,6-2.2,6-5.5s-2.3-5.5-6-5.5h-5.8999v11H3879.8z"
            />
            <path
              fill="#2D2A26"
              d="M3904.3,990.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3l0,0
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.1c0,1.4,0.1001,2.8,0.3,4.2h-6.6001
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C3896.3999,993.6,3899.8999,991,3904.3,990.3z
M3912.8999,994.9v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1
C3910.1001,1001.1,3912.8999,999.6,3912.8999,994.9L3912.8999,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M3942.8,986.1c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2V979h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7,0.1v7.2H3942.8z"
            />
            <path
              fill="#2D2A26"
              d="M3962.3,990.2l10.8999,15.5h-8.8l-7.1001-10.2l-3,3.1v7.1h-7.2v-39.3h7.2v22.5l9.2-9.9h9.3999L3962.3,990.2
z"
            />
          </g>
          <g id="The_Hawthorns">
            <path fill="#2D2A26" d="M3415.2,841.5v31.3h-7.5v-31.3h-12.1001v-7.1h31.8v7.1H3415.2z" />
            <path
              fill="#2D2A26"
              d="M3438.6001,872.8h-7.2v-39.3h7.2v14.8c1.8999-2,4.5-3,7.2-2.9c6.8,0,9.8999,4.7,9.8999,10.6v16.8h-7.2
v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
            />
            <path
              fill="#2D2A26"
              d="M3486.3,865.2c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.8,6.1c2.7,0.2,5.2-1.5,6.1001-4.1L3486.3,865.2z
M3479.6001,856.5c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H3479.6001z"
            />
            <path
              fill="#2D2A26"
              d="M3529.3,872.8v-15.9h-16.8v15.9h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5H3529.3z"
            />
            <path
              fill="#2D2A26"
              d="M3550.8,857.5l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.3,4.2h-6.6001
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C3542.8,860.8,3546.3,858.2,3550.8,857.5z M3559.3,862.1
v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1C3556.5,868.2,3559.3,866.8,3559.3,862.1L3559.3,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M3595.7,846.2l5.8,17.2l4.8999-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1001,18.2h-7.3l-8.5-26.7h7.6001
l4.8999,17.1l5.8-17.1H3595.7z"
            />
            <path
              fill="#2D2A26"
              d="M3626.3,846.2h5.3999v6.4H3626.3v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.7c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.3999c2.8,0,4.1001-1.8,4.1001-4.2v-3.7h6.5L3626.3,846.2z"
            />
            <path
              fill="#2D2A26"
              d="M3644.2,872.8h-7.2v-39.3h7.2v14.8c1.8999-2,4.5-3,7.2-2.9c6.8,0,9.8999,4.7,9.8999,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
            />
            <path
              fill="#2D2A26"
              d="M3694,859.5c0,7.7-6.2,14-14,14c-7.7,0-14-6.2-14-14c0,0,0,0,0-0.1c0-8.2,6-14.2,14-14.2
C3688,845.3,3694,851.3,3694,859.5z M3686.8,859.5c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
C3683.6001,867.1,3686.8,864.6,3686.8,859.5L3686.8,859.5z"
            />
            <path
              fill="#2D2A26"
              d="M3715.3999,853.3c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2v-26.7h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7,0.1v7.3H3715.3999z"
            />
            <path
              fill="#2D2A26"
              d="M3726.8,872.8h-7.2v-26.7h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3726.8,872.8z"
            />
            <path
              fill="#2D2A26"
              d="M3754.5,864.1c0.2,2.1,1.7,4.1,4.8,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.8999-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.3999-3.6
c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.8,0.8c5.3,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8
c-8,0-10.8-5.2-11.1001-8.2L3754.5,864.1z"
            />
            <g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000114035934725828706820000013065565303211171753_"
                    x="3548.6001"
                    y="729.2"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000049220242478102057360000014825665780287590538_">
                  <use
                    xlinkHref="#SVGID_00000114035934725828706820000013065565303211171753_"
                    overflow="visible"
                  />
                </clipPath>
                <g clipPath="url(#SVGID_00000049220242478102057360000014825665780287590538_)">
                  <g>
                    <defs>
                      <rect
                        id="SVGID_00000148651837698146028930000013688370061692471738_"
                        x="3548.533"
                        y="729.1648"
                        width="68.4373"
                        height="68.4373"
                      />
                    </defs>
                    <clipPath id="SVGID_00000037674458252552369630000007357087796549223076_">
                      <use
                        xlinkHref="#SVGID_00000148651837698146028930000013688370061692471738_"
                        overflow="visible"
                      />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000037674458252552369630000007357087796549223076_)">
                      <use
                        xlinkHref="#Park_and_ride"
                        width="72.1"
                        height="72.1"
                        x="-36.05"
                        y="-36.05"
                        transform="matrix(0.9492 0 0 0.9492 3582.8464 763.3834)"
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
              d="M3227.6001,1005.7v-16h-16.8v16h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5H3227.6001z"
            />
            <path
              fill="#2D2A26"
              d="M3249.1001,990.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.1c0,1.4,0.1001,2.8,0.3,4.2h-6.6001
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C3241.1001,993.6,3244.6001,991,3249.1001,990.3z
M3257.7,994.9v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1C3254.8999,1001.1,3257.7,999.6,3257.7,994.9
L3257.7,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M3278.5,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3278.5,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M3327.8,1000.8c0,1.8,0.1001,3.7,0.2,4.8h-6.8999c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.8999,3.7-7.5,3.7
c-7.6001,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6001,0,6.8,1.9,7.5,3.3v-15.3h7.1001L3327.8,1000.8z M3314.3,999.9
c3.7,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4c-3.7,0-6.6001,2.7-6.6001,7.5C3307.6001,997,3310.5,999.9,3314.3,999.9
L3314.3,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M3338.8999,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.8999-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.3999-3.6
c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.8,0.8c5.3,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8
c-8,0-10.8-5.2-11.1001-8.3L3338.8999,996.9z"
            />
            <path
              fill="#2D2A26"
              d="M3382.1001,979l5.8,17.2L3392.8,979h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1001,18.2h-7.3l-8.5-26.7H3364
l4.8999,17.1l5.8-17.1H3382.1001z"
            />
            <path
              fill="#2D2A26"
              d="M3429.7,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S3429.7,984.1,3429.7,992.3z
M3422.5,992.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S3422.5,997.4,3422.5,992.3L3422.5,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M3451,986.1c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2V979h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7,0.1v7.2H3451z"
            />
            <path
              fill="#2D2A26"
              d="M3464.2,979h5.3999v6.4H3464.2v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.6c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.3999c2.8,0,4.1001-1.8,4.1001-4.2V971h6.5L3464.2,979z"
            />
            <path
              fill="#2D2A26"
              d="M3482.1001,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.8999,4.7,9.8999,10.6v16.8h-7.2
v-15.6c0-3-1.5-5.3-4.8999-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M3231.6001,1025.3c6.3999,0,10.2,3.8,10.2,9.1c0.1001,3.3-1.8999,6.2-5,7.3c3.7,0.9,6.2,4.3,6.1001,8.1
c0,5.3-4.2,9.2-10.3999,9.2h-11.8v-33.6h10.8999V1025.3z M3231.1001,1040c3.7,0,6-2.2,6-5.4s-2.3-5.3-6.2-5.3H3225.3v10.7
L3231.1001,1040z M3231.8,1054.9c3.7,0,6.3-2.1,6.3-5.4s-2-5.5-6.1001-5.5h-6.6001v10.9H3231.8z"
            />
            <path
              fill="#2D2A26"
              d="M3270.2,1047.5c0,7-4.8,12.1-11.7,12.1s-11.6001-5.2-11.6001-12.1s4.8-12.1,11.6001-12.1
S3270.2,1040.6,3270.2,1047.5z M3265.7,1047.5c0-5.3-3.3-8.1-7.1001-8.1s-7.1001,2.8-7.1001,8.1c0,5.3,3.3,8.2,7.1001,8.2
S3265.7,1052.8,3265.7,1047.5z"
            />
            <path
              fill="#2D2A26"
              d="M3297.3999,1047.5c0,7-4.8,12.1-11.6001,12.1s-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
C3292.6001,1035.4,3297.3999,1040.6,3297.3999,1047.5z M3292.8,1047.5c0-5.3-3.3-8.1-7.1001-8.1s-7.1001,2.8-7.1001,8.1
c0,5.3,3.3,8.2,7.1001,8.2S3292.8,1052.8,3292.8,1047.5z"
            />
            <path
              fill="#2D2A26"
              d="M3309,1036.1h4.8999v4H3309v11.9c0,2.1,0.8999,3.1,3.2,3.1c0.6001,0,1.2-0.1,1.8-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2c1.7,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1001
L3309,1036.1z"
            />
            <path
              fill="#2D2A26"
              d="M3324.3999,1058.9h-4.5v-34.4h4.5v14.2c1.6001-2.2,4.2-3.5,6.8999-3.3c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.3999,0-5.2,2.7-5.3,6L3324.3999,1058.9z"
            />
            <path
              fill="#2D2A26"
              d="M3376.2,1034.4c-0.5-3.5-3.6001-6-7.1001-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
c5.6001,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6001,10c-8.1001,0-12-5.2-12.6001-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1001,7.2l0,0
c4.6001,0,6.8999-2.4,6.8999-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1001-10
c7.6001,0,10.7,4.7,11.3999,8.4L3376.2,1034.4z"
            />
            <path
              fill="#2D2A26"
              d="M3392.6001,1036.1h4.8999v4h-4.8999v11.9c0,2.1,0.8999,3.1,3.2,3.1c0.6001,0,1.2-0.1,1.8-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1001
L3392.6001,1036.1z"
            />
            <path
              fill="#2D2A26"
              d="M3416.1001,1040.6c-0.6001-0.1-1.3-0.1-1.8999-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.3999v-22.8h4.3999v4
c1.2-2.7,3.8999-4.5,6.8-4.4c0.5,0,1,0,1.5,0.1L3416.1001,1040.6z"
            />
            <path
              fill="#2D2A26"
              d="M3440.7,1052.4c-1.3999,4.4-5.6001,7.4-10.2,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.8999-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2,0,0.3,0
c3,0.2,5.6001-1.7,6.3999-4.6L3440.7,1052.4z M3436.2,1045.2c-0.1001-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H3436.2z"
            />
            <path
              fill="#2D2A26"
              d="M3466.3999,1052.4c-1.3999,4.4-5.6001,7.4-10.3,7.2c-6.1001,0-11.5-4.5-11.5-12.2
c0-7.2,5.2-12.1,10.8999-12.1c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2c-0.1001,3.7,2.8999,6.8,6.6001,6.9
c0.1001,0,0.2,0,0.2,0c3,0.2,5.6001-1.7,6.3999-4.6L3466.3999,1052.4z M3461.8999,1045.2c-0.1001-3.3-2.2-5.8-6.3-5.8
c-3.3,0-6,2.5-6.2,5.8H3461.8999z"
            />
            <path
              fill="#2D2A26"
              d="M3478.3,1036.1h4.8999v4H3478.3v11.9c0,2.1,0.8999,3.1,3.2,3.1c0.6001,0,1.2-0.1,1.8-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2c1.7,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1001
L3478.3,1036.1z"
            />
          </g>
          <g id="Winson_Green">
            <path
              fill="#2D2A26"
              d="M2989.8,783.8h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.8999L2958,810.3l8.5-26.5h7.7
l8.6001,26.6L2989.8,783.8z"
            />
            <path
              fill="#2D2A26"
              d="M3004.8999,782.3c2.5,0,4.5,2,4.5,4.4c0,2.5-2,4.5-4.3999,4.5s-4.3999-2-4.5-4.4
C3000.3999,784.4,3002.3,782.3,3004.8999,782.3C3004.8,782.3,3004.8,782.3,3004.8999,782.3z M3001.3,822.2v-26.7h7.2v26.7H3001.3z"
            />
            <path
              fill="#2D2A26"
              d="M3022.8,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3022.8,822.2z"
            />
            <path
              fill="#2D2A26"
              d="M3050.5,813.5c0.2,2.1,1.7,4.1,4.8,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.8999-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6001,0,10.1001,4.8,10.5,7.7l-6,1.4c-0.2-2.2-2.2-3.8-4.3999-3.6
c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.8,0.8c5.3,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8
c-8,0-10.8-5.2-11.1001-8.2L3050.5,813.5z"
            />
            <path
              fill="#2D2A26"
              d="M3096.8999,808.9c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S3096.8999,800.6,3096.8999,808.9z
M3089.7,808.9c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S3089.7,813.9,3089.7,808.9L3089.7,808.9z"
            />
            <path
              fill="#2D2A26"
              d="M3109.1001,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3109.1001,822.2z"
            />
            <path
              fill="#2D2A26"
              d="M3175,822.2l-0.5-4.4c-1.7,2.6-5.5,5.2-11.3,5.2c-10.3999,0-19.2-7.6-19.2-20s9.3-20.1,19.7-20.1
c10.1001,0,15.7,5.9,17.6001,11.8l-7.2,2.5c-1-3.4-4.2-7.4-10.3999-7.4c-5.8,0-12.1001,4-12.1001,13.1c0,8.7,5.7,13.2,12.1001,13.2
c7.1001,0,9.8999-4.8,10.3-7.5h-12.1001v-6.5h19.2v20L3175,822.2z"
            />
            <path
              fill="#2D2A26"
              d="M3203.7,802.7c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2v-26.7h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0.1,1.7,0.1v7.3H3203.7z"
            />
            <path
              fill="#2D2A26"
              d="M3231.8999,814.6c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1001-14
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c3.3999,0,5.2-1.7,6.1001-4.1
L3231.8999,814.6z M3225.2,805.9c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H3225.2z"
            />
            <path
              fill="#2D2A26"
              d="M3261.2,814.6c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1001-14
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c3.3999,0,5.2-1.7,6.1001-4.1L3261.2,814.6z
M3254.5,805.9c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H3254.5z"
            />
            <path
              fill="#2D2A26"
              d="M3273.8999,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6001-4.1,7.7-4c6.6001,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3.1001,0-5,2.4-5,5.5L3273.8999,822.2z"
            />
            <path
              fill="#2D2A26"
              d="M3005.1001,841.2c8.3999,0,16.8999,6.3,16.8999,17.5s-8.3999,17.6-16.8999,17.6s-16.8999-6.3-16.8999-17.6
S2996.7,841.2,3005.1001,841.2z M3005.1001,872c6.3,0,12.1001-4.5,12.1001-13.3s-5.8999-13.2-12.1001-13.2
c-6.3,0-12.1001,4.5-12.1001,13.2S2998.8,871.9,3005.1001,872L3005.1001,872z"
            />
            <path
              fill="#2D2A26"
              d="M3036.2,876.2c-5.3,0-8.5-4-8.5-9.2v-14.4h4.5v13.7c0,3.1,1.3999,5.9,5.2,5.9c3.7,0,5.3999-2.4,5.3999-5.8
v-13.8h4.5v18.6c0,1.4,0.1001,2.8,0.2,4.2h-4.2c-0.1001-0.9-0.2-1.8-0.2-2.8C3041.7,875.1,3038.8999,876.2,3036.2,876.2z"
            />
            <path
              fill="#2D2A26"
              d="M3060.8,852.7h4.8999v4H3060.8v11.9c0,2.1,0.8999,3.1,3.2,3.1c0.6001,0,1.2-0.1,1.8-0.2v3.8
c-1,0.3-2,0.4-3,0.4c-3.8999,0-6.3999-2.4-6.3999-6.5v-12.5h-4.3999v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1001
L3060.8,852.7z"
            />
            <path
              fill="#2D2A26"
              d="M3091.5,869c-1.3999,4.4-5.6001,7.4-10.3,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2,0,0.3,0
c3,0.2,5.6001-1.7,6.3999-4.6L3091.5,869z M3087,861.7c-0.1001-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H3087z"
            />
            <path
              fill="#2D2A26"
              d="M3110,857.2c-0.6001-0.1-1.3-0.1-1.8999-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.3999v4
c1.2-2.7,3.8999-4.5,6.8-4.4c0.5,0,1,0.1,1.5,0.1V857.2z"
            />
            <path
              fill="#2D2A26"
              d="M3125,858.7c0-11.2,8.3-17.5,16.7-17.5c7.7,0,13.1001,4.2,14.8,10.7l-4.3,1.5c-1.3-5.1-5-7.9-10.5-7.9
c-6.1001,0-12,4.5-12,13.2c0,8.8,5.8,13.3,12,13.3c5,0.2,9.5-3.2,10.7-8.1l4.1001,1.5c-1.8,6.3-7.1001,10.8-14.8,10.8
C3133,876.2,3125,869.9,3125,858.7z"
            />
            <path
              fill="#2D2A26"
              d="M3164.3999,840.8c1.8,0,3.2,1.4,3.2,3.2s-1.3999,3.2-3.2,3.2s-3.2-1.4-3.2-3.2l0,0
C3161.2,842.3,3162.6001,840.8,3164.3999,840.8L3164.3999,840.8z M3162.2,875.5v-22.8h4.3999v22.8H3162.2z"
            />
            <path
              fill="#2D2A26"
              d="M3186.8999,857.2c-0.6001-0.1-1.3-0.1-1.8999-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.3999v4
c1.2-2.7,3.8999-4.5,6.8-4.4c0.5,0,1,0.1,1.5,0.1V857.2z"
            />
            <path
              fill="#2D2A26"
              d="M3194.3,864.1c0,5.2,3.3,8,7,8c3,0.2,5.6001-1.8,6.3999-4.7l3.8999,1.7c-1.5,4.4-5.7,7.3-10.3,7.1
c-6.6001,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1001,0,9.2,3.8,10.2,7.3l-4,1.7c-0.6001-2.9-3.2-5-6.1001-4.8
C3197.6001,856.1,3194.3,858.8,3194.3,864.1z"
            />
            <path fill="#2D2A26" d="M3216.8,875.5v-34.3h4.5v34.4L3216.8,875.5z" />
            <path
              fill="#2D2A26"
              d="M3248.7,869c-1.3999,4.4-5.6001,7.4-10.2,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.8999-12
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2,0,0.3,0
c3,0.2,5.6001-1.7,6.3999-4.6L3248.7,869z M3244.2,861.7c-0.1001-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H3244.2z"
            />
          </g>
          <g id="Soho">
            <path
              fill="#2D2A26"
              d="M2846.6001,978.4c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2,4.3l5.3999,1
c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2,0-14.7-6.6-15.3-12l6.8999-1.8c0.3,3.8,3,7.2,8.3999,7.2
c4,0,6.2-2,6.2-4.7c0-2.2-1.7-4-4.7-4.6l-5.3999-1.1c-6.1001-1.2-10.1001-5.2-10.1001-11c0-6.8,6.1001-12,13.3999-12
c9.3,0,12.8999,5.6,13.8,10L2846.6001,978.4z"
            />
            <path
              fill="#2D2A26"
              d="M2885,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2C2879,978.2,2885,984.1,2885,992.3z
M2877.8,992.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S2877.8,997.4,2877.8,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M2897.3,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.8999,4.7,9.8999,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M2947.1001,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S2947.1001,984.1,2947.1001,992.3z
M2939.8,992.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S2939.8,997.4,2939.8,992.3z"
            />
            <path
              fill="#2D2A26"
              d="M2762.5,1025.3c6.3999,0,10.2,3.8,10.2,9.1c0.1001,3.3-1.8999,6.2-5,7.3c3.7,0.9,6.2,4.3,6.1001,8.1
c0,5.3-4.2,9.2-10.3999,9.2h-11.8v-33.6H2762.5V1025.3z M2762,1040c3.7,0,6-2.2,6-5.4s-2.3-5.3-6.2-5.3H2756.2v10.7L2762,1040z
M2762.7,1054.9c3.7,0,6.3-2.1,6.3-5.4s-2-5.5-6.1001-5.5h-6.6001v10.9H2762.7z"
            />
            <path
              fill="#2D2A26"
              d="M2799.5,1052.4c-1.3999,4.4-5.6001,7.4-10.2,7.2c-6.1001,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.8999-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1001,1.4h-17.2c-0.1001,3.7,2.8999,6.8,6.6001,6.9c0.1001,0,0.2,0,0.2,0
c3,0.2,5.6001-1.7,6.3999-4.6L2799.5,1052.4z M2795,1045.2c-0.1001-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2795z"
            />
            <path
              fill="#2D2A26"
              d="M2809.8999,1058.9h-4.5v-22.8h4.3999v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L2809.8999,1058.9z"
            />
            <path
              fill="#2D2A26"
              d="M2834,1051.6c0.3,2.4,2.1001,4.3,5.3,4.3c2.5,0,3.8999-1.4,3.8999-3c0-1.4-1-2.5-2.8999-2.9l-3.8999-0.9
c-3.6001-0.8-5.7-3.2-5.7-6.4c0-3.9,3.7-7.2,8.1001-7.2c6.3,0,8.2,4.1,8.7,6.1l-3.8999,1.5c-0.3-2.3-2.3999-4-4.7-3.8
c-2.3,0-3.8,1.5-3.8,3c0,1.4,0.8999,2.4,2.6001,2.8l3.7,0.8c4.1001,0.9,6.3,3.4,6.3,6.8c0,3.2-2.7,7.1-8.3,7.1
c-6.3,0-8.8999-4-9.3-6.6L2834,1051.6z"
            />
            <path
              fill="#2D2A26"
              d="M2875,1047.5c0,7-4.8,12.1-11.7,12.1c-6.8,0-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
C2870.1001,1035.4,2875,1040.6,2875,1047.5z M2870.3999,1047.5c0-5.3-3.3-8.1-7.1001-8.1s-7.1001,2.8-7.1001,8.1
c0,5.3,3.3,8.2,7.1001,8.2S2870.3999,1052.8,2870.3999,1047.5z"
            />
            <path
              fill="#2D2A26"
              d="M2885.1001,1058.9h-4.5v-22.8H2885v3.3c1.3999-2.5,4.1001-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L2885.1001,1058.9z"
            />
            <path
              fill="#2D2A26"
              d="M2929.3999,1045.2h-5v13.8h-4.7v-33.6h12.7c6.3999,0,10.3,4.5,10.3,10c0,4.8-3.1001,8.6-8.2,9.5l8,14.1
h-5.3999L2929.3999,1045.2z M2931.5,1041c3.8,0,6.3999-2.2,6.3999-5.7s-2.6001-5.8-6.3999-5.8h-7.1001v11.5H2931.5z"
            />
            <path
              fill="#2D2A26"
              d="M2970,1047.5c0,7-4.8,12.1-11.6001,12.1s-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
C2965.2,1035.4,2970,1040.6,2970,1047.5z M2965.5,1047.5c0-5.3-3.3-8.1-7.1001-8.1s-7.1001,2.8-7.1001,8.1
c0,5.3,3.3,8.2,7.1001,8.2S2965.5,1052.8,2965.5,1047.5z"
            />
            <path
              fill="#2D2A26"
              d="M2981.2,1045.9l6.2-0.9c1.3999-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.8999-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1
l-4.3-1c0.5-4.4,4.3999-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1001,2.5,0.3,3.8h-4.3999c-0.2-1-0.3-2.1-0.2-3.1
c-1.6001,2.5-4.3999,3.9-7.3999,3.8c-4.6001,0-7.6001-3.2-7.6001-6.8C2974.3,1048.7,2977.3,1046.5,2981.2,1045.9z
M2989.1001,1049.2v-1l-7,1c-1.8999,0.3-3.3,1.4-3.3,3.4c0.1001,1.9,1.7,3.4,3.6001,3.3h0.1001
C2986.2,1055.9,2989.2,1054.1,2989.1001,1049.2L2989.1001,1049.2z"
            />
            <path
              fill="#2D2A26"
              d="M3016.5,1055.5c-1.3999,2.6-4.1001,4.2-7.1001,4.1c-6.7,0-10.8-5.3-10.8-12.1c0-6.5,4.3999-12,10.8-12
c4,0,6.2,2,7,3.9v-14.8h4.5v30.1c0,1.4,0.1001,2.8,0.2,4.2h-4.3c-0.2-1-0.2-2.1-0.2-3.1L3016.5,1055.5z M3009.8999,1055.6
c4.1001,0,6.6001-3.6,6.6001-8.3c0-4.7-2.5-7.9-6.5-7.9c-4.1001,0-6.8,3.3-6.8,8C3003.2,1052.2,3005.6001,1055.6,3009.8999,1055.6z
"
            />
          </g>
          <g id="Jewellery_Quarter">
            {!isSelectedStation('Jewellery Quarter') && (
              <>
                <path
                  fill="#FFFFFF"
                  d="M2515.2,763.9H2791.8c8,0,14.6001,6.5,14.6001,14.6V875c0,8-6.5,14.6-14.6001,14.6H2515.2
c-8,0-14.6001-6.5-14.6001-14.6v-96.4C2500.7,770.5,2507.2,763.9,2515.2,763.9z"
                />
                <path
                  fill="#2D2A26"
                  d="M2791.8999,765.4c7.2,0,13.1001,5.9,13.1001,13.1V875c0,7.2-5.8999,13.1-13.1001,13.1h-276.6001
c-7.2,0-13.1001-5.9-13.1001-13.1l0,0v-96.5c0-7.2,5.8999-13.1,13.1001-13.1H2791.8999 M2791.8,762.5H2515.2c-8.8,0-16,7.2-16,16
V875c0,8.8,7.2,16,16,16H2791.8c8.8,0,16-7.2,16-16v-96.5C2807.8,769.7,2800.6001,762.5,2791.8,762.5L2791.8,762.5z"
                />
              </>
            )}
            <path
              fill="#2D2A26"
              d="M2533.8999,803.4l7.2-1.3v3.5c0.1001,4,2.3,5.8,5.3,5.8s5.1001-2.2,5.1001-5.6v-26.6h7.5v26.6
c0,6.9-5,12.7-12.5,12.7s-12.6001-5-12.6001-12.5V803.4z"
            />
            <path
              fill="#2D2A26"
              d="M2590.1001,810c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2H2571.2c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1001-4L2590.1001,810z
M2583.3999,801.3c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H2583.3999z"
            />
            <path
              fill="#2D2A26"
              d="M2618.3,791l5.8,17.2L2629,791h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1001,18.2h-7.3l-8.5-26.7h7.6001
l4.8999,17.1l5.8-17.1H2618.3z"
            />
            <path
              fill="#2D2A26"
              d="M2663.8999,810c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1001-4.1L2663.8999,810z
M2657.1001,801.3c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H2657.1001z"
            />
            <path fill="#2D2A26" d="M2669.3,817.6v-39.3h7.2v39.3H2669.3z" />
            <path fill="#2D2A26" d="M2683.6001,817.6v-39.3h7.2v39.3H2683.6001z" />
            <path
              fill="#2D2A26"
              d="M2721.8,810c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1001-4.1L2721.8,810z
M2715,801.3c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H2715z"
            />
            <path
              fill="#2D2A26"
              d="M2743.5,798.1c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2V791h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7,0.1L2743.5,798.1z"
            />
            <path
              fill="#2D2A26"
              d="M2749.3,828.2l6.3-13.9l-11.3-23.3h8.1001l7.1001,15.6l6.6001-15.6h7.7l-16.8,37.2H2749.3z"
            />
            <path
              fill="#2D2A26"
              d="M2578.6001,833.6c10.5,0,19.8,7.7,19.8,20.1c0.1001,4.9-1.6001,9.6-4.7,13.3l4.6001,5.1l-4.8999,4.2
l-4.7-5.2c-3.1001,1.7-6.5,2.6-10,2.6c-10.3999,0-19.7-7.6-19.7-20C2558.8999,841.3,2568.2,833.6,2578.6001,833.6z
M2578.6001,866.4c1.7,0,3.3999-0.3,4.8999-1l-6-6.6l5-4.3l6,6.7c1.5-2.3,2.2-4.9,2.1001-7.7c0-8.7-6.1001-12.8-12-12.8
c-6,0-12,4.1-12,12.8C2566.7,862.3,2572.7,866.4,2578.6001,866.4L2578.6001,866.4z"
            />
            <path
              fill="#2D2A26"
              d="M2621,870c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5v-16.9h7.2v15.4
c0,3,1.5,5.4,4.8,5.4c3.2,0,5-2.2,5-5.3v-15.5h7.2V868c0,1.6,0.1001,3.2,0.3,4.8h-6.8999C2621,871.9,2621,870.9,2621,870z"
            />
            <path
              fill="#2D2A26"
              d="M2641.2,857.5l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.3,4.2H2650.5
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C2633.3,860.8,2636.8,858.2,2641.2,857.5z M2649.8,862.1
v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1C2647,868.2,2649.8,866.8,2649.8,862.1L2649.8,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M2679.7,853.3c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2v-26.7h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7,0.1L2679.7,853.3z"
            />
            <path
              fill="#2D2A26"
              d="M2692.8999,846.2h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.7c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.3999c2.8,0,4.1001-1.8,4.1001-4.2v-3.7h6.5
L2692.8999,846.2z"
            />
            <path
              fill="#2D2A26"
              d="M2727.5,865.2c-1.3999,4.6-5.6001,8.5-12.1001,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1001-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1001c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1001-4.1L2727.5,865.2z
M2720.8,856.5c-0.1001-2.7-1.8-5.3-6-5.3c-3.1001-0.1-5.7,2.2-6,5.3H2720.8z"
            />
            <path
              fill="#2D2A26"
              d="M2749.2,853.3c-0.7-0.1-1.3999-0.2-2.2-0.2c-3.7,0-6.8999,1.8-6.8999,7.5v12.2h-7.2v-26.7h7v4
c1.6001-3.5,5.3-4.2,7.6001-4.2c0.6001,0,1.1001,0,1.7,0.1v7.3H2749.2z"
            />
          </g>
          <g id="St_Pauls">
            <path
              fill="#2D2A26"
              d="M2340.8,978.4c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2,4.3l5.3999,1
c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2,0-14.7-6.6-15.3-12l6.8999-1.8c0.3,3.8,3,7.2,8.3999,7.2
c4,0,6.2-2,6.2-4.7c0-2.2-1.7-4-4.7-4.6l-5.3999-1.1c-6.1001-1.2-10.1001-5.2-10.1001-11c0-6.8,6.1001-12,13.3999-12
c9.3,0,12.8999,5.6,13.8,10L2340.8,978.4z"
            />
            <path
              fill="#2D2A26"
              d="M2362.1001,979h5.3999v6.4h-5.3999v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.6c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.3999c2.8,0,4.1001-1.8,4.1001-4.2V971h6.5L2362.1001,979z"
            />
            <path
              fill="#2D2A26"
              d="M2393.5,991.2v14.5h-7.5v-38.5h14.3999c7.6001,0,12.6001,5,12.6001,12c0,6.9-5,12-12.6001,12H2393.5z
M2399.5,984.7c3.7,0,6-2.2,6-5.5s-2.3-5.5-6-5.5h-5.8999v11H2399.5z"
            />
            <path
              fill="#2D2A26"
              d="M2424.1001,990.3l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.2v13.1c0,1.4,0.1001,2.8,0.3,4.2h-6.6001
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C2416.1001,993.6,2419.6001,991,2424.1001,990.3z
M2432.6001,994.9v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1C2429.8,1001.1,2432.6001,999.6,2432.6001,994.9
L2432.6001,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M2463.6001,1002.8c-1.5,2.5-4.6001,3.6-7.3999,3.6c-6.5,0-10.1001-4.7-10.1001-10.5V979h7.2v15.4
c0,3,1.5,5.4,4.8,5.4c3.2,0,5-2.2,5-5.3V979h7.2v21.9c0,1.6,0.1001,3.2,0.3,4.8h-6.8999
C2463.6001,1004.7,2463.5,1003.8,2463.6001,1002.8z"
            />
            <path fill="#2D2A26" d="M2477.3999,1005.7v-39.3h7.2v39.3H2477.3999z" />
            <path
              fill="#2D2A26"
              d="M2494,966.8c2.8999,0,4.7,2.4,4.7,5.3c0,7.3-5,9.9-8.3999,10.3V979c2.3999-0.3,4.2-2.2,4.3999-4.6
c-0.3,0.2-0.7,0.3-1.1001,0.3c-2,0.1-3.8-1.4-3.8999-3.5c0-0.1,0-0.3,0-0.4c0.1001-2.3,1.8999-4.1,4.2-4H2494z"
            />
            <path
              fill="#2D2A26"
              d="M2507.7,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.8999-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6001,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.3999-3.6
c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.8,0.8c5.3,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8
c-8,0-10.8-5.2-11.1001-8.3L2507.7,996.9z"
            />
          </g>
          <g id="St_Chads">
            <path
              fill="#2D2A26"
              d="M2101,845.6c-0.3999-2.1-2.1001-5.4-7-5.4c-3.6001,0-6,2.3-6,4.8c0,2.1,1.3999,3.8,4.2,4.3l5.3999,1
c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.8999,11.9-13.8999,11.9c-10.2,0-14.7-6.6-15.3-12l6.8999-1.8c0.3,3.8,3,7.2,8.3999,7.2
c4,0,6.2-2,6.2-4.7c0-2.2-1.7-4-4.7-4.6l-5.3999-1c-6.1001-1.2-10.1001-5.2-10.1001-11c0-6.8,6.1001-12,13.3999-12
c9.3,0,12.8999,5.6,13.8,10L2101,845.6z"
            />
            <path
              fill="#2D2A26"
              d="M2122.3,846.2h5.3999v6.4H2122.3v11.2c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.7c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.3999c2.8,0,4.1001-1.8,4.1001-4.2v-3.7h6.5L2122.3,846.2z"
            />
            <path
              fill="#2D2A26"
              d="M2144,853.6c0-12.3,9.3-20.1,19.6001-20.1c10.7,0,16.1001,6.5,17.6001,12.7l-7.1001,2.2
c-1-3.7-3.8999-7.7-10.6001-7.7c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.7,12.7,11.8999,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1
c-1.5,5.9-7,13.1-17.8,13.1S2144,865.9,2144,853.6z"
            />
            <path
              fill="#2D2A26"
              d="M2193.8,872.8h-7.2v-39.3h7.2v14.8c1.8999-1.9,4.5-3,7.2-2.9c6.8,0,9.8999,4.7,9.8999,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.8999-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
            />
            <path
              fill="#2D2A26"
              d="M2223.8999,857.5l6.6001-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6001-0.2-4.8999,1.7-5.1001,4.3
l-6.3999-1.4c0.3999-4.2,4.3-8.8,11.3999-8.8c8.5,0,11.6001,4.8,11.6001,10.1v13.1c0,1.4,0.1001,2.8,0.3,4.2H2233.2
c-0.2-1.1-0.3-2.1-0.3-3.2c-1.7,2.6-4.7,4.1-7.8999,4c-5.7,0-9.2-3.9-9.2-8C2215.8999,860.8,2219.3999,858.2,2223.8999,857.5z
M2232.3999,862.1v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1001,3.1,3.5,3.1
C2229.6001,868.2,2232.3999,866.8,2232.3999,862.1L2232.3999,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M2271.5,868c0,1.8,0.1001,3.7,0.2,4.8H2264.8c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.8999,3.7-7.5,3.7
c-7.6001,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6001,0,6.8,1.9,7.5,3.3v-15.3h7.1001V868H2271.5z M2258,867.1
c3.7,0,6.6001-2.8,6.6001-7.6s-2.8999-7.4-6.6001-7.4s-6.6001,2.7-6.6001,7.5C2251.3999,864.2,2254.2,867,2258,867.1L2258,867.1z"
            />
            <path
              fill="#2D2A26"
              d="M2282.6001,864.1c0.2,2.1,1.7,4.1,4.8999,4.1c2.3999,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.8999-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6001,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.3999-3.6
c-1.8999,0-3.3999,1.1-3.3999,2.7c0,1.3,1,2.1,2.3999,2.4l3.8,0.8c5.3,1.1,7.8999,4.3,7.8999,8.2c0,4.3-3.3999,8.8-10.3999,8.8
c-8,0-10.8-5.2-11.1001-8.2L2282.6001,864.1z"
            />
          </g>
          <g id="Bull_Street">
            <path
              fill="#2D2A26"
              d="M1846.4,967.6c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.1,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
c0,6.2-4.7,10.7-11.9,10.7h-14.9v-38.5h13.9V967.6z M1845.3,983.5c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6H1845.3z
M1846,999.9c3.6,0,5.8-1.9,5.8-5s-1.9-5.2-5.7-5.2h-6.2v10.1L1846,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M1881.7,1003.2c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2v15.4c0,3,1.5,5.4,4.8,5.4
c3.2,0,5-2.2,5-5.3v-15.5h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C1881.8,1005.2,1881.7,1004.2,1881.7,1003.2z"
            />
            <path fill="#2D2A26" d="M1895.6,1006.1v-39.3h7.2v39.3H1895.6z" />
            <path fill="#2D2A26" d="M1909.9,1006.1v-39.3h7.2v39.3H1909.9z" />
            <path
              fill="#2D2A26"
              d="M1956.6,978.9c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.3,3.8,4.2,4.3l5.4,1
c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1956.6,978.9z"
            />
            <path
              fill="#2D2A26"
              d="M1977.9,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L1977.9,979.4z"
            />
            <path
              fill="#2D2A26"
              d="M2004.9,986.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4
c1.6-3.5,5.3-4.2,7.6-4.2c0.6,0,1.1,0,1.7,0.1V986.6z"
            />
            <path
              fill="#2D2A26"
              d="M2033.1,998.4c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L2033.1,998.4z
M2026.3,989.7c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2026.3z"
            />
            <path
              fill="#2D2A26"
              d="M2062.3999,998.4c-1.3999,4.6-5.6001,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1001-14
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1001,2.1-0.1001,2.2h-19.1c0.2,3.5,3.2,6.2,6.7001,6.1c3.3999,0,5.2-1.7,6.1001-4.1
L2062.3999,998.4z M2055.7,989.7c-0.1001-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2055.7z"
            />
            <path
              fill="#2D2A26"
              d="M2076.7,979.4h5.3999v6.4H2076.7V997c0,2.3,1.1001,3.1,3.1001,3.1c0.7,0,1.5-0.1,2.2-0.2v6
c-1.3,0.5-2.7,0.7-4.1001,0.6c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.3999c2.8,0,4.1001-1.8,4.1001-4.2v-3.7h6.5L2076.7,979.4z"
            />
          </g>
          <g id="Corporation_Street">
            <path
              fill="#2D2A26"
              d="M1575.1,798.4c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-0.9-3.7-3.9-7.7-10.6-7.7
c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.8,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
S1575.1,810.7,1575.1,798.4z"
            />
            <path
              fill="#2D2A26"
              d="M1643.6,804.3c0,7.7-6.3,14-14,14s-14-6.3-14-14c0-8.2,6-14.2,14-14.2
C1637.5,790.1,1643.6,796.1,1643.6,804.3z M1636.3,804.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
S1636.3,809.3,1636.3,804.3L1636.3,804.3z"
            />
            <path
              fill="#2D2A26"
              d="M1664.9,798.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V791h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0,1.7,0.1V798.1z"
            />
            <path
              fill="#2D2A26"
              d="M1669.2,827.9v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
c-3.7,0-6.4-1.5-7.7-3.3v12.9H1669.2z M1682.9,796.8c-3.7,0-6.7,2.8-6.7,7.5s3,7.5,6.7,7.5s6.6-2.8,6.6-7.5
C1689.6,799.5,1686.6,796.8,1682.9,796.8z"
            />
            <path
              fill="#2D2A26"
              d="M1727.7,804.3c0,8.2-6,14.2-14,14.2c-7.6,0.2-13.8-5.8-14-13.4c0-0.2,0-0.5,0-0.7c0-8.2,6-14.2,14-14.2
C1721.7,790.1,1727.7,796.1,1727.7,804.3z M1720.5,804.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
C1717.2,811.9,1720.5,809.3,1720.5,804.3L1720.5,804.3z"
            />
            <path
              fill="#2D2A26"
              d="M1749,798.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V791h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0,1.7,0.1V798.1z"
            />
            <path
              fill="#2D2A26"
              d="M1759.6,802.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1751.7,805.6,1755.2,802.9,1759.6,802.3z M1768.2,806.8v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1765.4,813,1768.2,811.6,1768.2,806.8z"
            />
            <path
              fill="#2D2A26"
              d="M1790.8,791h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8V791h1.4c2.8,0,4.1-1.8,4.1-4.2V783h6.5L1790.8,791z"
            />
            <path
              fill="#2D2A26"
              d="M1805,777.7c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4s-4.4-2-4.4-4.4C1800.5,779.8,1802.5,777.8,1805,777.7
L1805,777.7z M1801.4,817.6V791h7.2v26.7h-7.2V817.6z"
            />
            <path
              fill="#2D2A26"
              d="M1841.7,804.3c0,8.2-6,14.2-14,14.2c-7.6,0.2-13.8-5.8-14-13.4c0-0.2,0-0.5,0-0.7c0-8.2,6-14.2,14-14.2
C1835.7,790.1,1841.7,796.1,1841.7,804.3z M1834.5,804.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
S1834.5,809.3,1834.5,804.3z"
            />
            <path
              fill="#2D2A26"
              d="M1853.9,817.6h-7.2V791h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L1853.9,817.6z"
            />
            <path
              fill="#2D2A26"
              d="M1671.7,845.6c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
c0-2.2-1.7-4-4.7-4.6l-5.4-1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1671.7,845.6z"
            />
            <path
              fill="#2D2A26"
              d="M1693,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5v7.8H1693z"
            />
            <path
              fill="#2D2A26"
              d="M1720,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0,1.7,0.1V853.3z"
            />
            <path
              fill="#2D2A26"
              d="M1748.2,865.2c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L1748.2,865.2z
M1741.5,856.5c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1741.5z"
            />
            <path
              fill="#2D2A26"
              d="M1777.5,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L1777.5,865.2z M1770.7,856.5
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1770.7z"
            />
            <path
              fill="#2D2A26"
              d="M1791.8,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5v7.8H1791.8z"
            />
          </g>
          <g id="Grand_Central">
            <path
              fill="#2D2A26"
              d="M1348.5,1005.7l-0.5-4.4c-1.7,2.6-5.5,5.2-11.3,5.2c-10.4,0-19.2-7.6-19.2-20s9.3-20.1,19.7-20.1
c10.1,0,15.7,5.9,17.6,11.8l-7.2,2.5c-1-3.4-4.2-7.4-10.4-7.4c-5.8,0-12.1,4-12.1,13.1c0,8.7,5.7,13.2,12.1,13.2
c7.1,0,9.9-4.8,10.3-7.5h-12.1v-6.5h19.2v20L1348.5,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M1377.1,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0.1,1.7,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M1387.8,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1379.8,993.6,1383.3,991,1387.8,990.3z M1396.3,994.9v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1393.5,1001.1,1396.3,999.6,1396.3,994.9L1396.3,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M1417.2,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L1417.2,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M1466.5,1000.8c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1v34.6H1466.5z M1452.9,999.9c3.7,0,6.6-2.8,6.6-7.6
s-2.9-7.4-6.6-7.4s-6.6,2.7-6.6,7.5C1446.3,997,1449.1,999.9,1452.9,999.9L1452.9,999.9z"
            />
            <path
              fill="#2D2A26"
              d="M1484.6,986.5c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-1-3.7-3.9-7.7-10.6-7.7
c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.8,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
S1484.6,998.7,1484.6,986.5z"
            />
            <path
              fill="#2D2A26"
              d="M1551.1,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L1551.1,998z M1544.4,989.3
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1544.4z"
            />
            <path
              fill="#2D2A26"
              d="M1563.7,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L1563.7,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M1596.4,979h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.4c2.8,0,4.1-1.8,4.1-4.2V971h6.5L1596.4,979z"
            />
            <path
              fill="#2D2A26"
              d="M1623.4,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0.1,1.7,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M1634,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1626,993.6,1629.6,991,1634,990.3z M1642.6,994.9v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.7,1.4,3.1,3.2,3.1c0.1,0,0.2,0,0.3,0C1639.8,1001.1,1642.6,999.6,1642.6,994.9L1642.6,994.9z"
            />
            <path fill="#2D2A26" d="M1656.2,1005.7v-39.3h7.2v39.3H1656.2z" />
            <path
              fill="#2D2A26"
              d="M1315.2,1058.9l-18.2-27.4v27.4h-4.6v-33.6h6.2l16.8,25.8v-25.8h4.6v33.6H1315.2z"
            />
            <path
              fill="#2D2A26"
              d="M1348,1052.4c-1.4,4.4-5.6,7.4-10.3,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L1348,1052.4z
M1343.5,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H1343.5z"
            />
            <path
              fill="#2D2A26"
              d="M1371.3,1036.1l5.9,17.2l5-17.2h4.7l-7.4,22.8h-4.6l-6.1-17.4l-5.9,17.4h-4.7l-7.5-22.8h4.9l5.1,17.2
l5.9-17.2H1371.3z"
            />
            <path
              fill="#2D2A26"
              d="M1421,1034.4c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8,7.2l0,0c4.6,0,6.9-2.4,6.9-5.4
c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4L1421,1034.4z"
            />
            <path
              fill="#2D2A26"
              d="M1437.4,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.3v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L1437.4,1036.1z"
            />
            <path
              fill="#2D2A26"
              d="M1461,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4
c1.2-2.7,3.9-4.5,6.8-4.4c0.5,0,1,0,1.5,0.1V1040.6z"
            />
            <path
              fill="#2D2A26"
              d="M1485.6,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L1485.6,1052.4z
M1481.1,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H1481.1z"
            />
            <path
              fill="#2D2A26"
              d="M1511.3,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L1511.3,1052.4z
M1506.8,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H1506.8z"
            />
            <path
              fill="#2D2A26"
              d="M1523.1,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1v7.1998H1523.1z"
            />
            <path
              fill="#2D2A26"
              d="M1563.6,1034.4c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1,7.2l0,0c4.6,0,6.9-2.4,6.9-5.4
c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4L1563.6,1034.4z"
            />
            <path
              fill="#2D2A26"
              d="M1580,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1v7.1998H1580z"
            />
            <path
              fill="#2D2A26"
              d="M1596.4,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1l-4.3-1
c0.5-4.4,4.4-7.4,9.4-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.4c-0.2-1-0.3-2.1-0.2-3.1c-1.6,2.5-4.4,3.9-7.4,3.8
c-4.6,0-7.6-3.2-7.6-6.8C1589.4,1048.7,1592.4,1046.5,1596.4,1045.9z M1604.3,1049.2v-1l-7,1c-1.9,0.3-3.3,1.4-3.3,3.4
c0.1,1.9,1.7,3.4,3.6,3.3h0.1C1601.3,1055.9,1604.3,1054.1,1604.3,1049.2z"
            />
            <path
              fill="#2D2A26"
              d="M1621.7,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1v7.2998H1621.7z"
            />
            <path
              fill="#2D2A26"
              d="M1634.7,1024.2c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2l0,0
C1631.5,1025.7,1632.9,1024.2,1634.7,1024.2L1634.7,1024.2z M1632.5,1058.9v-22.8h4.4v22.8H1632.5z"
            />
            <path
              fill="#2D2A26"
              d="M1666,1047.5c0,7-4.8,12.1-11.6,12.1c-6.8,0-11.7-5.1-11.7-12.1s4.8-12.1,11.7-12.1
C1661.2,1035.4,1666,1040.6,1666,1047.5z M1661.4,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
S1661.4,1052.8,1661.4,1047.5z"
            />
            <path
              fill="#2D2A26"
              d="M1676.1,1058.9h-4.4v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L1676.1,1058.9z"
            />
          </g>
          <g id="Town_Hall">
            <path fill="#2D2A26" d="M1148,788.9v31.4h-7.5v-31.4h-12.1v-7.1h31.8v7.1H1148z" />
            <path
              fill="#2D2A26"
              d="M1190.2,807c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2C1184.1,792.8,1190.2,798.7,1190.2,807z
M1182.9,807c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6S1182.9,812,1182.9,807L1182.9,807z"
            />
            <path
              fill="#2D2A26"
              d="M1217.9,793.6l5.7,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1
l5.8-17.1H1217.9z"
            />
            <path
              fill="#2D2A26"
              d="M1246.8,820.3h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L1246.8,820.3z"
            />
            <path
              fill="#2D2A26"
              d="M1308.2,820.3v-15.9h-16.8v16h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5h-7.5V820.3z"
            />
            <path
              fill="#2D2A26"
              d="M1329.7,804.9l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1V816c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1321.7,808.2,1325.2,805.6,1329.7,804.9z M1338.2,809.5v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1335.4,815.7,1338.2,814.2,1338.2,809.5L1338.2,809.5z"
            />
            <path fill="#2D2A26" d="M1351.9,820.3V781h7.2v39.3H1351.9z" />
            <path fill="#2D2A26" d="M1366.2,820.3V781h7.2v39.3H1366.2z" />
            <path
              fill="#2D2A26"
              d="M1113.6,839.9h4.8l-13,33.6h-4.6l-12.7-33.6h4.9l10.2,27.7L1113.6,839.9z"
            />
            <path
              fill="#2D2A26"
              d="M1125,838.9c1.8,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2l0,0
C1121.8,840.3,1123.2,838.9,1125,838.9z M1122.8,873.6v-22.8h4.4v22.8H1122.8z"
            />
            <path
              fill="#2D2A26"
              d="M1137.5,862.1c0,5.2,3.3,8,7,8c3,0.2,5.6-1.8,6.4-4.7l3.9,1.7c-1.5,4.4-5.7,7.3-10.3,7.1
c-6.6,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1,0,9.2,3.8,10.2,7.3l-4,1.7c-0.6-2.9-3.2-5-6.1-4.8
C1140.8,854.2,1137.5,856.8,1137.5,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M1165.9,850.7h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.3c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.4,0-0.7v-3.7h4.1L1165.9,850.7z"
            />
            <path
              fill="#2D2A26"
              d="M1198.3,862.1c0,7-4.8,12.1-11.7,12.1s-11.6-5.2-11.6-12.1c0-7,4.8-12.1,11.6-12.1
S1198.3,855.2,1198.3,862.1z M1193.7,862.1c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1s3.3,8.2,7.1,8.2S1193.7,867.4,1193.7,862.1
L1193.7,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M1216.6,855.3c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.5,6.8-4.4
c0.5,0,1,0.1,1.5,0.1V855.3z"
            />
            <path
              fill="#2D2A26"
              d="M1223.6,838.9c1.8,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.1
C1220.3,840.4,1221.7,838.9,1223.6,838.9C1223.5,838.9,1223.5,838.9,1223.6,838.9z M1221.3,873.6v-22.8h4.4v22.8H1221.3z"
            />
            <path
              fill="#2D2A26"
              d="M1238.9,860.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1l-4.3-1
c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1c-1.6,2.5-4.4,3.9-7.4,3.8
c-4.7,0-7.6-3.2-7.6-6.8C1232,863.4,1234.9,861.1,1238.9,860.5z M1246.8,863.8v-1l-7,1c-1.9,0.3-3.3,1.4-3.3,3.4
c0.1,1.9,1.7,3.4,3.6,3.3h0.1C1243.9,870.5,1246.8,868.8,1246.8,863.8L1246.8,863.8z"
            />
            <path
              fill="#2D2A26"
              d="M1287.8,849c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.5,8.1,7.2l0,0c4.6,0,6.9-2.4,6.9-5.4
c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.3L1287.8,849z"
            />
            <path
              fill="#2D2A26"
              d="M1314.2,882.6v-12.2c-1.2,2.3-3.7,3.9-7.1,3.9c-6.5,0-10.8-5.5-10.8-12.1c0-6.5,4-11.9,10.7-11.9
c3.9,0,6.4,2,7.3,4.1v-3.5h4.3v31.8L1314.2,882.6z M1307.5,870.2c4,0,6.8-3.5,6.8-8.2s-2.7-8-6.8-8c-4.1,0-6.7,3.3-6.7,8
C1300.8,866.8,1303.5,870.2,1307.5,870.2z"
            />
            <path
              fill="#2D2A26"
              d="M1334.1,874.3c-5.3,0-8.5-4-8.5-9.2v-14.4h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9s5.4-2.4,5.4-5.8v-13.8h4.5v18.6
c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.1-0.9-0.2-1.8-0.2-2.8C1339.6,873.2,1336.7,874.3,1334.1,874.3z"
            />
            <path
              fill="#2D2A26"
              d="M1358.1,860.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1l-4.3-1
c0.5-4.4,4.4-7.4,9.4-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1c-1.6,2.5-4.4,3.9-7.4,3.8
c-4.6,0-7.6-3.2-7.6-6.8C1351.2,863.4,1354.2,861.1,1358.1,860.5z M1366.1,863.8v-1l-7,1c-1.9,0.3-3.3,1.4-3.3,3.4
c0.1,1.9,1.7,3.4,3.6,3.3h0.1C1363.1,870.5,1366.1,868.8,1366.1,863.8L1366.1,863.8z"
            />
            <path
              fill="#2D2A26"
              d="M1390.1,855.3c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.5,6.8-4.4
c0.5,0,1,0.1,1.5,0.1V855.3z"
            />
            <path
              fill="#2D2A26"
              d="M1414.8,867.1c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L1414.8,867.1z M1410.3,859.8
c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H1410.3z"
            />
          </g>
          <g id="Library">
            <path fill="#2D2A26" d="M936,1005.7v-38.5h7.5v31.3h17.1v7.2H936z" />
            <path
              fill="#2D2A26"
              d="M968.8,965.7c2.5,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4C964.3,967.8,966.3,965.8,968.8,965.7
L968.8,965.7z M965.2,1005.7V979h7.2v26.7H965.2z"
            />
            <path
              fill="#2D2A26"
              d="M979.5,1005.7v-39.3h7.1v15.5c1.2-1.9,4.1-3.6,8.1-3.6c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
c-3.7,0-6.5-1.6-7.9-3.9v3.3H979.5z M993.1,984.7c-3.6,0-6.7,2.7-6.7,7.5s3,7.6,6.7,7.6c3.6,0,6.6-2.7,6.6-7.6
S996.8,984.7,993.1,984.7L993.1,984.7z"
            />
            <path
              fill="#2D2A26"
              d="M1028.3,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0.1,1.7,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M1038.9,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1030.9,993.6,1034.5,991,1038.9,990.3z M1047.5,994.9v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1044.7,1001.1,1047.5,999.6,1047.5,994.9L1047.5,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M1077.4,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0.1,1.7,0.1V986.1z"
            />
            <path
              fill="#2D2A26"
              d="M1083.3,1016.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H1083.3z"
            />
            <path
              fill="#2D2A26"
              d="M828.7,1042.1c0-11.2,8.3-17.5,16.7-17.5c7.7,0,13.1,4.2,14.8,10.7l-4.3,1.5c-1.3-5.1-5-7.9-10.5-7.9
c-6.1,0-12,4.5-12,13.2c0,8.8,5.8,13.3,12,13.3c5,0.2,9.5-3.2,10.7-8.1l4.1,1.5c-1.8,6.3-7.1,10.8-14.9,10.8
C836.7,1059.6,828.7,1053.3,828.7,1042.1z"
            />
            <path
              fill="#2D2A26"
              d="M885.9,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L885.9,1052.4z
M881.4,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H881.4z"
            />
            <path
              fill="#2D2A26"
              d="M896.2,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L896.2,1058.9z"
            />
            <path
              fill="#2D2A26"
              d="M924.4,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L924.4,1036.1z"
            />
            <path
              fill="#2D2A26"
              d="M955.1,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4H938c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L955.1,1052.4z
M950.6,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H950.6z"
            />
            <path
              fill="#2D2A26"
              d="M965.4,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5H976v-13.7
c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3V1058.9z"
            />
            <path
              fill="#2D2A26"
              d="M993.1,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1l-4.3-1
c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.3c-0.2-1-0.3-2.1-0.2-3.1c-1.6,2.5-4.4,3.9-7.4,3.8
c-4.7,0-7.6-3.2-7.6-6.8C986.2,1048.7,989.2,1046.5,993.1,1045.9z M1001,1049.2v-1l-7,1c-1.9,0.3-3.3,1.4-3.3,3.4
c0.1,1.9,1.7,3.4,3.6,3.3h0.1C998.1,1055.9,1001,1054.1,1001,1049.2z"
            />
            <path
              fill="#2D2A26"
              d="M1025.1,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4
c1.2-2.7,3.9-4.5,6.8-4.4c0.5,0,1,0,1.5,0.1V1040.6z"
            />
            <path
              fill="#2D2A26"
              d="M1030.7,1068.5l5.7-12l-9.8-20.3h5.1l7.1,15.7l6.8-15.7h4.8l-14.8,32.4L1030.7,1068.5z"
            />
            <path
              fill="#2D2A26"
              d="M1084.3,1034.4c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1,7.2l0,0c4.6,0,6.9-2.4,6.9-5.4
c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4L1084.3,1034.4z"
            />
            <path
              fill="#2D2A26"
              d="M1110.7,1068v-12.3c-1.2,2.3-3.7,3.9-7.1,3.9c-6.5,0-10.8-5.5-10.8-12.1c0-6.5,4-11.9,10.7-11.9
c3.9,0,6.4,2,7.3,4.1v-3.5h4.3v31.8H1110.7z M1104,1055.6c4,0,6.8-3.5,6.8-8.2s-2.7-8-6.8-8c-4.1,0-6.7,3.3-6.7,8
C1097.3,1052.2,1100,1055.6,1104,1055.6z"
            />
            <path
              fill="#2D2A26"
              d="M1130.6,1059.6c-5.3,0-8.5-4-8.5-9.2V1036h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9c3.6,0,5.4-2.4,5.4-5.8v-13.8h4.5
v18.6c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.1-0.9-0.2-1.8-0.2-2.8C1136.1,1058.6,1133.2,1059.6,1130.6,1059.6z"
            />
            <path
              fill="#2D2A26"
              d="M1154.6,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5v0.1l-4.3-1
c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.4c-0.2-1-0.3-2.1-0.2-3.1c-1.6,2.5-4.4,3.9-7.4,3.8
c-4.6,0-7.6-3.2-7.6-6.8C1147.7,1048.7,1150.7,1046.5,1154.6,1045.9z M1162.5,1049.2v-1l-7,1c-1.9,0.3-3.3,1.4-3.3,3.4
c0.1,1.9,1.7,3.4,3.6,3.3h0.1C1159.6,1055.9,1162.5,1054.1,1162.5,1049.2z"
            />
            <path
              fill="#2D2A26"
              d="M1186.6,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4
c1.1-2.7,3.8-4.4,6.8-4.4c0.5,0,1,0,1.5,0.1V1040.6z"
            />
            <path
              fill="#2D2A26"
              d="M1211.2,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L1211.2,1052.4z
M1206.7,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H1206.7z"
            />
          </g>
          <g id="Brindleyplace">
            <path
              fill="#2D2A26"
              d="M636,834.4c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.2,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
c0,6.2-4.7,10.7-11.9,10.7h-14.9v-38.5H636V834.4z M634.8,850.3c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.2v9.6H634.8z
M635.6,866.6c3.6,0,5.8-1.9,5.8-5s-1.9-5.2-5.7-5.2h-6.2v10.1L635.6,866.6z"
            />
            <path
              fill="#2D2A26"
              d="M670.3,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2H654v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
c0.6,0,1.1,0,1.7,0.1V853.3z"
            />
            <path
              fill="#2D2A26"
              d="M678.2,832.9c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4s-4.4-2-4.4-4.4C673.7,835,675.7,833,678.2,832.9
C678.1,832.9,678.1,832.9,678.2,832.9z M674.6,872.8v-26.7h7.3v26.7H674.6z"
            />
            <path
              fill="#2D2A26"
              d="M696.1,872.8h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8H706v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5V872.8z"
            />
            <path
              fill="#2D2A26"
              d="M745.3,868c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1V868H745.3z M731.8,867.1c3.7,0,6.6-2.8,6.6-7.6
s-2.9-7.4-6.6-7.4s-6.6,2.7-6.6,7.5C725.1,864.2,728,867,731.8,867.1L731.8,867.1z"
            />
            <path fill="#2D2A26" d="M752.5,872.8v-39.3h7.2v39.3H752.5z" />
            <path
              fill="#2D2A26"
              d="M790.7,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.8,6.1c2.7,0.2,5.2-1.5,6.1-4.1L790.7,865.2z M783.9,856.5
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H783.9z"
            />
            <path
              fill="#2D2A26"
              d="M797.7,883.4l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H797.7z"
            />
            <path
              fill="#2D2A26"
              d="M825.8,883.1v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
c-3.7,0-6.4-1.5-7.7-3.3v12.9H825.8z M839.6,852c-3.7,0-6.7,2.8-6.7,7.5s3,7.5,6.7,7.5s6.6-2.8,6.6-7.5
C846.2,854.7,843.3,852,839.6,852z"
            />
            <path fill="#2D2A26" d="M858.3,872.8v-39.3h7.2v39.3H858.3z" />
            <path
              fill="#2D2A26"
              d="M879,857.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C871,860.8,874.5,858.2,879,857.5z M887.5,862.1v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C884.7,868.2,887.5,866.8,887.5,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M906.4,859.5c0,4.8,3.1,7.5,6.8,7.5c2.8,0.1,5.4-1.8,6.1-4.5l6.3,2.1c-1.2,4.4-5.4,9-12.5,9
c-7.6,0.1-13.9-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.2,6.1-14.2,13.8-14.2c7.3,0,11.4,4.5,12.5,9l-6.5,2.2c-0.6-2.7-3.1-4.6-5.9-4.5
C909.5,852,906.4,854.7,906.4,859.5z"
            />
            <path
              fill="#2D2A26"
              d="M954.3,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L954.3,865.2z M947.6,856.5
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H947.6z"
            />
          </g>
          <g id="Five_Ways">
            <path fill="#2D2A26" d="M432.4,1005.7v-38.5h24.3v7.1h-16.8v9.5h15v6.9H440v15H432.4z" />
            <path
              fill="#2D2A26"
              d="M465.2,965.7c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4s-4.4-2-4.4-4.4C460.8,967.8,462.7,965.8,465.2,965.7
L465.2,965.7z M461.6,1005.7V979h7.2v26.7H461.6z"
            />
            <path
              fill="#2D2A26"
              d="M490.7,1005.7h-7.2L472.7,979h7.9l6.6,17.9l6.3-17.9h7.6L490.7,1005.7z"
            />
            <path
              fill="#2D2A26"
              d="M528.7,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L528.7,998z M522,989.3
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H522z"
            />
            <path
              fill="#2D2A26"
              d="M590.5,967.2h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
L590.5,967.2z"
            />
            <path
              fill="#2D2A26"
              d="M608.3,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l0,0l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C600.3,993.6,603.9,991,608.3,990.3z M616.9,994.9v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.7,1.4,3.1,3.2,3.1c0.1,0,0.2,0,0.3,0C614.1,1001.1,616.9,999.6,616.9,994.9L616.9,994.9z"
            />
            <path
              fill="#2D2A26"
              d="M632.1,1016.2l6.3-13.9L627.1,979h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H632.1z"
            />
            <path
              fill="#2D2A26"
              d="M664.2,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-5.9,1.3c-0.2-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.3L664.2,996.9z"
            />
          </g>
          <g id="Edgbaston_Village">
            <path
              fill="#2D2A26"
              d="M194.9,817.6v-38.5h24v7.1h-16.6v8.8h15v6.7h-15v8.9h16.6v7.1h-24V817.6z"
            />
            <path
              fill="#2D2A26"
              d="M250.7,812.8c0,1.8,0.1,3.7,0.2,4.8H244c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1v34.6H250.7z M237.1,811.8c3.7,0,6.6-2.8,6.6-7.6
s-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C230.5,809,233.3,811.8,237.1,811.8L237.1,811.8z"
            />
            <path
              fill="#2D2A26"
              d="M262.5,817.4c0.5,3,3.2,5.2,6.2,5c4.6,0,7.1-2.3,7.1-7.4v-2c-1.1,1.7-3.6,3.4-7.4,3.4
c-7.1,0-12.4-5.5-12.4-13c0-7.1,5.1-13,12.4-13c4.2,0,6.7,1.8,7.6,3.6v-3h6.9v23.8c0,7.3-4,14-14,14c-7.3,0-12.2-4.6-13-9.7
L262.5,817.4z M275.9,803.5c0-4.1-2.8-6.8-6.3-6.8s-6.4,2.6-6.4,6.8s2.7,6.8,6.4,6.8S275.9,807.6,275.9,803.5L275.9,803.5z"
            />
            <path
              fill="#2D2A26"
              d="M289.6,817.6v-39.3h7.1v15.5c1.2-1.9,4.1-3.6,8.1-3.6c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
c-3.7,0-6.5-1.6-7.9-3.9v3.3H289.6z M303.3,796.7c-3.6,0-6.7,2.7-6.7,7.5s3,7.6,6.7,7.6c3.6,0,6.6-2.7,6.6-7.6
S306.9,796.7,303.3,796.7L303.3,796.7z"
            />
            <path
              fill="#2D2A26"
              d="M328.4,802.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C320.5,805.6,324,802.9,328.4,802.3z M337,806.8v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C334.1,813,337.1,811.6,337,806.8L337,806.8z"
            />
            <path
              fill="#2D2A26"
              d="M354.6,808.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.2-2.2-2.1-3.8-4.3-3.6c-1.9,0-3.4,1.1-3.4,2.7
c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L354.6,808.9z"
            />
            <path
              fill="#2D2A26"
              d="M383.9,791h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8V791h1.4c2.8,0,4.1-1.8,4.1-4.2V783h6.5L383.9,791z"
            />
            <path
              fill="#2D2A26"
              d="M420.6,804.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2s6-14.2,14-14.2S420.6,796.1,420.6,804.3z M413.4,804.3
c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6C410.1,811.9,413.4,809.3,413.4,804.3z"
            />
            <path
              fill="#2D2A26"
              d="M432.8,817.6h-7.2V791h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L432.8,817.6z"
            />
            <path
              fill="#2D2A26"
              d="M265.9,834.4h7.9l-14.2,38.5h-7.7l-14.2-38.5h8.2l10,28.6L265.9,834.4z"
            />
            <path
              fill="#2D2A26"
              d="M281.1,832.9c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4s-4.4-2-4.4-4.4C276.7,835,278.6,833,281.1,832.9
L281.1,832.9z M277.6,872.8v-26.7h7.2v26.7H277.6z"
            />
            <path fill="#2D2A26" d="M291.8,872.8v-39.3h7.2v39.3H291.8z" />
            <path fill="#2D2A26" d="M306.1,872.8v-39.3h7.2v39.3H306.1z" />
            <path
              fill="#2D2A26"
              d="M326.7,857.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2H336c-0.2-1.1-0.3-2.1-0.3-3.2
c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C318.7,860.8,322.3,858.2,326.7,857.5z M335.3,862.1v-1.2l-6,0.9
c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C332.5,868.2,335.3,866.8,335.3,862.1z"
            />
            <path
              fill="#2D2A26"
              d="M353.5,872.6c0.5,3,3.2,5.2,6.2,5c4.6,0,7.1-2.3,7.1-7.4v-1.9c-1.1,1.7-3.6,3.4-7.4,3.4
c-7.1,0-12.4-5.5-12.4-13c0-7.1,5.1-13,12.4-13c4.2,0,6.7,1.8,7.6,3.6v-3.1h6.9V870c0,7.3-4,14-14,14c-7.3,0-12.2-4.6-13-9.7
L353.5,872.6z M367,858.7c0-4.1-2.8-6.8-6.3-6.8s-6.4,2.6-6.4,6.8s2.7,6.8,6.4,6.8S367,862.8,367,858.7L367,858.7z"
            />
            <path
              fill="#2D2A26"
              d="M404.6,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L404.6,865.2z M397.8,856.5
c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H397.8z"
            />
          </g>
        </svg>
      </ReactSVGPanZoom>
    </>
  );
}

export default MapHorizontal;
