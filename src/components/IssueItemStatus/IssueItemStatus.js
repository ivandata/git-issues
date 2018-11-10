import React from 'react';
import { OpenIssueIcon } from 'components/Icons';

const IssueItemStatus = ({state}) => {
  const icon = state === 'open' ? <OpenIssueIcon /> : null;

  return (
    <div className='issue-status'>
      {icon}
    </div>
  );
};

export default IssueItemStatus;
