import React from 'react';
import PropTypes from 'prop-types';
import { CommentsIcon } from 'components/Icons';
import './styles.css';

const IssueItemComments = ({count, url}) => {
  if (!count) return null;

  return (
    <a href={url} className='issue-comments'>
      <CommentsIcon />
      <span className='comments-count'>{count}</span>
    </a>
  );
};

IssueItemComments.propTypes = {
  count: PropTypes.number,
  url: PropTypes.string
};

export default IssueItemComments;
