import React from 'react';
import IssueItem from 'components/IssueItem';
import PropTypes from 'prop-types';
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

IssueList.propTypes = {
  issues: PropTypes.array
};

export default IssueList;
