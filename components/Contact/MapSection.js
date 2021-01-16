/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/style-prop-object */
/* eslint-disable max-len */
import React from 'react';
import styles from './styles.module.scss';

const MapSection = () => {
  return (
    <section className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.5633533243795!2d-121.2953582841032!3d44.03041697911019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54b8c6537700e86d%3A0x10019aa3a01e9a77!2sBrosterhous%20Storage!5e0!3m2!1sen!2sus!4v1610755443123!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </section>
  );
};

export default MapSection;
