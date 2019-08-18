import React from 'react';

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
          <h5>
            {contact.firstName} {contact.lastName} (Age: {contact.age})
          </h5>
          <button
            type="button"
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
            className="button-danger"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
