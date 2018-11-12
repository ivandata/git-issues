import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import IssueLabel from 'components/IssueLabel';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<IssueLabel />', () => {
  const labels = [
    {
      color: "e7e7e7",
      id: 196858374,
      name: "CLA Signed",
      url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed"
    },
    {
      color: "e11d21",
      id: 178761159,
      name: "Type: Regression",
      url: "https://api.github.com/repos/facebook/react/labels/Type:%20Regression"
    }
  ];

  const renderedComponent = shallow(
    <IssueLabel labels={labels}/>
  );

  it('should render all labels', () => {
    expect(renderedComponent).to.have.length(2);
  });

  it('should have right class name', () => {
    expect(renderedComponent.at(0).hasClass('issue-label')).to.equal(true);
  });

  it('should have right urls', () => {
    expect(renderedComponent.at(0).find('a').props()['href']).to.equal(labels[0].url);
    expect(renderedComponent.at(1).find('a').props()['href']).to.equal(labels[1].url);
  });

  it('should have right names', () => {
    expect(renderedComponent.at(0).find('a').text()).to.equal(labels[0].name);
    expect(renderedComponent.at(1).find('a').text()).to.equal(labels[1].name);
  });

  it('should have right keys', () => {
    expect(renderedComponent.at(0).key()).to.equal(`label-${labels[0].id}`);
    expect(renderedComponent.at(1).key()).to.equal(`label-${labels[1].id}`);
  });

  it('should have right colors in background', () => {
    expect(renderedComponent.at(0).get(0).props.style).to.have.property(
      'backgroundColor',
      `#${labels[0].color}`
    );

    expect(renderedComponent.at(1).get(0).props.style).to.have.property(
      'backgroundColor',
      `#${labels[1].color}`
    );
  });
});
