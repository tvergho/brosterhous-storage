import React from 'react';
import PropTypes from 'prop-types';
import InfoSection from './InfoSection';
import FormSection from './FormSection';
import MapSection from './MapSection';
import styles from './styles.module.scss';

const Contact = ({
  address, phone, email, hours,
}) => {
  return (
    <>
      <section className={styles.contact}>
        <FormSection />
        <InfoSection address={address} phone={phone} email={email} hours={hours} />
      </section>
      <MapSection />
    </>
  );
};

Contact.propTypes = {
  address: PropTypes.shape({
    officeAddress: PropTypes.arrayOf(PropTypes.string),
    mailingAddress: PropTypes.arrayOf(PropTypes.string),
  }),
  phone: PropTypes.string,
  email: PropTypes.string,
  hours: PropTypes.arrayOf(PropTypes.string),
};

export default Contact;
