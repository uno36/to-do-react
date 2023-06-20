import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

const headerStyle = {
  padding: '20px 0',
  lineHeight: '1.5em',
  color: '#aeadad',
  textAlign: 'center',
};

const Header = ({ children }) => (
  <header style={headerStyle} className={styles.header}>
    {children}
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
