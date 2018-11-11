import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const IssueLabel = ({labels}) => {
  return labels.map(label => {
    return (
      <span key={`label-${label.id}`} className='issue-label' style={{'backgroundColor': `#${label.color}`}}>
        <a href={label.url}>{label.name}</a>
      </span>
    )
  });
};

IssueLabel.propTypes = {
  labels: PropTypes.array
};

export default IssueLabel;
