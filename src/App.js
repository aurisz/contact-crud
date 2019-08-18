import React from 'react';

import './styles/app.css';

import useContact, { defaultForm } from './hooks/useContact';
import useToggle from './hooks/useToggle';

import ContactList from './components/ContactList';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Toast from './components/Toast';

const App = () => {
  const {
    contactList,
    submitContact,
    form,
    setForm,
    deleteContact,
    viewContact,
    message,
    isError,
  } = useContact();
  const [open, setOpen] = useToggle(false);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <button
        type="button"
        onClick={() => {
          setOpen();
          setForm(defaultForm);
        }}
      >
        Add Contact
      </button>
      <hr />
      <ContactList
        contactList={contactList}
        deleteContact={deleteContact}
        viewContact={viewContact}
        toggleModal={setOpen}
      />

      {open && (
        <Modal open={open} toggle={setOpen}>
          <ContactForm
            toggle={setOpen}
            submitContact={submitContact}
            form={form}
            setForm={setForm}
          />
        </Modal>
      )}

      <Toast message={message} isError={isError} />
    </div>
  );
};

export default App;
