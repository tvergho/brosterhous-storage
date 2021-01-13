/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { NavLinkType } from 'lib/types';
import PropTypes from 'prop-types';
import useWindowSize from 'utils/useWindowSize';
import Image from 'components/Image';
import { PHONE } from 'lib/constants';
import styles from './styles.module.scss';
import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderLinksMobile from './HeaderLinksMobile';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <Image src="/logo.png" width={190} height={51} objectFit="contain" />
      </a>
    </Link>
  );
};

const Header = ({ links }) => {
  const { width } = useWindowSize();
  const isMobile = !(width > 1000);
  const [backdropVisible, setBackdropVisible] = useState(false);

  return (
    <div className={styles['main-container']}>
      <div className={styles.phone}>Call us at&nbsp;<a href={`${`tel:${PHONE.replace(/[^\d]/g, '')}`}`}>{PHONE}</a></div>
      <div className={styles['header-container']}>
        <nav className={styles.header}>
          <Logo />
          {isMobile ? <HeaderLinksMobile links={links} visible={backdropVisible} setVisible={setBackdropVisible} /> : <HeaderLinksDesktop links={links} />}
        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default Header;
