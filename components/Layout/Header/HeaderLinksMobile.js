/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { NavLinkType } from 'lib/types';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useDelay from 'utils/useDelay';
import { appendSlash } from 'utils/slugParsers';
import { motion } from 'framer-motion';
import { DropdownArrow } from '../assets';
import styles from './styles.module.scss';

const ANIMATION_LENGTH = 300;
const defaultPath = '/';

const Dropdown = ({ links, visible, onClick }) => {
  return (
    <motion.div className={styles['mobile-dropdown']} animate={{ height: visible ? 'auto' : 0 }} transition={{ duration: ANIMATION_LENGTH / 1000 }}>
      {links.map(({ display, link = defaultPath }) => (
        <Link href={appendSlash(link)} passHref key={display}>
          <a className={styles['nav-link']} onClick={onClick} role="button">
            {display}
          </a>
        </Link>
      ))}
    </motion.div>
  );
};

/**
 * Navigation link item in the mobile backdrop.
 *
 * @param {string} display Text to display for the link.
 * @param {string} link URL to navigate to when clicked.
 * @param {array} dropdown Optional. Array of NavLinks to display as the submenu for this navigation item.
 * @param {function} onClick Optional. Function that is also called when this item is clicked.
 * @param {number} index Index of this item in the navigation menu, for animation purposes.
 */
const NavLink = ({
  display, link, dropdown, onClick, index,
}) => {
  const isDropdown = !!dropdown && dropdown.length > 0;
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const delayedVisible = useDelay(visibleDropdown, ANIMATION_LENGTH); // Delays removing the dropdown from the DOM until after the animation.

  const toggle = () => setVisibleDropdown((vis) => !vis);

  return (
    <>
      <motion.div
        className={styles['mobile-nav-link-container']}
        initial={{ y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION_LENGTH / 1000, ease: 'easeOut', delay: ((ANIMATION_LENGTH - 100) / 1000) + (0.12 * index) }}
      >
        {isDropdown
          ? (
            <a className={styles['mobile-nav-link']} onClick={toggle} role="button">
              {display}
              {isDropdown && <DropdownArrow width={45} height={45} />}
            </a>
          )
          : (
            <Link href={appendSlash(link)} passHref key={display}>
              <a className={styles['mobile-nav-link']} onClick={onClick} role="button">
                {display}
                {isDropdown && <DropdownArrow width={45} height={45} />}
              </a>
            </Link>
          )}

      </motion.div>
      {isDropdown && delayedVisible && <Dropdown links={dropdown} visible={visibleDropdown} onClick={onClick} />}
    </>
  );
};

const MobileBackdrop = ({ links, visible, onClick }) => {
  return (
    <motion.div className={styles['mobile-backdrop']} animate={{ opacity: visible ? 1 : 0 }} transition={{ duration: ANIMATION_LENGTH / 1000 }}>
      {links && links.map(({ display, link = defaultPath, dropdown }, index) => (
        <NavLink
          display={display}
          link={appendSlash(link)}
          dropdown={dropdown}
          key={display}
          onClick={onClick}
          index={index}
        />
      ))}
    </motion.div>
  );
};

/**
 * Hamburger menu and mobile backdrop for navigation on screen smaller than 1000px.
 *
 * @param {boolean} visible Determines whether the mobile navigation backdrop is visible.
 * @param {function} setVisible Function to toggle the visibility of the mobile backdrop.
 */
const HeaderLinksMobile = ({ links, visible, setVisible }) => {
  const delayedVisible = useDelay(visible, ANIMATION_LENGTH);

  const toggle = () => setVisible((vis) => !vis);

  // Disables scrolling the document in the background when the mobile backdrop is visible.
  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'visible';
    }
  }, [visible]);

  // Uses animation from https://jonsuh.com/hamburgers/.
  return (
    <>
      <button className={`hamburger hamburger--squeeze ${visible ? 'is-active' : ''} transparent ${styles.toggle}`} type="button" onClick={toggle} name="hamburger-menu">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      {delayedVisible && <MobileBackdrop links={links} visible={visible} onClick={toggle} />}
    </>
  );
};

HeaderLinksMobile.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default HeaderLinksMobile;
