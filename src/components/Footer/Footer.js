import React from 'react';
import Spinner from 'components/Spinner'
import './styles.css'

const Footer = ({loading}) => {
  return (
    <footer className='app-footer'>
      <Spinner className={loading ? 'loading' : ''}/>
    </footer>
  )
};

export default Footer;
