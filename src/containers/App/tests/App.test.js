import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from "chai";

import { store } from 'containers/App/configureStore'
import App from 'containers/App';
import Footer from 'components/Footer';
import IssueList from 'components/IssueList';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const renderedComponent = shallow(<App store={store}/>).dive();

  it('should render the footer', () => {
    expect(renderedComponent.contains(<Footer loading={false}/>)).to.equal(true);
  });

  it('should render the issue list', () => {
    expect(renderedComponent.contains(<IssueList error={null} issues={[]}/>)).to.equal(true);
  });
});
