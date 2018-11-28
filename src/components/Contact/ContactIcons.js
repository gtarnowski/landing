import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import './index.css';

const ContactIcons = ({
  phone, address, email, horizontal,
}) => (
  <div className="ContactIcons" data-horizontal={horizontal}>
    {phone && (
      <div className="contact-tile">
        <div className="icon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <h6>{phone}</h6>
      </div>
    )}
    {address && (
      <div className="contact-tile">
        <div className="icon">
          <FontAwesomeIcon icon={faMapMarker} />
        </div>
        <h6>{address}</h6>
      </div>
    )}
    {email && (
      <div className="contact-tile">
        <div className="icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <h6>{email}</h6>
      </div>
    )}
  </div>
);

ContactIcons.propTypes = {
  horizontal: PropTypes.bool,
  phone: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
};

export default ContactIcons;
