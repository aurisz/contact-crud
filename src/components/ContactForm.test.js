import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ContactForm from './ContactForm';

const testProps = {
  toggleModal: jest.fn(),
  submitContact: jest.fn(),
  form: {
    id: null,
    firstName: '',
    lastName: '',
    age: 29,
    photo: '',
  },
  setForm: jest.fn(),
};

afterEach(cleanup);

describe('Contact Form', () => {
  const component = <ContactForm {...testProps} />;

  it('should renders without crash', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('changing a field should works correctly', () => {
    const setup = () => {
      const utils = render(component);
      const input = utils.getByLabelText('first-name');
      return {
        input,
        ...utils,
      };
    };

    const { input } = setup();

    expect(input.value).toBe('');

    fireEvent.change(input, {
      target: { value: 'New Value' },
    });

    expect(testProps.setForm).toHaveBeenCalled();
  });

  it('submit form should works correctly', () => {
    const setup = () => {
      const utils = render(component);
      const button = utils.getByLabelText('submit-form');
      return {
        button,
        ...utils,
      };
    };

    const { button } = setup();

    fireEvent.click(button);

    expect(testProps.submitContact).toHaveBeenCalled();
    expect(testProps.toggleModal).toHaveBeenCalled();
  });

  it('close form should works correctly', () => {
    const setup = () => {
      const utils = render(component);
      const button = utils.getByLabelText('close-form');
      return {
        button,
        ...utils,
      };
    };

    const { button } = setup();

    fireEvent.click(button);

    expect(testProps.toggleModal).toHaveBeenCalled();
  });
});

afterEach(cleanup);
