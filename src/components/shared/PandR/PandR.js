import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import s from './PandR.module.scss';

function PandR({ mapView }) {
  return (
    <div className={mapView ? s.mapViewWrapper : s.listViewWrapper}>
      {!mapView && <h3 className="wmnds-p-md">Key</h3>}
      <div className={`${s.content}`}>
        <Icon
          iconName="modes-bg-p-r"
          color="primary"
          size={32}
          title="parkride"
          className="wmnds-m-l-md"
        />
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
}

PandR.propTypes = {
  mapView: PropTypes.bool,
};

PandR.defaultProps = {
  mapView: false,
};

export default PandR;
