/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NavLinkType } from 'lib/types';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useDelay from 'utils/useDelay';
import { appendSlash } from 'utils/slugParsers';
import useWindowLocation from 'utils/useWindowLocation';
import styles from './styles.module.scss';
import { DropdownArrow } from '../assets';

const ANIMATION_LENGTH = 300;
const defaultPath = '/';

const NavLink = ({ link, display, dropdown }) => {
  const [hovering, setHovering] = useState(false);
  const visible = useDelay(hovering, ANIMATION_LENGTH);
  const isDropdown = !!dropdown && dropdown.length > 0;
  const location = useWindowLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(appendSlash(location?.pathname || '') === appendSlash(link));
  }, [location]);

  return (
    <div
      className={styles['nav-link-container']}
      onMouseEnter={() => { setHovering(true); }}
      onMouseLeave={() => { setHovering(false); }}
    >
      <Link href={appendSlash(link)} passHref key={display}>
        <a className={isActive ? `${styles['nav-link']} ${styles.active}` : styles['nav-link']}>
          {display}
          {isDropdown && <DropdownArrow />}
        </a>
      </Link>
      {isDropdown && visible && <Dropdown links={dropdown} hovering={hovering} />}
    </div>
  );
};

const Dropdown = ({ links, hovering }) => {
  return (
    <motion.div className={styles.dropdown} animate={{ opacity: hovering ? 1 : 0 }} transition={{ duration: ANIMATION_LENGTH / 1000 }}>
      <div className={styles['dropdown-inner']}>
        {links.map(({ link = defaultPath, display }) => {
          return (
            <NavLink link={appendSlash(link)} display={display} key={display} />
          );
        })}
      </div>
    </motion.div>
  );
};

const HeaderLinksDesktop = ({ links }) => {
  return (
    <>
      <div className={styles.links}>
        {links && links.map(({ link = defaultPath, display, dropdown }) => {
          return (
            <NavLink link={appendSlash(link)} display={display} dropdown={dropdown} key={display} />
          );
        })}
      </div>
    </>
  );
};

HeaderLinksDesktop.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default HeaderLinksDesktop;
