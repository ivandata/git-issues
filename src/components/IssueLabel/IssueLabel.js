import React from 'react';
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


export default IssueLabel;
