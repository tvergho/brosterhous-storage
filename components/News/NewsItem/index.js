/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { appendPrefix, calcDate } from 'utils/slugParsers';
import styles from './styles.module.scss';

const NewsItem = ({
  title, description, slug, date,
}) => {
  return (
    <div className={styles.item}>
      <Link href={appendPrefix(slug, 'posts')} passHref><a><h2 className={styles.title}>{title}</h2></a></Link>
      <p className={styles.description}>{description}</p>
      <h6 className={styles.date}>{calcDate(date)}</h6>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default NewsItem;
