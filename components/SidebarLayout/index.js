import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const SidebarLayout = ({ children }) => {
  return (
    <section className={styles['sidebar-layout']}>
      {children}
    </section>
  );
};

SidebarLayout.Main = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
};

SidebarLayout.Sidebar = ({ title, quotes }) => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles['sidebar-title']}>{title}</h3>
      <div className={styles.divider} />
      <div className={styles['quote-box']}>{quotes.map((quote) => (<div key={quote}>{quote}</div>))}</div>
    </div>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node,
};

SidebarLayout.Main.propTypes = {
  children: PropTypes.node,
};

SidebarLayout.Sidebar.propTypes = {
  title: PropTypes.string,
  quotes: PropTypes.arrayOf(PropTypes.string),
};

export default SidebarLayout;
