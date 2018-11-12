import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from 'components/Footer';
import Spinner from 'components/Spinner';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  it('should render the Spinner', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(<Spinner className=''/>)).to.equal(true);
  });

  it('should set loading class to Spinner', () => {
    const renderedComponent = shallow(<Footer loading={true}/>);
    expect(renderedComponent.children().hasClass('loading')).to.equal(true);
  });

  it('should not set loading class to Spinner if loading is done', () => {
    const renderedComponent = shallow(<Footer loading={false}/>);
    expect(renderedComponent.contains(<Spinner className='loading'/>)).to.equal(false);
  });

  it('should have right class name', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.hasClass('app-footer')).to.equal(true);
  });
});
