import React from 'react';
import IssueItem from 'components/IssueItem';
import './styles.css';


const IssueList = ({ issues }) => {
  return (
    <section>
      <ul className='issue-list'>
        <IssueItem issues={issues}/>
      </ul>
    </section>
  );
};

export default IssueList;
