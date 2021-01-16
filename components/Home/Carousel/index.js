/* eslint-disable new-cap */
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import Image from 'components/Image';
import { LeftArrow, RightArrow } from './assets';
import styles from './styles.module.scss';

const SlideButton = ({ asset: Asset, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles['slide-button']}>
      <Asset />
    </button>
  );
};

const ImageCarousel = ({ images, width, height }) => {
  return (
    <section>
      <div className={styles['carousel-container']}>
        <Carousel
          wrapAround
          autoplay
          autoplayInterval={5000}
          width={width}
          height={height}
          renderCenterLeftControls={({ previousSlide }) => (<SlideButton asset={LeftArrow} onClick={previousSlide} />)}
          renderCenterRightControls={({ nextSlide }) => (<SlideButton asset={RightArrow} onClick={nextSlide} />)}
        >
          {images.map(({ src, description }) => (
            <div className={styles['image-container']}>
              <div className={styles.description}>
                <p>{description}</p>
              </div>
              <Image width={1024} height={416} src={src} key={description} objectFit="cover" responsive />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    description: PropTypes.string,
  })),
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageCarousel;
