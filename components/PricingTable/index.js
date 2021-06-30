import React from 'react';
import useWindowSize from 'utils/useWindowSize';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PricingTable = ({ prices }) => {
  const { isMobile } = useWindowSize();

  return (
    <section>
      <div className={styles.table}>
        {prices.map(({
          size, type, price, buttonText, buttonLink,
        }) => (
          <div className={styles.row} key={size}>
            {(!isMobile || size) && <div className={`${styles.cell} ${styles.size}`}>{size}</div>}
            <div className={`${styles.cell} ${styles.type}`}>{type}</div>
            <div className={`${styles.cell} ${styles.price}`}>{price}</div>
            <div className={`${styles.cell} ${styles['button-container']}`}>
              <a href={buttonLink}><button type="button" className={styles.button}>{buttonText}</button></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

PricingTable.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.shape({
    size: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
  })),
};

export default PricingTable;
