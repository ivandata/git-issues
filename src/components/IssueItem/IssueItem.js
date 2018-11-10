import React from 'react';
import IssueItemComments from 'components/IssueItemComments';
import IssueItemStatus from 'components/IssueItemStatus';
import './styles.css';

const IssueItem = ({issues}) => {
  return issues.map(issue => {
    return (
      <li key={`issue-${issue.id}`} className='issue-item'>
        <IssueItemStatus state={issue.state}/>
        <div className='issue-title'>
          <a href={issue.html_url} className='issue-link'>{issue.title}</a>
          <div className='issue-desc'>#{issue.number}&nbsp;opened {issue.created_at} ago by&nbsp;
            <a className='issue-user' href={issue.user.html_url}>{issue.user.login}</a>
          </div>
        </div>
        <IssueItemComments count={issue.comments} url={issue.html_url}/>
      </li>
    )
  });

};


export default IssueItem;
