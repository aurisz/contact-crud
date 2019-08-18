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
    <div id="contactList" className="grid">
      {contactList.map(contact => (
        <div key={contact.id}>
          <div className="image-container">
            <img
              className="card-image"
              src={contact.photo}
              alt={contact.firstName}
              onError={e => {
                e.target.src =
                  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';
              }}
            />
          </div>
          <div className="card contact-card">
            <h5 className="contact-info" aria-label="contact-info">
              {contact.firstName} {contact.lastName},{' '}
              <span className="text-light">{contact.age}</span>
            </h5>

            <hr className="card-divider" />

            <div className="card-button-group">
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
