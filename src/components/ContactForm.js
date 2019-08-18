import React from 'react';
import PropTypes from 'prop-types';

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
        aria-label="first-name"
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
      <label>Photo</label>
      <input
        name="photo"
        className="u-full-width"
        type="text"
        placeholder="Enter Photo URL"
        value={form.photo}
        onChange={onChange}
      />

      <hr />

      <div className="contact-form-footer">
        <button
          type="button"
          aria-label="close-form"
          onClick={() => {
            toggleModal();
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          aria-label="submit-form"
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

ContactForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  submitContact: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    photo: PropTypes.string,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
};

export default ContactForm;
