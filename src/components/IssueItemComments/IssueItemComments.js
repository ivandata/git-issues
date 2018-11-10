import React from 'react';
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

export default IssueItemComments;
