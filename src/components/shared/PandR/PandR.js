import React from 'react';

// import PropTypes from 'prop-types';
// import { MapContext } from 'globalState';

import Icon from '../Icon/Icon';
// import AccessIcon from '../Icon/AccessIcon';
// import Button from '../Button/Button';
// import Checkbox from '../Checkbox/Checkbox';

import s from './PandR.module.scss';

const PandR = () => {
  // const [mapState, mapDispatch] = useContext(MapContext);
  // const [showKey, setShowKey] = useState(!mapView);
  return (
    <div className={s.pandRWrapper}>
      <div className={` ${s.content}`}>
        <Icon iconName="modes-bg-p-r" color="primary" size={32} title="parkride" />
        <span className="wmnds-p-t-xs wmnds-p-l-sm">
          Tram stops with
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/park-and-ride/"
            title="park and ride"
            target="_blank"
            rel="noreferrer"
            className="wmnds-link wmnds-p-l-xs"
          >
            Park and ride
          </a>
        </span>
      </div>
    </div>
  );
};

// AccessibilityKey.propTypes = {
//   mapView: PropTypes.bool,
// };

// AccessibilityKey.defaultProps = {
//   mapView: false,
// };

export default PandR;
