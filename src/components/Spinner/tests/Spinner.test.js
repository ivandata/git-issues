import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Spinner from 'components/Spinner';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  const renderedComponent = shallow(<Spinner />);

  it('should render a span', () => {
    expect(renderedComponent.first().children().type()).to.equal('span');
  });

  it('should render only one SVG tag', () => {
    expect(renderedComponent.find('svg').length).to.equal(1);
  });

  it('should render span as first child', () => {
    expect(renderedComponent.first().children()).to.have.lengthOf(1);
  });

  it('should have div wrapper', () => {
    expect(renderedComponent.first().type()).to.equal('div');
  });

  it('should have right class name', () => {
    expect(renderedComponent.hasClass('spinner')).to.equal(true);
  });
});
