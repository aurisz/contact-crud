import React from 'react';

const ContactForm = ({ toggle, submitContact, form, setForm }) => {
  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="row">
        <div className="six columns">
          <label>First Name</label>
          <input
            name="firstName"
            className="u-full-width"
            type="text"
            placeholder="Enter First Name"
            value={form.firstName}
            onChange={onChange}
          />
        </div>
        <div className="six columns">
          <label>Last Name</label>
          <input
            name="lastName"
            className="u-full-width"
            type="text"
            placeholder="Enter Last Name"
            value={form.lastName}
            onChange={onChange}
          />
        </div>
        <div className="six columns">
          <label>Age</label>
          <input
            name="age"
            className="u-full-width"
            type="number"
            placeholder="Enter Age"
            value={form.age}
            onChange={onChange}
          />
        </div>
      </div>

      <hr />
      <div className="row">
        <button
          type="button"
          onClick={() => {
            submitContact(form);
            toggle();
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
