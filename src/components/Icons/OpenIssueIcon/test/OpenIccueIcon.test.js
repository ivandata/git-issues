import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import OpenIssueIcon from 'components/Icons/OpenIssueIcon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<CommentsIcon />', () => {
  const renderedComponent = shallow(<OpenIssueIcon />);

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
  })
});
