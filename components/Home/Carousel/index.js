/* eslint-disable jsx-a11y/control-has-associated-label */
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
            <div className={styles['image-container']} key={src}>
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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ImageCarousel;
