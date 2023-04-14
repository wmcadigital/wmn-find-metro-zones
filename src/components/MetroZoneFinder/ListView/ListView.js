import React, { useState } from 'react';
import PandR from 'components/shared/PandR/PandR';
import Button from '../../shared/Button/Button';
import Icon from '../../shared/Icon/Icon';
// import AccessibilityKey from '../../shared/AccessibilityKey/AccessibilityKey';
import Accordion from '../../shared/Accordion/Accordion';
import AutoComplete from '../../shared/AutoComplete/AutoComplete';
import s from './ListView.module.scss';

// import railData from '../RailData.json';
import metroData from '../MetroData.json';

function ListView() {
  const [accordions, setAccordions] = useState([
    { name: 'Zone 1', open: false },
    { name: 'Zone 2', open: false },
    { name: 'Zone 3', open: false },
    { name: 'Zone 4', open: false },
  ]);

  const toggleAccordions = (open) => {
    const newState = accordions.map((accordion) => {
      // make sure all accordions do the right thing
      const accordionState = accordion;
      if (open) {
        accordionState.open = true;
      } else {
        accordionState.open = false;
      }
      return accordionState;
    });
    setAccordions([...newState]);
  };

  return (
    <div className="wmnds-container">
      <div className="wmnds-grid wmnds-grid--spacing-md-2-lg wmnds-p-b-md">
        <div className="wmnds-col-1-1 wmnds-col-md-2-3">
          <div className={`wmnds-bg-white wmnds-p-md ${s.trayComponents}`}>
            <AutoComplete />
          </div>
        </div>
      </div>
      <h2>Stops by zone</h2>
      <div className="wmnds-grid wmnds-grid--spacing-md-2-lg wmnds-m-b-md">
        <div className="wmnds-col-1-1 wmnds-col-md-2-3">
          <div className="wmnds-grid wmnds-grid--justify-between wmnds-grid--align-center">
            <div className="wmnds-col-1-1 wmnds-col-md-auto">
              <p className="wmnds-m-b-sm wmnds-m-t-sm">
                View a list of all the tram stops in each zone.
              </p>
            </div>
            <div className="wmnds-col-1-1 wmnds-col-md-auto">
              <div className="wmnds-hide-mobile">
                <Button
                  onClick={() => toggleAccordions(true)}
                  text="Open all"
                  btnClass="wmnds-m-r-sm wmnds-btn--primary"
                />
                <Button
                  onClick={() => toggleAccordions(false)}
                  text="Close all"
                  btnClass="wmnds-btn--primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`wmnds-grid wmnds-grid--spacing-md-2-lg wmnds-p-b-lg ${s.reverseXs}`}>
        <div className="wmnds-col-1-1 wmnds-col-md-2-3">
          <div className="wmnds-hide-desktop wmnds-m-b-md">
            <Button
              onClick={() => toggleAccordions(true)}
              text="Open all"
              btnClass="wmnds-m-r-sm wmnds-btn--primary"
            />
            <Button
              onClick={() => toggleAccordions(false)}
              text="Close all"
              btnClass="wmnds-btn--primary"
            />
          </div>
          {accordions.map((accordion, i) => {
            // Make id from accordion name
            const accordionId = `${accordion.name.toLowerCase().replace(' ', '')}-${i}`;
            // Update accordion state on click
            const handleClick = () => {
              const newState = accordions;
              newState[i].open = !accordions[i].open;
              setAccordions([...newState]);
            };
            // Filter stations with metroZones matching the current iteration (i)
            const zoneStations = metroData.metroStationAccess.filter(
              (station) => station.metroZone === i + 1
            );
            return (
              <div key={accordionId} className="wmnds-p-b-md">
                <Accordion
                  key={accordionId}
                  id={accordionId}
                  heading={accordion.name}
                  isOpen={accordion.open}
                  handleClick={handleClick}
                >
                  <ul>
                    {zoneStations.map((station) => (
                      <li key={station.crsCode} className={s.accordionListItem}>
                        {station.metroZoneSecond
                          ? `${station.stationName} (also in Zone ${station.metroZoneSecond})`
                          : station.stationName}
                        {station.parking && (
                          <>
                            <span className={s.srOnly}>
                              {station.stepFreeAccess ? 'and parking' : 'which has parking'}
                            </span>
                            <Icon
                              iconName="modes-bg-p-r"
                              color="primary"
                              size={24}
                              title="parkride"
                              className="wmnds-m-l-xsm"
                            />
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </Accordion>
              </div>
            );
          })}
        </div>
        <div className={`wmnds-col-1-1 wmnds-col-md-1-3 ${s.keyCol}`}>
          <div className="wmnds-content-card">
            <PandR />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
