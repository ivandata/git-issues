import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { CommentsIcon } from 'components/Icons';
import IssueItemComments from 'components/IssueItemComments';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<IssueItemComments />', () => {

  const comments = {
    'comments': 3,
    'url': 'https://github.com/facebook/react/issues/14173'
  };

  let renderedComponent = shallow(
    <IssueItemComments count={comments.comments} url={comments.url}/>
  );

  it('should render the CommentsIcon', () => {
    expect(renderedComponent.contains(<CommentsIcon />)).toEqual(true);
  });

  it('should have right url', () => {
    expect(renderedComponent.first().props()['href']).toEqual(comments.url);
  });

  it('should not render anything if nothing interesting is provided', () => {
    comments.comments = 0;

    renderedComponent = shallow(
      <IssueItemComments count={comments.comments} url={comments.url} />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
