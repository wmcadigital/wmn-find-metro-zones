import React, { useContext } from 'react';
import { AutoCompleteContext } from 'globalState';
// Rail zone svg component
// import Button from '../shared/Button/Button';
import Icon from '../shared/Icon/Icon';
import Breadcrumbs from '../shared/Breadcrumbs/Breadcrumbs';
// import MapView from './MapView/MapView';
import ListView from './ListView/ListView';
import s from './MetroZoneFinder.module.scss';

function MetroZoneFinder() {
  const [autoCompleteState] = useContext(AutoCompleteContext);
  // const [mapState, mapDispatch] = useContext(MapContext);
  // const { mapView } = mapState;

  return (
    <>
      <div className="wmnds-container">
        {autoCompleteState.ticketMode ? (
          <div className="wmnds-m-b-lg wmnds-m-t-md">
            <a
              href="https://find-a-ticket.tfwm.org.uk/"
              className={`wmnds-btn wmnds-btn--link ${s.backLink}`}
            >
              <Icon iconName="general-chevron-right" /> Back to ticket finder
            </a>
          </div>
        ) : (
          <Breadcrumbs />
        )}
        <div className={`${s.mainHeading}`}>
          <div className="wmnds-col-auto">
            <h1>Find my Metro zones</h1>
          </div>
        </div>
        <div className="wmnds-grid">
          <div className="wmnds-col-md-3-4">
            <p>Tram stops across the West Midlands are in four zones.</p>
            <p>The zones you can travel between is based on your ticket.</p>
            <p>All tram stops have full step-free access.</p>
          </div>
        </div>
      </div>
      <ListView />
    </>
  );
}

export default MetroZoneFinder;
