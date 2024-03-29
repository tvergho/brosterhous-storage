import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <p>{`© ${new Date().getFullYear()} Brosterhous Storage. All Rights Reserved.`}</p>
      </div>
    </footer>
  );
};

export default Footer;
