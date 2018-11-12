import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import issues from './stubs/issues'

import IssueList from 'components/IssueList';
import IssueItem from 'components/IssueItem';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<IssueList />', () => {
  const renderedComponent = shallow(
    <IssueList issues={issues} />
  );

  it('should render issue item', () => {
    expect(renderedComponent.contains(<IssueItem issues={issues}/>)).to.equals(true);
  });

  it('should have right wrapper', () => {
    expect(renderedComponent.first().type()).to.equal('section');
  });

  it('should have right children', () => {
    expect(renderedComponent.first().children().type()).to.equal('ul');
  });

  it('should render 2 items', () => {
    const mountedComponent = mount(
      <IssueList issues={issues} />
    );
    expect(mountedComponent.find('li')).to.have.lengthOf(2);
  });
});
