import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentsIcon from 'components/Icons/CommentsIcon';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<CommentsIcon />', () => {
  const renderedComponent = shallow(<CommentsIcon />);

  it('should render a SVG', () => {
    expect(renderedComponent.first().children().type()).to.equal('svg');
  });

  it('should render only one SVG tag', () => {
    expect(renderedComponent.find('svg').length).to.equal(1);
  });

  it('should render SVG as first child', () => {
    expect(renderedComponent.first().children()).to.have.lengthOf(1);
  });

  it('should have span wrapper', () => {
    expect(renderedComponent.first().type()).to.equal('span');
  });

  it('should have right wrapper class name', () => {
    expect(renderedComponent.hasClass('icon')).to.equal(true);
  });

  it('should have right icon class name', () => {
    expect(renderedComponent.find('svg').hasClass('icon-comments')).to.equal(true);
  });
});
