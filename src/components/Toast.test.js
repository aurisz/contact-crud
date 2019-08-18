import React from 'react';
import { shallow } from 'enzyme';

import Toast from './Toast';

const testProps = {
  message: '',
  isError: false,
};

describe('Toast', () => {
  const component = <Toast {...testProps} />;

  it('should renders without crash', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });

  it('should not render when message is empty', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists('.toast')).toBe(false);
  });

  it('should render message', () => {
    const wrapper = shallow(<Toast {...testProps} message="contact saved" />);
    expect(wrapper.find('.toast').text()).toBe('contact saved');
  });
});
