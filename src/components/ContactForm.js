import React from 'react';

const ContactForm = ({ toggleModal, submitContact, form, setForm }) => {
  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div id="contactForm">
      <h4>Contact Form</h4>
      <label>First Name</label>
      <input
        name="firstName"
        className="u-full-width"
        type="text"
        placeholder="Enter First Name"
        value={form.firstName}
        onChange={onChange}
      />
      <label>Last Name</label>
      <input
        name="lastName"
        className="u-full-width"
        type="text"
        placeholder="Enter Last Name"
        value={form.lastName}
        onChange={onChange}
      />
      <label>Age</label>
      <input
        name="age"
        className="u-full-width"
        type="number"
        placeholder="Enter Age"
        value={form.age}
        onChange={onChange}
        max={100}
      />

      <hr />
      <div className="row contact-form-footer">
        <button
          type="button"
          onClick={() => {
            toggleModal();
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="button-primary"
          onClick={() => {
            submitContact(form);
            toggleModal();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
