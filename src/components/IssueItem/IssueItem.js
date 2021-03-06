import React from 'react';
import PropTypes from 'prop-types';
import IssueItemComments from 'components/IssueItemComments';
import IssueItemStatus from 'components/IssueItemStatus';
import IssueLabel from 'components/IssueLabel';
import getDays from 'utils/getDays';
import './styles.css';

const IssueItem = ({issues}) => {
  return issues.map(issue => {
    return (
      <li key={`issue-${issue.id}`} className='issue-item'>
        <IssueItemStatus state={issue.state}/>
        <div className='issue-title'>
          <a href={issue.html_url} className='issue-link'>{issue.title}</a>
          <IssueLabel labels={issue.labels}/>
          <div className='issue-desc'>
            #{issue.number}&nbsp;opened {getDays(issue.created_at)} ago by&nbsp;
            <a className='issue-user' href={issue.user.html_url}>{issue.user.login}</a>
          </div>
        </div>
        <IssueItemComments count={issue.comments} url={issue.html_url}/>
      </li>
    )
  });

};

IssueItem.propTypes = {
  issues: PropTypes.array
};

export default IssueItem;
