import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../NewsItem';
import styles from './styles.module.scss';

const NewsGrid = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map(({
        title, slug, description, date,
      }) => (<NewsItem title={title} slug={slug} description={description} date={date} key={slug} />))}
    </div>
  );
};

NewsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    content: PropTypes.node,
  })),
};

export default NewsGrid;
