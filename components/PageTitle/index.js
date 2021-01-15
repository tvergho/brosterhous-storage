import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PageTitle = ({ title }) => {
  return (
    <section><h1 className={styles.title}>{title}</h1></section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
