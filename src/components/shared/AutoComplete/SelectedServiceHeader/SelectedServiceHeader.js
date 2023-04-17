import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Imported components
import CloseButton from './CloseButton/CloseButton';
import s from './SelectedServiceHeader.module.scss';
import useMapControls from '../../../MetroZoneFinder/Map/customHooks/useMapControls';

function SelectedServiceHeader({ autoCompleteState, autoCompleteDispatch, queryId }) {
  const selectedServiceRef = useRef(null);
  const { resetMapStation } = useMapControls();

  const selectedService = autoCompleteState.selectedStations[queryId];

  const tramstop = selectedService.stationDisplayName;

  const handleClick = () => {
    resetMapStation(selectedService, autoCompleteState.selectedStations);
    autoCompleteDispatch();
  };

  return (
    <>
      {/* Close disruption box */}
      <div
        className={`wmnds-grid wmnds-grid--justify-between wmnds-m-t-xs wmnds-m-b-md ${s.selectedStationBox}`}
        ref={selectedServiceRef}
      >
        <strong className={`wmnds-col-auto ${s.selectedSummary}`}>{tramstop}</strong>

        <CloseButton onClick={handleClick} />
      </div>
    </>
  );
}

// PropTypes
SelectedServiceHeader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  autoCompleteState: PropTypes.objectOf(PropTypes.any).isRequired,
  autoCompleteDispatch: PropTypes.func.isRequired,
  queryId: PropTypes.number.isRequired,
};

export default SelectedServiceHeader;
