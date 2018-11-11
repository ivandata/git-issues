import React from 'react';
import PropTypes from 'prop-types';
import { OpenIssueIcon } from 'components/Icons';

const IssueItemStatus = ({state}) => {
  const icon = state === 'open' ? <OpenIssueIcon /> : null;

  return (
    <div className='issue-status'>
      {icon}
    </div>
  );
};

IssueItemStatus.propTypes = {
  state: PropTypes.string
};

export default IssueItemStatus;
