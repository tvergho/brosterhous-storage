import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import styles from './styles.module.scss';

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className={styles['feature-item']}>
      <Image width="40%" height="200px" objectFit="cover" src={image} />

      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FeatureItem;
