/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import { calcDate } from 'utils/slugParsers';
import useWindowSize from 'utils/useWindowSize';
import styles from './styles.module.scss';

const NewsPost = ({
  title, date, content, coverImage,
}) => {
  const { isMobile } = useWindowSize();
  return (
    <section className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <h6 className={styles.date}>{calcDate(date)}</h6>
      {coverImage
      && (
        <div className={styles['image-container']}>
          <Image src={coverImage} width={isMobile ? '100%' : '50%'} height={300} objectFit="cover" className={styles.image} />
        </div>
      )}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
};

NewsPost.propTypes = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  content: PropTypes.string,
  coverImage: PropTypes.string,
};

export default NewsPost;
