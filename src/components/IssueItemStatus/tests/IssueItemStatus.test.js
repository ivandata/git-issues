import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { OpenIssueIcon } from 'components/Icons';
import IssueItemStatus from 'components/IssueItemStatus';

Enzyme.configure({ adapter: new Adapter() });

describe('<IssueItemStatus />', () => {
  it('should render OpenIssueIcon if status is open', () => {
    const status = {
      state: 'open'
    };

    const renderedComponent = shallow(
      <IssueItemStatus state={status.state}/>
    );

    expect(renderedComponent.contains(<OpenIssueIcon />)).toEqual(true);
  });
});
