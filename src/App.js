import React from 'react';

import './styles/app.css';

import useContact, { defaultForm } from './hooks/useContact';
import useToggle from './hooks/useToggle';

import ContactAdd from './components/ContactAdd';
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
    isLoading,
  } = useContact();
  const [open, setOpen] = useToggle(false);

  const addContact = () => {
    setForm(defaultForm);
    setOpen();
  };

  return (
    <div className="app-container">
      <h1>CRUD Contact App</h1>

      <ContactAdd addContact={addContact} />

      <hr />

      <ContactList
        contactList={contactList}
        deleteContact={deleteContact}
        viewContact={viewContact}
        toggleModal={setOpen}
        isLoading={isLoading}
      />

      {open && (
        <Modal open={open} toggle={setOpen}>
          <ContactForm
            toggleModal={setOpen}
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
