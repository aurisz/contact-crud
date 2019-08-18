import React from 'react';
import PropTypes from 'prop-types';

const ContactAdd = ({ addContact }) => (
  <button
    type="button"
    aria-label="add-contact"
    className="button-primary"
    onClick={addContact}
  >
    Add Contact
  </button>
);

ContactAdd.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactAdd;
