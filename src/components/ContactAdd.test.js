import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, cleanup } from '@testing-library/react';

import ContactAdd from './ContactAdd';

const testProps = {
  addContact: jest.fn(),
};

afterEach(cleanup);

describe('Contact Add', () => {
  const component = <ContactAdd {...testProps} />;

  it('renders without crashing', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('add contact function should been called', () => {
    const setup = () => {
      const utils = render(component);
      const button = utils.getByLabelText('add-contact');
      return {
        button,
        ...utils,
      };
    };

    const { button } = setup();

    fireEvent.click(button);

    expect(testProps.addContact).toHaveBeenCalled();
  });
});

afterEach(cleanup);
