import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const InfoSection = ({
  address, phone, email, hours,
}) => {
  const { officeAddress, mailingAddress } = address;

  return (
    <div className={styles['contact-section']}>
      <div className={styles['info-item']}>
        <h4>Office Location</h4>
        {officeAddress.map((line) => (<p className={styles.sub} key={line}>{line}</p>))}
      </div>

      <div className={styles['info-item']}>
        <p><strong>Phone: </strong><a href={`tel:${phone.replace(/[^\d]/g, '')}`}>{phone}</a></p>
      </div>

      <div className={styles['info-item']}>
        <p><strong>Email: </strong><a href={`mailto:${email}`}>{email}</a></p>
      </div>

      <div className={styles['info-item']}>
        <h4>Mailing Address</h4>
        {mailingAddress.map((line) => (<p className={styles.sub} key={line}>{line}</p>))}
      </div>

      <div className={styles['info-item']}>
        <h4>Office Hours</h4>
        <p className={styles.sub}>By appointment only.</p>
      </div>
    </div>
  );
};

InfoSection.propTypes = {
  address: PropTypes.shape({
    officeAddress: PropTypes.arrayOf(PropTypes.string),
    mailingAddress: PropTypes.arrayOf(PropTypes.string),
  }),
  phone: PropTypes.string,
  email: PropTypes.string,
  hours: PropTypes.arrayOf(PropTypes.string),
};

export default InfoSection;
