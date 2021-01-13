/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { NavLinkType } from 'lib/types';
import styles from './styles.module.scss';

const defaultPath = '/';

const Footer = ({ links }) => {
  return (
    <footer className={styles.footer} />
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(NavLinkType),
};

export default Footer;
