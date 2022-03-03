import React, { useState, useEffect, useRef } from 'react';
import { ReactSVGPanZoom, TOOL_PAN } from 'react-svg-pan-zoom';
import MapControls from './MapControls/MapControls';
import useMapMethods from './customHooks/useMapMethods';
import useWindowHeightWidth from './customHooks/useWindowHeightWidth';
import s from './Map.module.scss';

const MetroZoneMap = () => {
  const { mapState, mapDispatch } = useMapMethods();
  const [tool, setTool] = useState(TOOL_PAN);
  const Viewer = useRef(null);
  const { mapSize } = mapState;
  const { zone1, zone2, zone3, zone4 } = mapState.highlightedZones;
  const { windowWidth } = useWindowHeightWidth();

  // initial value for the map 1st render
  const initialValue = {
    SVGHeight: 279,
    SVGMinX: 0,
    SVGMinY: 0,
    SVGWidth: 749,
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
        {windowWidth > 768 ? (
          <svg viewBox="0 0 432 843">
            <style>
              {
                '.st0 {clip-path:url(#SVGID_00000046312892275571864610000008328776898878226325_);}.st1{fill:#0075C9;}.st2 {fill: #FFFFFF;}.st3 {fill: #3D1152;}.st4 {fill: #DED7D6;}.st5{fill: #221E20;}.st6{fill: #EEEAEA;}.st7{fill: #2D2A26;}.st8{fill:#1D1D1C;}'
              }
            </style>
            <symbol id="Interchange" viewBox="-28.4 -28.4 56.7 56.7">
              <g>
                <defs>
                  <rect id="SVGID_1_" x="-28.4" y="-28.4" width="56.7" height="56.7" />
                </defs>
                <clipPath id="SVGID_00000172426449155663670530000004734031334693638323_">
                  <use xlinkHref="#SVGID_1_" style={{ overflow: 'visible' }} />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000172426449155663670530000004734031334693638323_)',
                  }}
                >
                  <path
                    className="st1"
                    d="M0-28.4c15.7,0,28.4,12.7,28.4,28.4S15.7,28.4,0,28.4S-28.4,15.7-28.4,0c0,0,0,0,0,0
				C-28.3-15.7-15.7-28.3,0-28.4"
                  />
                  <path
                    className="st2"
                    d="M0-19.6c10.8,0,19.6,8.8,19.6,19.6S10.8,19.6,0,19.6S-19.6,10.8-19.6,0C-19.6-10.8-10.8-19.6,0-19.6 M0,10.8
				C6,10.8,10.8,6,10.8,0C10.8-6,6-10.8,0-10.8S-10.8-6-10.8,0c0,0,0,0,0,0C-10.8,6-6,10.8,0,10.8C0,10.8,0,10.8,0,10.8"
                  />
                </g>
              </g>
            </symbol>
            <symbol id="Park_and_ride" viewBox="-36.1 -36.1 72.1 72.1">
              <path
                className="st3"
                d="M29.8-36.1h-59.5c-3.5,0-6.3,2.8-6.3,6.3v59.5c0,3.5,2.8,6.3,6.3,6.3c0,0,0,0,0,0h59.5c3.5,0,6.3-2.8,6.3-6.3
		c0,0,0,0,0,0v-59.5C36.1-33.2,33.2-36.1,29.8-36.1C29.8-36.1,29.8-36.1,29.8-36.1z"
              />
              <path
                className="st2"
                d="M-24.4,2.8v8.5h-4.4v-22.4h8.4c4.4,0,7.4,2.9,7.4,7s-3,7-7.4,7L-24.4,2.8z M-20.9-0.9c2.2,0,3.5-1.3,3.5-3.2
		s-1.3-3.2-3.5-3.2h-3.5v6.4H-20.9z"
              />
              <path
                className="st2"
                d="M2.5,8.8c-1.5,1.7-3.7,2.8-6,2.8c-4.4,0-6.8-3-6.8-6c0-2.8,1.5-4.4,3.8-6.1l0.2-0.1l-0.4-0.4
		c-1.1-1.1-2.5-2.8-2.5-4.9c0-3.3,2.7-5.9,6-5.9c0.1,0,0.1,0,0.2,0c3.6,0,6.2,2.3,6.2,5.7c0,2.3-1.5,3.9-3.2,5.1l-0.8,0.6l3.4,3.6
		l5.7-5.9v5.2L5.2,5.9l5.1,5.3H4.8L2.5,8.8z M-0.1,6.1l-3.8-4l-0.5,0.3c-1.1,0.6-1.8,1.8-1.8,3C-6.1,6.9-5,8.1-3.5,8c0,0,0,0,0,0
		C-2.1,7.9-0.9,7.2-0.1,6.1z M-3.9-3.5l0.6,0.7l1.2-0.8c0.8-0.5,1.4-1.4,1.4-2.4c0-1.2-1-2.2-2.2-2.2c0,0-0.1,0-0.1,0
		c-1.2,0-2.2,0.9-2.2,2.1c0,0.1,0,0.1,0,0.2C-5-5-4.6-4.1-3.9-3.5L-3.9-3.5z"
              />
              <path
                className="st2"
                d="M19.5,2.6h-2.3v8.6h-4.4v-22.4h8.8c4.4,0,7.2,3,7.2,6.9c0.1,3-1.9,5.6-4.8,6.4l4.8,9.2h-4.8L19.5,2.6z
		 M20.7-1.1c2.2,0,3.5-1.3,3.5-3.1S23-7.4,20.7-7.4h-3.5v6.2H20.7z"
              />
            </symbol>
            <symbol id="Stop" viewBox="-8.8 -8.8 17.5 17.5">
              <path
                className="st2"
                d="M-8.8,0c0,4.8,3.9,8.8,8.8,8.8S8.8,4.8,8.8,0S4.8-8.8,0-8.8S-8.8-4.8-8.8,0C-8.8,0-8.8,0-8.8,0"
              />
            </symbol>
            <g id="Zone_4" data-name={zone4} className={zone4 ? s.zoneSelected : ''}>
              <rect x="6235.4" y="21.8" className="st4" width="1350.2" height="1341.5" />
              <path
                className="st5"
                d="M6841.5,331.8l72.4-98.8h42.4v105.3h28.3v29.3h-28.3v37h-33.1v-37h-81.6L6841.5,331.8z M6923.1,267.2
		l-51.8,71.2h51.8V267.2z"
              />
            </g>
            <g id="Zone_3" data-name={zone3} className={zone3 ? s.zoneSelected : ''}>
              <rect x="4608.3" y="21.8" className="st6" width="1619.2" height="1341.5" />
              <path
                className="st5"
                d="M5387,303.3l46.5-41.2h-77v-29.1h119.9v27.6l-45.8,39.5c25.9,0.7,50.6,19.9,50.6,52.1
		c0,29.5-23.5,56.2-64.7,56.2c-39.7,0-63.4-25.7-65.6-54.2l32.4-6.5c1,18.9,14.5,32,32.9,32c19.9,0,31-12.6,31-27.6
		c0-19.6-15.3-27.8-30-27.8c-5.2,0.1-10.3,1.2-15,3.4L5387,303.3z"
              />
            </g>
            <g id="Zone_2" data-name={zone2} className={zone2 ? s.zoneSelected : ''}>
              <rect x="2051.7" y="21.8" className="st4" width="2548.6" height="1341.5" />
              <path
                className="st5"
                d="M3262.3,296.7c-0.6-3.5-1-7.1-1-10.7c0-29.8,22.3-56.7,61.5-56.7c38,0,60.8,24.9,60.8,54.2
		c0,22.5-12.3,40.7-32.9,53.3l-33.4,20.6c-7.3,4.8-13.8,9.9-16.2,17.9h83.5v29.3h-124.7c0.2-29.8,10.4-53.3,40.7-71.7l28.1-17.4
		c14.8-9.2,21.1-18.9,21.1-31.2c0-13.3-9-25.4-27.6-25.4c-19.4,0-28.6,13.3-28.6,30.3c0.1,3.1,0.4,6.2,1,9.2L3262.3,296.7z"
              />
            </g>
            <g id="Zone_1" data-name={zone1} className={zone1 ? s.zoneSelected : ''}>
              <rect y="21.8" className="st6" width="2043.8" height="1341.5" />
              <path
                className="st5"
                d="M987,404.7V288h-41.1v-22.8c24.7-0.7,41.9-14.3,45.3-32.2h29.1v171.7H987z"
              />
            </g>
            <g id="Tram_line">
              <rect x="413.9" y="911.9" className="st1" width="472.6" height="24" />
              <path
                className="st1"
                d="M6929.6,1087.6h-246.2c-35.4,0-64.1-28.7-64.1-64.1v-47.4c0-22.2-18-40.2-40.2-40.2h-12.8v-15.1l5.9-8.8
		c35.4,0,71,28.8,71,64.1v47.4c0,22.2,18,40.2,40.2,40.2h246.2L6929.6,1087.6z"
              />
              <rect x="885.8" y="911.9" className="st1" width="6045.8" height="23.9" />
            </g>
            <g id="Blobs">
              <g>
                <defs>
                  <rect
                    id="SVGID_00000127035573104817562300000000766164419949029295_"
                    x="1108.9"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000084505509423770700230000018313663844309486747_">
                  <use
                    xlinkHref="#SVGID_00000127035573104817562300000000766164419949029295_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000084505509423770700230000018313663844309486747_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 1117.3793 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000021093222133078268660000005973059270366102195_"
                    x="637.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000138556199326442170910000017294503173036075421_">
                  <use
                    xlinkHref="#SVGID_00000021093222133078268660000005973059270366102195_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000138556199326442170910000017294503173036075421_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 645.9385 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000088817938718083598740000003275797633075882637_"
                    x="2736"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000152976126395864356750000014136041233948195992_">
                  <use
                    xlinkHref="#SVGID_00000088817938718083598740000003275797633075882637_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000152976126395864356750000014136041233948195992_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 2744.5017 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000018959809319842982640000000322206645712593026_"
                    x="2271.1"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000160155378071833938500000014420480696922465710_">
                  <use
                    xlinkHref="#SVGID_00000018959809319842982640000000322206645712593026_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000160155378071833938500000014420480696922465710_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 2279.6082 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000131329854073441703800000013233715200105084077_"
                    x="3200.9"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000008835221350318640920000000919706733092808102_">
                  <use
                    xlinkHref="#SVGID_00000131329854073441703800000013233715200105084077_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000008835221350318640920000000919706733092808102_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 3209.3853 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000109746500116405921520000010731122445359686799_"
                    x="3433.3"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000183218171779528865250000007953968301679523485_">
                  <use
                    xlinkHref="#SVGID_00000109746500116405921520000010731122445359686799_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000183218171779528865250000007953968301679523485_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 3441.8271 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000182494029291681386240000006001384097986434442_"
                    x="3898.3"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000126320685290855516340000007603815931568619687_">
                  <use
                    xlinkHref="#SVGID_00000182494029291681386240000006001384097986434442_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000126320685290855516340000007603815931568619687_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 3906.7402 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000165206328843572091490000016841782838742163892_"
                    x="4363.1"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000075872656768047164520000012698993510807583935_">
                  <use
                    xlinkHref="#SVGID_00000165206328843572091490000016841782838742163892_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000075872656768047164520000012698993510807583935_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 4371.6333 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000073707275042553818420000014709063288084852614_"
                    x="5525.3"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000036230397573013366540000016426375021410652073_">
                  <use
                    xlinkHref="#SVGID_00000073707275042553818420000014709063288084852614_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000036230397573013366540000016426375021410652073_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 5533.8335 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000105416485999526764760000017097028399809904815_"
                    x="5990.3"
                    y="915.4"
                    transform="matrix(0.9999 -1.378766e-02 1.378766e-02 0.9999 -12.168 82.7965)"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000176015159765689882110000014458912184275350407_">
                  <use
                    xlinkHref="#SVGID_00000105416485999526764760000017097028399809904815_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>

                <g
                  transform="matrix(1 0 0 1 -4.882812e-04 6.103516e-05)"
                  style={{
                    clipPath: '(#SVGID_00000176015159765689882110000014458912184275350407_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 -1.335402e-02 1.335402e-02 0.9685 5998.7461 923.8851)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000158728514982972127710000001653482055098087814_"
                    x="6455.1"
                    y="915.1"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000124867015288917323300000001038523505981023896_">
                  <use
                    xlinkHref="#SVGID_00000158728514982972127710000001653482055098087814_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000124867015288917323300000001038523505981023896_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 6463.6201 923.6251)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000111188844858641131980000008668500630757117095_"
                    x="6901.1"
                    y="896.4"
                    width="54.9"
                    height="54.9"
                  />
                </defs>
                <clipPath id="SVGID_00000089543232425227406070000014841546039897359511_">
                  <use
                    xlinkHref="#SVGID_00000111188844858641131980000008668500630757117095_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000089543232425227406070000014841546039897359511_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(0.9685 0 0 0.9685 6928.543 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000058567532625247386100000002363830227265420939_"
                    x="1573.8"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000018214046644512985140000015945258717506652321_">
                  <use
                    xlinkHref="#SVGID_00000058567532625247386100000002363830227265420939_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000018214046644512985140000015945258717506652321_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 1582.2728 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000159440609275907109380000009226432763683355544_"
                    x="6690.6"
                    y="1067.1"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000057871150769053052170000011183660892654570900_">
                  <use
                    xlinkHref="#SVGID_00000159440609275907109380000009226432763683355544_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000057871150769053052170000011183660892654570900_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 6699.1133 1075.6195)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000088112355099704894010000013255014971399677845_"
                    x="6902.1"
                    y="1048.2"
                    width="54.9"
                    height="54.9"
                  />
                </defs>
                <clipPath id="SVGID_00000161627535211693054600000000401874522935776652_">
                  <use
                    xlinkHref="#SVGID_00000088112355099704894010000013255014971399677845_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000161627535211693054600000000401874522935776652_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(0.9685 0 0 0.9685 6929.6084 1075.6194)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000083796790507366977290000014000430763360912815_"
                    x="386.4"
                    y="897.1"
                    width="54.9"
                    height="54.9"
                  />
                </defs>
                <clipPath id="SVGID_00000092433050336982520880000000478186275656392088_">
                  <use
                    xlinkHref="#SVGID_00000083796790507366977290000014000430763360912815_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000092433050336982520880000000478186275656392088_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(0.9685 0 0 0.9685 413.8872 924.5452)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000101102322455952233230000008399790850364146097_"
                    x="878.1"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000032630396602464513310000011247644363254455210_">
                  <use
                    xlinkHref="#SVGID_00000101102322455952233230000008399790850364146097_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000032630396602464513310000011247644363254455210_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 886.613 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000004540933928674682780000008957359162497834664_"
                    x="3665.8"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000100374581358495001120000015413413245594571161_">
                  <use
                    xlinkHref="#SVGID_00000004540933928674682780000008957359162497834664_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000100374581358495001120000015413413245594571161_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 3674.2788 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000083053476556023526950000006332439241020072370_"
                    x="1341.3"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000152258431604429492530000016827768847886209453_">
                  <use
                    xlinkHref="#SVGID_00000083053476556023526950000006332439241020072370_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000152258431604429492530000016827768847886209453_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 1349.8309 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000049937396042316900960000000719889697933832624_"
                    x="1806.2"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000172412214813768056930000007515380133594132874_">
                  <use
                    xlinkHref="#SVGID_00000049937396042316900960000000719889697933832624_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000172412214813768056930000007515380133594132874_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 1814.7244 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000127019003575394822890000017823870773608363674_"
                    x="2038.7"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000132782104008995027700000001652475634197546401_">
                  <use
                    xlinkHref="#SVGID_00000127019003575394822890000017823870773608363674_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000132782104008995027700000001652475634197546401_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 2047.1759 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000075881491400103162010000001016074947727210385_"
                    x="2503.6"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000179635528434250132130000001912265102994248848_">
                  <use
                    xlinkHref="#SVGID_00000075881491400103162010000001016074947727210385_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000179635528434250132130000001912265102994248848_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 2512.0598 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000109752575096182441600000004702764739428900514_"
                    x="2968.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000045594612595458166700000009576432163115201206_">
                  <use
                    xlinkHref="#SVGID_00000109752575096182441600000004702764739428900514_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000045594612595458166700000009576432163115201206_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 2976.9531 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000086694088566242593910000000081970130176905379_"
                    x="4130.7"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000049197115485340403420000018365672058955221143_">
                  <use
                    xlinkHref="#SVGID_00000086694088566242593910000000081970130176905379_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000049197115485340403420000018365672058955221143_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 4139.1919 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000134246873897173027010000015664043691713586615_"
                    x="4595.6"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000075879796584576965540000017211212424461831341_">
                  <use
                    xlinkHref="#SVGID_00000134246873897173027010000015664043691713586615_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000075879796584576965540000017211212424461831341_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 4604.085 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000087410317510036755490000009270738163925607345_"
                    x="4828.1"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000062892915859554098650000008830894119930274189_">
                  <use
                    xlinkHref="#SVGID_00000087410317510036755490000009270738163925607345_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000062892915859554098650000008830894119930274189_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 4836.5366 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000138543537683083523850000014088742714815318197_"
                    x="5060.5"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000124139917910365172840000000747127377537344697_">
                  <use
                    xlinkHref="#SVGID_00000138543537683083523850000014088742714815318197_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000124139917910365172840000000747127377537344697_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 5068.9883 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000056398557615336635550000009006408840599922304_"
                    x="5293"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000005257168645185689690000012295716163372676018_">
                  <use
                    xlinkHref="#SVGID_00000056398557615336635550000009006408840599922304_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000005257168645185689690000012295716163372676018_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 5301.4399 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000009586158213409898910000013803258605440940455_"
                    x="5757.9"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000040544671422366632350000012485643122117502848_">
                  <use
                    xlinkHref="#SVGID_00000009586158213409898910000013803258605440940455_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000040544671422366632350000012485643122117502848_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 5766.3428 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000165222978519609461630000017119357240449092233_"
                    x="6222.8"
                    y="915.4"
                    width="17"
                    height="17"
                  />
                </defs>
                <clipPath id="SVGID_00000147904186635201902180000001524218679951300540_">
                  <use
                    xlinkHref="#SVGID_00000165222978519609461630000017119357240449092233_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000147904186635201902180000001524218679951300540_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(0.9685 0 0 0.9685 6231.2461 923.8867)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Wolverhampton_Station">
              <path
                className="st7"
                d="M7022.9,1028.7h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L7022.9,1028.7z"
              />
              <path
                className="st7"
                d="M7060.4,1053.8c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S7060.4,1045.5,7060.4,1053.8z
		 M7053.2,1053.8c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6C7049.9,1061.4,7053.2,1058.8,7053.2,1053.8z"
              />
              <path className="st7" d="M7065.4,1067.1v-39.3h7.2v39.3H7065.4z" />
              <path
                className="st7"
                d="M7094.5,1067.1h-7.2l-10.9-26.7h7.9l6.6,17.9l6.3-17.9h7.6L7094.5,1067.1z"
              />
              <path
                className="st7"
                d="M7132.5,1059.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L7132.5,1059.5z
		 M7125.8,1050.8c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H7125.8z"
              />
              <path
                className="st7"
                d="M7154.2,1047.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L7154.2,1047.6z"
              />
              <path
                className="st7"
                d="M7165.7,1067.1h-7.2v-39.3h7.2v14.8c1.9-1.9,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2L7165.7,1067.1z"
              />
              <path
                className="st7"
                d="M7195.9,1051.8l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C7187.9,1055.1,7191.4,1052.4,7195.9,1051.8z M7204.4,1056.3v-1.2l-6,1
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C7201.6,1062.5,7204.4,1061,7204.4,1056.3L7204.4,1056.3z"
              />
              <path
                className="st7"
                d="M7218.1,1067.1v-26.7h6.9v3.3c1.5-2.6,4.8-4,7.8-4c3.6,0,6.6,1.6,7.9,4.5c1.8-2.9,5-4.6,8.5-4.5
		c4.9,0,9.7,3,9.7,10.2v17.3h-7v-15.8c0-2.9-1.4-5-4.7-5c-3.1,0-4.9,2.4-4.9,5.3v15.6h-7.2v-15.8c0-2.9-1.5-5-4.7-5
		c-3.3,0-5,2.3-5,5.3v15.6L7218.1,1067.1z"
              />
              <path
                className="st7"
                d="M7265.5,1077.4v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14-12.6,14
		c-3.7,0-6.4-1.5-7.7-3.3v12.9L7265.5,1077.4z M7279.3,1046.3c-3.7,0-6.7,2.8-6.7,7.5c0,4.7,3,7.5,6.7,7.5s6.6-2.8,6.6-7.5
		C7285.9,1049,7283,1046.3,7279.3,1046.3L7279.3,1046.3z"
              />
              <path
                className="st7"
                d="M7306.9,1040.5h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v5.9c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L7306.9,1040.5z"
              />
              <path
                className="st7"
                d="M7343.6,1053.8c0,8.2-6,14.2-14,14.2c-8,0-14-6-14-14.2c0-8.2,6-14.2,14-14.2S7343.6,1045.5,7343.6,1053.8z
		 M7336.4,1053.8c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S7336.4,1058.8,7336.4,1053.8z"
              />
              <path
                className="st7"
                d="M7355.9,1067.1h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L7355.9,1067.1z"
              />
              <path
                className="st7"
                d="M6999,1096.1c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L6999,1096.1z"
              />
              <path
                className="st7"
                d="M7020.4,1096.6h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v5.9c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2V1103h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L7020.4,1096.6z"
              />
              <path
                className="st7"
                d="M7037.4,1108l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C7029.4,1111.3,7032.9,1108.6,7037.4,1108z M7046,1112.5v-1.2l-6,1
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C7043.1,1118.7,7046,1117.2,7046,1112.5L7046,1112.5z"
              />
              <path
                className="st7"
                d="M7068.5,1096.6h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v5.9c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2V1103h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L7068.5,1096.6z"
              />
              <path
                className="st7"
                d="M7082.8,1083.4c2.5,0,4.5,2,4.5,4.5c0,2.5-2,4.5-4.5,4.5c-2.4,0-4.4-2-4.5-4.4
		C7078.3,1085.4,7080.3,1083.4,7082.8,1083.4C7082.8,1083.4,7082.8,1083.4,7082.8,1083.4z M7079.2,1123.3v-26.7h7.2v26.7H7079.2z"
              />
              <path
                className="st7"
                d="M7119.4,1110c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S7119.4,1101.7,7119.4,1110z
		 M7112.2,1110c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.6-6.8,7.6c0,5,3.3,7.6,6.8,7.6C7109,1117.6,7112.2,1115,7112.2,1110z"
              />
              <path
                className="st7"
                d="M7131.7,1123.3h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L7131.7,1123.3z"
              />
            </g>
            <g id="Wolverhampton_St._George_s">
              <path
                className="st7"
                d="M6775.5,782.4h7.6l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L6775.5,782.4z"
              />
              <path
                className="st7"
                d="M6812.9,807.6c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S6812.9,799.3,6812.9,807.6z
		 M6805.7,807.6c0-5-3.2-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6S6805.7,812.6,6805.7,807.6z"
              />
              <path className="st7" d="M6818,820.9v-39.3h7.2v39.3H6818z" />
              <path
                className="st7"
                d="M6847,820.9h-7.2l-10.9-26.7h7.9l6.6,17.9l6.3-17.9h7.6L6847,820.9z"
              />
              <path
                className="st7"
                d="M6885.1,813.2c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L6885.1,813.2z
		 M6878.3,804.5c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6878.3z"
              />
              <path
                className="st7"
                d="M6906.8,801.4c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L6906.8,801.4z"
              />
              <path
                className="st7"
                d="M6918.3,820.9h-7.2v-39.3h7.2v14.8c1.9-1.9,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V820.9z"
              />
              <path
                className="st7"
                d="M6948.4,805.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C6940.4,808.9,6944,806.2,6948.4,805.5z M6957,810.1v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C6954.2,816.3,6957,814.8,6957,810.1L6957,810.1z"
              />
              <path
                className="st7"
                d="M6970.7,820.9v-26.7h6.9v3.3c1.5-2.6,4.8-4,7.8-4c3.6,0,6.6,1.6,7.9,4.4c1.8-2.9,5-4.6,8.5-4.4
		c4.9,0,9.7,3,9.7,10.1v17.3h-7v-15.8c0-2.9-1.4-5-4.7-5c-3.1,0-4.9,2.4-4.9,5.3v15.6h-7.2v-15.8c0-2.9-1.5-5-4.7-5
		c-3.3,0-5,2.3-5,5.3v15.6H6970.7z"
              />
              <path
                className="st7"
                d="M7018,831.2v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14-12.6,14
		c-3.7,0-6.4-1.5-7.7-3.2v12.9H7018z M7031.8,800.1c-3.7,0-6.7,2.8-6.7,7.5c0,4.7,3,7.5,6.7,7.5c3.7,0,6.6-2.8,6.6-7.5
		C7038.4,802.8,7035.5,800.1,7031.8,800.1L7031.8,800.1z"
              />
              <path
                className="st7"
                d="M7059.5,794.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L7059.5,794.2z"
              />
              <path
                className="st7"
                d="M7096.2,807.6c0.2,7.6-5.7,13.9-13.2,14.1c-0.2,0-0.5,0-0.7,0c-8,0-14-6-14-14.2c0-8.2,6-14.2,14-14.2
		C7090.1,793.4,7096.2,799.3,7096.2,807.6z M7088.9,807.6c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
		C7085.7,815.1,7088.9,812.6,7088.9,807.6z"
              />
              <path
                className="st7"
                d="M7108.4,820.9h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L7108.4,820.9z"
              />
              <path
                className="st7"
                d="M6801.4,847c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1c7,1.4,10.7,5.9,10.7,11.3
		c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7c0-2.2-1.7-4-4.7-4.6
		l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L6801.4,847z"
              />
              <path
                className="st7"
                d="M6822.7,847.5h5.4v6.4h-5.4V865c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L6822.7,847.5z"
              />
              <path
                className="st7"
                d="M6837.9,864.7c2.7,0,4.9,2.2,4.9,4.9c0,2.7-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9
		C6833,866.9,6835.2,864.7,6837.9,864.7z"
              />
              <path
                className="st7"
                d="M6891.6,874.2l-0.5-4.4c-1.7,2.6-5.5,5.2-11.3,5.2c-10.4,0-19.2-7.6-19.2-20c0-12.4,9.3-20.1,19.7-20.1
		c10.1,0,15.7,5.9,17.6,11.8l-7.2,2.5c-1-3.4-4.2-7.4-10.4-7.4c-5.8,0-12.1,4-12.1,13.1c0,8.7,5.7,13.2,12.1,13.2
		c7.1,0,9.9-4.8,10.3-7.5h-12.1v-6.5h19.2v20H6891.6z"
              />
              <path
                className="st7"
                d="M6928,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L6928,866.5z M6921.2,857.8
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6921.2z"
              />
              <path
                className="st7"
                d="M6959.3,860.8c0,8.2-6,14.2-14,14.2c-8,0-14-6-14-14.2s6-14.2,14-14.2C6953.3,846.7,6959.3,852.6,6959.3,860.8
		z M6952.1,860.8c0-5-3.2-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6C6948.9,868.4,6952.2,865.9,6952.1,860.8L6952.1,860.8
		z"
              />
              <path
                className="st7"
                d="M6980.7,854.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L6980.7,854.6z"
              />
              <path
                className="st7"
                d="M6989.6,873.9c0.5,3,3.1,5.2,6.2,5.1c4.6,0,7.1-2.3,7.1-7.4v-1.9c-1.1,1.7-3.6,3.4-7.4,3.4
		c-7.1,0-12.4-5.5-12.4-13c0-7.1,5.1-13,12.4-13c4.2,0,6.7,1.8,7.6,3.6v-3.1h6.9v23.8c0,7.3-4,14-14,14c-7.3,0-12.2-4.6-13-9.7
		L6989.6,873.9z M7003,860c0-4.1-2.8-6.8-6.3-6.8s-6.4,2.6-6.4,6.8s2.7,6.8,6.4,6.8S7003,864.1,7003,860z"
              />
              <path
                className="st7"
                d="M7040.6,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L7040.6,866.5z M7033.9,857.8
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H7033.9z"
              />
              <path
                className="st7"
                d="M7048.4,835.4c2.9,0,4.7,2.4,4.7,5.3c0,7.3-5,9.9-8.4,10.2v-3.3c2.4-0.4,4.2-2.2,4.4-4.6
		c-0.3,0.2-0.7,0.3-1.1,0.3c-2,0.1-3.8-1.4-4-3.5c0-0.1,0-0.3,0-0.4c0.1-2.3,2-4.1,4.2-4C7048.3,835.4,7048.3,835.4,7048.4,835.4z"
              />
              <path
                className="st7"
                d="M7062,865.4c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L7062,865.4z"
              />
            </g>
            <g id="Pipers_Row">
              <path
                className="st7"
                d="M6573.3,1149.4v14.5h-7.5v-38.5h14.4c7.6,0,12.6,5,12.6,12c0,6.9-5,12-12.6,12L6573.3,1149.4z M6579.3,1142.9
		c3.7,0,6-2.2,6-5.5c0-3.3-2.3-5.5-6-5.5h-5.9v11H6579.3z"
              />
              <path
                className="st7"
                d="M6601.1,1123.9c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C6596.6,1126,6598.5,1124,6601.1,1123.9C6601,1123.9,6601.1,1123.9,6601.1,1123.9z M6597.5,1163.8v-26.7h7.2v26.7L6597.5,1163.8z"
              />
              <path
                className="st7"
                d="M6611.8,1174.1v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
		c-3.7,0-6.4-1.5-7.7-3.3v12.9L6611.8,1174.1z M6625.5,1143c-3.7,0-6.7,2.8-6.7,7.5s3,7.5,6.7,7.5s6.6-2.8,6.6-7.5
		S6629.2,1143,6625.5,1143z"
              />
              <path
                className="st7"
                d="M6668.2,1156.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L6668.2,1156.2z
		 M6661.5,1147.5c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6661.5z"
              />
              <path
                className="st7"
                d="M6689.9,1144.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V1144.3z"
              />
              <path
                className="st7"
                d="M6698.1,1155.1c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L6698.1,1155.1z"
              />
              <path
                className="st7"
                d="M6743.3,1149h-3.9v14.8h-7.5v-38.5h15c7.5,0,12.3,5.2,12.3,11.8c0.2,5.1-3.2,9.6-8.2,10.9l8.2,15.7h-8.4
		L6743.3,1149z M6745.5,1142.6c3.8,0,6-2.2,6-5.3c0-3.1-2.2-5.4-6-5.4h-6.1v10.7L6745.5,1142.6z"
              />
              <path
                className="st7"
                d="M6790.5,1150.5c0,7.7-6.2,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.2,6-14.2,14-14.2
		S6790.5,1142.3,6790.5,1150.5z M6783.3,1150.5c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		C6780.1,1158.1,6783.3,1155.6,6783.3,1150.5L6783.3,1150.5z"
              />
              <path
                className="st7"
                d="M6818.3,1137.2l5.7,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1
		l5.8-17.1H6818.3z"
              />
            </g>
            <g id="The_Royal">
              <path className="st7" d="M6362.4,974.3v31.4h-7.5v-31.4h-12.1v-7.1h31.8v7.1H6362.4z" />
              <path
                className="st7"
                d="M6385.8,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
              />
              <path
                className="st7"
                d="M6433.6,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L6433.6,998z M6426.8,989.3
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6426.8z"
              />
              <path
                className="st7"
                d="M6463.7,990.9h-3.9v14.8h-7.5v-38.5h15c7.5,0,12.3,5.2,12.3,11.8c0.2,5.1-3.2,9.6-8.2,10.9l8.2,15.7h-8.3
		L6463.7,990.9z M6465.9,984.4c3.8,0,6-2.2,6-5.3c0-3.1-2.2-5.4-6-5.4h-6.1v10.7L6465.9,984.4z"
              />
              <path
                className="st7"
                d="M6511,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S6511,984.1,6511,992.3z M6503.7,992.3
		c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6C6500.5,999.9,6503.7,997.4,6503.7,992.3L6503.7,992.3z"
              />
              <path
                className="st7"
                d="M6517.6,1016.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H6517.6z"
              />
              <path
                className="st7"
                d="M6552.1,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C6544.1,993.6,6547.6,991,6552.1,990.3z M6560.6,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C6557.8,1001.1,6560.6,999.6,6560.6,994.9L6560.6,994.9z"
              />
              <path className="st7" d="M6574.3,1005.7v-39.3h7.2v39.3L6574.3,1005.7z" />
            </g>
            <g id="Priestfield">
              <path
                className="st2"
                d="M6091,816.2h280.2c7,0,12.8,5.7,12.8,12.8v47.8c0,7-5.7,12.8-12.8,12.8H6091c-7,0-12.8-5.7-12.8-12.8v-47.8
		C6078.3,821.9,6084,816.2,6091,816.2z"
              />
              <path
                className="st8"
                d="M6371.3,817.6c6.2,0,11.3,5.1,11.3,11.3v47.8c0,6.2-5.1,11.3-11.3,11.3H6091c-6.2,0-11.3-5.1-11.3-11.3
		c0,0,0,0,0,0v-47.8c0-6.2,5.1-11.3,11.3-11.3H6371.3 M6371.3,814.7H6091c-7.8,0-14.2,6.4-14.2,14.2v47.8c0,7.8,6.4,14.2,14.2,14.2
		h280.2c7.8,0,14.2-6.4,14.2-14.2v-47.8C6385.5,821.1,6379.1,814.7,6371.3,814.7z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000108281910829250868790000001016578393647196347_"
                    x="6196.9"
                    y="720.7"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000133505986083015986160000007009527904313696135_">
                  <use
                    xlinkHref="#SVGID_00000108281910829250868790000001016578393647196347_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000133505986083015986160000007009527904313696135_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="72.1"
                    height="72.1"
                    x="-36.1"
                    y="-36.1"
                    transform="matrix(0.9492 0 0 0.9492 6231.0952 754.927)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <path
                className="st7"
                d="M6117.7,859.7v14.5h-7.5v-38.5h14.4c7.6,0,12.6,5,12.6,12c0,6.9-5,12-12.6,12H6117.7z M6123.6,853.2
		c3.7,0,6-2.2,6-5.5c0-3.3-2.3-5.5-6-5.5h-5.9v11H6123.6z"
              />
              <path
                className="st7"
                d="M6158.1,854.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V854.6z"
              />
              <path
                className="st7"
                d="M6166,834.2c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C6161.5,836.3,6163.5,834.3,6166,834.2C6166,834.2,6166,834.2,6166,834.2z M6162.4,874.2v-26.7h7.2v26.7H6162.4z"
              />
              <path
                className="st7"
                d="M6200.6,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L6200.6,866.5z
		 M6193.9,857.8c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6193.9z"
              />
              <path
                className="st7"
                d="M6209.9,865.4c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L6209.9,865.4z"
              />
              <path
                className="st7"
                d="M6239.3,847.5h5.4v6.4h-5.4V865c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5V847.5z"
              />
              <path
                className="st7"
                d="M6258.6,853.7v20.5h-7.3v-20.5h-4.4v-6.2h4.4v-3c0-6,3.8-9.9,9.7-9.9c1.2,0,2.4,0.2,3.6,0.5v6.1
		c-0.7-0.2-1.5-0.3-2.3-0.3c-1.9-0.2-3.6,1.2-3.7,3.1c0,0.2,0,0.4,0,0.6v2.9h17.8v26.7h-7.2v-20.5H6258.6z M6272.8,834.2
		c2.5,0,4.5,2,4.5,4.5c-0.1,2.5-2.2,4.4-4.7,4.2c-2.3-0.1-4.1-1.9-4.2-4.2C6268.4,836.2,6270.4,834.2,6272.8,834.2L6272.8,834.2z"
              />
              <path
                className="st7"
                d="M6307.5,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L6307.5,866.5z
		 M6300.7,857.8c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6300.7z"
              />
              <path className="st7" d="M6312.9,874.2v-39.3h7.2v39.3H6312.9z" />
              <path
                className="st7"
                d="M6352.6,869.3c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L6352.6,869.3z M6339,868.4c3.7,0,6.6-2.8,6.6-7.6
		c0-4.8-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C6332.4,865.6,6335.2,868.4,6339,868.4L6339,868.4z"
              />
            </g>
            <g id="The_Crescent">
              <path className="st7" d="M5853.8,974.3v31.4h-7.5v-31.4h-12.2v-7.1h31.8v7.1H5853.8z" />
              <path
                className="st7"
                d="M5877.3,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
              />
              <path
                className="st7"
                d="M5925,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L5925,998z M5918.3,989.3
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5918.3z"
              />
              <path
                className="st7"
                d="M5941.4,986.5c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7,2.2c-1-3.7-3.9-7.7-10.6-7.7
		c-5.7,0-11.8,4.1-11.8,12.9c0,8.2,5.7,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
		C5950.3,1006.5,5941.4,998.7,5941.4,986.5z"
              />
              <path
                className="st7"
                d="M6000.2,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1L6000.2,986.1z"
              />
              <path
                className="st7"
                d="M6028.4,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L6028.4,998z M6021.7,989.3
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6021.7z"
              />
              <path
                className="st7"
                d="M6037.8,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.2-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.3L6037.8,996.9z"
              />
              <path
                className="st7"
                d="M6063.4,992.3c0,4.8,3.1,7.5,6.8,7.5c2.8,0.1,5.4-1.8,6.1-4.5l6.3,2.1c-1.2,4.4-5.4,9-12.5,9
		c-7.6,0.1-13.9-5.9-14.1-13.6c0-0.2,0-0.4,0-0.6c0-8.2,6.1-14.2,13.8-14.2c7.3,0,11.4,4.5,12.5,9l-6.5,2.2
		c-0.6-2.7-3.1-4.6-5.9-4.5C6066.5,984.8,6063.4,987.5,6063.4,992.3z"
              />
              <path
                className="st7"
                d="M6111.3,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L6111.3,998z M6104.6,989.3
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H6104.6z"
              />
              <path
                className="st7"
                d="M6124,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L6124,1005.7z"
              />
              <path
                className="st7"
                d="M6156.7,979h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.4c2.8,0,4.1-1.8,4.1-4.2V971h6.5L6156.7,979z"
              />
            </g>
            <g id="Bilston_Central">
              <path
                className="st7"
                d="M5602.3,835.7c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.2,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
		c0,6.2-4.7,10.7-11.9,10.7h-14.8v-38.5H5602.3z M5601.1,851.6c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6L5601.1,851.6z
		 M5601.9,867.9c3.6,0,5.8-1.9,5.8-5c0-3.1-1.9-5.2-5.7-5.2h-6.2v10.1L5601.9,867.9z"
              />
              <path
                className="st7"
                d="M5623.9,834.2c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C5619.4,836.3,5621.4,834.3,5623.9,834.2C5623.9,834.2,5623.9,834.2,5623.9,834.2z M5620.3,874.2v-26.7h7.2v26.7H5620.3z"
              />
              <path className="st7" d="M5634.6,874.2v-39.3h7.2v39.3H5634.6z" />
              <path
                className="st7"
                d="M5652.8,865.4c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L5652.8,865.4z"
              />
              <path
                className="st7"
                d="M5682.1,847.5h5.4v6.4h-5.4V865c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.3c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L5682.1,847.5z"
              />
              <path
                className="st7"
                d="M5718.8,860.8c0,7.7-6.2,14-14,14c-7.7,0-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
		S5718.8,852.6,5718.8,860.8z M5711.6,860.8c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		C5708.3,868.4,5711.6,865.9,5711.6,860.8z"
              />
              <path
                className="st7"
                d="M5731,874.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L5731,874.2z"
              />
              <path
                className="st7"
                d="M5765.8,855c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-0.9-3.7-3.9-7.7-10.6-7.7
		c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.8,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
		S5765.8,867.2,5765.8,855z"
              />
              <path
                className="st7"
                d="M5832.3,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L5832.3,866.5z
		 M5825.6,857.8c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5825.6z"
              />
              <path
                className="st7"
                d="M5844.9,874.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.3v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L5844.9,874.2z"
              />
              <path
                className="st7"
                d="M5877.6,847.5h5.4v6.4h-5.4V865c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L5877.6,847.5z"
              />
              <path
                className="st7"
                d="M5904.6,854.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V854.6z"
              />
              <path
                className="st7"
                d="M5915.2,858.8l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C5907.2,862.1,5910.8,859.5,5915.2,858.8z M5923.8,863.4v-1.2l-6,0.9
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5921,869.6,5923.8,868.1,5923.8,863.4z"
              />
              <path className="st7" d="M5937.4,874.2v-39.3h7.2v39.3H5937.4z" />
            </g>
            <g id="Loxdale">
              <path className="st7" d="M5441,1005.7v-38.5h7.5v31.3h17.1v7.2H5441z" />
              <path
                className="st7"
                d="M5496.2,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S5496.2,984.1,5496.2,992.3z
		 M5489,992.3c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6C5485.7,999.9,5489,997.4,5489,992.3z"
              />
              <path
                className="st7"
                d="M5507.5,992.3L5498,979h8.6c0.9,1.5,4.4,6.5,5.3,7.9l5.3-7.9h8.2l-9.3,13.1l9.7,13.6h-8.5l-5.6-8.2
		c-1,1.5-4.6,6.7-5.5,8.2h-8.1L5507.5,992.3z"
              />
              <path
                className="st7"
                d="M5554.9,1000.8c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
		c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L5554.9,1000.8z M5541.3,999.9
		c3.7,0,6.6-2.8,6.6-7.6c0-4.8-2.9-7.4-6.6-7.4s-6.6,2.7-6.6,7.5C5534.7,997,5537.5,999.9,5541.3,999.9L5541.3,999.9z"
              />
              <path
                className="st7"
                d="M5568.4,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C5560.4,993.6,5563.9,991,5568.4,990.3z M5577,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5574.1,1001.1,5577,999.6,5577,994.9L5577,994.9z"
              />
              <path className="st7" d="M5590.6,1005.7v-39.3h7.2v39.3L5590.6,1005.7z" />
              <path
                className="st7"
                d="M5628.8,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2H5610c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L5628.8,998z M5622.1,989.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5622.1z"
              />
            </g>
            <g id="Bradley_Lane">
              <g>
                <defs>
                  <rect
                    id="SVGID_00000031898035683421794810000015753569837273013137_"
                    x="5267.1"
                    y="729.4"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000026876872525856073300000009326687939975834806_">
                  <use
                    xlinkHref="#SVGID_00000031898035683421794810000015753569837273013137_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000026876872525856073300000009326687939975834806_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="72.1"
                    height="72.1"
                    x="-36.1"
                    y="-36.1"
                    transform="matrix(0.9492 0 0 0.9492 5301.3174 763.6439)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
              <path
                className="st7"
                d="M5159.8,835.7c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.1,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
		c0,6.2-4.7,10.7-11.9,10.7H5146v-38.5H5159.8z M5158.7,851.6c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6L5158.7,851.6z
		 M5159.5,867.9c3.6,0,5.8-1.9,5.8-5c0-3.1-1.9-5.2-5.7-5.2h-6.2v10.1L5159.5,867.9z"
              />
              <path
                className="st7"
                d="M5194.2,854.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V854.6z"
              />
              <path
                className="st7"
                d="M5204.8,858.8l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C5196.8,862.1,5200.3,859.5,5204.8,858.8z M5213.4,863.4v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5210.5,869.6,5213.4,868.1,5213.4,863.4L5213.4,863.4z"
              />
              <path
                className="st7"
                d="M5252.5,869.3c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L5252.5,869.3z M5238.9,868.4c3.7,0,6.6-2.8,6.6-7.6
		c0-4.8-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C5232.3,865.6,5235.1,868.4,5238.9,868.4L5238.9,868.4z"
              />
              <path className="st7" d="M5259.6,874.2v-39.3h7.2v39.3H5259.6z" />
              <path
                className="st7"
                d="M5297.8,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2H5279c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L5297.8,866.5z M5291.1,857.8
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5291.1z"
              />
              <path
                className="st7"
                d="M5304.8,884.7l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H5304.8z"
              />
              <path className="st7" d="M5346.2,874.2v-38.5h7.5V867h17.1v7.2H5346.2z" />
              <path
                className="st7"
                d="M5381.8,858.8l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C5373.8,862.1,5377.3,859.5,5381.8,858.8z M5390.3,863.4v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5387.5,869.6,5390.3,868.1,5390.3,863.4L5390.3,863.4z"
              />
              <path
                className="st7"
                d="M5411.2,874.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L5411.2,874.2z"
              />
              <path
                className="st7"
                d="M5458.9,866.5c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L5458.9,866.5z
		 M5452.2,857.8c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5452.2z"
              />
            </g>
            <g id="Wednesbury_Parkway">
              <path
                className="st7"
                d="M4958.2,967.2h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L4958.2,967.2z"
              />
              <path
                className="st7"
                d="M4993.6,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4993.6,998z M4986.9,989.3
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4986.9z"
              />
              <path
                className="st7"
                d="M5024.5,1000.8c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
		c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L5024.5,1000.8z M5010.9,999.9
		c3.7,0,6.6-2.8,6.6-7.6c0-4.8-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C5004.3,997.1,5007.1,999.9,5010.9,999.9L5010.9,999.9z"
              />
              <path
                className="st7"
                d="M5038.8,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L5038.8,1005.7z"
              />
              <path
                className="st7"
                d="M5086.6,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L5086.6,998z M5079.8,989.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H5079.8z"
              />
              <path
                className="st7"
                d="M5095.9,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L5095.9,996.9z"
              />
              <path
                className="st7"
                d="M5116.4,1005.7v-39.3h7.1v15.5c1.2-1.9,4.1-3.6,8.1-3.6c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
		c-3.7,0-6.5-1.6-7.9-3.9v3.3L5116.4,1005.7z M5130,984.7c-3.6,0-6.7,2.7-6.7,7.5s3,7.6,6.7,7.6c3.6,0,6.6-2.7,6.6-7.6
		S5133.7,984.7,5130,984.7L5130,984.7z"
              />
              <path
                className="st7"
                d="M5166.2,1002.8c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5V979h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3V979h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C5166.2,1004.7,5166.2,1003.8,5166.2,1002.8z"
              />
              <path
                className="st7"
                d="M5196.3,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M5202.2,1016.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.9,37.2H5202.2z"
              />
              <path
                className="st7"
                d="M4973.6,1044.5v14.5h-7.5v-38.5h14.4c7.6,0,12.6,5,12.6,12c0,6.9-5,12-12.6,12H4973.6z M4979.6,1038
		c3.7,0,6-2.2,6-5.5c0-3.3-2.3-5.5-6-5.5h-5.9v11H4979.6z"
              />
              <path
                className="st7"
                d="M5004.2,1043.6l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C4996.2,1046.9,4999.7,1044.2,5004.2,1043.6z M5012.7,1048.2v-1.2l-6,1
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5009.9,1054.3,5012.7,1052.9,5012.7,1048.2L5012.7,1048.2z"
              />
              <path
                className="st7"
                d="M5042.7,1039.4c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L5042.7,1039.4z"
              />
              <path
                className="st7"
                d="M5062.1,1043.5l10.9,15.5h-8.8l-7.1-10.2l-3,3.1v7.1h-7.2v-39.3h7.2v22.5l9.2-9.9h9.4L5062.1,1043.5z"
              />
              <path
                className="st7"
                d="M5099.3,1032.2l5.8,17.2l4.9-17.2h7.2l-8.4,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.4l-8.5-26.7h7.6l4.9,17.1
		l5.8-17.1H5099.3z"
              />
              <path
                className="st7"
                d="M5127.4,1043.6l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C5119.4,1046.9,5122.9,1044.2,5127.4,1043.6z M5136,1048.2v-1.2l-6,1
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C5133.1,1054.3,5136,1052.9,5136,1048.2L5136,1048.2z"
              />
              <path
                className="st7"
                d="M5151.2,1069.5l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2L5151.2,1069.5z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000031918921724988008260000010961505516722873732_"
                    x="5034.4"
                    y="1103"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000118389323441284622030000013234283043042187703_">
                  <use
                    xlinkHref="#SVGID_00000031918921724988008260000010961505516722873732_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000118389323441284622030000013234283043042187703_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="72.1"
                    height="72.1"
                    x="-36.1"
                    y="-36.1"
                    transform="matrix(0.9492 0 0 0.9492 5068.585 1137.1936)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Wednesbury">
              <path
                className="st7"
                d="M4725.7,731.8h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L4725.7,731.8z"
              />
              <path
                className="st7"
                d="M4761.2,762.6c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4761.2,762.6z M4754.4,753.9
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4754.4z"
              />
              <path
                className="st7"
                d="M4792,765.5c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3V731h7.1V765.5z M4778.5,764.5c3.7,0,6.6-2.8,6.6-7.6s-2.9-7.4-6.6-7.4
		c-3.7,0-6.6,2.7-6.6,7.5C4771.8,761.7,4774.7,764.5,4778.5,764.5L4778.5,764.5z"
              />
              <path
                className="st7"
                d="M4806.4,770.3h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L4806.4,770.3z"
              />
              <path
                className="st7"
                d="M4854.1,762.6c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4854.1,762.6z M4847.4,753.9
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4847.4z"
              />
              <path
                className="st7"
                d="M4863.5,761.5c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.2-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L4863.5,761.5z"
              />
              <path
                className="st7"
                d="M4883.9,770.3V731h7.1v15.5c1.2-1.9,4.1-3.6,8.1-3.6c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
		c-3.7,0-6.5-1.6-7.9-3.9v3.3L4883.9,770.3z M4897.6,749.3c-3.6,0-6.7,2.7-6.7,7.5s3,7.6,6.7,7.6c3.6,0,6.6-2.7,6.6-7.6
		S4901.3,749.3,4897.6,749.3L4897.6,749.3z"
              />
              <path
                className="st7"
                d="M4933.7,767.4c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2V759c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3v-15.5h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C4933.8,769.3,4933.7,768.4,4933.7,767.4z"
              />
              <path
                className="st7"
                d="M4963.9,750.8c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V750.8z"
              />
              <path
                className="st7"
                d="M4969.7,780.8l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H4969.7z"
              />
              <path
                className="st7"
                d="M4708.9,823.6l-0.4-4.7c-1.5,2.7-5.1,5.5-10.8,5.5c-8.4,0-16.3-6.2-16.3-17.6s8.4-17.5,16.7-17.5
		c7.3,0,13,4.1,14.9,10.2l-4.2,1.8c-1.4-4.7-5.8-7.9-10.7-7.7c-6,0-11.9,4.3-11.9,13.2s5.7,13.3,11.7,13.3c7.5,0,10.2-5.3,10.4-8.8
		h-11.7v-4.2h16.1v16.5L4708.9,823.6z"
              />
              <path
                className="st7"
                d="M4732,805.2c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L4732,805.2z"
              />
              <path
                className="st7"
                d="M4756.7,817c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4756.7,817z M4752.2,809.8
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4752.2z"
              />
              <path
                className="st7"
                d="M4768,810.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C4761.1,813.3,4764.1,811.1,4768,810.5z M4775.9,813.8v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C4773,820.5,4775.9,818.8,4775.9,813.8z"
              />
              <path
                className="st7"
                d="M4793.3,800.7h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1V800.7z"
              />
              <path
                className="st7"
                d="M4854.4,789.9h4.8l-9.6,33.6h-4.8l-8.8-27.3l-8.7,27.3h-4.7l-9.7-33.6h4.8l7.4,26.3l8.4-26.3h4.9l8.6,26.6
		L4854.4,789.9z"
              />
              <path
                className="st7"
                d="M4883.6,817c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4883.6,817z M4879.1,809.8
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4879.1z"
              />
              <path
                className="st7"
                d="M4891.3,816.2c0.3,2.4,2.1,4.3,5.3,4.3c2.5,0,3.9-1.4,3.9-3c0-1.4-1-2.5-2.9-2.9l-3.9-0.9
		c-3.6-0.8-5.7-3.2-5.7-6.4c0-3.9,3.7-7.2,8.1-7.2c6.3,0,8.2,4.1,8.7,6.1l-3.9,1.5c-0.3-2.3-2.4-4-4.7-3.8c-2.3,0-3.8,1.5-3.8,3
		c0,1.4,0.9,2.4,2.6,2.8l3.7,0.8c4.1,0.9,6.3,3.4,6.3,6.8s-2.7,7.1-8.3,7.1c-6.3,0-8.9-4-9.3-6.6L4891.3,816.2z"
              />
              <path
                className="st7"
                d="M4916.8,800.7h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1V800.7z"
              />
              <path
                className="st7"
                d="M4947.6,817c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4947.6,817z M4943.1,809.8
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4943.1z"
              />
              <path
                className="st7"
                d="M4966.1,805.2c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L4966.1,805.2z"
              />
              <path
                className="st7"
                d="M4975.4,823.6h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3V823.6z"
              />
              <path
                className="st7"
                d="M4792.7,852.3c-0.6-3.5-3.6-5.9-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.9-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4
		L4792.7,852.3z"
              />
              <path
                className="st7"
                d="M4809.1,854h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5V858h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L4809.1,854z"
              />
              <path
                className="st7"
                d="M4832.6,858.5c-0.6-0.1-1.3-0.1-1.9-0.1c-3.8,0-6.3,2-6.3,7v11.4h-4.5V854h4.3v4c1.1-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L4832.6,858.5z"
              />
              <path
                className="st7"
                d="M4857.2,870.3c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4857.2,870.3z M4852.7,863.1
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4852.7z"
              />
              <path
                className="st7"
                d="M4883,870.3c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4883,870.3z M4878.5,863.1
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4878.5z"
              />
              <path
                className="st7"
                d="M4894.8,854h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5V858h-4.4v-4h1.3c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L4894.8,854z"
              />
            </g>
            <g id="Black_Lake">
              <path
                className="st2"
                d="M4464,957h280.1c7.1,0,12.8,5.7,12.8,12.8v62.1c0,7.1-5.7,12.8-12.8,12.8H4464c-7.1,0-12.8-5.7-12.8-12.8
		v-62.1C4451.2,962.7,4456.9,957,4464,957z"
              />
              <path
                className="st7"
                d="M4744.1,958.5c6.3,0,11.4,5.1,11.4,11.3c0,0,0,0,0,0v62.2c0,6.3-5.1,11.4-11.4,11.4l0,0H4464
		c-6.3,0-11.4-5.1-11.4-11.4c0,0,0,0,0,0v-62.2c0-6.3,5.1-11.4,11.4-11.4l0,0H4744.1 M4744.1,955.5H4464c-7.9,0-14.3,6.4-14.3,14.3
		v62.2c0,7.9,6.4,14.3,14.3,14.3h280.1c7.9,0,14.3-6.3,14.3-14.2c0,0,0,0,0,0v-62.2C4758.4,961.9,4752,955.6,4744.1,955.5
		L4744.1,955.5z"
              />
              <path
                className="st7"
                d="M4489.9,982.2c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.1,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
		c0,6.2-4.7,10.7-11.9,10.7H4476v-38.5H4489.9z M4488.7,998.1c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6L4488.7,998.1z
		 M4489.5,1014.4c3.6,0,5.8-1.9,5.8-5s-1.9-5.2-5.7-5.2h-6.2v10.1H4489.5z"
              />
              <path className="st7" d="M4507.9,1020.6v-39.3h7.2v39.3H4507.9z" />
              <path
                className="st7"
                d="M4528.5,1005.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C4520.6,1008.6,4524.1,1005.9,4528.5,1005.3z M4537.1,1009.8v-1.2l-6,1
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C4534.3,1016,4537.1,1014.5,4537.1,1009.8z"
              />
              <path
                className="st7"
                d="M4556,1007.3c0,4.8,3.1,7.5,6.8,7.5c2.8,0.1,5.4-1.8,6.1-4.5l6.3,2.1c-1.2,4.5-5.4,9-12.5,9
		c-7.6,0.1-13.9-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.3,6.1-14.2,13.8-14.2c7.3,0,11.4,4.5,12.5,9l-6.5,2.2c-0.6-2.7-3.1-4.6-5.9-4.5
		C4559.1,999.8,4556,1002.4,4556,1007.3z"
              />
              <path
                className="st7"
                d="M4595.1,1005.2l10.9,15.5h-8.8l-7.1-10.2l-3,3.1v7.1h-7.2v-39.3h7.2v22.5l9.2-9.9h9.4L4595.1,1005.2z"
              />
              <path className="st7" d="M4622.9,1020.6v-38.5h7.5v31.3h17.1v7.2H4622.9z" />
              <path
                className="st7"
                d="M4658.4,1005.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C4650.4,1008.6,4654,1005.9,4658.4,1005.3z M4667,1009.8v-1.2l-6,1
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C4664.2,1016,4667,1014.5,4667,1009.8z"
              />
              <path
                className="st7"
                d="M4695.9,1005.2l10.9,15.5h-8.8l-7.1-10.2l-3,3.1v7.1h-7.2v-39.3h7.2v22.5l9.2-9.9h9.4L4695.9,1005.2z"
              />
              <path
                className="st7"
                d="M4734.2,1013c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L4734.2,1013z
		 M4727.5,1004.3c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4727.5z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000047035973600035438450000003893197485544407477_"
                    x="4569.7"
                    y="1069.1"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000011729089114553211950000012695009369462783917_">
                  <use
                    xlinkHref="#SVGID_00000047035973600035438450000003893197485544407477_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000011729089114553211950000012695009369462783917_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="72.1"
                    height="72.1"
                    x="-36.1"
                    y="-36.1"
                    transform="matrix(0.9492 0 0 0.9492 4603.9238 1103.2944)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Dudley_Street">
              <path
                className="st7"
                d="M4206.2,823.6v-38.5h13.8c11,0,19,7.1,19,19.3s-8.1,19.2-19,19.2H4206.2z M4219.7,816.6
		c6.3,0,11.6-3.9,11.6-12.3c0-8.4-5.2-12.3-11.5-12.3h-6v24.6H4219.7z"
              />
              <path
                className="st7"
                d="M4261.5,820.7c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3v-15.5h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C4261.6,822.6,4261.5,821.6,4261.5,820.7z"
              />
              <path
                className="st7"
                d="M4300.9,818.7c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L4300.9,818.7z M4287.3,817.8c3.7,0,6.6-2.8,6.6-7.6
		c0-4.8-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C4280.7,814.9,4283.5,817.7,4287.3,817.8L4287.3,817.8z"
              />
              <path className="st7" d="M4308,823.6v-39.3h7.2v39.3H4308z" />
              <path
                className="st7"
                d="M4346.2,815.9c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4346.2,815.9z M4339.5,807.2
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4339.5z"
              />
              <path
                className="st7"
                d="M4353.2,834.1l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2L4353.2,834.1z"
              />
              <path
                className="st7"
                d="M4413.8,796.3c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L4413.8,796.3z"
              />
              <path
                className="st7"
                d="M4435.1,796.9h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.8h6.5L4435.1,796.9z"
              />
              <path
                className="st7"
                d="M4462,804c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V804z"
              />
              <path
                className="st7"
                d="M4490.3,815.9c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4490.3,815.9z M4483.5,807.2
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4483.5z"
              />
              <path
                className="st7"
                d="M4519.6,815.9c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4519.6,815.9z M4512.9,807.2
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4512.9z"
              />
              <path
                className="st7"
                d="M4533.9,796.9h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.8h6.5L4533.9,796.9z"
              />
              <path
                className="st7"
                d="M4267.1,876.8l-0.4-4.7c-1.5,2.7-5.1,5.5-10.8,5.5c-8.5,0-16.3-6.2-16.3-17.6s8.3-17.5,16.7-17.5
		c7.3,0,12.9,4.1,14.9,10.2l-4.2,1.8c-1.4-4.7-5.8-7.9-10.7-7.7c-6,0-11.9,4.3-11.9,13.2s5.7,13.3,11.7,13.3
		c7.5,0,10.2-5.3,10.4-8.8h-11.6v-4.2h16.1v16.5L4267.1,876.8z"
              />
              <path
                className="st7"
                d="M4285.8,877.5c-5.3,0-8.5-4-8.5-9.2V854h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9c3.7,0,5.4-2.4,5.4-5.8V854h4.5v18.6
		c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.1-0.9-0.2-1.8-0.2-2.8C4291.3,876.4,4288.5,877.5,4285.8,877.5z"
              />
              <path
                className="st7"
                d="M4308.8,876.8h-4.5V854h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3V876.8z"
              />
              <path
                className="st7"
                d="M4332.9,869.5c0.3,2.4,2.1,4.3,5.3,4.3c2.5,0,3.9-1.4,3.9-3c0-1.4-1-2.5-2.9-2.9l-3.9-0.9
		c-3.6-0.8-5.7-3.2-5.7-6.4c0-3.9,3.7-7.2,8.1-7.2c6.3,0,8.2,4.1,8.7,6.1l-3.9,1.5c-0.3-2.3-2.4-4-4.7-3.8c-2.3,0-3.8,1.5-3.8,3
		c0,1.4,0.9,2.4,2.6,2.8l3.7,0.8c4.1,0.9,6.3,3.4,6.3,6.8s-2.7,7.1-8.3,7.1c-6.3,0-8.9-4-9.3-6.6L4332.9,869.5z"
              />
              <path
                className="st7"
                d="M4386.4,843.2h4.9l-13,33.6h-4.6l-12.7-33.6h4.9l10.2,27.7L4386.4,843.2z"
              />
              <path
                className="st7"
                d="M4397.7,842.1c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2
		C4394.5,843.6,4395.9,842.2,4397.7,842.1C4397.7,842.1,4397.7,842.1,4397.7,842.1z M4395.5,876.8V854h4.4v22.8L4395.5,876.8z"
              />
              <path className="st7" d="M4407.5,876.8v-34.4h4.5v34.4H4407.5z" />
              <path className="st7" d="M4419.6,876.8v-34.4h4.5v34.4H4419.6z" />
              <path
                className="st7"
                d="M4437.2,863.8l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C4430.2,866.6,4433.2,864.3,4437.2,863.8z M4445.1,867v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C4442.1,873.8,4445.1,872,4445.1,867z"
              />
              <path
                className="st7"
                d="M4459.1,877.1c0.3,3.2,3,5.7,6.2,5.6c4.8,0,7-2.5,7-7.4V872c-1.1,2.1-3.6,3.7-7,3.7c-6.1,0-10.5-4.6-10.5-11.1
		c0-6.2,4.2-11.1,10.5-11.1c3.5,0,5.9,1.3,7,3.6V854h4.4v21.1c0,5.8-2.8,11.4-11.4,11.4c-5.7,0-10-3.6-10.5-8.5L4459.1,877.1z
		 M4472.5,864.7c0-4.4-2.7-7.3-6.5-7.3s-6.6,2.9-6.6,7.3c0,4.4,2.6,7.3,6.6,7.3C4469.9,872,4472.5,869.1,4472.5,864.7L4472.5,864.7z
		"
              />
              <path
                className="st7"
                d="M4503.8,870.3c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L4503.8,870.3z M4499.3,863.1
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H4499.3z"
              />
            </g>
            <g id="Dartmouth_Street">
              <path
                className="st7"
                d="M4009.5,1006.1v-38.5h13.8c11,0,19,7.1,19,19.3s-8.1,19.2-19,19.2H4009.5z M4022.9,999.1
		c6.3,0,11.5-3.9,11.5-12.3c0-8.4-5.2-12.3-11.5-12.3h-6v24.6L4022.9,999.1z"
              />
              <path
                className="st7"
                d="M4053.9,990.7l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C4045.9,994,4049.4,991.4,4053.9,990.7z M4062.5,995.3v-1.2l-6,1
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C4059.7,1001.5,4062.5,1000,4062.5,995.3z"
              />
              <path
                className="st7"
                d="M4092.4,986.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L4092.4,986.6z"
              />
              <path
                className="st7"
                d="M4105.6,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5V979.4z"
              />
              <path
                className="st7"
                d="M4116.3,1006.1v-26.7h6.9v3.3c1.5-2.6,4.8-4,7.8-4c3.6,0,6.6,1.6,7.9,4.4c1.8-2.9,5-4.6,8.5-4.4
		c4.9,0,9.7,3,9.7,10.1v17.3h-7v-15.8c0-2.9-1.4-5-4.7-5c-3.1,0-4.9,2.4-4.9,5.3v15.6h-7.2v-15.8c0-2.9-1.5-5-4.7-5
		c-3.3,0-5,2.3-5,5.3v15.6L4116.3,1006.1z"
              />
              <path
                className="st7"
                d="M4189.7,992.8c0,7.7-6.2,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
		S4189.7,984.5,4189.7,992.8z M4182.4,992.8c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		C4179.2,1000.3,4182.4,997.8,4182.4,992.8L4182.4,992.8z"
              />
              <path
                className="st7"
                d="M4211.9,1003.2c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3v-15.5h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C4212,1005.2,4211.9,1004.2,4211.9,1003.2z"
              />
              <path
                className="st7"
                d="M4234.7,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L4234.7,979.4z"
              />
              <path
                className="st7"
                d="M4252.6,1006.1h-7.2v-39.3h7.2v14.8c1.9-1.9,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.3v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2L4252.6,1006.1z"
              />
              <path
                className="st7"
                d="M4087.1,1032.1c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L4087.1,1032.1z"
              />
              <path
                className="st7"
                d="M4108.4,1032.7h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L4108.4,1032.7z"
              />
              <path
                className="st7"
                d="M4135.4,1039.8c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L4135.4,1039.8z"
              />
              <path
                className="st7"
                d="M4163.6,1051.7c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.3,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L4163.6,1051.7z M4156.9,1043
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4156.9z"
              />
              <path
                className="st7"
                d="M4192.9,1051.7c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.8,6.1c2.7,0.2,5.2-1.5,6.1-4.1L4192.9,1051.7z
		 M4186.2,1043c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H4186.2z"
              />
              <path
                className="st7"
                d="M4207.3,1032.7h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5V1032.7z"
              />
            </g>
            <g id="Lodge_Road">
              <path className="st7" d="M3764.5,769v-38.5h7.5v31.3h17.1v7.2H3764.5z" />
              <path
                className="st7"
                d="M3819.6,755.6c0,8.2-6,14.2-14,14.2c-8,0-14-6-14-14.2c0-8.2,6-14.2,14-14.2
		C3813.6,741.5,3819.6,747.4,3819.6,755.6z M3812.4,755.6c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
		S3812.4,760.7,3812.4,755.6z"
              />
              <path
                className="st7"
                d="M3850.1,764.1c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L3850.1,764.1z M3836.6,763.2c3.7,0,6.6-2.8,6.6-7.7s-2.9-7.4-6.6-7.4
		s-6.6,2.7-6.6,7.5C3829.9,760.3,3832.8,763.2,3836.6,763.2z"
              />
              <path
                className="st7"
                d="M3861.9,768.7c0.5,3,3.2,5.2,6.2,5c4.6,0,7.1-2.3,7.1-7.4v-1.9c-1.1,1.7-3.6,3.4-7.4,3.4
		c-7.1,0-12.4-5.5-12.4-13c0-7.1,5.1-13,12.4-13c4.2,0,6.7,1.8,7.6,3.6v-3.1h6.9v23.8c0,7.3-4,14-14,14c-7.3,0-12.2-4.6-13-9.7
		L3861.9,768.7z M3875.3,754.8c0-4.1-2.8-6.7-6.3-6.7s-6.4,2.6-6.4,6.7s2.7,6.8,6.4,6.8C3872.8,761.6,3875.3,758.9,3875.3,754.8
		L3875.3,754.8z"
              />
              <path
                className="st7"
                d="M3912.9,761.3c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L3912.9,761.3z M3906.2,752.6
		c-0.1-2.7-1.9-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H3906.2z"
              />
              <path
                className="st7"
                d="M3943.1,754.2h-3.9V769h-7.5v-38.5h15c7.5,0,12.3,5.2,12.3,11.8c0.2,5.1-3.2,9.6-8.2,10.9l8.2,15.7h-8.4
		L3943.1,754.2z M3945.3,747.7c3.8,0,6-2.2,6-5.3c0-3.1-2.2-5.4-6-5.4h-6.1v10.7L3945.3,747.7z"
              />
              <path
                className="st7"
                d="M3990.4,755.6c0,8.2-6,14.2-14,14.2c-8,0-14-6-14-14.2c0-8.2,6-14.2,14-14.2
		C3984.3,741.5,3990.4,747.4,3990.4,755.6z M3983.1,755.6c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
		S3983.1,760.7,3983.1,755.6L3983.1,755.6z"
              />
              <path
                className="st7"
                d="M4001.7,753.6l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C3993.7,756.9,3997.3,754.3,4001.7,753.6z M4010.3,758.2V757l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C4007.5,764.4,4010.3,762.9,4010.3,758.2z"
              />
              <path
                className="st7"
                d="M4049.4,764.1c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1V764.1z M4035.9,763.2c3.7,0,6.6-2.8,6.6-7.7s-2.9-7.4-6.6-7.4
		s-6.6,2.7-6.6,7.5C4029.3,760.3,4032,763.2,4035.9,763.2z"
              />
              <path
                className="st7"
                d="M3779.5,788.6h4.8l-9.6,33.6h-4.8l-8.8-27.3l-8.7,27.3h-4.7l-9.7-33.6h4.8l7.4,26.3l8.4-26.3h4.9l8.6,26.6
		L3779.5,788.6z"
              />
              <path
                className="st7"
                d="M3808.6,815.7c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L3808.6,815.7z M3804.1,808.5
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H3804.1z"
              />
              <path
                className="st7"
                d="M3816.4,814.9c0.3,2.4,2.1,4.3,5.3,4.3c2.5,0,3.9-1.4,3.9-3c0-1.4-1-2.5-2.9-2.9l-3.9-0.9
		c-3.6-0.8-5.7-3.2-5.7-6.4c0-3.9,3.7-7.2,8.1-7.2c6.3,0,8.2,4.1,8.7,6.1l-3.9,1.5c-0.3-2.3-2.4-4-4.7-3.8c-2.3,0-3.8,1.5-3.8,3
		c0,1.4,0.9,2.4,2.6,2.8l3.7,0.8c4.1,0.9,6.3,3.4,6.3,6.8c0,3.4-2.7,7.1-8.3,7.1c-6.3,0-8.9-4-9.3-6.6L3816.4,814.9z"
              />
              <path
                className="st7"
                d="M3841.9,799.4h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.4,0-0.7v-3.7h4.1V799.4z"
              />
              <path
                className="st7"
                d="M3876.1,788.6c6.4,0,10.2,3.8,10.2,9.1c0.1,3.3-1.9,6.2-5,7.3c3.7,0.9,6.2,4.3,6.1,8.1c0,5.3-4.2,9.2-10.4,9.2
		h-11.7v-33.6H3876.1z M3875.5,803.3c3.7,0,6-2.2,6-5.4c0-3.1-2.3-5.3-6.2-5.3h-5.6v10.7L3875.5,803.3z M3876.2,818.2
		c3.7,0,6.3-2.1,6.3-5.4s-2-5.5-6.1-5.5h-6.6v10.9L3876.2,818.2z"
              />
              <path
                className="st7"
                d="M3905.9,803.9c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L3905.9,803.9z"
              />
              <path
                className="st7"
                d="M3932.1,810.8c0,7-4.8,12.1-11.7,12.1c-6.8,0-11.7-5.2-11.7-12.1c0-7,4.8-12.1,11.7-12.1
		C3927.2,798.7,3932.1,803.9,3932.1,810.8z M3927.5,810.8c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
		S3927.5,816.1,3927.5,810.8z"
              />
              <path
                className="st7"
                d="M3937.8,822.2v-22.8h4.3v3c1.5-2.4,4.1-3.8,6.9-3.7c3-0.1,5.7,1.6,6.8,4.3c1.5-2.8,4.5-4.5,7.6-4.3
		c4,0,7.9,2.7,7.9,8.7v14.8h-4.4v-14.3c0-3-1.5-5.2-4.8-5.2c-3.1,0-5.3,2.5-5.3,5.7v13.8h-4.5v-14.3c0-2.9-1.4-5.2-4.8-5.2
		c-3.2,0-5.3,2.4-5.3,5.8v13.8L3937.8,822.2z"
              />
              <path
                className="st7"
                d="M3995.9,799.4l5.9,17.2l5-17.2h4.7l-7.4,22.8h-4.6l-6.1-17.4l-5.9,17.4h-4.7l-7.5-22.8h4.8l5.1,17.2l5.9-17.2
		H3995.9z"
              />
              <path
                className="st7"
                d="M4018.3,787.5c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2c0,0,0,0,0,0
		C4015.1,789,4016.5,787.6,4018.3,787.5C4018.3,787.5,4018.3,787.5,4018.3,787.5z M4016.1,822.2v-22.8h4.4v22.8H4016.1z"
              />
              <path
                className="st7"
                d="M4030.8,810.8c0,5.2,3.3,8,7,8c3,0.2,5.6-1.8,6.4-4.7l3.9,1.7c-1.5,4.4-5.7,7.3-10.3,7.1
		c-6.6,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1,0,9.2,3.8,10.2,7.3l-4,1.7c-0.6-2.9-3.2-5-6.1-4.8
		C4034.1,802.8,4030.8,805.5,4030.8,810.8z"
              />
              <path
                className="st7"
                d="M4057.7,822.2h-4.5v-34.3h4.5v14.2c1.6-2.2,4.2-3.5,6.9-3.3c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.8
		c0-3.2-1.3-5.7-5.3-5.7c-3.4,0-5.2,2.7-5.3,6V822.2z"
              />
              <path className="st7" d="M3815.4,846.2v29.3h-4.6v-29.3h-11.2v-4.3h27.1v4.3H3815.4z" />
              <path
                className="st7"
                d="M3852.4,864.1c0,7-4.8,12.1-11.7,12.1s-11.7-5.2-11.7-12.1c0-7,4.8-12.1,11.7-12.1S3852.4,857.1,3852.4,864.1z
		 M3847.8,864.1c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2S3847.8,869.4,3847.8,864.1z"
              />
              <path
                className="st7"
                d="M3875.5,852.7l5.9,17.2l5-17.2h4.7l-7.4,22.8h-4.6l-6.1-17.4l-5.9,17.4h-4.7l-7.5-22.8h4.9l5.1,17.2l5.9-17.2
		H3875.5z"
              />
              <path
                className="st7"
                d="M3900.2,875.5h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.8
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3V875.5z"
              />
              <path
                className="st7"
                d="M3956.6,875.5v-15h-17.2v15h-4.6v-33.6h4.6v14.4h17.2v-14.4h4.6v33.6H3956.6z"
              />
              <path
                className="st7"
                d="M3974.8,862.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C3967.8,865.3,3970.8,863,3974.8,862.5z M3982.7,865.8v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C3979.8,872.5,3982.7,870.7,3982.7,865.8L3982.7,865.8z"
              />
              <path className="st7" d="M3994.1,875.5v-34.3h4.5v34.4L3994.1,875.5z" />
              <path className="st7" d="M4006.1,875.5v-34.3h4.5v34.4L4006.1,875.5z" />
            </g>
            <g id="West_Bromwich">
              <path
                className="st7"
                d="M3525.7,967.6h7.6l-10.7,38.5h-7.7l-8.7-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L3525.7,967.6z"
              />
              <path
                className="st7"
                d="M3561.1,998.4c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L3561.1,998.4z
		 M3554.4,989.7c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H3554.4z"
              />
              <path
                className="st7"
                d="M3570.4,997.3c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L3570.4,997.3z"
              />
              <path
                className="st7"
                d="M3599.7,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L3599.7,979.4z"
              />
              <path
                className="st7"
                d="M3637.6,967.6c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.1,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
		c0,6.2-4.7,10.7-11.9,10.7h-14.9v-38.5H3637.6z M3636.4,983.5c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6H3636.4z
		 M3637.2,999.9c3.6,0,5.8-1.9,5.8-5c0-3.1-1.9-5.2-5.7-5.2h-6.2v10.1L3637.2,999.9z"
              />
              <path
                className="st7"
                d="M3671.9,986.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L3671.9,986.6z"
              />
              <path
                className="st7"
                d="M3702.2,992.8c0,7.7-6.2,14-14,14s-14-6.2-14-14c0,0,0,0,0-0.1c0-8.3,6-14.2,14-14.2
		S3702.2,984.5,3702.2,992.8z M3694.9,992.8c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S3694.9,997.8,3694.9,992.8
		L3694.9,992.8z"
              />
              <path
                className="st7"
                d="M3707.2,1006.1v-26.7h6.9v3.3c1.5-2.6,4.8-4,7.8-4c3.6,0,6.6,1.6,7.9,4.4c1.8-2.9,5-4.6,8.5-4.4
		c4.9,0,9.7,3,9.7,10.1v17.3h-7v-15.8c0-2.9-1.4-5-4.7-5c-3.1,0-4.9,2.4-4.9,5.3v15.6h-7.2v-15.8c0-2.9-1.5-5-4.7-5s-5,2.3-5,5.3
		v15.6L3707.2,1006.1z"
              />
              <path
                className="st7"
                d="M3777.3,979.4l5.8,17.2l4.9-17.2h7.2l-8.4,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1
		l5.8-17.1L3777.3,979.4z"
              />
              <path
                className="st7"
                d="M3802.6,966.2c2.5,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C3798.1,968.2,3800.1,966.2,3802.6,966.2C3802.6,966.2,3802.6,966.2,3802.6,966.2z M3799,1006.1v-26.7h7.2v26.7L3799,1006.1z"
              />
              <path
                className="st7"
                d="M3818.5,992.8c0,4.8,3.1,7.5,6.8,7.5c2.8,0.1,5.4-1.8,6.1-4.5l6.3,2.1c-1.2,4.5-5.4,9-12.5,9
		c-7.6,0.1-13.9-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.3,6.1-14.2,13.8-14.2c7.3,0,11.4,4.5,12.5,9l-6.5,2.2c-0.6-2.7-3.1-4.6-5.9-4.5
		C3821.6,985.3,3818.5,987.9,3818.5,992.8z"
              />
              <path
                className="st7"
                d="M3849.7,1006.1h-7.2v-39.3h7.2v14.8c1.9-2,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2L3849.7,1006.1z"
              />
              <path
                className="st7"
                d="M3596.8,1042.5c0-11.2,8.4-17.5,16.7-17.5c7.7,0,13.1,4.2,14.8,10.7l-4.3,1.5c-1.3-5.1-5-7.9-10.5-7.9
		c-6.1,0-12,4.5-12,13.2c0,8.8,5.8,13.3,12,13.3c5,0.2,9.5-3.2,10.7-8.1l4.1,1.5c-1.8,6.3-7.1,10.8-14.8,10.8
		C3604.9,1060.1,3596.8,1053.8,3596.8,1042.5z"
              />
              <path
                className="st7"
                d="M3654,1052.9c-1.4,4.4-5.6,7.4-10.3,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L3654,1052.9z M3649.5,1045.6
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3-0.1-6,2.5-6.2,5.8H3649.5z"
              />
              <path
                className="st7"
                d="M3664.3,1059.4h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L3664.3,1059.4z"
              />
              <path
                className="st7"
                d="M3692.5,1036.5h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.5-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L3692.5,1036.5z"
              />
              <path
                className="st7"
                d="M3716,1041c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L3716,1041z"
              />
              <path
                className="st7"
                d="M3726.3,1046.3l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5
		c0,0,0,0.1,0,0.1l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C3719.3,1049.2,3722.3,1046.9,3726.3,1046.3z M3734.2,1049.6v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C3731.2,1056.3,3734.2,1054.6,3734.2,1049.6z"
              />
              <path className="st7" d="M3745.6,1059.4V1025h4.5v34.4H3745.6z" />
            </g>
            <g id="Trinity_Way">
              <path className="st7" d="M3317.8,842.3v31.3h-7.5v-31.3h-12.1v-7.1h31.8v7.1H3317.8z" />
              <path
                className="st7"
                d="M3350.3,854.2c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V847h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V854.2z"
              />
              <path
                className="st7"
                d="M3358.2,833.8c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C3353.7,835.8,3355.7,833.8,3358.2,833.8C3358.1,833.8,3358.2,833.8,3358.2,833.8z M3354.6,873.7V847h7.2v26.7L3354.6,873.7z"
              />
              <path
                className="st7"
                d="M3376.1,873.7h-7.2V847h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.3v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L3376.1,873.7z"
              />
              <path
                className="st7"
                d="M3403.5,833.8c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C3399,835.8,3401,833.8,3403.5,833.8C3403.4,833.8,3403.5,833.8,3403.5,833.8z M3399.9,873.7V847h7.2v26.7L3399.9,873.7z"
              />
              <path
                className="st7"
                d="M3423.1,847h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8V847h1.4c2.8,0,4.1-1.8,4.1-4.2V839h6.5L3423.1,847z"
              />
              <path
                className="st7"
                d="M3435.3,884.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2L3435.3,884.2z"
              />
              <path
                className="st7"
                d="M3519.8,835.2h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.7,27.4h-7.8l-10.7-38.5h7.8l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L3519.8,835.2z"
              />
              <path
                className="st7"
                d="M3537.6,858.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.2c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C3529.6,861.6,3533.2,859,3537.6,858.3z M3546.2,862.9v-1.2l-6,0.9
		c-1.9,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C3543.4,869.1,3546.2,867.6,3546.2,862.9z"
              />
              <path
                className="st7"
                d="M3561.4,884.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H3561.4z"
              />
            </g>
            <g id="Kenrick_Park">
              <path
                className="st7"
                d="M3068.2,989.7l-4.8,5.3v10.7h-7.5v-38.4h7.5v17.4l15.4-17.4h9.8l-15.2,16.8l15.3,21.7h-9.4L3068.2,989.7z"
              />
              <path
                className="st7"
                d="M3116.5,998c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L3116.5,998z M3109.8,989.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H3109.8z"
              />
              <path
                className="st7"
                d="M3129.2,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L3129.2,1005.7z"
              />
              <path
                className="st7"
                d="M3169.2,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M3177.1,965.7c2.5,0,4.4,2,4.4,4.5c0,2.5-2,4.4-4.5,4.4c-2.4,0-4.4-2-4.4-4.4
		C3172.6,967.8,3174.6,965.8,3177.1,965.7C3177.1,965.7,3177.1,965.7,3177.1,965.7z M3173.5,1005.7V979h7.2v26.7L3173.5,1005.7z"
              />
              <path
                className="st7"
                d="M3193,992.3c0,4.8,3.1,7.5,6.8,7.5c2.8,0.1,5.4-1.8,6.1-4.5l6.3,2.1c-1.2,4.4-5.4,9-12.5,9
		c-7.6,0.1-13.9-5.9-14-13.6c0-0.2,0-0.4,0-0.6c0-8.2,6.1-14.2,13.8-14.2c7.3,0,11.4,4.5,12.5,9l-6.5,2.2c-0.6-2.7-3.1-4.6-5.9-4.5
		C3196.1,984.8,3193,987.5,3193,992.3z"
              />
              <path
                className="st7"
                d="M3232.2,990.2l10.9,15.5h-8.8l-7.1-10.2l-3,3.1v7.1h-7.2v-39.3h7.3v22.5l9.2-9.9h9.4L3232.2,990.2z"
              />
              <path
                className="st7"
                d="M3267.4,991.2v14.5h-7.5v-38.5h14.4c7.6,0,12.6,5,12.6,12s-5,12-12.6,12H3267.4z M3273.4,984.7
		c3.7,0,6-2.2,6-5.5c0-3.3-2.3-5.5-6-5.5h-5.9v11H3273.4z"
              />
              <path
                className="st7"
                d="M3297.9,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3c0,0,0,0,0,0l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C3290,993.6,3293.5,991,3297.9,990.3z M3306.5,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C3303.7,1001.1,3306.6,999.6,3306.5,994.9L3306.5,994.9z"
              />
              <path
                className="st7"
                d="M3336.5,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M3356,990.2l10.9,15.5h-8.8l-7.1-10.2l-3,3.1v7.1h-7.2v-39.3h7.2v22.5l9.2-9.9h9.4L3356,990.2z"
              />
            </g>
            <g id="The_Hawthorns">
              <path className="st7" d="M2808.8,841.5v31.3h-7.5v-31.3h-12.1v-7.1h31.8v7.1H2808.8z" />
              <path
                className="st7"
                d="M2832.2,872.8h-7.2v-39.3h7.2v14.8c1.9-2,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
              />
              <path
                className="st7"
                d="M2880,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.8,6.1c2.7,0.2,5.2-1.5,6.1-4.1L2880,865.2z M2873.2,856.5
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2873.2z"
              />
              <path
                className="st7"
                d="M2922.9,872.8v-15.9h-16.8v15.9h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5H2922.9z"
              />
              <path
                className="st7"
                d="M2944.4,857.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C2936.4,860.8,2940,858.2,2944.4,857.5z M2953,862.1v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C2950.1,868.2,2953,866.8,2953,862.1L2953,862.1z"
              />
              <path
                className="st7"
                d="M2989.4,846.2l5.8,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1
		l5.8-17.1H2989.4z"
              />
              <path
                className="st7"
                d="M3020,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L3020,846.2z"
              />
              <path
                className="st7"
                d="M3037.9,872.8h-7.2v-39.3h7.2v14.8c1.9-2,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
              />
              <path
                className="st7"
                d="M3087.7,859.5c0,7.7-6.2,14-14,14c-7.7,0-14-6.2-14-14c0,0,0,0,0-0.1c0-8.2,6-14.2,14-14.2
		C3081.6,845.3,3087.7,851.3,3087.7,859.5z M3080.5,859.5c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6
		C3077.2,867.1,3080.4,864.6,3080.5,859.5L3080.5,859.5z"
              />
              <path
                className="st7"
                d="M3109,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V853.3z"
              />
              <path
                className="st7"
                d="M3120.5,872.8h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L3120.5,872.8z"
              />
              <path
                className="st7"
                d="M3148.2,864.1c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L3148.2,864.1z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000180350540682815921990000001698214178409786296_"
                    x="2942.2"
                    y="729.2"
                    width="68.5"
                    height="68.5"
                  />
                </defs>
                <clipPath id="SVGID_00000115479855473506526270000002671803075538345107_">
                  <use
                    xlinkHref="#SVGID_00000180350540682815921990000001698214178409786296_"
                    style={{ overflow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: '(#SVGID_00000115479855473506526270000002671803075538345107_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="72.1"
                    height="72.1"
                    x="-36.1"
                    y="-36.1"
                    transform="matrix(0.9492 0 0 0.9492 2976.4241 763.4308)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Handsworth">
              <path
                className="st7"
                d="M2621.3,1005.7v-16h-16.8v16h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5H2621.3z"
              />
              <path
                className="st7"
                d="M2642.7,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C2634.8,993.6,2638.3,991,2642.7,990.3z M2651.3,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C2648.5,1001.1,2651.3,999.6,2651.3,994.9L2651.3,994.9z"
              />
              <path
                className="st7"
                d="M2672.2,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L2672.2,1005.7z"
              />
              <path
                className="st7"
                d="M2721.4,1000.8c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
		c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1L2721.4,1000.8z M2707.9,999.9
		c3.7,0,6.6-2.8,6.6-7.6c0-4.8-2.9-7.4-6.6-7.4c-3.7,0-6.6,2.7-6.6,7.5C2701.3,997,2704.1,999.9,2707.9,999.9L2707.9,999.9z"
              />
              <path
                className="st7"
                d="M2732.5,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.3L2732.5,996.9z"
              />
              <path
                className="st7"
                d="M2775.7,979l5.8,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1l5.8-17.1
		L2775.7,979z"
              />
              <path
                className="st7"
                d="M2823.4,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S2823.4,984.1,2823.4,992.3z
		 M2816.1,992.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S2816.1,997.4,2816.1,992.3L2816.1,992.3z"
              />
              <path
                className="st7"
                d="M2844.7,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M2857.9,979h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.4c2.8,0,4.1-1.8,4.1-4.2V971h6.5L2857.9,979z"
              />
              <path
                className="st7"
                d="M2875.7,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
              />
              <path
                className="st7"
                d="M2625.3,1025.3c6.4,0,10.2,3.8,10.2,9.1c0.1,3.3-1.9,6.2-5,7.3c3.7,0.9,6.2,4.3,6.1,8.1
		c0,5.3-4.2,9.2-10.4,9.2h-11.8v-33.6H2625.3z M2624.7,1040c3.7,0,6-2.2,6-5.4s-2.3-5.3-6.2-5.3h-5.6v10.7L2624.7,1040z
		 M2625.4,1054.9c3.7,0,6.3-2.1,6.3-5.4s-2-5.5-6.1-5.5h-6.6v10.9H2625.4z"
              />
              <path
                className="st7"
                d="M2663.8,1047.5c0,7-4.8,12.1-11.7,12.1s-11.6-5.2-11.6-12.1s4.8-12.1,11.6-12.1S2663.8,1040.6,2663.8,1047.5z
		 M2659.3,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2S2659.3,1052.8,2659.3,1047.5z"
              />
              <path
                className="st7"
                d="M2691,1047.5c0,7-4.8,12.1-11.6,12.1c-6.8,0-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
		C2686.2,1035.4,2691,1040.6,2691,1047.5z M2686.4,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
		S2686.4,1052.8,2686.4,1047.5z"
              />
              <path
                className="st7"
                d="M2702.7,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.7,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L2702.7,1036.1z"
              />
              <path
                className="st7"
                d="M2718,1058.9h-4.5v-34.4h4.5v14.2c1.6-2.2,4.2-3.5,6.9-3.3c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.4,0-5.2,2.7-5.3,6L2718,1058.9z"
              />
              <path
                className="st7"
                d="M2769.8,1034.4c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4
		L2769.8,1034.4z"
              />
              <path
                className="st7"
                d="M2786.2,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1L2786.2,1036.1z"
              />
              <path
                className="st7"
                d="M2809.7,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.4v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0,1.5,0.1L2809.7,1040.6z"
              />
              <path
                className="st7"
                d="M2834.4,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L2834.4,1052.4z
		 M2829.8,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2829.8z"
              />
              <path
                className="st7"
                d="M2860.1,1052.4c-1.4,4.4-5.6,7.4-10.3,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L2860.1,1052.4z
		 M2855.5,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2855.5z"
              />
              <path
                className="st7"
                d="M2871.9,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.7,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L2871.9,1036.1z"
              />
            </g>
            <g id="Winson_Green">
              <path
                className="st7"
                d="M2383.4,783.8h7.7l-10.7,38.5h-7.7l-8.8-27.4l-8.8,27.4h-7.8l-10.7-38.5h7.9l7.1,26.5l8.5-26.5h7.7l8.6,26.6
		L2383.4,783.8z"
              />
              <path
                className="st7"
                d="M2398.5,782.3c2.5,0,4.5,2,4.5,4.4c0,2.5-2,4.5-4.4,4.5c-2.4,0-4.4-2-4.5-4.4
		C2394,784.4,2396,782.3,2398.5,782.3C2398.4,782.3,2398.5,782.3,2398.5,782.3z M2394.9,822.2v-26.7h7.2v26.7L2394.9,822.2z"
              />
              <path
                className="st7"
                d="M2416.4,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L2416.4,822.2z"
              />
              <path
                className="st7"
                d="M2444.1,813.5c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.1,4.8,10.5,7.7l-6,1.4c-0.2-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L2444.1,813.5z"
              />
              <path
                className="st7"
                d="M2490.5,808.9c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S2490.5,800.6,2490.5,808.9z
		 M2483.3,808.9c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6c0,5,3.3,7.6,6.8,7.6S2483.3,813.9,2483.3,808.9L2483.3,808.9z"
              />
              <path
                className="st7"
                d="M2502.8,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L2502.8,822.2z"
              />
              <path
                className="st7"
                d="M2568.6,822.2l-0.5-4.4c-1.7,2.6-5.5,5.2-11.3,5.2c-10.4,0-19.2-7.6-19.2-20s9.3-20.1,19.7-20.1
		c10.1,0,15.7,5.9,17.6,11.8l-7.2,2.5c-1-3.4-4.2-7.4-10.4-7.4c-5.8,0-12.1,4-12.1,13.1c0,8.7,5.7,13.2,12.1,13.2
		c7.1,0,9.9-4.8,10.3-7.5h-12.1v-6.5h19.2v20L2568.6,822.2z"
              />
              <path
                className="st7"
                d="M2597.3,802.7c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V802.7z"
              />
              <path
                className="st7"
                d="M2625.5,814.6c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L2625.5,814.6z M2618.8,805.9
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2618.8z"
              />
              <path
                className="st7"
                d="M2654.9,814.6c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2H2636c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L2654.9,814.6z M2648.1,805.9
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2648.1z"
              />
              <path
                className="st7"
                d="M2667.5,822.2h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L2667.5,822.2z"
              />
              <path
                className="st7"
                d="M2398.7,841.2c8.4,0,16.9,6.3,16.9,17.5s-8.4,17.6-16.9,17.6c-8.4,0-16.9-6.3-16.9-17.6
		S2390.3,841.2,2398.7,841.2z M2398.7,872c6.3,0,12.1-4.5,12.1-13.3s-5.9-13.2-12.1-13.2c-6.3,0-12.1,4.5-12.1,13.2
		C2386.6,867.4,2392.5,871.9,2398.7,872L2398.7,872z"
              />
              <path
                className="st7"
                d="M2429.8,876.2c-5.3,0-8.5-4-8.5-9.2v-14.4h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9c3.7,0,5.4-2.4,5.4-5.8v-13.8h4.5
		v18.6c0,1.4,0.1,2.8,0.2,4.2h-4.2c-0.1-0.9-0.2-1.8-0.2-2.8C2435.4,875.1,2432.5,876.2,2429.8,876.2z"
              />
              <path
                className="st7"
                d="M2454.4,852.7h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1L2454.4,852.7z"
              />
              <path
                className="st7"
                d="M2485.1,869c-1.4,4.4-5.6,7.4-10.3,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4H2468c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L2485.1,869z M2480.6,861.7
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2480.6z"
              />
              <path
                className="st7"
                d="M2503.6,857.2c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L2503.6,857.2z"
              />
              <path
                className="st7"
                d="M2518.6,858.7c0-11.2,8.3-17.5,16.7-17.5c7.7,0,13.1,4.2,14.8,10.7l-4.3,1.5c-1.3-5.1-5-7.9-10.5-7.9
		c-6.1,0-12,4.5-12,13.2c0,8.8,5.8,13.3,12,13.3c5,0.2,9.5-3.2,10.7-8.1l4.1,1.5c-1.8,6.3-7.1,10.8-14.8,10.8
		C2526.6,876.2,2518.6,869.9,2518.6,858.7z"
              />
              <path
                className="st7"
                d="M2558,840.8c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2c0,0,0,0,0,0
		C2554.8,842.3,2556.3,840.8,2558,840.8C2558,840.8,2558,840.8,2558,840.8z M2555.9,875.5v-22.8h4.4v22.8H2555.9z"
              />
              <path
                className="st7"
                d="M2580.5,857.2c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L2580.5,857.2z"
              />
              <path
                className="st7"
                d="M2587.9,864.1c0,5.2,3.3,8,7,8c3,0.2,5.6-1.8,6.4-4.7l3.9,1.7c-1.5,4.4-5.7,7.3-10.3,7.1
		c-6.6,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1,0,9.2,3.8,10.2,7.3l-4,1.7c-0.6-2.9-3.2-5-6.1-4.8
		C2591.3,856.1,2587.9,858.8,2587.9,864.1z"
              />
              <path className="st7" d="M2610.4,875.5v-34.3h4.5v34.4L2610.4,875.5z" />
              <path
                className="st7"
                d="M2642.4,869c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L2642.4,869z M2637.9,861.7
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2637.9z"
              />
            </g>
            <g id="Soho">
              <path
                className="st7"
                d="M2240.2,978.4c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L2240.2,978.4z"
              />
              <path
                className="st7"
                d="M2278.6,992.3c0,8.2-6,14.2-14,14.2c-8,0-14-6-14-14.2c0-8.2,6-14.2,14-14.2
		C2272.6,978.2,2278.6,984.1,2278.6,992.3z M2271.4,992.3c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		C2268.2,999.9,2271.4,997.4,2271.4,992.3z"
              />
              <path
                className="st7"
                d="M2290.9,1005.7h-7.2v-39.3h7.2v14.8c1.7-2.1,4.7-2.9,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V1005.7z"
              />
              <path
                className="st7"
                d="M2340.7,992.3c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S2340.7,984.1,2340.7,992.3z
		 M2333.5,992.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6S2333.5,997.4,2333.5,992.3z"
              />
              <path
                className="st7"
                d="M2156.2,1025.3c6.4,0,10.2,3.8,10.2,9.1c0.1,3.3-1.9,6.2-5,7.3c3.7,0.9,6.2,4.3,6.1,8.1
		c0,5.3-4.2,9.2-10.4,9.2h-11.8v-33.6H2156.2z M2155.6,1040c3.7,0,6-2.2,6-5.4s-2.3-5.3-6.2-5.3h-5.6v10.7L2155.6,1040z
		 M2156.3,1054.9c3.7,0,6.3-2.1,6.3-5.4s-2-5.5-6.1-5.5h-6.6v10.9H2156.3z"
              />
              <path
                className="st7"
                d="M2193.2,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L2193.2,1052.4z
		 M2188.7,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H2188.7z"
              />
              <path
                className="st7"
                d="M2203.5,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L2203.5,1058.9z"
              />
              <path
                className="st7"
                d="M2227.6,1051.6c0.3,2.4,2.1,4.3,5.3,4.3c2.5,0,3.9-1.4,3.9-3c0-1.4-1-2.5-2.9-2.9l-3.9-0.9
		c-3.6-0.8-5.7-3.2-5.7-6.4c0-3.9,3.7-7.2,8.1-7.2c6.3,0,8.2,4.1,8.7,6.1l-3.9,1.5c-0.3-2.3-2.4-4-4.7-3.8c-2.3,0-3.8,1.5-3.8,3
		c0,1.4,0.9,2.4,2.6,2.8l3.7,0.8c4.1,0.9,6.3,3.4,6.3,6.8c0,3.2-2.7,7.1-8.3,7.1c-6.3,0-8.9-4-9.3-6.6L2227.6,1051.6z"
              />
              <path
                className="st7"
                d="M2268.6,1047.5c0,7-4.8,12.1-11.7,12.1c-6.8,0-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
		C2263.7,1035.4,2268.6,1040.6,2268.6,1047.5z M2264,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
		S2264,1052.8,2264,1047.5z"
              />
              <path
                className="st7"
                d="M2278.7,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L2278.7,1058.9z"
              />
              <path
                className="st7"
                d="M2323,1045.2h-5v13.8h-4.7v-33.6h12.7c6.4,0,10.3,4.5,10.3,10c0,4.8-3.1,8.6-8.2,9.5l8,14.1h-5.4L2323,1045.2z
		 M2325.1,1041c3.8,0,6.4-2.2,6.4-5.7s-2.6-5.8-6.4-5.8h-7.1v11.5L2325.1,1041z"
              />
              <path
                className="st7"
                d="M2363.6,1047.5c0,7-4.8,12.1-11.6,12.1c-6.8,0-11.7-5.2-11.7-12.1s4.8-12.1,11.7-12.1
		C2358.9,1035.4,2363.6,1040.6,2363.6,1047.5z M2359.1,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
		S2359.1,1052.8,2359.1,1047.5z"
              />
              <path
                className="st7"
                d="M2374.8,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5
		c0,0,0,0.1,0,0.1l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C2367.9,1048.7,2370.9,1046.5,2374.8,1045.9z M2382.7,1049.2v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C2379.8,1055.9,2382.8,1054.1,2382.7,1049.2L2382.7,1049.2z"
              />
              <path
                className="st7"
                d="M2410.2,1055.5c-1.4,2.6-4.1,4.2-7.1,4.1c-6.7,0-10.8-5.3-10.8-12.1c0-6.5,4.4-12,10.8-12c4,0,6.2,2,7,3.9
		v-14.8h4.5v30.1c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.2-1-0.2-2.1-0.2-3.1L2410.2,1055.5z M2403.5,1055.6c4.1,0,6.6-3.6,6.6-8.3
		s-2.5-7.9-6.5-7.9c-4.1,0-6.8,3.3-6.8,8C2396.8,1052.2,2399.2,1055.6,2403.5,1055.6z"
              />
            </g>
            <g id="Jewellery_Quarter">
              <path
                className="st2"
                d="M1908.8,763.9h276.6c8,0,14.6,6.5,14.6,14.6V875c0,8-6.5,14.6-14.6,14.6h-276.6c-8,0-14.6-6.5-14.6-14.6v-96.4
		C1894.3,770.5,1900.8,763.9,1908.8,763.9z"
              />
              <path
                className="st7"
                d="M2185.5,765.4c7.2,0,13.1,5.9,13.1,13.1V875c0,7.2-5.9,13.1-13.1,13.1h-276.6c-7.2,0-13.1-5.9-13.1-13.1l0,0
		v-96.5c0-7.2,5.9-13.1,13.1-13.1L2185.5,765.4 M2185.5,762.5h-276.6c-8.8,0-16,7.2-16,16V875c0,8.8,7.2,16,16,16h276.6
		c8.8,0,16-7.2,16-16v-96.5C2201.4,769.7,2194.3,762.5,2185.5,762.5L2185.5,762.5z"
              />
              <path
                className="st7"
                d="M1927.5,803.4l7.2-1.3v3.5c0.1,4,2.3,5.8,5.3,5.8s5.1-2.2,5.1-5.6v-26.6h7.5v26.6c0,6.9-5,12.7-12.5,12.7
		c-7.5,0-12.6-5-12.6-12.5L1927.5,803.4z"
              />
              <path
                className="st7"
                d="M1983.8,810c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4L1983.8,810z M1977,801.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1977z"
              />
              <path
                className="st7"
                d="M2011.9,791l5.8,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3L1986,791h7.6l4.9,17.1l5.8-17.1
		H2011.9z"
              />
              <path
                className="st7"
                d="M2057.5,810c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L2057.5,810z M2050.7,801.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2050.7z"
              />
              <path className="st7" d="M2062.9,817.6v-39.3h7.2v39.3H2062.9z" />
              <path className="st7" d="M2077.2,817.6v-39.3h7.2v39.3H2077.2z" />
              <path
                className="st7"
                d="M2115.4,810c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L2115.4,810z M2108.6,801.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2108.6z"
              />
              <path
                className="st7"
                d="M2137.1,798.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V791h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L2137.1,798.1z"
              />
              <path
                className="st7"
                d="M2142.9,828.2l6.3-13.9l-11.3-23.3h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2L2142.9,828.2z"
              />
              <path
                className="st7"
                d="M1972.3,833.6c10.5,0,19.8,7.7,19.8,20.1c0.1,4.9-1.6,9.6-4.7,13.3l4.6,5.1l-4.9,4.2l-4.7-5.2
		c-3.1,1.7-6.5,2.6-10,2.6c-10.4,0-19.7-7.6-19.7-20C1952.5,841.3,1961.8,833.6,1972.3,833.6z M1972.3,866.4c1.7,0,3.4-0.3,4.9-1
		l-6-6.6l5-4.3l6,6.7c1.5-2.3,2.2-4.9,2.1-7.7c0-8.7-6.1-12.8-12-12.8c-6,0-12,4.1-12,12.8S1966.3,866.4,1972.3,866.4L1972.3,866.4z
		"
              />
              <path
                className="st7"
                d="M2014.6,870c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3v-15.5h7.2V868c0,1.6,0.1,3.2,0.3,4.8h-6.9C2014.7,871.9,2014.6,870.9,2014.6,870z"
              />
              <path
                className="st7"
                d="M2034.9,857.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C2026.9,860.8,2030.4,858.2,2034.9,857.5z M2043.4,862.1v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C2040.6,868.2,2043.4,866.8,2043.4,862.1L2043.4,862.1z"
              />
              <path
                className="st7"
                d="M2073.4,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L2073.4,853.3z"
              />
              <path
                className="st7"
                d="M2086.5,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L2086.5,846.2z"
              />
              <path
                className="st7"
                d="M2121.1,865.2c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L2121.1,865.2z
		 M2114.4,856.5c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H2114.4z"
              />
              <path
                className="st7"
                d="M2142.8,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V853.3z"
              />
            </g>
            <g id="St_Paul_s">
              <path
                className="st7"
                d="M1734.4,978.4c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1734.4,978.4z"
              />
              <path
                className="st7"
                d="M1755.7,979h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.4c2.8,0,4.1-1.8,4.1-4.2V971h6.5L1755.7,979z"
              />
              <path
                className="st7"
                d="M1787.2,991.2v14.5h-7.5v-38.5h14.4c7.6,0,12.6,5,12.6,12s-5,12-12.6,12H1787.2z M1793.1,984.7
		c3.7,0,6-2.2,6-5.5c0-3.3-2.3-5.5-6-5.5h-5.9v11H1793.1z"
              />
              <path
                className="st7"
                d="M1817.7,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1809.7,993.6,1813.2,991,1817.7,990.3z M1826.3,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1823.4,1001.1,1826.3,999.6,1826.3,994.9L1826.3,994.9z"
              />
              <path
                className="st7"
                d="M1857.2,1002.8c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5V979h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3V979h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C1857.2,1004.7,1857.2,1003.8,1857.2,1002.8z"
              />
              <path className="st7" d="M1871.1,1005.7v-39.3h7.2v39.3L1871.1,1005.7z" />
              <path
                className="st7"
                d="M1887.6,966.8c2.9,0,4.7,2.4,4.7,5.3c0,7.3-5,9.9-8.4,10.3V979c2.4-0.3,4.2-2.2,4.4-4.6
		c-0.3,0.2-0.7,0.3-1.1,0.3c-2,0.1-3.8-1.4-3.9-3.5c0-0.1,0-0.3,0-0.4c0.1-2.3,1.9-4.1,4.2-4
		C1887.6,966.8,1887.6,966.8,1887.6,966.8z"
              />
              <path
                className="st7"
                d="M1901.3,996.9c0.2,2.1,1.7,4.1,4.8,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.3L1901.3,996.9z"
              />
            </g>
            <g id="St_Chads">
              <path
                className="st7"
                d="M1494.6,845.6c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1494.6,845.6z"
              />
              <path
                className="st7"
                d="M1515.9,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L1515.9,846.2z"
              />
              <path
                className="st7"
                d="M1537.6,853.6c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-1-3.7-3.9-7.7-10.6-7.7
		c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.7,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
		C1546.5,873.7,1537.6,865.9,1537.6,853.6z"
              />
              <path
                className="st7"
                d="M1587.4,872.8h-7.2v-39.3h7.2v14.8c1.9-1.9,4.5-3,7.2-2.9c6.8,0,9.9,4.7,9.9,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3,0-4.8,2.3-5,5.2V872.8z"
              />
              <path
                className="st7"
                d="M1617.5,857.5l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1609.5,860.8,1613.1,858.2,1617.5,857.5z M1626.1,862.1v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1623.2,868.2,1626.1,866.8,1626.1,862.1L1626.1,862.1z"
              />
              <path
                className="st7"
                d="M1665.2,868c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7c-7.6,0-13-6-13-14.1
		c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1V868z M1651.6,867.1c3.7,0,6.6-2.8,6.6-7.6s-2.9-7.4-6.6-7.4
		s-6.6,2.7-6.6,7.5C1645,864.2,1647.8,867,1651.6,867.1L1651.6,867.1z"
              />
              <path
                className="st7"
                d="M1676.2,864.1c0.2,2.1,1.7,4.1,4.9,4.1c2.4,0,3.5-1.2,3.5-2.7c0-1.2-0.8-2.2-2.9-2.6l-3.5-0.8
		c-5.2-1.1-7.5-4.2-7.5-8c0-4.8,4.2-8.7,10-8.7c7.6,0,10.2,4.8,10.5,7.7l-6,1.4c-0.3-2.2-2.2-3.8-4.4-3.6c-1.9,0-3.4,1.1-3.4,2.7
		c0,1.3,1,2.1,2.4,2.4l3.8,0.8c5.3,1.1,7.9,4.3,7.9,8.2c0,4.3-3.4,8.8-10.4,8.8c-8,0-10.8-5.2-11.1-8.2L1676.2,864.1z"
              />
            </g>
            <g id="Bull_Street">
              <path
                className="st7"
                d="M1240,967.6c7.5,0,11.7,4.4,11.7,10.4c0.1,3.7-2.1,7-5.6,8.2c4.1,1.1,6.9,4.9,6.8,9.1
		c0,6.2-4.7,10.7-11.9,10.7h-14.9v-38.5H1240z M1238.9,983.5c3.4,0,5.5-1.9,5.5-4.8s-1.9-4.8-5.5-4.8h-5.3v9.6H1238.9z
		 M1239.7,999.9c3.6,0,5.8-1.9,5.8-5c0-3.1-1.9-5.2-5.7-5.2h-6.2v10.1L1239.7,999.9z"
              />
              <path
                className="st7"
                d="M1275.4,1003.2c-1.5,2.5-4.6,3.6-7.4,3.6c-6.5,0-10.1-4.7-10.1-10.5v-16.9h7.2v15.4c0,3,1.5,5.4,4.8,5.4
		c3.2,0,5-2.2,5-5.3v-15.5h7.2v21.9c0,1.6,0.1,3.2,0.3,4.8h-6.9C1275.4,1005.2,1275.3,1004.2,1275.4,1003.2z"
              />
              <path className="st7" d="M1289.2,1006.1v-39.3h7.2v39.3L1289.2,1006.1z" />
              <path className="st7" d="M1303.5,1006.1v-39.3h7.2v39.3L1303.5,1006.1z" />
              <path
                className="st7"
                d="M1350.2,978.9c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.3,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1.1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1350.2,978.9z"
              />
              <path
                className="st7"
                d="M1371.5,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L1371.5,979.4z"
              />
              <path
                className="st7"
                d="M1398.5,986.6c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V986.6z"
              />
              <path
                className="st7"
                d="M1426.7,998.4c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L1426.7,998.4z M1420,989.7
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1420z"
              />
              <path
                className="st7"
                d="M1456,998.4c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14,13.1-14
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L1456,998.4z M1449.3,989.7
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1449.3z"
              />
              <path
                className="st7"
                d="M1470.3,979.4h5.4v6.4h-5.4V997c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5L1470.3,979.4z"
              />
            </g>
            <g id="Corporation_Street">
              <path
                className="st7"
                d="M968.7,798.4c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-0.9-3.7-3.9-7.7-10.6-7.7
		c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.8,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
		C977.6,818.5,968.7,810.7,968.7,798.4z"
              />
              <path
                className="st7"
                d="M1037.2,804.3c0,7.7-6.3,14-14,14c-7.7,0-14-6.3-14-14c0-8.2,6-14.2,14-14.2
		C1031.2,790.1,1037.2,796.1,1037.2,804.3z M1030,804.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		S1030,809.3,1030,804.3L1030,804.3z"
              />
              <path
                className="st7"
                d="M1058.5,798.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V791h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1V798.1z"
              />
              <path
                className="st7"
                d="M1062.8,827.9v-37h7v3.3c1.2-2.1,4.2-3.9,8.2-3.9c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
		c-3.7,0-6.4-1.5-7.7-3.3v12.9L1062.8,827.9z M1076.6,796.8c-3.7,0-6.7,2.8-6.7,7.5c0,4.7,3,7.5,6.7,7.5s6.6-2.8,6.6-7.5
		C1083.2,799.5,1080.2,796.8,1076.6,796.8z"
              />
              <path
                className="st7"
                d="M1121.3,804.3c0,8.2-6,14.2-14,14.2c-7.6,0.2-13.8-5.8-14-13.4c0-0.2,0-0.5,0-0.7c0-8.2,6-14.2,14-14.2
		C1115.3,790.1,1121.3,796.1,1121.3,804.3z M1114.1,804.3c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		C1110.8,811.9,1114.1,809.3,1114.1,804.3L1114.1,804.3z"
              />
              <path
                className="st7"
                d="M1142.6,798.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V791h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L1142.6,798.1z"
              />
              <path
                className="st7"
                d="M1153.3,802.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1145.3,805.6,1148.8,802.9,1153.3,802.3z M1161.8,806.8v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C1159,813,1161.8,811.6,1161.8,806.8z"
              />
              <path
                className="st7"
                d="M1184.4,791h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8V791h1.4c2.8,0,4.1-1.8,4.1-4.2V783h6.5L1184.4,791z"
              />
              <path
                className="st7"
                d="M1198.7,777.7c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C1194.2,779.8,1196.1,777.8,1198.7,777.7C1198.6,777.7,1198.6,777.7,1198.7,777.7z M1195.1,817.6V791h7.2v26.7H1195.1z"
              />
              <path
                className="st7"
                d="M1235.3,804.3c0,8.2-6,14.2-14,14.2c-7.6,0.2-13.8-5.8-14-13.4c0-0.2,0-0.5,0-0.7c0-8.2,6-14.2,14-14.2
		C1229.3,790.1,1235.3,796.1,1235.3,804.3z M1228.1,804.3c0-5-3.3-7.6-6.8-7.6s-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6
		S1228.1,809.3,1228.1,804.3z"
              />
              <path
                className="st7"
                d="M1247.6,817.6h-7.2V791h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L1247.6,817.6z"
              />
              <path
                className="st7"
                d="M1065.3,845.6c-0.4-2.1-2.1-5.4-7-5.4c-3.6,0-6,2.3-6,4.8c0,2.1,1.4,3.8,4.2,4.3l5.4,1
		c7,1.4,10.7,5.9,10.7,11.3c0,5.9-4.9,11.9-13.9,11.9c-10.2,0-14.7-6.6-15.3-12l6.9-1.8c0.3,3.8,3,7.2,8.4,7.2c4,0,6.2-2,6.2-4.7
		c0-2.2-1.7-4-4.7-4.6l-5.4-1c-6.1-1.2-10.1-5.2-10.1-11c0-6.8,6.1-12,13.4-12c9.3,0,12.9,5.6,13.8,10L1065.3,845.6z"
              />
              <path
                className="st7"
                d="M1086.6,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5V846.2z"
              />
              <path
                className="st7"
                d="M1113.6,853.3c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2v-26.7h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0,1.7,0.1L1113.6,853.3z"
              />
              <path
                className="st7"
                d="M1141.9,865.2c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2H1123c0.2,3.5,3.2,6.2,6.7,6.1c2.7,0.2,5.2-1.5,6.1-4.1L1141.9,865.2z M1135.1,856.5
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1135.1z"
              />
              <path
                className="st7"
                d="M1171.2,865.2c-1.4,4.6-5.6,8.5-12.2,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L1171.2,865.2z M1164.4,856.5
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H1164.4z"
              />
              <path
                className="st7"
                d="M1185.4,846.2h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.7
		c-5.2,0-8.5-3.1-8.5-8.3v-12.4h-4.8v-6.4h1.4c2.8,0,4.1-1.8,4.1-4.2v-3.7h6.5V846.2z"
              />
            </g>
            <g id="Grand_Central">
              <path
                className="st7"
                d="M742.1,1005.7l-0.5-4.4c-1.7,2.6-5.5,5.2-11.3,5.2c-10.4,0-19.2-7.6-19.2-20c0-12.4,9.3-20.1,19.7-20.1
		c10.1,0,15.7,5.9,17.6,11.8l-7.2,2.5c-1-3.4-4.2-7.4-10.4-7.4c-5.8,0-12.1,4-12.1,13.1c0,8.7,5.7,13.2,12.1,13.2
		c7.1,0,9.9-4.8,10.3-7.5H729v-6.5h19.2v20L742.1,1005.7z"
              />
              <path
                className="st7"
                d="M770.8,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M781.4,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C773.4,993.6,777,991,781.4,990.3z M790,994.9v-1.2l-6,0.9c-1.8,0.3-3.3,1.3-3.3,3.4
		c0,1.6,1.1,3.1,3.5,3.1C787.1,1001.1,790,999.6,790,994.9L790,994.9z"
              />
              <path
                className="st7"
                d="M810.8,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L810.8,1005.7z"
              />
              <path
                className="st7"
                d="M860.1,1000.8c0,1.8,0.1,3.7,0.2,4.8h-6.9c-0.2-1-0.3-2.1-0.3-3.1c-1.2,2.1-3.9,3.7-7.5,3.7
		c-7.6,0-13-6-13-14.1c0-7.8,5.3-13.9,12.8-13.9c4.6,0,6.8,1.9,7.5,3.3v-15.3h7.1V1000.8z M846.5,999.9c3.7,0,6.6-2.8,6.6-7.6
		c0-4.8-2.9-7.4-6.6-7.4s-6.6,2.7-6.6,7.5C839.9,997,842.7,999.9,846.5,999.9L846.5,999.9z"
              />
              <path
                className="st7"
                d="M878.3,986.5c0-12.3,9.3-20.1,19.6-20.1c10.7,0,16.1,6.5,17.6,12.7l-7.1,2.2c-1-3.7-3.9-7.7-10.6-7.7
		c-5.8,0-11.8,4.1-11.8,12.9c0,8.2,5.8,12.7,11.9,12.7c5,0.2,9.5-3,10.8-7.9l7,2.1c-1.5,5.9-7,13.1-17.8,13.1
		C887.2,1006.5,878.3,998.7,878.3,986.5z"
              />
              <path
                className="st7"
                d="M944.7,998c-1.4,4.6-5.6,8.5-12.1,8.5c-7.3,0-13.8-5.3-13.8-14.3c0-8.5,6.3-14.1,13.1-14.1
		c8.2,0,13.2,5.3,13.2,13.8c0,1-0.1,2.1-0.1,2.2h-19.1c0.2,3.5,3.2,6.2,6.7,6.1c3.4,0,5.2-1.7,6.1-4.1L944.7,998z M938,989.3
		c-0.1-2.7-1.8-5.3-6-5.3c-3.1-0.1-5.7,2.2-6,5.3H938z"
              />
              <path
                className="st7"
                d="M957.3,1005.7h-7.2V979h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L957.3,1005.7z"
              />
              <path
                className="st7"
                d="M990.1,979h5.4v6.4h-5.4v11.2c0,2.3,1.1,3.1,3.1,3.1c0.7,0,1.5-0.1,2.2-0.2v6c-1.3,0.5-2.7,0.7-4.1,0.6
		c-5.2,0-8.5-3.1-8.5-8.2v-12.4h-4.8V979h1.4c2.8,0,4.1-1.8,4.1-4.2V971h6.5L990.1,979z"
              />
              <path
                className="st7"
                d="M1017,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M1027.6,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C1019.7,993.6,1023.2,991,1027.6,990.3z M1036.2,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.7,1.4,3.1,3.2,3.1c0.1,0,0.2,0,0.3,0C1033.4,1001.1,1036.2,999.6,1036.2,994.9L1036.2,994.9z"
              />
              <path className="st7" d="M1049.8,1005.7v-39.3h7.2v39.3L1049.8,1005.7z" />
              <path
                className="st7"
                d="M708.8,1058.9l-18.2-27.4v27.4H686v-33.6h6.2l16.8,25.8v-25.8h4.6v33.6H708.8z"
              />
              <path
                className="st7"
                d="M741.6,1052.4c-1.4,4.4-5.6,7.4-10.3,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L741.6,1052.4z
		 M737.1,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H737.1z"
              />
              <path
                className="st7"
                d="M764.9,1036.1l5.9,17.2l5-17.2h4.7l-7.4,22.8h-4.6l-6.1-17.4l-5.9,17.4h-4.7l-7.5-22.8h4.9l5.1,17.2l5.9-17.2
		H764.9z"
              />
              <path
                className="st7"
                d="M814.7,1034.4c-0.5-3.5-3.6-5.9-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4
		L814.7,1034.4z"
              />
              <path
                className="st7"
                d="M831,1036.1h4.9v4H831v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.3v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L831,1036.1z"
              />
              <path
                className="st7"
                d="M854.6,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0,1.5,0.1L854.6,1040.6z"
              />
              <path
                className="st7"
                d="M879.2,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.2,0c3,0.2,5.6-1.7,6.4-4.6L879.2,1052.4z
		 M874.7,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H874.7z"
              />
              <path
                className="st7"
                d="M904.9,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L904.9,1052.4z
		 M900.4,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H900.4z"
              />
              <path
                className="st7"
                d="M916.8,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1V1036.1z"
              />
              <path
                className="st7"
                d="M957.2,1034.4c-0.5-3.5-3.6-5.9-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4
		L957.2,1034.4z"
              />
              <path
                className="st7"
                d="M973.6,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1V1036.1z"
              />
              <path
                className="st7"
                d="M990,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.4-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C983.1,1048.7,986,1046.5,990,1045.9z M997.9,1049.2v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C995,1055.9,997.9,1054.1,997.9,1049.2z"
              />
              <path
                className="st7"
                d="M1015.3,1036.1h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.9c0-0.2,0-0.4,0-0.7v-3.7h4.1V1036.1z"
              />
              <path
                className="st7"
                d="M1028.3,1024.2c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2c0,0,0,0,0,0
		C1025.1,1025.7,1026.6,1024.2,1028.3,1024.2C1028.3,1024.2,1028.3,1024.2,1028.3,1024.2z M1026.2,1058.9v-22.8h4.4v22.8H1026.2z"
              />
              <path
                className="st7"
                d="M1059.6,1047.5c0,7-4.8,12.1-11.6,12.1c-6.8,0-11.7-5.1-11.7-12.1s4.8-12.1,11.7-12.1
		C1054.8,1035.4,1059.6,1040.6,1059.6,1047.5z M1055.1,1047.5c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1c0,5.3,3.3,8.2,7.1,8.2
		S1055.1,1052.8,1055.1,1047.5z"
              />
              <path
                className="st7"
                d="M1069.8,1058.9h-4.4v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L1069.8,1058.9z"
              />
            </g>
            <g id="Town_Hall">
              <path className="st7" d="M541.6,788.9v31.4H534v-31.4h-12.1v-7.1h31.8v7.1H541.6z" />
              <path
                className="st7"
                d="M583.8,807c0,8.2-6,14.2-14,14.2s-14-6-14-14.2c0-8.2,6-14.2,14-14.2S583.8,798.7,583.8,807z M576.6,807
		c0-5-3.3-7.6-6.8-7.6c-3.5,0-6.8,2.5-6.8,7.6s3.3,7.6,6.8,7.6C573.3,814.5,576.6,812,576.6,807L576.6,807z"
              />
              <path
                className="st7"
                d="M611.6,793.6l5.7,17.2l4.9-17.2h7.2l-8.3,26.7h-7.2l-6.2-18.2l-6.1,18.2h-7.3l-8.5-26.7h7.6l4.9,17.1l5.8-17.1
		H611.6z"
              />
              <path
                className="st7"
                d="M640.5,820.3h-7.2v-26.7h7v3.3c1.7-2.6,4.6-4.1,7.7-4c6.6,0,9.7,4.7,9.7,10.6v16.8h-7.2v-15.6
		c0-3-1.5-5.3-4.9-5.3c-3.1,0-5,2.4-5,5.5L640.5,820.3z"
              />
              <path
                className="st7"
                d="M701.8,820.3v-15.9H685v16h-7.5v-38.5h7.5v15.5h16.8v-15.5h7.5v38.5H701.8z"
              />
              <path
                className="st7"
                d="M723.3,804.9l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.1V816c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C715.3,808.2,718.8,805.6,723.3,804.9z M731.8,809.5v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C729,815.7,731.8,814.2,731.8,809.5L731.8,809.5z"
              />
              <path className="st7" d="M745.5,820.3V781h7.2v39.3H745.5z" />
              <path className="st7" d="M759.8,820.3V781h7.2v39.3H759.8z" />
              <path
                className="st7"
                d="M507.3,839.9h4.8l-13,33.6h-4.6l-12.7-33.6h4.9l10.2,27.7L507.3,839.9z"
              />
              <path
                className="st7"
                d="M518.6,838.9c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2c0,0,0,0,0,0
		C515.4,840.3,516.8,838.9,518.6,838.9z M516.4,873.6v-22.8h4.4v22.8H516.4z"
              />
              <path
                className="st7"
                d="M531.1,862.1c0,5.2,3.3,8,7,8c3,0.2,5.6-1.8,6.4-4.7l3.9,1.7c-1.5,4.4-5.7,7.3-10.3,7.1
		c-6.6,0-11.5-5.2-11.5-12.1c0-7.1,5-12.1,11.5-12.1c6.1,0,9.2,3.8,10.2,7.3l-4,1.7c-0.6-2.9-3.2-5-6.1-4.8
		C534.4,854.2,531.1,856.8,531.1,862.1z"
              />
              <path
                className="st7"
                d="M559.6,850.7h4.9v4h-4.9v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.3c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.4,0-0.7v-3.7h4.1L559.6,850.7z"
              />
              <path
                className="st7"
                d="M591.9,862.1c0,7-4.8,12.1-11.7,12.1s-11.6-5.2-11.6-12.1s4.8-12.1,11.6-12.1S591.9,855.2,591.9,862.1z
		 M587.3,862.1c0-5.3-3.3-8.1-7.1-8.1s-7.1,2.8-7.1,8.1s3.3,8.2,7.1,8.2S587.3,867.4,587.3,862.1L587.3,862.1z"
              />
              <path
                className="st7"
                d="M610.2,855.3c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L610.2,855.3z"
              />
              <path
                className="st7"
                d="M617.2,838.9c1.8,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.1
		C614,840.4,615.4,838.9,617.2,838.9C617.1,838.9,617.2,838.9,617.2,838.9z M615,873.6v-22.8h4.4v22.8H615z"
              />
              <path
                className="st7"
                d="M632.5,860.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.7,0-7.6-3.2-7.6-6.8C625.6,863.4,628.5,861.1,632.5,860.5z M640.4,863.8v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C637.5,870.5,640.4,868.8,640.4,863.8L640.4,863.8z"
              />
              <path
                className="st7"
                d="M681.4,849c-0.5-3.5-3.6-6-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.5,8.1,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.3
		L681.4,849z"
              />
              <path
                className="st7"
                d="M707.9,882.6v-12.2c-1.2,2.3-3.7,3.9-7.1,3.9c-6.5,0-10.8-5.5-10.8-12.1c0-6.5,4-11.9,10.7-11.9
		c3.9,0,6.4,2,7.3,4.1v-3.5h4.3v31.8L707.9,882.6z M701.2,870.2c4,0,6.8-3.5,6.8-8.2s-2.7-8-6.8-8c-4.1,0-6.7,3.3-6.7,8
		S697.1,870.2,701.2,870.2z"
              />
              <path
                className="st7"
                d="M727.7,874.3c-5.3,0-8.5-4-8.5-9.2v-14.4h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9c3.7,0,5.4-2.4,5.4-5.8v-13.8h4.5
		v18.6c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.1-0.9-0.2-1.8-0.2-2.8C733.2,873.2,730.4,874.3,727.7,874.3z"
              />
              <path
                className="st7"
                d="M751.8,860.5l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.4-7.4c6.8,0,9.5,3.9,9.5,8.3v11.4c0,1.3,0.1,2.5,0.3,3.7h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C744.8,863.4,747.8,861.1,751.8,860.5z M759.7,863.8v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C756.8,870.5,759.7,868.8,759.7,863.8L759.7,863.8z"
              />
              <path
                className="st7"
                d="M783.8,855.3c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,2-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.5,6.8-4.4
		c0.5,0,1,0.1,1.5,0.1L783.8,855.3z"
              />
              <path
                className="st7"
                d="M808.4,867.1c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12,10.9-12c7,0,11,4.8,11,12
		c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L808.4,867.1z M803.9,859.8
		c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H803.9z"
              />
            </g>
            <g id="Library">
              <path className="st7" d="M329.6,1005.7v-38.5h7.5v31.3h17.1v7.2H329.6z" />
              <path
                className="st7"
                d="M362.4,965.7c2.5,0,4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4c-2.4,0-4.4-2-4.4-4.4
		C357.9,967.8,359.9,965.8,362.4,965.7C362.4,965.7,362.4,965.7,362.4,965.7z M358.8,1005.7V979h7.2v26.7L358.8,1005.7z"
              />
              <path
                className="st7"
                d="M373.1,1005.7v-39.3h7.1v15.5c1.2-1.9,4.1-3.6,8.1-3.6c7.8,0,12.3,6,12.3,13.9c0,8.1-5,14.1-12.6,14.1
		c-3.7,0-6.5-1.6-7.9-3.9v3.3L373.1,1005.7z M386.8,984.7c-3.6,0-6.7,2.7-6.7,7.5s3,7.6,6.7,7.6c3.6,0,6.6-2.7,6.6-7.6
		S390.5,984.7,386.8,984.7L386.8,984.7z"
              />
              <path
                className="st7"
                d="M421.9,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M432.5,990.3l6.6-1c1.5-0.2,2-1,2-1.9c0-1.9-1.5-3.5-4.5-3.5c-2.6-0.2-4.9,1.7-5.1,4.3l-6.4-1.4
		c0.4-4.2,4.3-8.8,11.4-8.8c8.5,0,11.6,4.8,11.6,10.2v13.1c0,1.4,0.1,2.8,0.3,4.2h-6.6c-0.2-1.1-0.3-2.1-0.3-3.2
		c-1.7,2.6-4.7,4.1-7.9,4c-5.7,0-9.2-3.9-9.2-8C424.6,993.6,428.1,991,432.5,990.3z M441.1,994.9v-1.2l-6,0.9
		c-1.8,0.3-3.3,1.3-3.3,3.4c0,1.6,1.1,3.1,3.5,3.1C438.3,1001.1,441.1,999.6,441.1,994.9L441.1,994.9z"
              />
              <path
                className="st7"
                d="M471.1,986.1c-0.7-0.1-1.4-0.2-2.2-0.2c-3.7,0-6.9,1.8-6.9,7.5v12.2h-7.2V979h7v4c1.6-3.5,5.3-4.2,7.6-4.2
		c0.6,0,1.1,0.1,1.7,0.1V986.1z"
              />
              <path
                className="st7"
                d="M476.9,1016.2l6.3-13.9L471.9,979h8.1l7.1,15.6l6.6-15.6h7.7l-16.8,37.2H476.9z"
              />
              <path
                className="st7"
                d="M222.4,1042.1c0-11.2,8.3-17.5,16.7-17.5c7.7,0,13.1,4.2,14.8,10.7l-4.3,1.5c-1.3-5.1-5-7.9-10.5-7.9
		c-6.1,0-12,4.5-12,13.2c0,8.8,5.8,13.3,12,13.3c5,0.2,9.5-3.2,10.7-8.1l4.1,1.5c-1.8,6.3-7.1,10.8-14.9,10.8
		C230.4,1059.6,222.4,1053.3,222.4,1042.1z"
              />
              <path
                className="st7"
                d="M279.5,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L279.5,1052.4z
		 M275,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H275z"
              />
              <path
                className="st7"
                d="M289.8,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L289.8,1058.9z"
              />
              <path
                className="st7"
                d="M318,1036.1h4.9v4H318v11.9c0,2.1,0.9,3.1,3.2,3.1c0.6,0,1.2-0.1,1.8-0.2v3.8c-1,0.3-2,0.4-3,0.4
		c-3.9,0-6.4-2.4-6.4-6.5v-12.5h-4.4v-4h1.2c1.8,0.2,3.3-1.1,3.5-2.8c0-0.2,0-0.5,0-0.7v-3.7h4.1L318,1036.1z"
              />
              <path
                className="st7"
                d="M348.7,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L348.7,1052.4z
		 M344.2,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H344.2z"
              />
              <path
                className="st7"
                d="M359,1058.9h-4.5v-22.8h4.4v3.3c1.4-2.5,4.1-4,7-3.9c5.5,0,8.2,3.9,8.2,9v14.5h-4.5v-13.7
		c0-3.2-1.3-5.7-5.3-5.7c-3.5,0-5.3,2.8-5.3,6.3L359,1058.9z"
              />
              <path
                className="st7"
                d="M386.7,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.3c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.7,0-7.6-3.2-7.6-6.8C379.8,1048.7,382.8,1046.5,386.7,1045.9z M394.7,1049.2v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C391.7,1055.9,394.7,1054.1,394.7,1049.2z"
              />
              <path
                className="st7"
                d="M418.7,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4c1.2-2.7,3.9-4.5,6.8-4.4
		c0.5,0,1,0,1.5,0.1L418.7,1040.6z"
              />
              <path
                className="st7"
                d="M424.3,1068.5l5.7-12l-9.8-20.3h5.1l7.1,15.7l6.8-15.7h4.8l-14.8,32.4L424.3,1068.5z"
              />
              <path
                className="st7"
                d="M477.9,1034.4c-0.5-3.5-3.6-5.9-7.1-5.7c-3.8,0-6.5,2.5-6.5,5.6c0,2.4,1.5,4.3,4.3,4.8l5,1.1
		c5.6,1.2,8.7,4.7,8.7,9.4c0,5.2-4.5,10-11.6,10c-8.1,0-12-5.2-12.6-10l4.5-1.4c0.2,4.2,3.8,7.4,8.1,7.2c0,0,0,0,0,0
		c4.6,0,6.9-2.4,6.9-5.4c0-2.4-1.7-4.5-5-5.2l-4.8-1c-4.8-1-8.2-4.2-8.2-9.2c0-5.3,4.8-10,11.1-10c7.6,0,10.7,4.7,11.4,8.4
		L477.9,1034.4z"
              />
              <path
                className="st7"
                d="M504.3,1068v-12.3c-1.2,2.3-3.7,3.9-7.1,3.9c-6.5,0-10.8-5.5-10.8-12.1c0-6.5,4-11.9,10.7-11.9
		c3.9,0,6.4,2,7.3,4.1v-3.5h4.3v31.8L504.3,1068z M497.7,1055.6c4,0,6.8-3.5,6.8-8.2c0-4.7-2.7-8-6.8-8s-6.7,3.3-6.7,8
		C491,1052.2,493.6,1055.6,497.7,1055.6z"
              />
              <path
                className="st7"
                d="M524.2,1059.6c-5.3,0-8.5-4-8.5-9.2v-14.4h4.5v13.7c0,3.1,1.4,5.9,5.2,5.9c3.6,0,5.4-2.4,5.4-5.8v-13.8h4.5
		v18.6c0,1.4,0.1,2.8,0.2,4.2h-4.3c-0.1-0.9-0.2-1.8-0.2-2.8C529.7,1058.6,526.8,1059.6,524.2,1059.6z"
              />
              <path
                className="st7"
                d="M548.3,1045.9l6.2-0.9c1.4-0.2,1.8-0.9,1.8-1.7c0-2.2-1.5-4.1-4.9-4.1c-2.7-0.2-5,1.8-5.2,4.5c0,0,0,0.1,0,0.1
		l-4.3-1c0.5-4.4,4.4-7.4,9.3-7.4c6.8,0,9.5,3.9,9.5,8.4v11.4c0,1.3,0.1,2.5,0.3,3.8h-4.4c-0.2-1-0.3-2.1-0.2-3.1
		c-1.6,2.5-4.4,3.9-7.4,3.8c-4.6,0-7.6-3.2-7.6-6.8C541.4,1048.7,544.3,1046.5,548.3,1045.9z M556.2,1049.2v-1l-7,1
		c-1.9,0.3-3.3,1.4-3.3,3.4c0.1,1.9,1.7,3.4,3.6,3.3c0,0,0.1,0,0.1,0C553.2,1055.9,556.2,1054.1,556.2,1049.2z"
              />
              <path
                className="st7"
                d="M580.2,1040.6c-0.6-0.1-1.3-0.1-1.9-0.1c-3.7,0-6.3,1.9-6.3,7v11.4h-4.5v-22.8h4.4v4c1.1-2.7,3.8-4.4,6.8-4.4
		c0.5,0,1,0,1.5,0.1L580.2,1040.6z"
              />
              <path
                className="st7"
                d="M604.9,1052.4c-1.4,4.4-5.6,7.4-10.2,7.2c-6.1,0-11.5-4.5-11.5-12.2c0-7.2,5.2-12.1,10.9-12.1
		c7,0,11,4.8,11,12c0,0.5,0,1-0.1,1.4h-17.2c-0.1,3.7,2.9,6.8,6.6,6.9c0.1,0,0.2,0,0.3,0c3,0.2,5.6-1.7,6.4-4.6L604.9,1052.4z
		 M600.4,1045.2c-0.1-3.3-2.2-5.8-6.3-5.8c-3.3,0-6,2.5-6.2,5.8H600.4z"
              />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 432 843">
            <style>
              {
                '.st0{clip-path:url(#SVGID_00000031925839151982136660000012007475375414382978_);}.st1{fill:#0075C9;}.st2{fill:#FFFFFF;}.st3{fill:#3D1152;}.st4{fill:#DED7D6;}.st5{fill:#221E20;}.st6{fill:#EEEAEA;}.st7{fill:#2D2A26;}.st8{fill:#1D1D1C;}'
              }
            </style>
            <symbol id="Interchange" viewBox="-28.4 -28.4 56.7 56.7">
              <g>
                <defs>
                  <rect id="SVGID_1_" x="-28.4" y="-28.4" width="56.7" height="56.7" />
                </defs>
                <clipPath id="SVGID_00000016061425677648336610000001688115040845394349_">
                  <use xlinkHref="#SVGID_1_" style={{ overFlow: 'visible' }} />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000016061425677648336610000001688115040845394349_)',
                  }}
                >
                  <path
                    className="st1"
                    d="M0-28.4c15.7,0,28.4,12.7,28.4,28.4S15.7,28.4,0,28.4S-28.4,15.7-28.4,0c0,0,0,0,0,0
				C-28.3-15.7-15.7-28.3,0-28.4"
                  />
                  <path
                    className="st2"
                    d="M0-19.6c10.8,0,19.6,8.8,19.6,19.6S10.8,19.6,0,19.6S-19.6,10.8-19.6,0C-19.6-10.8-10.8-19.6,0-19.6 M0,10.8
				C6,10.8,10.8,6,10.8,0C10.8-6,6-10.8,0-10.8S-10.8-6-10.8,0c0,0,0,0,0,0C-10.8,6-6,10.8,0,10.8C0,10.8,0,10.8,0,10.8"
                  />
                </g>
              </g>
            </symbol>
            <symbol id="Park_and_ride" viewBox="-18.4 -18.4 36.9 36.9">
              <path
                className="st3"
                d="M15.2-18.4h-30.4c-1.8,0-3.2,1.4-3.2,3.2v30.4c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h30.4c1.8,0,3.2-1.4,3.2-3.2
		c0,0,0,0,0,0v-30.4C18.4-17,17-18.4,15.2-18.4C15.2-18.4,15.2-18.4,15.2-18.4z"
              />
              <path
                className="st2"
                d="M-12.4,1.4v4.3h-2.3V-5.7h4.3c1.9-0.1,3.6,1.3,3.8,3.2c0,0.1,0,0.2,0,0.3c0.1,1.9-1.5,3.5-3.4,3.6
		c-0.1,0-0.2,0-0.4,0H-12.4z M-10.7-0.5C-9.7-0.4-8.9-1-8.8-1.9c0.1-0.9-0.6-1.7-1.5-1.8c-0.1,0-0.2,0-0.4,0h-1.8v3.3H-10.7z"
              />
              <path
                className="st2"
                d="M1.3,4.5C0.5,5.4-0.6,5.9-1.8,6c-1.8,0.2-3.3-1.1-3.5-2.9c0-0.1,0-0.1,0-0.2c0-1.4,0.8-2.2,1.9-3.1l0.1,0
		l-0.2-0.2C-4.1-1.1-4.6-2-4.7-3c0-1.7,1.3-3,3-3c0.1,0,0.1,0,0.2,0c1.6-0.1,3,1.1,3.2,2.7c0,0.1,0,0.1,0,0.2C1.6-2,1-1,0.1-0.4
		l-0.4,0.3l1.7,1.8l2.9-3v2.7L2.7,3.1l2.6,2.7H2.5L1.3,4.5z M0,3.1l-2-2.1l-0.2,0.2c-0.5,0.3-0.9,0.9-0.9,1.5c0,0.7,0.6,1.3,1.4,1.3
		c0,0,0,0,0,0C-1.1,4.1-0.4,3.7,0,3.1z M-2-1.8l0.3,0.3l0.6-0.4c0.4-0.3,0.7-0.7,0.7-1.2c0-0.6-0.5-1.1-1.1-1.1c0,0,0,0,0,0
		c-0.6,0-1.1,0.5-1.1,1.1c0,0,0,0.1,0,0.1C-2.6-2.6-2.3-2.1-2-1.8z"
              />
              <path
                className="st2"
                d="M10,1.3H8.8v4.4H6.6V-5.7h4.5c1.9-0.1,3.5,1.3,3.6,3.2c0,0.1,0,0.2,0,0.3c0,1.5-1,2.9-2.4,3.2l2.4,4.7h-2.5
		L10,1.3z M10.6-0.6c0.9,0.1,1.7-0.5,1.8-1.4c0.1-0.9-0.5-1.7-1.4-1.8c-0.1,0-0.2,0-0.4,0H8.8v3.2H10.6z"
              />
            </symbol>
            <symbol id="Stop" viewBox="-8.8 -8.8 17.5 17.5">
              <path
                className="st2"
                d="M-8.8,0c0,4.8,3.9,8.8,8.8,8.8S8.8,4.8,8.8,0S4.8-8.8,0-8.8S-8.8-4.8-8.8,0C-8.8,0-8.8,0-8.8,0"
              />
            </symbol>
            <g id="Zone_4" data-name={zone4} className={zone4 ? s.zoneSelected : ''}>
              <rect y="3361.6" className="st4" width="1216.1" height="691.9" />
              <path
                className="st5"
                d="M985.6,3732.8l59.8-81.6h35v87h23.4v24.2h-23.4v30.6H1053v-30.6h-67.4L985.6,3732.8z M1053,3679.4l-42.8,58.8
		h42.8L1053,3679.4z"
              />
            </g>
            <g id="Zone_3" data-name={zone3} className={zone3 ? s.zoneSelected : ''}>
              <rect y="2473.5" className="st6" width="1216.1" height="879.9" />
              <path
                className="st5"
                d="M1019.4,2915.4l38.4-34h-63.6v-24h99v22.8l-37.8,32.6c21.4,0.6,41.8,16.4,41.8,43c0,24.4-19.4,46.4-53.4,46.4
		c-32.8,0-52.4-21.2-54.2-44.8l26.8-5.4c0.8,15.6,12,26.4,27.2,26.4c16.4,0,25.6-10.4,25.6-22.8c0-16.2-12.6-23-24.8-23
		c-4.3,0.1-8.5,1-12.4,2.8L1019.4,2915.4z"
              />
            </g>
            <g id="Zone_2" data-name={zone2} className={zone2 ? s.zoneSelected : ''}>
              <rect y="1078.2" className="st4" width="1216.1" height="1387.1" />
              <path
                className="st5"
                d="M994.5,1768c-0.5-2.9-0.8-5.8-0.8-8.8c0-24.6,18.4-46.8,50.8-46.8c31.4,0,50.2,20.6,50.2,44.8
		c0,18.6-10.2,33.6-27.2,44l-27.6,17c-6,4-11.4,8.2-13.4,14.8h69v24.2h-103c0.2-24.6,8.6-44,33.6-59.2l23.2-14.4
		c12.2-7.6,17.4-15.6,17.4-25.8c0-11-7.4-21-22.8-21c-16,0-23.6,11-23.6,25c0.1,2.6,0.3,5.1,0.8,7.6L994.5,1768z"
              />
            </g>
            <g id="Zone_1" data-name={zone1} className={zone1 ? s.zoneSelected : ''}>
              <rect className="st6" width="1216.1" height="1070" />
              <path
                className="st5"
                d="M1043.3,598.9v-96.4h-34v-18.8c20.4-0.6,34.6-11.8,37.4-26.6h24v141.8H1043.3z"
              />
            </g>
            <g id="Tram_line">
              <rect x="501.5" y="182.5" className="st1" width="13.1" height="3639.5" />
              <path
                className="st1"
                d="M514.4,3528.9c0,19.1-15.5,38.3-34.6,38.3h-25.6c-12,0-21.7,9.7-21.7,21.7v162.8h-12.9v-162.8
		c0-19.1,15.5-34.6,34.6-34.6h25.6c12,0,21.7-9.7,21.7-21.7L514.4,3528.9z"
              />
            </g>
            <g id="Blobs">
              <g>
                <defs>
                  <rect
                    id="SVGID_00000148626966244057870620000013296632899068455835_"
                    x="503.4"
                    y="561.8"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000122688162764904581070000016064741425976175249_">
                  <use
                    xlinkHref="#SVGID_00000148626966244057870620000013296632899068455835_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000122688162764904581070000016064741425976175249_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 566.4203)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000156554561510713273600000013230404381276256939_"
                    x="503.4"
                    y="304.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000098899852444273951940000012532085811422465184_">
                  <use
                    xlinkHref="#SVGID_00000156554561510713273600000013230404381276256939_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000098899852444273951940000012532085811422465184_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 309.1103)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000053514599172200953670000001476116842009597626_"
                    x="503.4"
                    y="942.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000056420378337969859060000011421854211857659561_">
                  <use
                    xlinkHref="#SVGID_00000053514599172200953670000001476116842009597626_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000056420378337969859060000011421854211857659561_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 947.1503)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000164472947130895488610000013093018408997226676_"
                    x="503.4"
                    y="1449.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000112627087129819522680000001282748692646603666_">
                  <use
                    xlinkHref="#SVGID_00000164472947130895488610000013093018408997226676_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000112627087129819522680000001282748692646603666_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1454.5002)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000143590283721082160000000011509019084469351845_"
                    x="503.4"
                    y="1196.1"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000141445776561609262640000005984037498982542501_">
                  <use
                    xlinkHref="#SVGID_00000143590283721082160000000011509019084469351845_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000141445776561609262640000005984037498982542501_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1200.7603)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000012430297969386636320000005704941822435752619_"
                    x="503.4"
                    y="1703.6"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000049215374109307342420000018100369111832329617_">
                  <use
                    xlinkHref="#SVGID_00000012430297969386636320000005704941822435752619_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>

                <g
                  transform="matrix(1 0 0 1 0 -1.220703e-04)"
                  style={{
                    clipPath: 'url(#SVGID_00000049215374109307342420000018100369111832329617_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1708.2303)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000032617895580282296880000014332274290627230101_"
                    x="503.4"
                    y="1830.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000178191161719641810110000016140696004188647832_">
                  <use
                    xlinkHref="#SVGID_00000032617895580282296880000014332274290627230101_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000178191161719641810110000016140696004188647832_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1835.1002)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000124864141418363770760000011864356221684817842_"
                    x="503.4"
                    y="2084.2"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000086670162686801288140000010585920961142482089_">
                  <use
                    xlinkHref="#SVGID_00000124864141418363770760000011864356221684817842_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000086670162686801288140000010585920961142482089_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2088.8403)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000137846601814853465540000016005773005119862450_"
                    x="503.4"
                    y="2337.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000092429945405765948970000001816088388567810206_">
                  <use
                    xlinkHref="#SVGID_00000137846601814853465540000016005773005119862450_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000092429945405765948970000001816088388567810206_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2342.5803)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000106111943763881706320000000617974897285245332_"
                    x="503.4"
                    y="2972.3"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000039824672921503759980000001366560626181070489_">
                  <use
                    xlinkHref="#SVGID_00000106111943763881706320000000617974897285245332_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000039824672921503759980000001366560626181070489_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2976.9004)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000090278515324989458580000004913692831263291024_"
                    x="503.4"
                    y="3226"
                    transform="matrix(0.9998 -1.886457e-02 1.886457e-02 0.9998 -60.8547 10.1588)"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000023974763535154887710000001342732852430988982_">
                  <use
                    xlinkHref="#SVGID_00000090278515324989458580000004913692831263291024_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>

                <g
                  transform="matrix(1 -1.862645e-09 1.862645e-09 1 -3.051758e-05 -2.441406e-04)"
                  style={{
                    clipPath: 'url(#SVGID_00000023974763535154887710000001342732852430988982_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(1.000000e-02 0.53 -0.53 1.000000e-02 508.0348 3230.6677)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000151531419729239276330000016767412663828006321_"
                    x="503.4"
                    y="3479.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000112629348394325695590000002442479012443707025_">
                  <use
                    xlinkHref="#SVGID_00000151531419729239276330000016767412663828006321_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000112629348394325695590000002442479012443707025_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3484.3704)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000059298076081184402990000004522117727401236666_"
                    x="493"
                    y="3807.3"
                    width="30.1"
                    height="30"
                  />
                </defs>
                <clipPath id="SVGID_00000070827621274886771120000008151592293568270525_">
                  <use
                    xlinkHref="#SVGID_00000059298076081184402990000004522117727401236666_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000070827621274886771120000008151592293568270525_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.9845 3822.283)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000092417089248142422000000002548337316074859914_"
                    x="410.9"
                    y="3739.6"
                    width="30.1"
                    height="30"
                  />
                </defs>
                <clipPath id="SVGID_00000102518938300548310940000008213758942492862911_">
                  <use
                    xlinkHref="#SVGID_00000092417089248142422000000002548337316074859914_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>

                <g
                  transform="matrix(1 0 0 1 -3.051758e-05 0)"
                  style={{
                    clipPath: 'url(#SVGID_00000102518938300548310940000008213758942492862911_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 425.9545 3754.6028)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000031900785472285871750000002159878300753670571_"
                    x="503.4"
                    y="815.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000062181978112813500820000016069772983795458239_">
                  <use
                    xlinkHref="#SVGID_00000031900785472285871750000002159878300753670571_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000062181978112813500820000016069772983795458239_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 820.1603)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000177480171449155999270000004890700820815873714_"
                    x="422.3"
                    y="3617.6"
                    width="7.5"
                    height="7.5"
                  />
                </defs>
                <clipPath id="SVGID_00000071523510464348094520000016194035742479235474_">
                  <use
                    xlinkHref="#SVGID_00000177480171449155999270000004890700820815873714_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000071523510464348094520000016194035742479235474_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(2.632991e-17 0.43 -0.43 2.632991e-17 426.0832 3621.4143)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000156549742938148503320000015596564527870925714_"
                    x="492.6"
                    y="165.8"
                    width="30.1"
                    height="30"
                  />
                </defs>
                <clipPath id="SVGID_00000094602755007649058720000018360771849557049237_">
                  <use
                    xlinkHref="#SVGID_00000156549742938148503320000015596564527870925714_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000094602755007649058720000018360771849557049237_)',
                  }}
                >
                  <use
                    xlinkHref="#Interchange"
                    width="56.7"
                    height="56.7"
                    x="-28.4"
                    y="-28.4"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 507.6345 180.8383)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000107552809479732079430000006457160146856215937_"
                    x="503.4"
                    y="435.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000103952515638815684500000010182714175890151841_">
                  <use
                    xlinkHref="#SVGID_00000107552809479732079430000006457160146856215937_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000103952515638815684500000010182714175890151841_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 440.3603)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000117667705570477028590000008483351068482966205_"
                    x="503.4"
                    y="688.7"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000178918625180427202950000003603176833951165593_">
                  <use
                    xlinkHref="#SVGID_00000117667705570477028590000008483351068482966205_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000178918625180427202950000003603176833951165593_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 693.3503)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000032640917022615504650000000297353272648859024_"
                    x="503.4"
                    y="1069.2"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000080911526568546260810000003945770533969183911_">
                  <use
                    xlinkHref="#SVGID_00000032640917022615504650000000297353272648859024_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000080911526568546260810000003945770533969183911_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1073.8503)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000085970860793073983840000017465075672743148936_"
                    x="503.4"
                    y="1322.9"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000167372743814837148780000004471669049673171870_">
                  <use
                    xlinkHref="#SVGID_00000085970860793073983840000017465075672743148936_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000167372743814837148780000004471669049673171870_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1327.5503)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000158022614562476491760000004080312827546653849_"
                    x="503.4"
                    y="1576.6"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000133506878443550574160000013913565815083842182_">
                  <use
                    xlinkHref="#SVGID_00000158022614562476491760000004080312827546653849_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000133506878443550574160000013913565815083842182_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1581.2903)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000021083762959017378550000003045397925398165384_"
                    x="503.4"
                    y="1957.4"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000037687566731750728770000014427983393549361569_">
                  <use
                    xlinkHref="#SVGID_00000021083762959017378550000003045397925398165384_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000037687566731750728770000014427983393549361569_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 1962.0004)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000178892281832534454170000012548236765510264226_"
                    x="503.4"
                    y="2211.1"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000100363819427995136920000003150014429563342261_">
                  <use
                    xlinkHref="#SVGID_00000178892281832534454170000012548236765510264226_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000100363819427995136920000003150014429563342261_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2215.7004)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000099630125350078413920000005628930709976987322_"
                    x="503.4"
                    y="2464.8"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000024714152114143440020000006676296226676040119_">
                  <use
                    xlinkHref="#SVGID_00000099630125350078413920000005628930709976987322_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000024714152114143440020000006676296226676040119_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2469.4404)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000070097112649901295190000015540763608217740954_"
                    x="503.4"
                    y="2591.6"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000080924170332817384260000008631026520746948748_">
                  <use
                    xlinkHref="#SVGID_00000070097112649901295190000015540763608217740954_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000080924170332817384260000008631026520746948748_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2596.2705)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000165211831372155166260000004517600211119663770_"
                    x="503.4"
                    y="2718.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000152967385609824484420000011827966468813115564_">
                  <use
                    xlinkHref="#SVGID_00000165211831372155166260000004517600211119663770_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000152967385609824484420000011827966468813115564_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2723.1204)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000121277561539433942230000012886146038412843418_"
                    x="503.4"
                    y="2845.5"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000011732776284410075230000004658909170318439609_">
                  <use
                    xlinkHref="#SVGID_00000121277561539433942230000012886146038412843418_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000011732776284410075230000004658909170318439609_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 2850.1204)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000114769000676173548040000014378449576373910715_"
                    x="503.4"
                    y="3099.2"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000041987912039611086680000016719341052187072908_">
                  <use
                    xlinkHref="#SVGID_00000114769000676173548040000014378449576373910715_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000041987912039611086680000016719341052187072908_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(3.245314e-17 0.53 -0.53 3.245314e-17 508.0172 3103.8403)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
              <g>
                <defs>
                  <rect
                    id="SVGID_00000061468903859285155110000001781987025849658046_"
                    x="503.4"
                    y="3352.9"
                    transform="matrix(0.9998 -1.886457e-02 1.886457e-02 0.9998 -63.2479 10.1813)"
                    width="9.3"
                    height="9.3"
                  />
                </defs>
                <clipPath id="SVGID_00000000187313998838260490000006962198713915297685_">
                  <use
                    xlinkHref="#SVGID_00000061468903859285155110000001781987025849658046_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>

                <g
                  transform="matrix(1 -1.862645e-09 1.862645e-09 1 -3.051758e-05 -2.441406e-04)"
                  style={{
                    clipPath: 'url(#SVGID_00000000187313998838260490000006962198713915297685_)',
                  }}
                >
                  <use
                    xlinkHref="#Stop"
                    width="17.5"
                    height="17.5"
                    x="-8.8"
                    y="-8.8"
                    transform="matrix(1.000000e-02 0.53 -0.53 1.000000e-02 508.0348 3357.5278)"
                    style={{ overflow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Wolverhampton_Station">
              <path
                className="st7"
                d="M117.9,3714.7h5.6l-7.8,28.4H110l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L117.9,3714.7z"
              />
              <path
                className="st7"
                d="M145.6,3733.2c0,5.7-4.7,10.3-10.4,10.2c-5.7,0-10.3-4.7-10.2-10.4c0-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C145.6,3732.8,145.6,3733,145.6,3733.2z M140.2,3733.2c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S140.2,3736.9,140.2,3733.2z"
              />
              <path className="st7" d="M149.3,3743v-29h5.3v29H149.3z" />
              <path
                className="st7"
                d="M170.7,3743h-5.3l-8-19.7h5.8l4.9,13.2l4.7-13.2h5.6L170.7,3743z"
              />
              <path
                className="st7"
                d="M198.8,3737.4c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L198.8,3737.4z M193.8,3730.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H193.8z"
              />
              <path
                className="st7"
                d="M214.8,3728.6c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V3728.6z"
              />
              <path
                className="st7"
                d="M223.2,3743h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L223.2,3743z"
              />
              <path
                className="st7"
                d="M245.5,3731.7l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C239.6,3734.1,242.2,3732.2,245.5,3731.7z M251.8,3735.1v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C249.7,3739.6,251.8,3738.5,251.8,3735.1L251.8,3735.1z"
              />
              <path
                className="st7"
                d="M261.9,3743v-19.7h5.1v2.4c1.3-1.9,3.5-3,5.8-3c2.4-0.2,4.7,1.1,5.8,3.3c1.3-2.2,3.7-3.4,6.2-3.3
		c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2v-11.7c0-2.1-1-3.7-3.5-3.7c-2,0-3.6,1.6-3.6,3.6c0,0.1,0,0.2,0,0.3v11.5h-5.3v-11.7
		c0-2.1-1.1-3.7-3.5-3.7c-2-0.1-3.6,1.5-3.7,3.5c0,0.1,0,0.2,0,0.4v11.5L261.9,3743z"
              />
              <path
                className="st7"
                d="M296.9,3750.6v-27.3h5.1v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5L296.9,3750.6z M307,3727.6c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6
		S309.7,3727.7,307,3727.6L307,3727.6z"
              />
              <path
                className="st7"
                d="M327.4,3723.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.6c0-0.2,0-0.3,0-0.5v-2.8h4.8L327.4,3723.3z"
              />
              <path
                className="st7"
                d="M354.4,3733.2c0,5.7-4.7,10.3-10.4,10.2c-5.7,0-10.3-4.7-10.2-10.4c0-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C354.4,3732.8,354.4,3733,354.4,3733.2z M349.1,3733.2c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S349.1,3736.9,349.1,3733.2z"
              />
              <path
                className="st7"
                d="M363.5,3743h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L363.5,3743z"
              />
              <path
                className="st7"
                d="M265.6,3766.9c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L265.6,3766.9z"
              />
              <path
                className="st7"
                d="M281.4,3767.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.6c0-0.2,0-0.3,0-0.5v-2.8h4.8L281.4,3767.3z"
              />
              <path
                className="st7"
                d="M293.9,3775.7l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C288,3778.1,290.6,3776.2,293.9,3775.7z M300.2,3779.1v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C298.2,3783.6,300.2,3782.5,300.2,3779.1z"
              />
              <path
                className="st7"
                d="M316.9,3767.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.6c0-0.2,0-0.3,0-0.5v-2.8h4.8L316.9,3767.3z"
              />
              <path
                className="st7"
                d="M327.4,3757.6c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C324.1,3759.1,325.6,3757.6,327.4,3757.6C327.4,3757.6,327.4,3757.6,327.4,3757.6z M324.8,3787v-19.7h5.3v19.7H324.8z"
              />
              <path
                className="st7"
                d="M354.4,3777.2c0,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C354.4,3776.8,354.4,3777,354.4,3777.2z M349.1,3777.2c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S349.1,3780.9,349.1,3777.2z"
              />
              <path
                className="st7"
                d="M363.5,3787h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L363.5,3787z"
              />
            </g>
            <g id="Wolverhampton_St._George_s">
              <path
                className="st7"
                d="M395.3,3866.8h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L395.3,3866.8z"
              />
              <path
                className="st7"
                d="M422.9,3885.4c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C422.9,3885,422.9,3885.2,422.9,3885.4z M417.6,3885.4c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S417.6,3889.1,417.6,3885.4z"
              />
              <path className="st7" d="M426.6,3895.2v-29h5.4v29H426.6z" />
              <path
                className="st7"
                d="M448.1,3895.2h-5.3l-8-19.7h5.8l4.9,13.2l4.7-13.2h5.6L448.1,3895.2z"
              />
              <path
                className="st7"
                d="M476.1,3889.6c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L476.1,3889.6z M471.1,3883.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H471.1z"
              />
              <path
                className="st7"
                d="M492.1,3880.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V3880.8z"
              />
              <path
                className="st7"
                d="M500.6,3895.2h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L500.6,3895.2z"
              />
              <path
                className="st7"
                d="M522.8,3883.9l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C517,3886.3,519.5,3884.4,522.8,3883.9z M529.2,3887.2v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C527.1,3891.8,529.2,3890.8,529.2,3887.2L529.2,3887.2z"
              />
              <path
                className="st7"
                d="M539.2,3895.2v-19.7h5.1v2.4c1.3-1.9,3.5-3,5.8-3c2.4-0.2,4.7,1.1,5.8,3.3c1.3-2.2,3.7-3.4,6.2-3.3
		c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2v-11.7c0-2.1-1-3.7-3.5-3.7c-2,0-3.6,1.6-3.6,3.6c0,0.1,0,0.2,0,0.3v11.5h-5.3v-11.7
		c0-2.1-1.1-3.7-3.5-3.7c-2-0.1-3.6,1.5-3.7,3.5c0,0.1,0,0.2,0,0.4v11.5L539.2,3895.2z"
              />
              <path
                className="st7"
                d="M574.2,3902.8v-27.3h5.2v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5H574.2z M584.3,3879.8c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6
		S587.1,3879.8,584.3,3879.8L584.3,3879.8z"
              />
              <path
                className="st7"
                d="M604.8,3875.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.3-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L604.8,3875.5z"
              />
              <path
                className="st7"
                d="M631.8,3885.4c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C631.8,3885,631.8,3885.2,631.8,3885.4z M626.5,3885.4c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S626.5,3889.1,626.5,3885.4z"
              />
              <path
                className="st7"
                d="M640.8,3895.2h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L640.8,3895.2z"
              />
              <path
                className="st7"
                d="M414.4,3915.1c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L414.4,3915.1z"
              />
              <path
                className="st7"
                d="M430.1,3915.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.3-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L430.1,3915.5z"
              />
              <path
                className="st7"
                d="M441.3,3928.2c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6c-2,0-3.6-1.6-3.6-3.6
		C437.7,3929.8,439.3,3928.2,441.3,3928.2z"
              />
              <path
                className="st7"
                d="M480.9,3935.2l-0.4-3.2c-1.3,1.9-4.1,3.8-8.4,3.8c-7.6,0-14.2-5.6-14.2-14.8s6.8-14.8,14.5-14.8
		c7.4,0,11.6,4.4,13,8.7l-5.3,1.9c-1-3.4-4.2-5.6-7.7-5.4c-4.3,0-8.9,2.9-8.9,9.6c0,6.4,4.2,9.7,9,9.7c5.2,0,7.3-3.5,7.6-5.5h-9
		v-4.8h14.2v14.8L480.9,3935.2z"
              />
              <path
                className="st7"
                d="M507.7,3929.6c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L507.7,3929.6z M502.7,3923.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H502.7z"
              />
              <path
                className="st7"
                d="M530.9,3925.4c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C530.9,3925,530.9,3925.2,530.9,3925.4z M525.6,3925.4c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S525.6,3929.1,525.6,3925.4z"
              />
              <path
                className="st7"
                d="M546.6,3920.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L546.6,3920.8z"
              />
              <path
                className="st7"
                d="M553.2,3935c0.4,2.2,2.3,3.8,4.6,3.7c3.4,0,5.2-1.7,5.2-5.5v-1.5c-0.8,1.3-2.6,2.5-5.5,2.5
		c-5.2,0-9.2-4-9.2-9.6c0-5.2,3.8-9.6,9.2-9.6c3.1,0,4.9,1.4,5.6,2.7v-2.3h5.1v17.6c0,5.4-2.9,10.3-10.3,10.3c-5.4,0-9-3.4-9.6-7.1
		L553.2,3935z M563.1,3924.8c0.2-2.6-1.8-4.8-4.4-5c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6c0,3.1,2,5,4.7,5
		S563.1,3927.8,563.1,3924.8L563.1,3924.8z"
              />
              <path
                className="st7"
                d="M590.8,3929.6c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L590.8,3929.6z M585.8,3923.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H585.8z"
              />
              <path
                className="st7"
                d="M596.5,3906.6c2,0,3.5,1.7,3.5,3.7c0,0.1,0,0.1,0,0.2c0,5.4-3.7,7.3-6.2,7.6v-2.4c1.7-0.3,3.1-1.7,3.3-3.4
		c-0.3,0.1-0.5,0.2-0.8,0.2c-1.5,0.1-2.8-1-2.9-2.5c0-0.1,0-0.2,0-0.3c0-1.7,1.4-3,3.1-2.9C596.4,3906.6,596.5,3906.6,596.5,3906.6z
		"
              />
              <path
                className="st7"
                d="M606.6,3928.8c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L606.6,3928.8z"
              />
            </g>
            <g id="Piper_s_Row">
              <path
                className="st7"
                d="M175.4,3619.8v10.7h-5.5v-28.4h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H175.4z M179.8,3615
		c2.8,0,4.4-1.6,4.4-4s-1.7-4.1-4.4-4.1h-4.4v8.1L179.8,3615z"
              />
              <path
                className="st7"
                d="M195.9,3601c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C192.6,3602.6,194.1,3601.1,195.9,3601C195.9,3601,195.9,3601,195.9,3601z M193.3,3630.5v-19.7h5.3v19.7L193.3,3630.5z"
              />
              <path
                className="st7"
                d="M203.8,3638.1v-27.3h5.2v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5L203.8,3638.1z M214,3615.1c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6
		S216.7,3615.1,214,3615.1L214,3615.1z"
              />
              <path
                className="st7"
                d="M245.4,3624.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L245.4,3624.8z M240.4,3618.4
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H240.4z"
              />
              <path
                className="st7"
                d="M261.5,3616.1c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v3c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L261.5,3616.1z"
              />
              <path
                className="st7"
                d="M266.3,3601.8c2,0,3.5,1.7,3.5,3.7c0,0.1,0,0.1,0,0.2c0,5.4-3.7,7.3-6.2,7.6v-2.4c1.7-0.3,3.1-1.7,3.3-3.4
		c-0.3,0.1-0.5,0.2-0.8,0.2c-1.5,0.1-2.8-1-2.9-2.5c0-0.1,0-0.2,0-0.3c0-1.7,1.4-3,3.1-2.9C266.2,3601.8,266.3,3601.8,266.3,3601.8z
		"
              />
              <path
                className="st7"
                d="M276.4,3624c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L276.4,3624z"
              />
              <path
                className="st7"
                d="M309.7,3619.6h-2.9v10.9h-5.6v-28.4h11.1c5.5,0,9,3.8,9,8.7c0.1,3.7-2.4,7.1-6,8l6.1,11.6h-6.2L309.7,3619.6z
		 M311.3,3614.8c2.8,0,4.4-1.6,4.4-3.9s-1.6-4-4.4-4h-4.5v7.9L311.3,3614.8z"
              />
              <path
                className="st7"
                d="M344.6,3620.6c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C344.6,3620.3,344.6,3620.5,344.6,3620.6z M339.2,3620.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S339.2,3624.4,339.2,3620.6z"
              />
              <path
                className="st7"
                d="M365,3610.8l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.2-19.7h5.6l3.6,12.6l4.3-12.6
		H365z"
              />
            </g>
            <g id="The_Royal">
              <path className="st7" d="M571.9,3475.9v23.1h-5.6v-23.1h-9v-5.2h23.5v5.2H571.9z" />
              <path
                className="st7"
                d="M589.2,3499h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V3499z"
              />
              <path
                className="st7"
                d="M624.4,3493.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L624.4,3493.3z M619.4,3486.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H619.4z"
              />
              <path
                className="st7"
                d="M646.6,3488.1h-2.9v10.9h-5.6v-28.4h11.1c5.5,0,9,3.8,9,8.7c0.1,3.7-2.4,7.1-6,8l6.1,11.6h-6.2L646.6,3488.1z
		 M648.2,3483.3c2.8,0,4.4-1.6,4.4-3.9s-1.6-4-4.4-4h-4.5v7.9L648.2,3483.3z"
              />
              <path
                className="st7"
                d="M681.5,3489.1c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C681.5,3488.8,681.5,3489,681.5,3489.1z M676.1,3489.1c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S676.1,3492.9,676.1,3489.1z"
              />
              <path
                className="st7"
                d="M686.3,3506.8l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H686.3z"
              />
              <path
                className="st7"
                d="M711.8,3487.7l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C705.9,3490.1,708.5,3488.1,711.8,3487.7z M718.1,3491v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C716,3495.6,718.1,3494.5,718.1,3491z"
              />
              <path className="st7" d="M728.2,3499v-29h5.3v29H728.2z" />
            </g>
            <g id="Priestfield">
              <path
                className="st2"
                d="M263.9,3320.7h205.7c5.2,0,9.3,4.2,9.3,9.3v53.8c0,5.2-4.2,9.3-9.3,9.3H263.9c-5.2,0-9.3-4.2-9.3-9.3v-53.8
		C254.6,3324.9,258.8,3320.7,263.9,3320.7z"
              />
              <path
                className="st8"
                d="M469.7,3321.7c4.6,0,8.4,3.7,8.4,8.4l0,0v53.8c0,4.6-3.7,8.4-8.3,8.4c0,0,0,0,0,0H263.9
		c-4.6,0-8.4-3.7-8.4-8.4l0,0v-53.8c0-4.6,3.7-8.4,8.3-8.4c0,0,0,0,0,0H469.7 M469.7,3319.7H263.9c-5.7,0-10.3,4.6-10.3,10.3v53.8
		c0,5.7,4.6,10.3,10.3,10.3h205.8c5.7,0,10.3-4.6,10.3-10.3v-53.8C480,3324.4,475.3,3319.8,469.7,3319.7L469.7,3319.7z"
              />
              <path
                className="st7"
                d="M282.5,3360.2v10.7H277v-28.3h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8L282.5,3360.2z M286.9,3355.4
		c2.8,0,4.4-1.6,4.4-4s-1.7-4.1-4.4-4.1h-4.4v8.1L286.9,3355.4z"
              />
              <path
                className="st7"
                d="M312.3,3356.4c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V3356.4z"
              />
              <path
                className="st7"
                d="M318.1,3341.4c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C314.8,3342.9,316.3,3341.4,318.1,3341.4C318.1,3341.4,318.1,3341.4,318.1,3341.4z M315.5,3370.8v-19.7h5.3v19.7H315.5z"
              />
              <path
                className="st7"
                d="M343.7,3365.2c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L343.7,3365.2z M338.7,3358.8
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H338.7z"
              />
              <path
                className="st7"
                d="M350.5,3364.4c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L350.5,3364.4z"
              />
              <path
                className="st7"
                d="M372.2,3351.2h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L372.2,3351.2z"
              />
              <path
                className="st7"
                d="M386.4,3355.7v15.1h-5.4v-15.1h-3.3v-4.6h3.3v-2.2c0-4.4,2.8-7.3,7.2-7.3c0.9,0,1.8,0.1,2.6,0.4v4.5
		c-0.5-0.1-1.1-0.2-1.7-0.2c-1.4-0.1-2.6,0.9-2.8,2.3c0,0.2,0,0.3,0,0.5v2.2h13.2v19.7h-5.3v-15.1L386.4,3355.7z M396.9,3341.4
		c1.8,0,3.3,1.5,3.3,3.3v0c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.3C393.6,3342.9,395.1,3341.4,396.9,3341.4L396.9,3341.4z"
              />
              <path
                className="st7"
                d="M422.5,3365.2c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L422.5,3365.2z M417.5,3358.8
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H417.5z"
              />
              <path className="st7" d="M426.5,3370.8v-29h5.3v29H426.5z" />
              <path
                className="st7"
                d="M455.7,3367.3c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V3367.3z M445.7,3366.6c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S442.9,3366.6,445.7,3366.6z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000003083944105809245550000017325258202583845793_"
                    x="443.2"
                    y="3268.4"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000018220158024512552890000003580095565999738516_">
                  <use
                    xlinkHref="#SVGID_00000003083944105809245550000017325258202583845793_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000018220158024512552890000003580095565999738516_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="36.9"
                    height="36.9"
                    x="-18.4"
                    y="-18.4"
                    transform="matrix(1 0 0 1 461.665 3286.8623)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="The_Crescent">
              <path className="st7" d="M571.9,3219.6v23.1h-5.6v-23.1h-9v-5.2h23.5v5.2H571.9z" />
              <path
                className="st7"
                d="M589.2,3242.7h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V3242.7z"
              />
              <path
                className="st7"
                d="M624.4,3237.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L624.4,3237.1z M619.4,3230.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H619.4z"
              />
              <path
                className="st7"
                d="M636.5,3228.5c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S636.5,3237.6,636.5,3228.5z"
              />
              <path
                className="st7"
                d="M679.9,3228.3c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3V3223h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L679.9,3228.3z"
              />
              <path
                className="st7"
                d="M700.7,3237.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14.1c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L700.7,3237.1z M695.7,3230.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H695.7z"
              />
              <path
                className="st7"
                d="M707.5,3236.2c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.3-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.2-0.1-2.4,0.7-2.5,2
		c0,0,0,0,0,0c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L707.5,3236.2z"
              />
              <path
                className="st7"
                d="M726.5,3232.9c0,3.6,2.3,5.6,5,5.6c2.1,0.1,4-1.3,4.5-3.3l4.7,1.6c-1.2,4.1-5,6.8-9.2,6.6
		c-5.6,0.1-10.3-4.4-10.4-10c0-0.1,0-0.3,0-0.4c-0.2-5.6,4.1-10.2,9.7-10.4c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6l-4.8,1.6
		c-0.5-2-2.3-3.4-4.4-3.3C728.7,3227.3,726.5,3229.3,726.5,3232.9z"
              />
              <path
                className="st7"
                d="M761.8,3237.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L761.8,3237.1z M756.8,3230.6
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H756.8z"
              />
              <path
                className="st7"
                d="M771.1,3242.7h-5.3V3223h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1V3242.7z"
              />
              <path
                className="st7"
                d="M795.2,3223h4v4.8h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L795.2,3223z"
              />
            </g>
            <g id="Bilston_Central">
              <path
                className="st7"
                d="M203.3,3089c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9h-11
		V3089L203.3,3089z M202.5,3100.7c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1H202.5z M203,3112.7c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.6L203,3112.7z"
              />
              <path
                className="st7"
                d="M219.3,3087.9c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.5-3.3-3.2
		C216,3089.4,217.4,3087.9,219.3,3087.9C219.3,3087.9,219.3,3087.9,219.3,3087.9z M216.6,3117.3v-19.7h5.3v19.7H216.6z"
              />
              <path className="st7" d="M227.1,3117.3v-29h5.3v29H227.1z" />
              <path
                className="st7"
                d="M240.5,3110.8c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L240.5,3110.8z"
              />
              <path
                className="st7"
                d="M262.2,3097.6h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L262.2,3097.6z"
              />
              <path
                className="st7"
                d="M289.2,3107.5c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C289.2,3107.1,289.2,3107.3,289.2,3107.5z M283.9,3107.5c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S283.9,3111.2,283.9,3107.5z"
              />
              <path
                className="st7"
                d="M298.3,3117.3h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L298.3,3117.3z"
              />
              <path
                className="st7"
                d="M323.9,3103.2c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S323.9,3112.2,323.9,3103.2z"
              />
              <path
                className="st7"
                d="M372.9,3111.7c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L372.9,3111.7z M367.9,3105.2
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H367.9z"
              />
              <path
                className="st7"
                d="M382.3,3117.3h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L382.3,3117.3z"
              />
              <path
                className="st7"
                d="M406.4,3097.6h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L406.4,3097.6z"
              />
              <path
                className="st7"
                d="M426.3,3102.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V3102.9z"
              />
              <path
                className="st7"
                d="M434.1,3106l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1H441c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C428.2,3108.4,430.8,3106.5,434.1,3106z M440.4,3109.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C438.3,3113.9,440.4,3112.8,440.4,3109.4z"
              />
              <path className="st7" d="M450.5,3117.3v-29h5.3v29H450.5z" />
            </g>
            <g id="Loxdale">
              <path className="st7" d="M560,2990.4V2962h5.5v23.1h12.6v5.3H560z" />
              <path
                className="st7"
                d="M600.7,2980.6c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C600.7,2980.2,600.7,2980.4,600.7,2980.6z M595.3,2980.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S595.3,2984.3,595.3,2980.6z"
              />
              <path
                className="st7"
                d="M609,2980.5l-7-9.8h6.3c0.7,1.1,3.2,4.8,3.9,5.8l3.9-5.8h6l-6.9,9.6l7.1,10h-6.2l-4.1-6c-0.7,1.1-3.4,5-4,6h-6
		L609,2980.5z"
              />
              <path
                className="st7"
                d="M644,2986.8c0,1.3,0.1,2.8,0.2,3.6H639c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.3V2986.8z M634,2986.1c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S631.2,2986.1,634,2986.1z"
              />
              <path
                className="st7"
                d="M653.9,2979.1l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C648,2981.5,650.6,2979.6,653.9,2979.1z M660.2,2982.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C658.2,2987,660.2,2985.9,660.2,2982.4L660.2,2982.4z"
              />
              <path className="st7" d="M670.3,2990.4v-29h5.3v29H670.3z" />
              <path
                className="st7"
                d="M698.5,2984.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L698.5,2984.8z M693.5,2978.3
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H693.5z"
              />
            </g>
            <g id="Bradley_Lane">
              <path
                className="st7"
                d="M236.4,2832.6c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9h-11
		v-28.4H236.4z M235.6,2844.3c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1H235.6z M236.1,2856.3c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.5H236.1z"
              />
              <path
                className="st7"
                d="M261.7,2846.5c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L261.7,2846.5z"
              />
              <path
                className="st7"
                d="M269.6,2849.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.6c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C263.7,2852.1,266.3,2850.1,269.6,2849.6z M275.9,2853v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C273.8,2857.5,275.9,2856.5,275.9,2853L275.9,2853z"
              />
              <path
                className="st7"
                d="M304.7,2857.4c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4V2832h5.2V2857.4z M294.7,2856.7c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S291.9,2856.7,294.7,2856.7L294.7,2856.7z"
              />
              <path className="st7" d="M310,2860.9v-29h5.3v29H310z" />
              <path
                className="st7"
                d="M338.2,2855.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L338.2,2855.3z M333.2,2848.9
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H333.2z"
              />
              <path
                className="st7"
                d="M343.3,2868.7l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H343.3z"
              />
              <path className="st7" d="M373.9,2860.9v-28.4h5.5v23.1h12.6v5.3L373.9,2860.9z" />
              <path
                className="st7"
                d="M400.1,2849.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.6c0,1,0.1,2.1,0.2,3.1H407c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C394.2,2852.1,396.8,2850.1,400.1,2849.6z M406.4,2853v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C404.3,2857.5,406.4,2856.5,406.4,2853L406.4,2853z"
              />
              <path
                className="st7"
                d="M421.8,2860.9h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L421.8,2860.9z"
              />
              <path
                className="st7"
                d="M457,2855.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L457,2855.3z M452,2848.9c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H452z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000028303401907363495380000012613227962276133018_"
                    x="419.8"
                    y="2768.9"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000116931280927818666930000002797610535017804933_">
                  <use
                    xlinkHref="#SVGID_00000028303401907363495380000012613227962276133018_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000116931280927818666930000002797610535017804933_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="36.9"
                    height="36.9"
                    x="-18.4"
                    y="-18.4"
                    transform="matrix(1 0 0 1 438.235 2787.3025)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Wednesbury_Parkway">
              <path
                className="st7"
                d="M591.7,2688h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L591.7,2688z"
              />
              <path
                className="st7"
                d="M617.8,2710.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L617.8,2710.8z M612.8,2704.3
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H612.8z"
              />
              <path
                className="st7"
                d="M640.6,2712.8c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2L640.6,2712.8z M630.6,2712.1
		c2.7,0,4.8-2.1,4.8-5.6s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S627.8,2712.1,630.6,2712.1z"
              />
              <path
                className="st7"
                d="M651.2,2716.4h-5.3v-19.7h5.1v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L651.2,2716.4z"
              />
              <path
                className="st7"
                d="M686.4,2710.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L686.4,2710.8z M681.4,2704.3
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H681.4z"
              />
              <path
                className="st7"
                d="M693.3,2709.9c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L693.3,2709.9z"
              />
              <path
                className="st7"
                d="M708.3,2716.4v-29h5.2v11.4c0.9-1.4,3-2.7,6-2.7c5.8,0,9.1,4.4,9.1,10.3s-3.7,10.4-9.3,10.4
		c-2.3,0.1-4.5-1-5.8-2.9v2.4L708.3,2716.4z M718.4,2701c-2.7,0-4.9,2-4.9,5.6s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S721.2,2701,718.4,2701
		L718.4,2701z"
              />
              <path
                className="st7"
                d="M745.1,2714.3c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,3.9,3.6,3.9
		c2,0.1,3.6-1.4,3.7-3.3c0-0.2,0-0.4,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C745.1,2715.7,745.1,2715,745.1,2714.3z"
              />
              <path
                className="st7"
                d="M767.3,2702c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L767.3,2702z"
              />
              <path
                className="st7"
                d="M771.6,2724.1l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.3,27.4H771.6z"
              />
              <path
                className="st7"
                d="M565.5,2745.7v10.7H560V2728h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H565.5z M569.9,2741
		c2.8,0,4.4-1.6,4.4-4s-1.7-4.1-4.4-4.1h-4.4v8.1L569.9,2741z"
              />
              <path
                className="st7"
                d="M588,2745.1l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C582.2,2747.5,584.8,2745.6,588,2745.1z M594.3,2748.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.1,0,0.2,0C592.3,2753,594.3,2751.9,594.3,2748.4L594.3,2748.4z"
              />
              <path
                className="st7"
                d="M616.4,2742c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L616.4,2742z"
              />
              <path
                className="st7"
                d="M630.8,2745l8,11.4h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3v16.6l6.8-7.3h7L630.8,2745z"
              />
              <path
                className="st7"
                d="M658.2,2736.7l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H658.2z"
              />
              <path
                className="st7"
                d="M678.9,2745.1l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C673,2747.5,675.6,2745.6,678.9,2745.1z M685.2,2748.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.1,0,0.2,0C683.2,2753,685.2,2751.9,685.2,2748.4L685.2,2748.4z"
              />
              <path
                className="st7"
                d="M696.5,2764.1l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.3,27.4H696.5z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000013177372714120980000000009808520478066895035_"
                    x="559.4"
                    y="2624.5"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000022544023201177279390000014477147938491163267_">
                  <use
                    xlinkHref="#SVGID_00000013177372714120980000000009808520478066895035_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000022544023201177279390000014477147938491163267_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="36.9"
                    height="36.9"
                    x="-18.4"
                    y="-18.4"
                    transform="matrix(1 0 0 1 577.825 2642.9023)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Wednesbury">
              <path
                className="st7"
                d="M260.3,2562.1h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L260.3,2562.1z"
              />
              <path
                className="st7"
                d="M286.4,2584.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L286.4,2584.8z M281.4,2578.4
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H281.4z"
              />
              <path
                className="st7"
                d="M309.1,2586.9c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V2586.9z M299.1,2586.2c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S296.3,2586.2,299.1,2586.2z"
              />
              <path
                className="st7"
                d="M319.7,2590.5h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L319.7,2590.5z"
              />
              <path
                className="st7"
                d="M354.9,2584.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L354.9,2584.8z M349.9,2578.4
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H349.9z"
              />
              <path
                className="st7"
                d="M361.8,2584c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,1.9
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L361.8,2584z"
              />
              <path
                className="st7"
                d="M376.9,2590.5v-29h5.2v11.4c0.9-1.4,3-2.7,6-2.7c5.8,0,9.1,4.4,9.1,10.3s-3.7,10.4-9.3,10.4
		c-2.3,0.1-4.5-1-5.8-2.9v2.4L376.9,2590.5z M387,2575c-2.7,0-4.9,2-4.9,5.6s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S389.7,2575,387,2575z"
              />
              <path
                className="st7"
                d="M413.6,2588.3c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5v-11.5h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C413.7,2589.8,413.6,2589.1,413.6,2588.3z"
              />
              <path
                className="st7"
                d="M435.9,2576.1c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L435.9,2576.1z"
              />
              <path
                className="st7"
                d="M440.2,2598.2l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4L440.2,2598.2z"
              />
              <path
                className="st7"
                d="M206.4,2623.5l-0.3-2.8c-1.4,2.1-3.8,3.4-6.4,3.2c-5,0-9.6-3.6-9.6-10.4s4.9-10.3,9.8-10.3
		c4.3,0,7.6,2.4,8.8,6l-2.5,1.1c-0.8-2.8-3.4-4.7-6.3-4.5c-3.6,0-7,2.6-7,7.8s3.4,7.9,6.9,7.9c4.4,0,6-3.1,6.1-5.2h-6.9v-2.4h9.5
		v9.7L206.4,2623.5z"
              />
              <path
                className="st7"
                d="M220.1,2612.7c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V2610h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L220.1,2612.7z"
              />
              <path
                className="st7"
                d="M234.6,2619.6c-0.8,2.6-3.3,4.3-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3.1-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L234.6,2619.6z M231.9,2615.3
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H231.9z"
              />
              <path
                className="st7"
                d="M241.3,2615.8l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0.1,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.5-4.5-3.9c0,0,0-0.1,0-0.1C237.2,2617.4,239,2616.1,241.3,2615.8z M246,2617.7v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C244.2,2621.7,246,2620.6,246,2617.7L246,2617.7z"
              />
              <path
                className="st7"
                d="M256.2,2610h2.9v2.4h-2.9v7c0,1.2,0.5,1.9,1.9,1.9c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4H251v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.1h2.4L256.2,2610z"
              />
              <path
                className="st7"
                d="M292.3,2603.6h2.8l-5.6,19.9h-2.8l-5.2-16.1l-5.1,16.1h-2.8l-5.7-19.9h2.8l4.4,15.5l5-15.5h2.9l5.1,15.7
		L292.3,2603.6z"
              />
              <path
                className="st7"
                d="M309.5,2619.6c-0.8,2.6-3.3,4.3-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L309.5,2619.6z M306.8,2615.3
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H306.8z"
              />
              <path
                className="st7"
                d="M314,2619.1c0.2,1.6,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.9-3.4-3.8c0.2-2.5,2.3-4.4,4.8-4.3c3.7,0,4.8,2.4,5.1,3.6l-2.3,0.9c-0.2-1.4-1.4-2.4-2.8-2.2
		c-1.1-0.1-2.1,0.6-2.2,1.7c0,0,0,0,0,0.1c0,0.8,0.5,1.4,1.5,1.6l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.4-5.5-3.9L314,2619.1z"
              />
              <path
                className="st7"
                d="M329.1,2610h2.9v2.4h-2.9v7c0,1.2,0.5,1.9,1.9,1.9c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.5v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.1h2.4L329.1,2610z"
              />
              <path
                className="st7"
                d="M347.3,2619.6c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L347.3,2619.6z M344.6,2615.3
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H344.6z"
              />
              <path
                className="st7"
                d="M358.2,2612.7c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V2610h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L358.2,2612.7z"
              />
              <path
                className="st7"
                d="M363.6,2623.5H361V2610h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.6-3.1,3.7L363.6,2623.5z"
              />
              <path
                className="st7"
                d="M394.2,2609c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.4-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.2,4.4,4.7,4.3c0,0,0,0,0,0
		c2.7,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L394.2,2609z"
              />
              <path
                className="st7"
                d="M403.8,2610h2.9v2.4h-2.9v7c0,1.2,0.5,1.9,1.9,1.9c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.1h2.4L403.8,2610z"
              />
              <path
                className="st7"
                d="M417.7,2612.7c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V2610h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L417.7,2612.7z"
              />
              <path
                className="st7"
                d="M432.3,2619.6c-0.8,2.6-3.3,4.3-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L432.3,2619.6z M429.6,2615.3
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H429.6z"
              />
              <path
                className="st7"
                d="M447.4,2619.6c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L447.4,2619.6z M444.8,2615.3
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H444.8z"
              />
              <path
                className="st7"
                d="M454.4,2610h2.9v2.4h-2.9v7c0,1.2,0.5,1.9,1.9,1.9c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.5v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.1h2.4L454.4,2610z"
              />
            </g>
            <g id="Black_Lake">
              <path
                className="st2"
                d="M547.2,2433.3h215.9c5.4,0,9.8,4.4,9.8,9.8v52.8c0,5.4-4.4,9.8-9.8,9.8H547.2c-5.4,0-9.8-4.4-9.8-9.8v-52.8
		C537.4,2437.7,541.8,2433.3,547.2,2433.3z"
              />
              <path
                className="st8"
                d="M763.1,2434.6c4.7,0,8.6,3.8,8.6,8.6l0,0v52.8c0,4.7-3.8,8.6-8.6,8.6h0H547.2c-4.7,0-8.6-3.8-8.6-8.6l0,0
		v-52.8c0-4.7,3.8-8.6,8.6-8.6h0H763.1 M763.1,2432.1H547.2c-6.1,0-11.1,5-11.1,11.1v52.8c0,6.1,5,11.1,11.1,11.1h215.9
		c6.1,0,11.1-5,11.1-11.1v-52.8C774.2,2437,769.2,2432.1,763.1,2432.1z"
              />
              <path
                className="st7"
                d="M570.2,2454.8c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9h-11
		v-28.4H570.2z M569.3,2466.5c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1H569.3z M569.9,2478.5c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.5H569.9z"
              />
              <path className="st7" d="M583.5,2483.2v-29h5.3v29H583.5z" />
              <path
                className="st7"
                d="M598.7,2471.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C592.8,2474.3,595.4,2472.3,598.7,2471.8z M605,2475.2v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C603,2479.8,605,2478.7,605,2475.2L605,2475.2z"
              />
              <path
                className="st7"
                d="M619,2473.3c0,3.6,2.3,5.6,5,5.6c2.1,0.1,4-1.3,4.5-3.3l4.7,1.6c-1.2,4.1-5,6.8-9.2,6.6
		c-5.6,0.1-10.3-4.4-10.4-10c0-0.1,0-0.3,0-0.4c-0.2-5.6,4.1-10.2,9.7-10.4c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6l-4.8,1.6
		c-0.5-2-2.3-3.4-4.4-3.3C621.2,2467.8,619,2469.8,619,2473.3z"
              />
              <path
                className="st7"
                d="M647.8,2471.8l8,11.4h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3v16.6l6.8-7.3h7L647.8,2471.8z"
              />
              <path className="st7" d="M668.3,2483.2v-28.4h5.5v23.1h12.6v5.3L668.3,2483.2z" />
              <path
                className="st7"
                d="M694.5,2471.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C688.6,2474.3,691.2,2472.3,694.5,2471.8z M700.8,2475.2v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C698.7,2479.8,700.8,2478.7,700.8,2475.2L700.8,2475.2z"
              />
              <path
                className="st7"
                d="M722.1,2471.8l8,11.4h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3v16.6l6.8-7.3h7L722.1,2471.8z"
              />
              <path
                className="st7"
                d="M750.4,2477.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L750.4,2477.5z M745.4,2471.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H745.4z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000045613870408984244800000000256326730120953012_"
                    x="536.3"
                    y="2380.7"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000003089798241555203210000004900819085577974186_">
                  <use
                    xlinkHref="#SVGID_00000045613870408984244800000000256326730120953012_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000003089798241555203210000004900819085577974186_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="36.9"
                    height="36.9"
                    x="-18.4"
                    y="-18.4"
                    transform="matrix(1 0 0 1 554.745 2399.1323)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Dudley_Street">
              <path
                className="st7"
                d="M211.5,2338.2v-28.4h10.1c8.1,0,14,5.2,14,14.2s-6,14.1-14,14.1L211.5,2338.2z M221.4,2333.1
		c4.6,0,8.5-2.9,8.5-9s-3.8-9.1-8.5-9.1H217v18.1L221.4,2333.1z"
              />
              <path
                className="st7"
                d="M252.3,2336.1c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,3.9,3.6,3.9
		c2,0.1,3.6-1.4,3.7-3.3c0-0.2,0-0.4,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C252.3,2337.5,252.3,2336.8,252.3,2336.1z"
              />
              <path
                className="st7"
                d="M281.3,2334.6c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.7-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V2334.6z M271.3,2333.9c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S268.5,2333.9,271.3,2333.9L271.3,2333.9z"
              />
              <path className="st7" d="M286.5,2338.2v-29h5.3v29H286.5z" />
              <path
                className="st7"
                d="M314.7,2332.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L314.7,2332.5z M309.7,2326.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H309.7z"
              />
              <path
                className="st7"
                d="M319.9,2345.9l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H319.9z"
              />
              <path
                className="st7"
                d="M364.5,2318.1c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.4,7.9,8.4c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L364.5,2318.1z"
              />
              <path
                className="st7"
                d="M380.3,2318.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.1v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L380.3,2318.5z"
              />
              <path
                className="st7"
                d="M400.1,2323.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V2323.8z"
              />
              <path
                className="st7"
                d="M420.9,2332.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L420.9,2332.5z M415.9,2326.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H415.9z"
              />
              <path
                className="st7"
                d="M442.6,2332.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L442.6,2332.5z M437.6,2326.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H437.6z"
              />
              <path
                className="st7"
                d="M453.1,2318.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.1v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L453.1,2318.5z"
              />
              <path
                className="st7"
                d="M317.8,2371.2l-0.3-2.8c-1.4,2.1-3.8,3.4-6.4,3.2c-5,0-9.6-3.6-9.6-10.4s4.9-10.3,9.8-10.3
		c4.3,0,7.6,2.4,8.8,6l-2.5,1.1c-0.8-2.8-3.4-4.7-6.3-4.5c-3.5,0-7,2.6-7,7.8s3.4,7.9,6.9,7.9c4.4,0,6-3.1,6.1-5.2h-6.9v-2.5h9.5
		v9.7L317.8,2371.2z"
              />
              <path
                className="st7"
                d="M328.9,2371.6c-3.1,0-5-2.4-5-5.4v-8.5h2.6v8.1c0,1.9,0.8,3.5,3,3.5s3.2-1.4,3.2-3.4v-8.1h2.6v11
		c0,0.8,0.1,1.7,0.1,2.5H333c-0.1-0.5-0.1-1.1-0.1-1.6C332,2370.9,330.5,2371.7,328.9,2371.6z"
              />
              <path
                className="st7"
                d="M342.4,2371.2h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L342.4,2371.2z"
              />
              <path
                className="st7"
                d="M356.7,2366.8c0.2,1.6,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.9-3.4-3.8c0.2-2.5,2.3-4.4,4.8-4.2c3.7,0,4.8,2.4,5.1,3.6l-2.3,0.9c-0.2-1.4-1.4-2.4-2.8-2.2
		c-1.1-0.1-2.1,0.6-2.2,1.7c0,0,0,0,0,0.1c0,0.8,0.5,1.4,1.5,1.6l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.4-5.5-3.9L356.7,2366.8z"
              />
              <path
                className="st7"
                d="M388.2,2351.3h2.9l-7.6,19.9h-2.7l-7.5-19.9h2.9l6,16.3L388.2,2351.3z"
              />
              <path
                className="st7"
                d="M394.9,2350.7c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9l0,0
		C393,2351.6,393.8,2350.7,394.9,2350.7z M393.6,2371.2v-13.5h2.6v13.5H393.6z"
              />
              <path className="st7" d="M400.7,2371.2v-20.3h2.6v20.3H400.7z" />
              <path className="st7" d="M407.8,2371.2v-20.3h2.6v20.3H407.8z" />
              <path
                className="st7"
                d="M418.1,2363.5l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.6c0,0,0,0,0,0.1
		l-2.5-0.6c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2H423c-0.1-0.6-0.2-1.2-0.1-1.8
		c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.5-4.5-3.9c0,0,0-0.1,0-0.1C414.1,2365.2,415.8,2363.8,418.1,2363.5z M422.8,2365.4v-0.6
		l-4.1,0.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C421.1,2369.4,422.8,2368.4,422.8,2365.4z"
              />
              <path
                className="st7"
                d="M431.1,2371.3c0.1,1.9,1.8,3.4,3.7,3.3c2.8,0,4.1-1.5,4.1-4.4v-1.9c-0.9,1.4-2.4,2.3-4.1,2.2
		c-3.6,0-6.2-2.7-6.2-6.5c0-3.6,2.5-6.6,6.2-6.6c2.1,0,3.5,0.8,4.1,2.1v-1.9h2.6v12.5c0,3.4-1.7,6.7-6.8,6.7c-3.4,0-5.9-2.1-6.2-5
		L431.1,2371.3z M439,2364c0-2.6-1.6-4.3-3.8-4.3s-3.9,1.7-3.9,4.3s1.5,4.3,3.9,4.3S439,2366.6,439,2364L439,2364z"
              />
              <path
                className="st7"
                d="M457.5,2367.3c-0.8,2.6-3.3,4.3-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L457.5,2367.3z M454.8,2363.1
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H454.8z"
              />
            </g>
            <g id="Dartmouth_Street">
              <path
                className="st7"
                d="M560,2230.1v-28.3h10.2c8.1,0,14,5.2,14,14.2s-6,14.1-14,14.1L560,2230.1z M569.9,2225c4.6,0,8.5-2.9,8.5-9
		s-3.8-9.1-8.5-9.1h-4.4v18.1L569.9,2225z"
              />
              <path
                className="st7"
                d="M592.8,2218.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C586.9,2221.2,589.5,2219.3,592.8,2218.8z M599.1,2222.1v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C597,2226.7,599.1,2225.6,599.1,2222.1L599.1,2222.1z"
              />
              <path
                className="st7"
                d="M621.2,2215.7c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L621.2,2215.7z"
              />
              <path
                className="st7"
                d="M630.9,2210.4h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2H622v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L630.9,2210.4z"
              />
              <path
                className="st7"
                d="M638.8,2230.1v-19.7h5.1v2.4c1.3-1.9,3.5-3.1,5.8-3c2.4-0.2,4.7,1.1,5.8,3.3c1.3-2.2,3.7-3.4,6.2-3.3
		c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2v-11.7c0-2.1-1-3.7-3.5-3.7c-2,0-3.6,1.6-3.6,3.6c0,0.1,0,0.2,0,0.3v11.5h-5.3v-11.7
		c0-2.1-1.1-3.7-3.5-3.7c-2-0.1-3.6,1.5-3.7,3.5c0,0.1,0,0.2,0,0.4v11.5L638.8,2230.1z"
              />
              <path
                className="st7"
                d="M692.9,2220.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C692.9,2219.9,692.9,2220.1,692.9,2220.3z M687.5,2220.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S687.5,2224,687.5,2220.3z"
              />
              <path
                className="st7"
                d="M709.3,2228c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C709.3,2229.4,709.3,2228.7,709.3,2228z"
              />
              <path
                className="st7"
                d="M726.1,2210.4h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L726.1,2210.4z"
              />
              <path
                className="st7"
                d="M739.3,2230.1H734v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L739.3,2230.1z"
              />
              <path
                className="st7"
                d="M780.8,2210c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8c5.2,1,7.9,4.4,7.9,8.4
		c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5c0-1.6-1.2-2.9-3.4-3.4
		l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L780.8,2210z"
              />
              <path
                className="st7"
                d="M796.5,2210.4h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L796.5,2210.4z"
              />
              <path
                className="st7"
                d="M816.4,2215.7c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L816.4,2215.7z"
              />
              <path
                className="st7"
                d="M837.2,2224.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L837.2,2224.5z M832.2,2218
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H832.2z"
              />
              <path
                className="st7"
                d="M858.8,2224.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L858.8,2224.5z M853.8,2218
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H853.8z"
              />
              <path
                className="st7"
                d="M869.4,2210.4h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L869.4,2210.4z"
              />
            </g>
            <g id="Lodge_Road">
              <path className="st7" d="M245.6,2088.1v-28.3h5.5v23.1h12.6v5.3L245.6,2088.1z" />
              <path
                className="st7"
                d="M286.3,2078.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C286.3,2077.9,286.3,2078.1,286.3,2078.3z M281,2078.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S281,2082,281,2078.3L281,2078.3z"
              />
              <path
                className="st7"
                d="M308.8,2084.5c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V2084.5z M298.8,2083.8c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S296,2083.8,298.8,2083.8z"
              />
              <path
                className="st7"
                d="M317.5,2087.9c0.4,2.2,2.3,3.8,4.6,3.7c3.4,0,5.2-1.7,5.2-5.5v-1.4c-0.8,1.3-2.6,2.5-5.5,2.5
		c-5.2,0-9.2-4-9.2-9.6c0-5.2,3.8-9.6,9.2-9.6c3.1,0,4.9,1.4,5.6,2.7v-2.3h5.1v17.6c0,5.4-2.9,10.3-10.3,10.3c-5.4,0-9-3.4-9.6-7.1
		L317.5,2087.9z M327.4,2077.7c0.2-2.6-1.8-4.8-4.4-5c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6c0,3.1,2,5,4.7,5
		S327.4,2080.7,327.4,2077.7z"
              />
              <path
                className="st7"
                d="M355.1,2082.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L355.1,2082.5z M350.1,2076
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H350.1z"
              />
              <path
                className="st7"
                d="M377.3,2077.2h-2.9v10.9h-5.6v-28.3H380c5.5,0,9,3.8,9,8.7c0.1,3.7-2.4,7.1-6,8l6.1,11.6h-6.2L377.3,2077.2z
		 M378.9,2072.4c2.8,0,4.4-1.6,4.4-3.9s-1.6-4-4.4-4h-4.5v7.9L378.9,2072.4z"
              />
              <path
                className="st7"
                d="M412.2,2078.3c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C412.2,2077.9,412.2,2078.1,412.2,2078.3z M406.9,2078.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S406.9,2082,406.9,2078.3z"
              />
              <path
                className="st7"
                d="M420.6,2076.8l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C414.7,2079.2,417.3,2077.3,420.6,2076.8z M426.9,2080.1v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C424.8,2084.7,426.9,2083.6,426.9,2080.1L426.9,2080.1z"
              />
              <path
                className="st7"
                d="M455.7,2084.5c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V2084.5z M445.7,2083.8c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S442.9,2083.8,445.7,2083.8z"
              />
              <path
                className="st7"
                d="M149.6,2101.3h2.8l-5.6,19.9h-2.8l-5.2-16.1l-5.1,16.1h-2.7l-5.7-19.9h2.9l4.4,15.5l5-15.5h2.9l5.1,15.7
		L149.6,2101.3z"
              />
              <path
                className="st7"
                d="M166.8,2117.3c-0.8,2.6-3.3,4.3-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3.1-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c-0.1,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L166.8,2117.3z M164.1,2113
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H164.1z"
              />
              <path
                className="st7"
                d="M171.4,2116.8c0.2,1.6,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.9-3.4-3.8c0.2-2.5,2.3-4.4,4.8-4.2c3.7,0,4.8,2.4,5.1,3.6l-2.3,0.9c-0.2-1.4-1.4-2.3-2.8-2.2
		c-1.1-0.1-2.1,0.6-2.2,1.7c0,0,0,0,0,0.1c0,0.8,0.5,1.4,1.5,1.6l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.4-5.5-3.9L171.4,2116.8z"
              />
              <path
                className="st7"
                d="M186.4,2107.6h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.7,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L186.4,2107.6z"
              />
              <path
                className="st7"
                d="M206.6,2101.3c3.8,0,6,2.2,6,5.4c0,1.9-1.2,3.7-3,4.3c2.2,0.6,3.7,2.6,3.6,4.8c0,3.1-2.5,5.4-6.1,5.4h-6.9
		v-19.9L206.6,2101.3z M206.3,2109.9c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1-3.6-3.1h-3.3v6.3H206.3z M206.7,2118.7c2.2,0,3.7-1.2,3.7-3.2
		s-1.2-3.2-3.6-3.2h-3.9v6.4H206.7z"
              />
              <path
                className="st7"
                d="M224.2,2110.3c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.7h-2.6v-13.5h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L224.2,2110.3z"
              />
              <path
                className="st7"
                d="M239.6,2114.4c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8-0.1,6.8,2.9,6.9,6.7C239.6,2114.1,239.6,2114.2,239.6,2114.4z M236.9,2114.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S236.9,2117.5,236.9,2114.4z"
              />
              <path
                className="st7"
                d="M243,2121.1v-13.5h2.5v1.8c0.9-1.4,2.4-2.2,4.1-2.2c1.7-0.1,3.3,1,4,2.6c0.9-1.7,2.6-2.6,4.5-2.6
		c2.4,0,4.6,1.6,4.6,5.1v8.7h-2.6v-8.4c0-1.8-0.9-3.1-2.9-3.1c-1.7,0-3.1,1.4-3.1,3.2c0,0.1,0,0.2,0,0.2v8.1h-2.6v-8.4
		c0-1.7-0.8-3.1-2.9-3.1c-1.7,0-3.1,1.4-3.2,3.1c0,0.1,0,0.2,0,0.3v8.1L243,2121.1z"
              />
              <path
                className="st7"
                d="M277.3,2107.6l3.5,10.1l3-10.1h2.8l-4.4,13.5h-2.7l-3.6-10.2l-3.5,10.2h-2.8l-4.4-13.5h2.8l3,10.1l3.5-10.1
		H277.3z"
              />
              <path
                className="st7"
                d="M290.5,2100.6c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9l0,0
		C288.6,2101.5,289.4,2100.7,290.5,2100.6z M289.2,2121.1v-13.5h2.6v13.5H289.2z"
              />
              <path
                className="st7"
                d="M297.8,2114.4c0,3.1,1.9,4.7,4.1,4.7c1.8,0.1,3.3-1.1,3.8-2.8l2.3,1c-0.9,2.6-3.3,4.3-6.1,4.2
		c-3.8,0-6.8-3.1-6.8-6.8c0-0.1,0-0.2,0-0.3c0-4.2,2.9-7.1,6.8-7.1c2.8-0.2,5.3,1.6,6,4.3l-2.4,1c-0.3-1.7-1.9-2.9-3.6-2.9
		C299.8,2109.7,297.8,2111.2,297.8,2114.4z"
              />
              <path
                className="st7"
                d="M313.7,2121.1h-2.6v-20.3h2.6v8.4c0.9-1.3,2.5-2.1,4.1-2c3.2,0,4.8,2.3,4.8,5.3v8.5H320v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2,0-3.1,1.6-3.1,3.6L313.7,2121.1z"
              />
              <path className="st7" d="M341.3,2103.8v17.3h-2.7v-17.3h-6.6v-2.6h16v2.6H341.3z" />
              <path
                className="st7"
                d="M363.1,2114.4c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.7-0.1,6.8,2.9,6.9,6.7C363.1,2114.1,363.1,2114.2,363.1,2114.4z M360.4,2114.4c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S360.4,2117.5,360.4,2114.4z"
              />
              <path
                className="st7"
                d="M376.7,2107.6l3.5,10.1l3-10.1h2.8l-4.4,13.5h-2.7l-3.6-10.2l-3.5,10.2H369l-4.4-13.5h2.9l3,10.1l3.5-10.1
		H376.7z"
              />
              <path
                className="st7"
                d="M391.3,2121.1h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L391.3,2121.1z"
              />
              <path
                className="st7"
                d="M424.5,2121.1v-8.8h-10.1v8.8h-2.8v-19.9h2.8v8.5h10.1v-8.5h2.8v19.9L424.5,2121.1z"
              />
              <path
                className="st7"
                d="M435.3,2113.4l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3.1,2.6c0,0,0,0,0,0.1
		l-2.5-0.6c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8
		c-0.9,1.5-2.6,2.3-4.3,2.2c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C431.2,2115.1,433,2113.8,435.3,2113.4z M440,2115.3v-0.6
		l-4.1,0.6c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C438.2,2119.3,440,2118.3,440,2115.3L440,2115.3z"
              />
              <path className="st7" d="M446.7,2121.1v-20.3h2.6v20.3H446.7z" />
              <path className="st7" d="M453.8,2121.1v-20.3h2.6v20.3H453.8z" />
            </g>
            <g id="West_Bromwich">
              <path
                className="st7"
                d="M591.7,1933.1h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L591.7,1933.1z"
              />
              <path
                className="st7"
                d="M617.8,1955.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L617.8,1955.8z M612.8,1949.4
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H612.8z"
              />
              <path
                className="st7"
                d="M624.7,1955c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L624.7,1955z"
              />
              <path
                className="st7"
                d="M646.3,1941.8h4v4.7h-4v8.3c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.8h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L646.3,1941.8z"
              />
              <path
                className="st7"
                d="M674.2,1933.1c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9h-11
		v-28.4L674.2,1933.1z M673.4,1944.8c2.5,0,4-1.4,4-3.6s-1.4-3.5-4-3.5h-3.9v7.1L673.4,1944.8z M673.9,1956.8c2.7,0,4.3-1.4,4.3-3.7
		s-1.5-3.8-4.2-3.8h-4.6v7.5H673.9z"
              />
              <path
                className="st7"
                d="M699.5,1947.1c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1947.1z"
              />
              <path
                className="st7"
                d="M721.9,1951.6c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C721.9,1951.2,721.9,1951.4,721.9,1951.6z M716.5,1951.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S716.5,1955.3,716.5,1951.6z"
              />
              <path
                className="st7"
                d="M725.6,1961.5v-19.7h5.1v2.4c1.3-1.9,3.4-3.1,5.8-3c2.4-0.2,4.7,1.1,5.8,3.3c1.3-2.2,3.7-3.4,6.2-3.3
		c3.6,0,7.1,2.2,7.1,7.5v12.8h-5.2v-11.6c0-2.1-1-3.7-3.5-3.7c-2,0-3.6,1.6-3.6,3.6c0,0.1,0,0.2,0,0.3v11.5h-5.3v-11.7
		c0-2.1-1.1-3.7-3.5-3.7c-2,0-3.6,1.5-3.7,3.5c0,0.1,0,0.2,0,0.4v11.5L725.6,1961.5z"
              />
              <path
                className="st7"
                d="M777.3,1941.8l4.2,12.7l3.6-12.7h5.3l-6.2,19.7H779l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6l4.3-12.6
		H777.3z"
              />
              <path
                className="st7"
                d="M795.9,1932c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C792.6,1933.5,794.1,1932,795.9,1932C795.9,1932,795.9,1932,795.9,1932z M793.3,1961.5v-19.7h5.3v19.7L793.3,1961.5z"
              />
              <path
                className="st7"
                d="M807.7,1951.6c0,3.6,2.3,5.6,5,5.6c2.1,0.1,4-1.3,4.5-3.3l4.7,1.6c-1.2,4.1-5,6.8-9.2,6.6
		c-5.6,0.1-10.3-4.4-10.4-10c0-0.1,0-0.3,0-0.4c-0.2-5.6,4.1-10.2,9.7-10.4c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6l-4.8,1.6
		c-0.5-2-2.3-3.4-4.4-3.3C809.9,1946.1,807.7,1948.1,807.7,1951.6z"
              />
              <path
                className="st7"
                d="M830.7,1961.5h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4H838v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L830.7,1961.5z"
              />
              <path
                className="st7"
                d="M558,1984.5c0-6.6,4.9-10.3,9.8-10.3c4.5,0,7.7,2.5,8.7,6.3l-2.5,0.9c-0.6-2.9-3.2-4.9-6.2-4.7
		c-3.6,0-7,2.6-7,7.8s3.4,7.8,7,7.8c3,0.1,5.6-1.9,6.3-4.8l2.4,0.9c-1.1,3.9-4.7,6.6-8.8,6.4C562.7,1994.9,558,1991.2,558,1984.5z"
              />
              <path
                className="st7"
                d="M591.7,1990.6c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0,0,0.1,0,0.1,0c1.7,0.1,3.3-1,3.8-2.7L591.7,1990.6z M589.1,1986.3
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H589.1z"
              />
              <path
                className="st7"
                d="M597.8,1994.5h-2.6V1981h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.6-3.1,3.7V1994.5z"
              />
              <path
                className="st7"
                d="M614.4,1981h2.9v2.4h-2.9v7c0,1.2,0.5,1.9,1.9,1.9c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.8c1,0.1,2-0.7,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.1h2.4L614.4,1981z"
              />
              <path
                className="st7"
                d="M628.3,1983.7c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6V1981h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L628.3,1983.7z"
              />
              <path
                className="st7"
                d="M634.4,1986.8l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C630.3,1988.4,632,1987.1,634.4,1986.8z M639,1988.7v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C637.3,1992.7,639,1991.6,639,1988.7L639,1988.7z"
              />
              <path className="st7" d="M645.8,1994.5v-20.3h2.6v20.3H645.8z" />
            </g>
            <g id="Trinity_Way">
              <path
                className="st7"
                d="M260.5,1823.7v23.1H255v-23.1h-9v-5.2h23.5v5.2L260.5,1823.7z"
              />
              <path
                className="st7"
                d="M284.5,1832.4c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1832.4z"
              />
              <path
                className="st7"
                d="M290.3,1817.4c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C287,1818.9,288.4,1817.4,290.3,1817.4C290.3,1817.4,290.3,1817.4,290.3,1817.4z M287.7,1846.8v-19.7h5.3v19.7H287.7z"
              />
              <path
                className="st7"
                d="M303.5,1846.8h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L303.5,1846.8z"
              />
              <path
                className="st7"
                d="M323.7,1817.4c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C320.4,1818.9,321.8,1817.4,323.7,1817.4C323.7,1817.4,323.7,1817.4,323.7,1817.4z M321.1,1846.8v-19.7h5.3v19.7H321.1z"
              />
              <path
                className="st7"
                d="M338.1,1827.1h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L338.1,1827.1z"
              />
              <path
                className="st7"
                d="M347.2,1854.6l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H347.2z"
              />
              <path
                className="st7"
                d="M409.5,1818.4h5.6l-7.8,28.3h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.3h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L409.5,1818.4z"
              />
              <path
                className="st7"
                d="M422.6,1835.5l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C416.7,1837.9,419.3,1836,422.6,1835.5z M428.9,1838.8v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C426.9,1843.4,428.9,1842.3,428.9,1838.8z"
              />
              <path
                className="st7"
                d="M440.2,1854.6l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H440.2z"
              />
            </g>
            <g id="Kenrick_Park">
              <path
                className="st7"
                d="M569,1708.6l-3.5,3.9v7.9H560V1692h5.5v12.8l11.4-12.8h7.2l-11.2,12.4l11.3,16h-6.9L569,1708.6z"
              />
              <path
                className="st7"
                d="M604.7,1714.7c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L604.7,1714.7z M599.7,1708.2
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H599.7z"
              />
              <path
                className="st7"
                d="M614,1720.3h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L614,1720.3z"
              />
              <path
                className="st7"
                d="M643.5,1705.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L643.5,1705.9z"
              />
              <path
                className="st7"
                d="M649.3,1690.9c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C646,1692.4,647.5,1690.9,649.3,1690.9C649.3,1690.9,649.3,1690.9,649.3,1690.9z M646.7,1720.3v-19.7h5.3v19.7H646.7z"
              />
              <path
                className="st7"
                d="M661.1,1710.5c0,3.6,2.3,5.6,5,5.6c2.1,0.1,4-1.3,4.5-3.3l4.7,1.6c-1.1,4.1-5,6.8-9.2,6.6
		c-5.6,0.1-10.3-4.4-10.4-10c0-0.1,0-0.3,0-0.4c-0.2-5.6,4.1-10.2,9.7-10.4c0.2,0,0.3,0,0.5,0c5.4,0,8.4,3.3,9.2,6.6l-4.8,1.6
		c-0.5-2-2.3-3.4-4.4-3.3C663.3,1705,661.1,1706.9,661.1,1710.5z"
              />
              <path
                className="st7"
                d="M690,1708.9l8,11.4h-6.5l-5.2-7.5l-2.2,2.3v5.2h-5.3v-29h5.3v16.6l6.8-7.3h7L690,1708.9z"
              />
              <path
                className="st7"
                d="M716,1709.6v10.7h-5.5V1692H721c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H716z M720.4,1704.9
		c2.8,0,4.4-1.6,4.4-4s-1.7-4.1-4.4-4.1H716v8.1L720.4,1704.9z"
              />
              <path
                className="st7"
                d="M738.5,1709l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C732.6,1711.4,735.2,1709.5,738.5,1709z M744.8,1712.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C742.7,1716.9,744.8,1715.8,744.8,1712.4L744.8,1712.4z"
              />
              <path
                className="st7"
                d="M766.9,1705.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L766.9,1705.9z"
              />
              <path
                className="st7"
                d="M781.2,1708.9l8,11.4h-6.5l-5.2-7.5l-2.2,2.3v5.2H770v-29h5.3v16.6l6.8-7.3h7L781.2,1708.9z"
              />
            </g>
            <g id="The_Hawthorns">
              <path className="st7" d="M195.7,1569.1v23.1h-5.6v-23.1h-9v-5.2h23.5v5.2H195.7z" />
              <path
                className="st7"
                d="M212.9,1592.2h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8L212.9,1592.2z"
              />
              <path
                className="st7"
                d="M248.1,1586.5c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.1-3.9-10.1-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L248.1,1586.5z M243.1,1580.1
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H243.1z"
              />
              <path
                className="st7"
                d="M279.8,1592.2v-11.8h-12.4v11.8h-5.5v-28.4h5.5v11.4h12.4v-11.4h5.6v28.4H279.8z"
              />
              <path
                className="st7"
                d="M295.7,1580.9l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C289.8,1583.3,292.4,1581.3,295.7,1580.9z M302,1584.2v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C299.9,1588.8,302,1587.7,302,1584.2L302,1584.2z"
              />
              <path
                className="st7"
                d="M328.8,1572.5l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4H316l-6.3-19.7h5.6l3.6,12.6l4.3-12.6
		L328.8,1572.5z"
              />
              <path
                className="st7"
                d="M351.4,1572.5h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L351.4,1572.5z"
              />
              <path
                className="st7"
                d="M364.6,1592.2h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V1592.2z"
              />
              <path
                className="st7"
                d="M401.3,1582.3c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C401.3,1582,401.3,1582.2,401.3,1582.3z M396,1582.3c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S396,1586.1,396,1582.3L396,1582.3z"
              />
              <path
                className="st7"
                d="M417,1577.8c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H405v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1577.8z"
              />
              <path
                className="st7"
                d="M425.5,1592.2h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L425.5,1592.2z"
              />
              <path
                className="st7"
                d="M445.9,1585.7c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L445.9,1585.7z"
              />
              <g>
                <defs>
                  <rect
                    id="SVGID_00000153690071887429005780000003786943673411249069_"
                    x="421.2"
                    y="1500.2"
                    width="36.8"
                    height="36.8"
                  />
                </defs>
                <clipPath id="SVGID_00000111154344519545874090000001709523701186215084_">
                  <use
                    xlinkHref="#SVGID_00000153690071887429005780000003786943673411249069_"
                    style={{ overFlow: 'visible' }}
                  />
                </clipPath>
                <g
                  style={{
                    clipPath: 'url(#SVGID_00000111154344519545874090000001709523701186215084_)',
                  }}
                >
                  <use
                    xlinkHref="#Park_and_ride"
                    width="36.9"
                    height="36.9"
                    x="-18.4"
                    y="-18.4"
                    transform="matrix(1 0 0 1 439.635 1518.5925)"
                    style={{ overFlow: 'visible' }}
                  />
                </g>
              </g>
            </g>
            <g id="Handsworth">
              <path
                className="st7"
                d="M577.9,1452v-11.8h-12.4v11.8H560v-28.4h5.5v11.4h12.4v-11.4h5.5v28.4H577.9z"
              />
              <path
                className="st7"
                d="M593.7,1440.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C587.8,1443.1,590.4,1441.1,593.7,1440.6z M600,1444v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C598,1448.6,600,1447.5,600,1444L600,1444z"
              />
              <path
                className="st7"
                d="M615.4,1452h-5.3v-19.7h5.2v2.5c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L615.4,1452z"
              />
              <path
                className="st7"
                d="M651.7,1448.4c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.3c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4V1423h5.2L651.7,1448.4z M641.7,1447.7
		c2.7,0,4.8-2.1,4.8-5.6s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S639,1447.7,641.7,1447.7L641.7,1447.7z"
              />
              <path
                className="st7"
                d="M659.9,1445.5c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L659.9,1445.5z"
              />
              <path
                className="st7"
                d="M691.7,1432.3l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6H691.7z"
              />
              <path
                className="st7"
                d="M726.9,1442.1c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C726.9,1441.7,726.9,1441.9,726.9,1442.1z M721.6,1442.1c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S721.6,1445.8,721.6,1442.1z"
              />
              <path
                className="st7"
                d="M742.6,1437.6c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1437.6z"
              />
              <path
                className="st7"
                d="M752.3,1432.3h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.5,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L752.3,1432.3z"
              />
              <path
                className="st7"
                d="M765.5,1452h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.5,1.7-3.7,3.8V1452z"
              />
              <path
                className="st7"
                d="M565.7,1465.1c3.8,0,6,2.2,6,5.4c0.1,1.9-1.2,3.7-3,4.3c2.2,0.6,3.7,2.6,3.6,4.8c0,3.1-2.5,5.4-6.1,5.4h-6.9
		v-19.9L565.7,1465.1z M565.4,1473.8c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1-3.6-3.1H562v6.3L565.4,1473.8z M565.8,1482.6
		c2.2,0,3.7-1.2,3.7-3.2s-1.2-3.2-3.6-3.2H562v6.4H565.8z"
              />
              <path
                className="st7"
                d="M588.5,1478.2c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8,0,6.8,3,6.9,6.7C588.5,1477.9,588.5,1478.1,588.5,1478.2z M585.8,1478.2c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S585.8,1481.3,585.8,1478.2z"
              />
              <path
                className="st7"
                d="M604.5,1478.2c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8,0,6.8,3,6.9,6.7C604.5,1477.9,604.5,1478.1,604.5,1478.2z M601.8,1478.2c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S601.8,1481.3,601.8,1478.2z"
              />
              <path
                className="st7"
                d="M611.4,1471.5h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.5v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4V1471.5z"
              />
              <path
                className="st7"
                d="M620.5,1485h-2.6v-20.3h2.6v8.4c0.9-1.3,2.5-2.1,4.1-2c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2,0-3.1,1.6-3.1,3.6V1485z"
              />
              <path
                className="st7"
                d="M651,1470.5c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.7,4.3c0,0,0,0,0,0
		c2.7,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L651,1470.5z"
              />
              <path
                className="st7"
                d="M660.7,1471.5h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L660.7,1471.5z"
              />
              <path
                className="st7"
                d="M674.6,1474.2c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8h-2.6v-13.5h2.6v2.3c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L674.6,1474.2z"
              />
              <path
                className="st7"
                d="M689.1,1481.1c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6-0.1,0.8H679c0,2.2,1.7,4,3.9,4.1c0,0,0.1,0,0.1,0c1.8,0.1,3.3-1,3.8-2.7L689.1,1481.1z M686.4,1476.8
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H686.4z"
              />
              <path
                className="st7"
                d="M704.3,1481.1c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.2,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L704.3,1481.1z M701.6,1476.8
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H701.6z"
              />
              <path
                className="st7"
                d="M711.2,1471.5h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4H706v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L711.2,1471.5z"
              />
            </g>
            <g id="Winson_Green">
              <path
                className="st7"
                d="M233.9,1296.6h5.6l-7.8,28.4h-5.7l-6.5-20.2l-6.5,20.2h-5.8l-7.9-28.4h5.8l5.2,19.5l6.3-19.5h5.7l6.3,19.6
		L233.9,1296.6z"
              />
              <path
                className="st7"
                d="M245.1,1295.5c1.8,0,3.3,1.5,3.3,3.3s-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C241.8,1297,243.2,1295.5,245.1,1295.5C245,1295.5,245,1295.5,245.1,1295.5z M242.4,1324.9v-19.7h5.3v19.7H242.4z"
              />
              <path
                className="st7"
                d="M258.3,1324.9h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L258.3,1324.9z"
              />
              <path
                className="st7"
                d="M278.7,1318.4c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L278.7,1318.4z"
              />
              <path
                className="st7"
                d="M312.9,1315.1c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C312.9,1314.7,312.9,1314.9,312.9,1315.1z M307.6,1315.1c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S307.6,1318.8,307.6,1315.1z"
              />
              <path
                className="st7"
                d="M322,1324.9h-5.3v-19.7h5.1v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L322,1324.9z"
              />
              <path
                className="st7"
                d="M370.5,1324.9l-0.4-3.2c-1.3,1.9-4.1,3.8-8.4,3.8c-7.6,0-14.2-5.6-14.2-14.8s6.8-14.8,14.5-14.8
		c7.4,0,11.6,4.4,13,8.7l-5.3,1.9c-1-3.4-4.2-5.6-7.7-5.4c-4.3,0-8.9,2.9-8.9,9.6c0,6.4,4.2,9.7,9,9.7c5.2,0,7.3-3.5,7.6-5.5h-9
		v-4.8H375v14.8L370.5,1324.9z"
              />
              <path
                className="st7"
                d="M391.7,1310.5c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1310.5z"
              />
              <path
                className="st7"
                d="M412.5,1319.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L412.5,1319.3z M407.5,1312.8
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H407.5z"
              />
              <path
                className="st7"
                d="M434.1,1319.3c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L434.1,1319.3z M429.1,1312.8
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H429.1z"
              />
              <path
                className="st7"
                d="M443.5,1324.9h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L443.5,1324.9z"
              />
              <path
                className="st7"
                d="M313.7,1337.7c5.7-0.2,10.5,4.3,10.7,10c0.2,5.7-4.3,10.5-10,10.7c-5.7,0.2-10.5-4.3-10.7-10
		c0-0.1,0-0.2,0-0.4c-0.2-5.5,4-10.1,9.4-10.3C313.3,1337.7,313.5,1337.7,313.7,1337.7z M313.7,1355.8c3.7,0,7.2-2.7,7.2-7.8
		s-3.5-7.8-7.2-7.8s-7.2,2.6-7.2,7.8S310,1355.8,313.7,1355.8z"
              />
              <path
                className="st7"
                d="M332.1,1358.3c-3.1,0-5-2.3-5-5.4v-8.5h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.4v-8.1h2.6v11
		c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C335.2,1357.7,333.7,1358.5,332.1,1358.3z"
              />
              <path
                className="st7"
                d="M346.5,1344.5h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L346.5,1344.5z"
              />
              <path
                className="st7"
                d="M364.7,1354.1c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L364.7,1354.1z M362,1349.8
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-2,0-3.6,1.5-3.7,3.4H362z"
              />
              <path
                className="st7"
                d="M375.6,1347.1c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.3c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L375.6,1347.1z"
              />
              <path
                className="st7"
                d="M384.4,1348c0-6.6,4.9-10.3,9.9-10.3c4.5,0,7.7,2.5,8.7,6.3l-2.5,0.9c-0.6-2.9-3.2-4.9-6.2-4.7
		c-3.6,0-7,2.6-7,7.8s3.4,7.8,7,7.8c3,0.1,5.6-1.9,6.3-4.8l2.4,0.9c-1.1,3.9-4.7,6.6-8.8,6.4C389.2,1358.3,384.4,1354.6,384.4,1348z
		"
              />
              <path
                className="st7"
                d="M407.7,1337.5c1,0,1.9,0.8,1.9,1.9s-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C405.8,1338.3,406.7,1337.5,407.7,1337.5C407.7,1337.5,407.7,1337.5,407.7,1337.5z M406.4,1357.9v-13.5h2.6v13.5H406.4z"
              />
              <path
                className="st7"
                d="M421,1347.1c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.3c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L421,1347.1z"
              />
              <path
                className="st7"
                d="M425.3,1351.2c0,3.1,1.9,4.7,4.1,4.7c1.8,0.1,3.3-1.1,3.8-2.8l2.3,1c-0.9,2.6-3.3,4.3-6.1,4.2
		c-3.9,0-6.8-3.1-6.8-7.2s2.9-7.1,6.8-7.1c2.8-0.2,5.3,1.6,6,4.3l-2.4,1c-0.3-1.7-1.9-2.9-3.6-2.8
		C427.3,1346.5,425.3,1348,425.3,1351.2z"
              />
              <path className="st7" d="M438.6,1357.9v-20.3h2.6v20.3H438.6z" />
              <path
                className="st7"
                d="M457.5,1354.1c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L457.5,1354.1z M454.8,1349.8
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H454.8z"
              />
            </g>
            <g id="Soho">
              <path
                className="st7"
                d="M574.1,1177.8c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8
		c5.2,1,7.9,4.3,7.9,8.3c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5
		c0-1.6-1.2-2.9-3.4-3.4l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L574.1,1177.8z"
              />
              <path
                className="st7"
                d="M602.4,1188.1c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C602.4,1187.7,602.4,1187.9,602.4,1188.1z M597.1,1188.1c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S597.1,1191.8,597.1,1188.1z"
              />
              <path
                className="st7"
                d="M611.5,1197.9h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V1197.9z"
              />
              <path
                className="st7"
                d="M648.2,1188.1c-0.1,5.7-4.7,10.3-10.4,10.2c-5.7-0.1-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C648.2,1187.7,648.2,1187.9,648.2,1188.1z M642.9,1188.1c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6
		s2.4,5.6,5,5.6S642.9,1191.8,642.9,1188.1z"
              />
              <path
                className="st7"
                d="M565.7,1211.1c3.8,0,6,2.2,6,5.4c0,1.9-1.2,3.7-3,4.3c2.2,0.6,3.7,2.6,3.6,4.8c0,3.1-2.5,5.4-6.1,5.4h-6.9
		v-19.8L565.7,1211.1z M565.4,1219.7c2.2,0,3.5-1.3,3.5-3.2s-1.4-3.1-3.6-3.1H562v6.3L565.4,1219.7z M565.8,1228.5
		c2.2,0,3.7-1.2,3.7-3.2s-1.2-3.2-3.6-3.2H562v6.4H565.8z"
              />
              <path
                className="st7"
                d="M587.6,1227.1c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.2,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L587.6,1227.1z M584.9,1222.8
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H584.9z"
              />
              <path
                className="st7"
                d="M593.7,1230.9H591v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L593.7,1230.9z"
              />
              <path
                className="st7"
                d="M607.9,1226.6c0.2,1.6,1.6,2.7,3.1,2.5c1.5,0,2.3-0.8,2.3-1.8s-0.6-1.5-1.7-1.7l-2.3-0.5
		c-1.9-0.2-3.3-1.9-3.4-3.8c0.2-2.5,2.3-4.4,4.8-4.3c3.7,0,4.8,2.4,5.1,3.6l-2.3,0.9c-0.2-1.4-1.4-2.3-2.8-2.2
		c-1.1-0.1-2.1,0.6-2.2,1.7c0,0,0,0,0,0.1c0,0.8,0.5,1.4,1.5,1.6l2.2,0.5c2.4,0.5,3.7,2,3.7,4s-1.6,4.2-4.9,4.2
		c-3.7,0-5.3-2.4-5.5-3.9L607.9,1226.6z"
              />
              <path
                className="st7"
                d="M632.1,1224.2c-0.1,3.8-3.3,6.8-7.1,6.6c-3.8-0.1-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6
		c3.8-0.1,6.8,2.9,6.9,6.7C632.1,1223.9,632.1,1224,632.1,1224.2z M629.4,1224.2c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S629.4,1227.3,629.4,1224.2z"
              />
              <path
                className="st7"
                d="M638.1,1230.9h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L638.1,1230.9z"
              />
              <path
                className="st7"
                d="M664.2,1222.8h-3v8.1h-2.8V1211h7.5c3.2-0.2,5.9,2.2,6.1,5.4c0,0.2,0,0.3,0,0.5c0.1,2.8-2,5.3-4.8,5.6l4.7,8.3
		h-3.2L664.2,1222.8z M665.4,1220.3c2.2,0,3.8-1.3,3.8-3.4s-1.5-3.4-3.8-3.4h-4.2v6.8L665.4,1220.3z"
              />
              <path
                className="st7"
                d="M688.2,1224.2c0,4.1-2.8,7.2-6.9,7.2s-6.9-3-6.9-7.2c-0.1-3.8,2.8-7,6.6-7.1s7,2.8,7.1,6.6
		C688.2,1223.8,688.2,1224,688.2,1224.2z M685.5,1224.2c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8
		S685.5,1227.3,685.5,1224.2z"
              />
              <path
                className="st7"
                d="M694.8,1223.2l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C690.7,1224.9,692.4,1223.6,694.8,1223.2z M699.4,1225.2v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C697.7,1229.1,699.4,1228.1,699.4,1225.2L699.4,1225.2z"
              />
              <path
                className="st7"
                d="M715.6,1228.9c-0.8,1.5-2.4,2.5-4.2,2.4c-4,0-6.4-3.1-6.4-7.1c0-3.8,2.6-7.1,6.4-7.1c2.4,0,3.7,1.2,4.1,2.3
		v-8.7h2.6v17.8c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.6-0.1-1.2-0.1-1.8V1228.9z M711.7,1229c2.4,0,3.9-2.1,3.9-4.9s-1.5-4.7-3.9-4.7
		s-4,2-4,4.7S709.2,1229,711.7,1229L711.7,1229z"
              />
            </g>
            <g id="Jewellery_Quarter">
              <path
                className="st2"
                d="M269.9,1015.5h198.6c5.8,0,10.5,4.7,10.5,10.4v90.5c0,5.8-4.7,10.4-10.5,10.4H269.9c-5.8,0-10.5-4.7-10.5-10.4
		v-90.5C259.5,1020.2,264.2,1015.5,269.9,1015.5z"
              />
              <path
                className="st8"
                d="M468.5,1016.4c5.2,0,9.5,4.2,9.5,9.5v90.5c0,5.2-4.3,9.5-9.5,9.5H269.9c-5.2,0-9.5-4.2-9.5-9.5v-90.5
		c0-5.2,4.2-9.5,9.5-9.5c0,0,0,0,0,0H468.5 M468.5,1014.5H269.9c-6.3,0-11.4,5.1-11.4,11.4v90.5c0,6.3,5.1,11.4,11.4,11.4h198.6
		c6.3,0,11.4-5.1,11.4-11.4v-90.5C479.9,1019.6,474.8,1014.5,468.5,1014.5L468.5,1014.5z"
              />
              <path
                className="st7"
                d="M281.3,1054.2l5.3-1v2.6c0,2.9,1.7,4.2,3.9,4.2s3.8-1.6,3.8-4.1v-19.6h5.5v19.6c0.2,5-3.8,9.2-8.8,9.4
		c-0.2,0-0.3,0-0.5,0c-5.6,0-9.3-3.7-9.3-9.2L281.3,1054.2z"
              />
              <path
                className="st7"
                d="M322.8,1059.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L322.8,1059.1z M317.8,1052.7
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H317.8z"
              />
              <path
                className="st7"
                d="M343.5,1045.1l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6
		l4.3-12.6L343.5,1045.1z"
              />
              <path
                className="st7"
                d="M377.2,1059.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L377.2,1059.1z M372.2,1052.7
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H372.2z"
              />
              <path className="st7" d="M381.2,1064.8v-29h5.3v29H381.2z" />
              <path className="st7" d="M391.7,1064.8v-29h5.3v29H391.7z" />
              <path
                className="st7"
                d="M419.9,1059.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L419.9,1059.1z M414.9,1052.7
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H414.9z"
              />
              <path
                className="st7"
                d="M435.9,1050.3c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L435.9,1050.3z"
              />
              <path
                className="st7"
                d="M440.2,1072.5l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7l-12.4,27.4H440.2z"
              />
              <path
                className="st7"
                d="M332,1075.8c7.9-0.2,14.4,6.1,14.6,14c0,0.3,0,0.5,0,0.8c0.1,3.6-1.2,7.1-3.5,9.8l3.4,3.8l-3.6,3.1l-3.5-3.8
		c-2.3,1.3-4.8,1.9-7.4,1.9c-8.2-0.2-14.6-7-14.4-15.2C317.8,1082.3,324.1,1076,332,1075.8L332,1075.8z M332,1100
		c1.2,0,2.5-0.2,3.6-0.7l-4.4-4.9l3.7-3.2l4.4,5c1.1-1.7,1.6-3.6,1.6-5.6c0-6.4-4.5-9.4-8.9-9.4s-8.8,3-8.8,9.4S327.6,1100,332,1100
		L332,1100z"
              />
              <path
                className="st7"
                d="M363.2,1102.6c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5v-11.4h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C363.3,1104.1,363.2,1103.3,363.2,1102.6z"
              />
              <path
                className="st7"
                d="M378.1,1093.4l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.1-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1H385c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C372.3,1095.9,374.9,1093.9,378.1,1093.4z M384.5,1096.8v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C382.4,1101.3,384.5,1100.3,384.5,1096.8L384.5,1096.8z"
              />
              <path
                className="st7"
                d="M406.5,1090.3c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1090.3z"
              />
              <path
                className="st7"
                d="M416.3,1085.1h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.6c0-0.2,0-0.3,0-0.5v-2.8h4.8L416.3,1085.1z"
              />
              <path
                className="st7"
                d="M441.8,1099.1c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.3,9.7-10.3
		c6.1,0,9.7,3.9,9.7,10.2c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L441.8,1099.1z M436.8,1092.7
		c-0.1-2-1.4-3.9-4.4-3.9c-2.3-0.1-4.2,1.6-4.4,3.9H436.8z"
              />
              <path
                className="st7"
                d="M457.8,1090.3c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V1090.3z"
              />
            </g>
            <g id="St._Paul_s">
              <path
                className="st7"
                d="M574.1,939.6c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8c5.2,1,7.9,4.4,7.9,8.4
		c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5c0-1.6-1.2-2.9-3.4-3.4
		l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L574.1,939.6z"
              />
              <path
                className="st7"
                d="M589.8,940h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2H581V940h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L589.8,940z"
              />
              <path
                className="st7"
                d="M601.1,952.7c2,0,3.6,1.6,3.6,3.6c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6C597.4,954.3,599.1,952.7,601.1,952.7z
		"
              />
              <path
                className="st7"
                d="M625,949v10.7h-5.5v-28.4h10.6c5.6,0,9.3,3.7,9.3,8.8s-3.7,8.8-9.3,8.8H625z M629.4,944.2c2.8,0,4.4-1.6,4.4-4
		s-1.7-4.1-4.4-4.1H625v8.1L629.4,944.2z"
              />
              <path
                className="st7"
                d="M647.5,948.4l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.5,3.5,8.5,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C641.6,950.8,644.2,948.8,647.5,948.4z M653.8,951.7v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C651.8,956.3,653.8,955.2,653.8,951.7z"
              />
              <path
                className="st7"
                d="M676.6,957.6c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8V940h5.3v11.4c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.4c0-0.2,0-0.3,0-0.5V940h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C676.6,959,676.6,958.3,676.6,957.6z"
              />
              <path className="st7" d="M686.9,959.7v-29h5.3v29H686.9z" />
              <path
                className="st7"
                d="M699.1,931c2,0.1,3.5,1.7,3.5,3.7c0,0.1,0,0.1,0,0.2c0,5.4-3.7,7.3-6.2,7.6V940c1.7-0.3,3.1-1.7,3.3-3.4
		c-0.3,0.1-0.5,0.2-0.8,0.2c-1.5,0.1-2.8-1-2.9-2.5c0-0.1,0-0.2,0-0.3c0-1.7,1.4-3,3.1-2.9C699,931,699.1,931,699.1,931z"
              />
              <path
                className="st7"
                d="M709.2,953.2c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.3-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L709.2,953.2z"
              />
            </g>
            <g id="St._Chads">
              <path
                className="st7"
                d="M300,811.7c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8c5.2,1,7.9,4.4,7.9,8.4
		c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5c0-1.6-1.2-2.9-3.4-3.4
		l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.3L300,811.7z"
              />
              <path
                className="st7"
                d="M315.7,812.1h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L315.7,812.1z"
              />
              <path
                className="st7"
                d="M327,824.8c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6C323.4,826.4,325,824.8,327,824.8z"
              />
              <path
                className="st7"
                d="M343.7,817.6c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S343.7,826.6,343.7,817.6z"
              />
              <path
                className="st7"
                d="M380.4,831.8h-5.3v-29h5.3v10.9c1.4-1.4,3.3-2.2,5.3-2.2c5,0,7.3,3.5,7.3,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.2,0-3.6,1.7-3.7,3.8V831.8z"
              />
              <path
                className="st7"
                d="M402.6,820.4l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C396.7,822.9,399.3,820.9,402.6,820.4z M408.9,823.8v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C406.9,828.3,408.9,827.3,408.9,823.8z"
              />
              <path
                className="st7"
                d="M437.8,828.2c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V828.2z M427.8,827.5c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S425,827.5,427.8,827.5z"
              />
              <path
                className="st7"
                d="M445.9,825.3c0.1,1.8,1.7,3.1,3.5,3c0,0,0.1,0,0.1,0c1.8,0,2.6-0.9,2.6-2c0-0.9-0.6-1.6-2.1-1.9l-2.6-0.6
		c-3.8-0.8-5.5-3.1-5.5-5.9c0-3.5,3.1-6.4,7.4-6.4c5.6,0,7.5,3.6,7.7,5.7l-4.4,1c-0.2-1.6-1.6-2.8-3.2-2.6c-1.4,0-2.5,0.8-2.5,2
		c0,1,0.7,1.6,1.8,1.8l2.8,0.6c3.9,0.8,5.8,3.2,5.8,6c0,3.2-2.5,6.5-7.6,6.5c-5.9,0-8-3.8-8.2-6.1L445.9,825.3z"
              />
            </g>
            <g id="Bull_Street">
              <path
                className="st7"
                d="M570.2,678c5.5,0,8.6,3.2,8.6,7.6c0.1,2.7-1.6,5.1-4.1,6.1c3,0.8,5.1,3.6,5,6.7c0,4.6-3.4,7.9-8.8,7.9h-11V678
		H570.2z M569.3,689.7c2.5,0,4-1.4,4-3.6s-1.4-3.5-4.1-3.5h-3.9v7.1L569.3,689.7z M569.9,701.7c2.7,0,4.3-1.4,4.3-3.7
		s-1.4-3.8-4.2-3.8h-4.6v7.5L569.9,701.7z"
              />
              <path
                className="st7"
                d="M596.2,704.2c-1.2,1.8-3.3,2.8-5.4,2.6c-4.8,0-7.5-3.5-7.5-7.8v-12.4h5.3V698c0,2.2,1.1,4,3.6,4
		c2,0.1,3.6-1.4,3.7-3.3c0-0.2,0-0.4,0-0.5v-11.5h5.3v16.1c0,1.2,0.1,2.4,0.2,3.6h-5.1C596.3,705.6,596.2,704.9,596.2,704.2z"
              />
              <path className="st7" d="M606.5,706.4v-29h5.3v29H606.5z" />
              <path className="st7" d="M617,706.4v-29h5.3v29H617z" />
              <path
                className="st7"
                d="M651.4,686.3c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8c5.2,1,7.9,4.4,7.9,8.4
		c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.4c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5c0-1.6-1.2-2.9-3.4-3.4
		l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L651.4,686.3z"
              />
              <path
                className="st7"
                d="M667.2,686.7h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L667.2,686.7z"
              />
              <path
                className="st7"
                d="M687,692c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H675v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L687,692z"
              />
              <path
                className="st7"
                d="M707.8,700.7c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L707.8,700.7z M702.8,694.3c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H702.8z"
              />
              <path
                className="st7"
                d="M729.5,700.7c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L729.5,700.7z M724.5,694.3c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H724.5z"
              />
              <path
                className="st7"
                d="M740,686.7h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.7-0.1v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.5v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8V686.7z"
              />
            </g>
            <g id="Corporation_Street">
              <path
                className="st7"
                d="M237.8,543.2c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S237.8,552.3,237.8,543.2z"
              />
              <path
                className="st7"
                d="M288.3,547.6c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C288.3,547.2,288.3,547.4,288.3,547.6z M283,547.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S283,551.3,283,547.6L283,547.6z"
              />
              <path
                className="st7"
                d="M304,543c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H292v-19.6h5.1v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L304,543z"
              />
              <path
                className="st7"
                d="M307.2,565v-27.2h5.2v2.4c0.9-1.5,3.1-2.8,6-2.8c5.8,0,9.1,4.4,9.1,10.2s-3.7,10.4-9.3,10.4
		c-2.2,0.1-4.3-0.8-5.7-2.4v9.5L307.2,565z M317.3,542c-2.7,0-4.9,2-4.9,5.5s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S320.1,542,317.3,542
		L317.3,542z"
              />
              <path
                className="st7"
                d="M350.3,547.6c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.6,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C350.3,547.2,350.3,547.4,350.3,547.6z M345,547.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S345,551.3,345,547.6L345,547.6z"
              />
              <path
                className="st7"
                d="M366.1,543c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.6h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V543z"
              />
              <path
                className="st7"
                d="M373.9,546.1l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C368,548.5,370.6,546.6,373.9,546.1z M380.2,549.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C378.1,554,380.2,552.9,380.2,549.4z"
              />
              <path
                className="st7"
                d="M396.9,537.8h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2H388v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L396.9,537.8z"
              />
              <path
                className="st7"
                d="M407.4,528c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C404.1,529.5,405.5,528,407.4,528C407.4,528,407.4,528,407.4,528z M404.7,557.4v-19.6h5.3v19.7L404.7,557.4z"
              />
              <path
                className="st7"
                d="M434.4,547.6c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C434.4,547.2,434.4,547.4,434.4,547.6z M429.1,547.6c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S429.1,551.3,429.1,547.6z"
              />
              <path
                className="st7"
                d="M443.5,557.4h-5.3v-19.6h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.5
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L443.5,557.4z"
              />
              <path
                className="st7"
                d="M364.5,577.3c-0.4-2.5-2.7-4.2-5.2-4c-2.7,0-4.4,1.7-4.4,3.6c0,1.6,1,2.8,3.1,3.2l4,0.8c5.2,1,7.9,4.4,7.9,8.4
		c0,4.4-3.6,8.8-10.2,8.8c-7.5,0-10.8-4.8-11.3-8.9l5.1-1.3c0.2,2.8,2.2,5.3,6.2,5.3c3,0,4.6-1.5,4.6-3.5c0-1.6-1.2-2.9-3.4-3.4
		l-4-0.8c-4.5-0.9-7.4-3.8-7.4-8.1c0-5,4.5-8.9,9.9-8.9c6.9,0,9.5,4.2,10.2,7.4L364.5,577.3z"
              />
              <path
                className="st7"
                d="M380.3,577.8h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L380.3,577.8z"
              />
              <path
                className="st7"
                d="M400.1,583c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.6h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1V583z"
              />
              <path
                className="st7"
                d="M420.9,591.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L420.9,591.8z M415.9,585.3c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H415.9z"
              />
              <path
                className="st7"
                d="M442.6,591.8c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L442.6,591.8z M437.6,585.3c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H437.6z"
              />
              <path
                className="st7"
                d="M453.1,577.8h4v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L453.1,577.8z"
              />
            </g>
            <g id="Grand_Central">
              <path
                className="st7"
                d="M581.2,439.9l-0.3-3.2c-1.3,1.9-4.1,3.8-8.4,3.8c-7.6,0-14.2-5.6-14.2-14.8s6.8-14.8,14.5-14.8
		c7.4,0,11.5,4.4,13,8.7l-5.3,1.9c-1-3.4-4.2-5.6-7.7-5.4c-4.3,0-8.9,2.9-8.9,9.6c0,6.4,4.2,9.7,9,9.7c5.2,0,7.3-3.5,7.6-5.5h-9
		v-4.8h14.2v14.8H581.2z"
              />
              <path
                className="st7"
                d="M602.3,425.5c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L602.3,425.5z"
              />
              <path
                className="st7"
                d="M610.2,428.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C604.3,431,606.9,429,610.2,428.6z M616.5,431.9V431l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C614.4,436.5,616.5,435.4,616.5,431.9L616.5,431.9z"
              />
              <path
                className="st7"
                d="M631.9,439.9h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L631.9,439.9z"
              />
              <path
                className="st7"
                d="M668.2,436.3c0,1.3,0.1,2.8,0.2,3.6h-5.1c-0.1-0.8-0.2-1.5-0.2-2.3c-1.2,1.8-3.3,2.9-5.5,2.8
		c-5.6,0-9.6-4.4-9.6-10.4c0-5.8,3.9-10.3,9.4-10.3c3.4,0,5,1.4,5.6,2.4v-11.2h5.2V436.3z M658.2,435.6c2.7,0,4.8-2.1,4.8-5.6
		s-2.1-5.5-4.8-5.5s-4.9,2-4.9,5.5S655.4,435.6,658.2,435.6L658.2,435.6z"
              />
              <path
                className="st7"
                d="M681.6,425.8c-0.3-7.9,5.9-14.5,13.8-14.8c0.2,0,0.4,0,0.6,0c7.8,0,11.9,4.8,13,9.4l-5.2,1.6
		c-0.7-2.7-2.9-5.7-7.8-5.7c-4.2,0-8.7,3-8.7,9.5c0,6,4.2,9.4,8.8,9.4c3.7,0.2,7-2.2,8-5.8l5.2,1.6c-1.1,4.4-5.2,9.6-13.1,9.6
		S681.6,434.8,681.6,425.8z"
              />
              <path
                className="st7"
                d="M730.6,434.2c-1,3.4-4.1,6.2-9,6.2c-5.4,0-10.2-3.9-10.2-10.5c0-6.3,4.6-10.4,9.7-10.4c6.1,0,9.7,3.9,9.7,10.2
		c0,0.8-0.1,1.6-0.1,1.6h-14c0.2,2.6,2.4,4.6,5,4.5c2,0.2,3.9-1.1,4.5-3L730.6,434.2z M725.6,427.8c-0.1-2-1.4-3.9-4.4-3.9
		c-2.3-0.1-4.2,1.6-4.4,3.9H725.6z"
              />
              <path
                className="st7"
                d="M739.9,439.9h-5.3v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L739.9,439.9z"
              />
              <path
                className="st7"
                d="M764.1,420.2h3.9v4.7h-4v8.2c0,1.7,0.8,2.3,2.3,2.3c0.6,0,1.1,0,1.6-0.2v4.4c-1,0.4-2,0.5-3,0.5
		c-3.8,0-6.2-2.3-6.2-6.1v-9.2h-3.6v-4.7h1c1.6,0.1,2.9-1.1,3-2.7c0-0.2,0-0.3,0-0.5v-2.8h4.8L764.1,420.2z"
              />
              <path
                className="st7"
                d="M783.9,425.5c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H772v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L783.9,425.5z"
              />
              <path
                className="st7"
                d="M791.8,428.6l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C785.9,431,788.5,429,791.8,428.6z M798.1,431.9V431l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C796,436.5,798.1,435.4,798.1,431.9L798.1,431.9z"
              />
              <path className="st7" d="M808.2,439.9v-29h5.3v29H808.2z" />
              <path
                className="st7"
                d="M572.7,472.9L562,456.7v16.2h-2.7V453h3.7l9.9,15.2V453h2.7v19.8H572.7z"
              />
              <path
                className="st7"
                d="M592.1,469c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8H582c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L592.1,469z M589.4,464.8
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4H589.4z"
              />
              <path
                className="st7"
                d="M605.8,459.4l3.5,10.1l3-10.1h2.8l-4.4,13.5H608l-3.6-10.2l-3.5,10.2h-2.8l-4.4-13.5h2.9l3,10.1l3.5-10.1
		H605.8z"
              />
              <path
                className="st7"
                d="M635.2,458.4c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.7
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.2,2.5,2.3,4.4,4.8,4.2c2.7,0,4.1-1.4,4.1-3.2
		c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L635.2,458.4z"
              />
              <path
                className="st7"
                d="M644.9,459.4h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L644.9,459.4z"
              />
              <path
                className="st7"
                d="M658.8,462.1c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L658.8,462.1z"
              />
              <path
                className="st7"
                d="M673.3,469c-0.8,2.6-3.3,4.3-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L673.3,469z M670.6,464.8
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4H670.6z"
              />
              <path
                className="st7"
                d="M688.5,469c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L688.5,469z M685.8,464.8
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H685.8z"
              />
              <path
                className="st7"
                d="M695.4,459.4h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.8c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L695.4,459.4z"
              />
              <path
                className="st7"
                d="M719.3,458.4c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.7
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.7,4.3c0,0,0,0,0,0
		c2.7,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L719.3,458.4z"
              />
              <path
                className="st7"
                d="M729,459.4h2.9v2.4H729v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.1-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4V459.4z"
              />
              <path
                className="st7"
                d="M738.6,465.2l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C734.5,466.9,736.3,465.5,738.6,465.2z M743.3,467.1v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C741.6,471.1,743.3,470.1,743.3,467.1L743.3,467.1z"
              />
              <path
                className="st7"
                d="M753.6,459.4h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.3c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4L753.6,459.4z"
              />
              <path
                className="st7"
                d="M761.3,452.4c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C759.4,453.3,760.2,452.4,761.3,452.4C761.3,452.4,761.3,452.4,761.3,452.4z M760,472.9v-13.5h2.6v13.5H760z"
              />
              <path
                className="st7"
                d="M779.7,466.1c-0.1,3.8-3.3,6.8-7.1,6.6s-6.8-3.3-6.6-7.1c0.1-3.7,3.2-6.6,6.9-6.6c3.8-0.1,6.8,2.9,6.9,6.7
		C779.7,465.8,779.7,466,779.7,466.1z M777,466.1c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8s2,4.8,4.2,4.8S777,469.3,777,466.1
		L777,466.1z"
              />
              <path
                className="st7"
                d="M785.7,472.9h-2.6v-13.5h2.6v1.9c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5H792v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L785.7,472.9z"
              />
            </g>
            <g id="Town_Hall">
              <path className="st7" d="M289.4,283.2v23.1h-5.6v-23.1h-9V278h23.5v5.2H289.4z" />
              <path
                className="st7"
                d="M320.6,296.5c-0.1,5.7-4.7,10.3-10.4,10.2s-10.3-4.7-10.2-10.4c0.1-5.7,4.7-10.2,10.3-10.2
		c5.6-0.1,10.2,4.3,10.3,9.9C320.6,296.1,320.6,296.3,320.6,296.5z M315.2,296.5c0-3.7-2.4-5.6-5-5.6s-5,1.9-5,5.6s2.4,5.6,5,5.6
		S315.2,300.2,315.2,296.5z"
              />
              <path
                className="st7"
                d="M341,286.7l4.2,12.7l3.6-12.7h5.3l-6.2,19.7h-5.3l-4.6-13.4l-4.5,13.4h-5.4l-6.3-19.7h5.6l3.6,12.6l4.3-12.6
		H341z"
              />
              <path
                className="st7"
                d="M362.4,306.3H357v-19.7h5.2v2.4c1.2-1.9,3.4-3.1,5.7-3c4.9,0,7.1,3.5,7.1,7.8v12.4h-5.3v-11.4
		c0-2.2-1.1-3.9-3.6-3.9c-2.3,0-3.7,1.8-3.7,4.1L362.4,306.3z"
              />
              <path
                className="st7"
                d="M407.6,306.3v-11.8h-12.4v11.8h-5.5V278h5.5v11.4h12.4V278h5.6v28.4H407.6z"
              />
              <path
                className="st7"
                d="M423.4,295l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C417.6,297.5,420.2,295.5,423.4,295z M429.8,298.4v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C427.7,302.9,429.8,301.9,429.8,298.4z"
              />
              <path className="st7" d="M439.8,306.3v-29h5.3v29H439.8z" />
              <path className="st7" d="M450.4,306.3v-29h5.3v29H450.4z" />
              <path
                className="st7"
                d="M284.4,319.5h2.9l-7.6,19.9h-2.7l-7.5-19.9h2.9l6,16.3L284.4,319.5z"
              />
              <path
                className="st7"
                d="M290.7,318.9c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9c-1,0-1.9-0.8-1.9-1.9
		C288.8,319.7,289.7,318.9,290.7,318.9C290.7,318.9,290.7,318.9,290.7,318.9z M289.4,339.3v-13.5h2.6v13.5H289.4z"
              />
              <path
                className="st7"
                d="M297.8,332.6c0,3.1,1.9,4.7,4.1,4.7c1.8,0.1,3.3-1.1,3.8-2.8l2.3,1c-0.9,2.6-3.3,4.3-6.1,4.2
		c-3.9,0-6.8-3.1-6.8-7.2s2.9-7.1,6.8-7.1c2.8-0.2,5.3,1.6,6,4.3l-2.4,1c-0.3-1.7-1.9-2.9-3.6-2.9
		C299.7,327.9,297.8,329.4,297.8,332.6z"
              />
              <path
                className="st7"
                d="M314.2,325.9h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4H309v-2.4h0.7c1,0.1,2-0.6,2.1-1.7c0-0.1,0-0.3,0-0.4v-2.2h2.4V325.9z"
              />
              <path
                className="st7"
                d="M332.9,332.6c0.2,3.7-2.7,7-6.4,7.2c-0.2,0-0.3,0-0.5,0c-4,0-6.9-3.1-6.9-7.2c-0.1-3.8,2.8-7,6.6-7.1
		c3.8-0.1,7,2.8,7.1,6.6C332.9,332.2,332.9,332.4,332.9,332.6L332.9,332.6z M330.2,332.6c0-3.1-2-4.8-4.2-4.8s-4.2,1.7-4.2,4.8
		s2,4.8,4.2,4.8S330.2,335.7,330.2,332.6z"
              />
              <path
                className="st7"
                d="M343.4,328.5c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8H336v-13.5h2.6v2.3c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1V328.5z"
              />
              <path
                className="st7"
                d="M347.2,318.9c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9s-1.9-0.8-1.9-1.9c0,0,0,0,0,0
		C345.3,319.7,346.2,318.9,347.2,318.9z M345.9,339.3v-13.5h2.6v13.5H345.9z"
              />
              <path
                className="st7"
                d="M355.9,331.6l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0.1l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.7c0,0.7,0,1.5,0.2,2.2h-2.5c-0.1-0.6-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C351.8,333.3,353.6,332,355.9,331.6z M360.6,333.6v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C358.8,337.5,360.6,336.5,360.6,333.6z"
              />
              <path
                className="st7"
                d="M384.1,324.9c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.1,2.8,5.1,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.8,4.3c0,0,0,0,0,0
		c2.8,0,4.1-1.4,4.1-3.2c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L384.1,324.9z"
              />
              <path
                className="st7"
                d="M399.4,344.7v-7.2c-0.9,1.5-2.5,2.4-4.2,2.3c-3.9,0-6.4-3.2-6.4-7.1s2.4-7,6.3-7c1.8-0.1,3.5,0.8,4.3,2.4v-2.1
		h2.6v18.8L399.4,344.7z M395.4,337.4c2.4,0,4-2,4-4.8s-1.6-4.7-4-4.7s-4,1.9-4,4.7S393,337.4,395.4,337.4L395.4,337.4z"
              />
              <path
                className="st7"
                d="M410.7,339.8c-3.1,0-5-2.4-5-5.4v-8.5h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.4v-8.1h2.6v11
		c0,0.8,0.1,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C413.9,339.1,412.3,339.9,410.7,339.8z"
              />
              <path
                className="st7"
                d="M424.6,331.6l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.6c0,0,0,0,0,0.1l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.7c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.3
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C420.5,333.3,422.3,332,424.6,331.6z M429.3,333.6v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C427.5,337.5,429.3,336.5,429.3,333.6L429.3,333.6z"
              />
              <path
                className="st7"
                d="M443.1,328.5c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.2v6.8h-2.6v-13.5h2.6v2.3c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L443.1,328.5z"
              />
              <path
                className="st7"
                d="M457.3,335.5c-0.8,2.6-3.3,4.4-6,4.3c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.8,6.5,7
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L457.3,335.5z M454.7,331.2
		c0-1.9-1.5-3.4-3.3-3.4c-0.1,0-0.2,0-0.3,0c-2,0-3.6,1.5-3.7,3.5L454.7,331.2z"
              />
            </g>
            <g id="Library">
              <path className="st7" d="M560,180.3v-28.3h5.5V175h12.6v5.3L560,180.3z" />
              <path
                className="st7"
                d="M584.2,150.8c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3c-1.8,0-3.3-1.4-3.3-3.2
		C580.8,152.3,582.3,150.9,584.2,150.8C584.1,150.8,584.1,150.8,584.2,150.8z M581.5,180.3v-19.7h5.3v19.7H581.5z"
              />
              <path
                className="st7"
                d="M592,180.3v-29h5.2v11.5c0.9-1.4,3-2.7,6-2.7c5.8,0,9.1,4.4,9.1,10.3s-3.7,10.4-9.3,10.4
		c-2.3,0.1-4.5-1-5.8-2.9v2.4L592,180.3z M602.1,164.8c-2.7,0-4.9,2-4.9,5.6s2.2,5.6,4.9,5.6s4.9-2,4.9-5.6S604.8,164.8,602.1,164.8
		L602.1,164.8z"
              />
              <path
                className="st7"
                d="M628,165.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9H616v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L628,165.9z"
              />
              <path
                className="st7"
                d="M635.9,168.9l4.8-0.7c1.1-0.2,1.5-0.7,1.5-1.4c0-1.4-1.1-2.6-3.3-2.6c-1.9-0.2-3.6,1.3-3.8,3.2c0,0,0,0,0,0
		l-4.7-1c0.3-3.1,3.2-6.5,8.4-6.5c6.2,0,8.6,3.5,8.6,7.5v9.7c0,1,0.1,2.1,0.2,3.1h-4.9c-0.1-0.8-0.2-1.6-0.2-2.4
		c-1.3,1.9-3.5,3-5.8,2.9c-4.2,0-6.8-2.8-6.8-5.9C630,171.4,632.6,169.4,635.9,168.9z M642.2,172.3v-0.9l-4.4,0.7
		c-1.4,0-2.4,1.1-2.4,2.5c0,1.3,1.1,2.3,2.3,2.3c0.1,0,0.2,0,0.2,0C640.1,176.9,642.2,175.8,642.2,172.3L642.2,172.3z"
              />
              <path
                className="st7"
                d="M664.3,165.9c-0.5-0.1-1.1-0.2-1.6-0.2c-2.7,0-5.1,1.3-5.1,5.6v9h-5.3v-19.7h5.2v2.9c1.2-2.6,3.9-3.1,5.6-3.1
		c0.4,0,0.8,0,1.2,0.1L664.3,165.9z"
              />
              <path
                className="st7"
                d="M668.6,188l4.6-10.2l-8.4-17.2h6l5.2,11.5l4.8-11.5h5.7L674.3,188L668.6,188z"
              />
              <path
                className="st7"
                d="M558,203.3c0-6.6,4.9-10.3,9.9-10.3c4.5,0,7.7,2.5,8.7,6.3l-2.5,0.9c-0.6-2.9-3.2-4.9-6.2-4.7
		c-3.6,0-7.1,2.6-7.1,7.8s3.4,7.8,7.1,7.8c3,0.1,5.6-1.9,6.3-4.8l2.4,0.9c-1.1,3.9-4.7,6.6-8.8,6.4C562.7,213.7,558,210,558,203.3z"
              />
              <path
                className="st7"
                d="M591.7,209.4c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6,0,0.8h-10.2c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L591.7,209.4z M589.1,205.1
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-2,0-3.6,1.5-3.7,3.4H589.1z"
              />
              <path
                className="st7"
                d="M597.8,213.3h-2.6v-13.5h2.6v2c0.8-1.5,2.4-2.4,4.1-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7V213.3z"
              />
              <path
                className="st7"
                d="M614.4,199.8h2.9v2.4h-2.9v7c0,1.2,0.5,1.8,1.9,1.8c0.3,0,0.7,0,1-0.1v2.2c-0.6,0.2-1.2,0.3-1.8,0.2
		c-1.9,0.2-3.6-1.3-3.8-3.2c0-0.2,0-0.4,0-0.6v-7.4h-2.6v-2.4h0.8c1,0.1,1.9-0.7,2-1.8c0-0.1,0-0.2,0-0.2v-2.2h2.4L614.4,199.8z"
              />
              <path
                className="st7"
                d="M632.6,209.4c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3-7.1,6.4-7.1c4.1,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L632.6,209.4z M629.9,205.1
		c0-1.9-1.4-3.4-3.3-3.5c-0.1,0-0.3,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H629.9z"
              />
              <path
                className="st7"
                d="M638.7,213.3H636v-13.5h2.6v2c0.8-1.5,2.4-2.4,4.2-2.3c3.2,0,4.8,2.3,4.8,5.3v8.5h-2.6v-8.1
		c0-1.9-0.8-3.4-3.1-3.4c-2.1,0-3.1,1.7-3.1,3.7L638.7,213.3z"
              />
              <path
                className="st7"
                d="M655,205.6l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.2-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C650.9,207.2,652.7,205.9,655,205.6z M659.7,207.5v-0.6l-4.1,0.6c-1.1,0.1-2,1-1.9,2.1
		s1,2,2.1,1.9C657.9,211.5,659.7,210.4,659.7,207.5z"
              />
              <path
                className="st7"
                d="M673.9,202.5c-0.4-0.1-0.8-0.1-1.2-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1V202.5z"
              />
              <path
                className="st7"
                d="M677.2,218.9l3.4-7.1l-5.8-12h3l4.2,9.3l4-9.3h2.8l-8.7,19.1H677.2z"
              />
              <path
                className="st7"
                d="M708.8,198.8c-0.3-2-2.1-3.5-4.2-3.4c-2.2,0-3.8,1.5-3.8,3.3c0,1.5,1.1,2.7,2.5,2.9l3,0.6
		c3.3,0.7,5.2,2.8,5.2,5.6c0,3.1-2.6,5.9-6.9,5.9c-4.8,0-7.1-3.1-7.4-5.9l2.6-0.8c0.1,2.5,2.3,4.4,4.8,4.3c2.8,0,4.1-1.4,4.1-3.2
		c0-1.4-1-2.7-3-3.1l-2.8-0.6c-2.8-0.6-4.8-2.5-4.8-5.4s2.9-5.9,6.5-5.9c4.5,0,6.3,2.8,6.7,4.9L708.8,198.8z"
              />
              <path
                className="st7"
                d="M724.4,218.6v-7.2c-0.9,1.5-2.5,2.4-4.2,2.3c-3.9,0-6.4-3.2-6.4-7.2s2.4-7,6.3-7c1.8-0.1,3.5,0.8,4.3,2.4v-2.1
		h2.6v18.8L724.4,218.6z M720.4,211.3c2.4,0,4-2,4-4.8s-1.6-4.7-4-4.7s-4,1.9-4,4.7S718,211.3,720.4,211.3L720.4,211.3z"
              />
              <path
                className="st7"
                d="M736.1,213.7c-3.1,0-5-2.3-5-5.4v-8.5h2.6v8.1c0,1.8,0.8,3.5,3,3.5s3.2-1.4,3.2-3.5v-8.1h2.6v11
		c0,0.8,0,1.7,0.1,2.5h-2.5c-0.1-0.5-0.1-1.1-0.1-1.6C739.2,213,737.7,213.8,736.1,213.7z"
              />
              <path
                className="st7"
                d="M750.3,205.6l3.6-0.5c0.8-0.1,1-0.5,1-1c0-1.3-0.9-2.4-2.9-2.4c-1.6-0.1-2.9,1.1-3,2.7c0,0,0,0,0,0l-2.5-0.6
		c0.3-2.6,2.6-4.4,5.5-4.4c4,0,5.6,2.3,5.6,4.9v6.8c0,0.7,0,1.5,0.2,2.2h-2.6c-0.1-0.6-0.1-1.2-0.1-1.8c-0.9,1.5-2.6,2.3-4.3,2.2
		c-2.3,0.2-4.3-1.6-4.5-3.9c0,0,0-0.1,0-0.1C746.2,207.2,748,205.9,750.3,205.6z M755,207.5v-0.6l-4.1,0.6c-1.1,0-2,0.9-2,2
		c0,1.1,0.9,2,2,2c0.1,0,0.1,0,0.2,0C753.2,211.5,755,210.4,755,207.5L755,207.5z"
              />
              <path
                className="st7"
                d="M769.2,202.5c-0.4-0.1-0.8-0.1-1.1-0.1c-2.2,0-3.7,1.2-3.7,4.1v6.8h-2.6v-13.5h2.6v2.4c0.7-1.6,2.3-2.6,4-2.6
		c0.3,0,0.6,0,0.9,0.1L769.2,202.5z"
              />
              <path
                className="st7"
                d="M783.7,209.4c-0.8,2.6-3.3,4.4-6,4.2c-3.6,0-6.8-2.6-6.8-7.2c0-4.2,3.1-7.1,6.4-7.1c4.2,0,6.5,2.9,6.5,7.1
		c0,0.3,0,0.6-0.1,0.8h-10.1c0,2.2,1.7,4,3.9,4.1c0.1,0,0.1,0,0.2,0c1.7,0.1,3.3-1,3.8-2.7L783.7,209.4z M781,205.1
		c0-1.9-1.5-3.4-3.3-3.5c-0.1,0-0.2,0-0.4,0c-1.9,0-3.6,1.5-3.7,3.4H781z"
              />
            </g>
          </svg>
        )}
      </ReactSVGPanZoom>
    </>
  );
};

export default MetroZoneMap;
