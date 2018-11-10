import React from 'react';
import './styles.css';

const IssueItem = ({issues}) => {
  return issues.map(issue => {
    return (
      <li key={`issue-${issue.id}`} className='issue-item'>
        <div className='issue-title'>
          <a href={issue.html_url} className='issue-link'>{issue.title}</a>
          <div className='issue-desc'>#{issue.number}&nbsp;opened {issue.created_at} ago by&nbsp;
            <a className='issue-user' href={issue.user.html_url}>{issue.user.login}</a>
          </div>
        </div>
      </li>
    )
  });

};


export default IssueItem;
