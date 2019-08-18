import React from 'react';

const ContactList = ({
  contactList,
  deleteContact,
  viewContact,
  toggleModal,
}) => {
  return (
    <div>
      {contactList.map(contact => (
        <div key={contact.id} className="card">
          <div>
            <p>
              {contact.firstName} {contact.lastName}
            </p>
            <button
              type="button"
              onClick={() => {
                viewContact(contact.id);
                toggleModal();
              }}
            >
              Edit
            </button>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
