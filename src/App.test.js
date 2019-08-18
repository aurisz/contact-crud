import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const component = <App />;

  it('renders without crashing', () => {
    const wrapper = shallow(component);
    expect(wrapper.exists()).toBe(true);
  });
});
