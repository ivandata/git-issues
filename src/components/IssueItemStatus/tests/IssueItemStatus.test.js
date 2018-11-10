import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OpenIssueIcon } from 'components/Icons';
import IssueItemStatus from 'components/IssueItemStatus';
import {expect} from "chai";

Enzyme.configure({ adapter: new Adapter() });

describe('<IssueItemStatus />', () => {
  const status = {
    state: 'open'
  };

  const renderedComponent = shallow(
    <IssueItemStatus state={status.state}/>
  );

  it('should render OpenIssueIcon if status is open', () => {
    expect(renderedComponent.contains(<OpenIssueIcon />)).to.equal(true);
  });

  it('should have right class name', () => {
    expect(renderedComponent.hasClass('issue-status')).to.equal(true);
  });
});
