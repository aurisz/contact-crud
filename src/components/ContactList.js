import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({
  contactList,
  deleteContact,
  viewContact,
  toggleModal,
  isLoading,
}) => {
  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div id="contactList">
      {contactList.map(contact => (
        <div key={contact.id} className="card contact-card">
          <div className="row">
            <h5 className="contact-info" aria-label="contact-info">
              {contact.firstName} {contact.lastName} (Age: {contact.age})
            </h5>
          </div>
          <div className="row">
            <button
              type="button"
              aria-label="edit-contact"
              className="button-success"
              onClick={() => {
                viewContact(contact.id);
                toggleModal();
              }}
            >
              Edit
            </button>
            <button
              type="button"
              aria-label="delete-contact"
              className="button-danger"
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      photo: PropTypes.string,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
  viewContact: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ContactList;
