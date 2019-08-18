import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ContactList from './ContactList';

const testProps = {
  contactList: [
    {
      id: 'id-213',
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 29,
      photo: '',
    },
  ],
  deleteContact: jest.fn(),
  viewContact: jest.fn(),
  toggleModal: jest.fn(),
  isLoading: false,
};

afterEach(cleanup);

describe('Contact List', () => {
  const component = <ContactList {...testProps} />;

  it('should renders without crash', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render loading text', () => {
    const wrapper = shallow(<ContactList {...testProps} isLoading />);
    expect(wrapper.text()).toBe('Loading...');
  });

  it('should render list correctly', () => {
    const wrapper = shallow(component);
    expect(wrapper.find('.contact-detail').text()).toBe(
      'Luke Skywalker (Age: 29)',
    );
  });

  it('delete contact function should been called', () => {
    const setup = () => {
      const utils = render(component);
      const button = utils.getByLabelText('delete-contact');
      return {
        button,
        ...utils,
      };
    };

    const { button } = setup();

    fireEvent.click(button);

    expect(testProps.deleteContact).toHaveBeenCalled();
  });

  it('view contact function should been called', () => {
    const setup = () => {
      const utils = render(component);
      const button = utils.getByLabelText('edit-contact');
      return {
        button,
        ...utils,
      };
    };

    const { button } = setup();

    fireEvent.click(button);

    expect(testProps.viewContact).toHaveBeenCalled();
  });
});

afterEach(cleanup);
