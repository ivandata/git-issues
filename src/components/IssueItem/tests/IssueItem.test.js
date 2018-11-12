import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from "chai";
import issues from './stubs/issues'

import IssueItemComments from 'components/IssueItemComments';
import IssueItemStatus from 'components/IssueItemStatus';
import IssueLabel from 'components/IssueLabel';
import IssueItem from 'components/IssueItem';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<IssueItem />', () => {
  const renderedComponent = shallow(
    <IssueItem issues={issues} />
  );

  it('should render 2 items', () => {
    expect(renderedComponent).to.have.lengthOf(2);
  });

  it('should render labels', () => {
    expect(renderedComponent.find(IssueLabel)).to.have.lengthOf(2);
  });

  it('should render status', () => {
    expect(renderedComponent.find(IssueItemStatus)).to.have.lengthOf(2);
  });

  it('should render comments', () => {
    expect(renderedComponent.find(IssueItemComments)).to.have.lengthOf(2);
  });

  it('should have right keys', () => {
    expect(renderedComponent.at(0).key()).to.equal(`issue-${issues[0].id}`);
    expect(renderedComponent.at(1).key()).to.equal(`issue-${issues[1].id}`);
  });

  it('should have right wrapper class name', () => {
    expect(renderedComponent.at(0).hasClass('issue-item')).to.equal(true);
  });

  it('should have right issue urls', () => {
    expect(renderedComponent.at(0).find('.issue-link').props()['href']).to.equal(issues[0].html_url);
    expect(renderedComponent.at(1).find('.issue-link').props()['href']).to.equal(issues[1].html_url);
  });

  it('should have right issue titles', () => {
    expect(renderedComponent.at(0).find('.issue-link').text()).to.equal(issues[0].title);
    expect(renderedComponent.at(1).find('.issue-link').text()).to.equal(issues[1].title);
  });

  it('should have right user urls', () => {
    expect(renderedComponent.at(0).find('.issue-link').props()['href']).to.equal(issues[0].user.html_url);
    expect(renderedComponent.at(1).find('.issue-link').props()['href']).to.equal(issues[1].user.html_url);
  });

  it('should have right user names', () => {
    expect(renderedComponent.at(0).find('.issue-user').text()).to.equal(issues[0].user.login);
    expect(renderedComponent.at(1).find('.issue-user').text()).to.equal(issues[1].user.login);
  });
});
