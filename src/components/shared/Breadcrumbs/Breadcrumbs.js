import React from 'react';

const { REACT_APP_TITLE } = process.env;

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="wmnds-breadcrumb">
      <ol className="wmnds-breadcrumb__list">
        <li className="wmnds-breadcrumb__list-item">
          <a href="https://tfwm.co.uk" className="wmnds-breadcrumb__link">
            Home
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a href="https://www.tfwm.org.uk/plan-your-journey/" className="wmnds-breadcrumb__link">
            Plan your journey
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/"
            className="wmnds-breadcrumb__link"
          >
            Ways to travel
          </a>
        </li>
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="https://www.tfwm.org.uk/plan-your-journey/ways-to-travel/trams-in-the-west-midlands/"
            className="wmnds-breadcrumb__link"
          >
            Trams in the West Midlands
          </a>
        </li>
        {/* Current page */}
        <li className="wmnds-breadcrumb__list-item">
          <a
            href="/"
            className="wmnds-breadcrumb__link wmnds-breadcrumb__link--current"
            aria-current="page"
          >
            {REACT_APP_TITLE}
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
