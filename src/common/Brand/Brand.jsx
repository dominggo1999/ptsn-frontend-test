import React from 'react';
import { Link } from 'react-router-dom';
import { MdLibraryBooks } from 'react-icons/md';
import Styles from './Brand.module.css';

const Brand = () => {
  return (
    <Link
      className={Styles.brand}
      to="/"
    >
      <MdLibraryBooks className={Styles.brandIcon} />
      Users Data
    </Link>
  );
};

export default Brand;
