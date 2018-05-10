import React from 'react';
import { Link } from 'react-router-dom';

import styles from './home.scss';

export default () => (
  <div className={styles.main}>
    <Link to="/song/list" className={styles.lightPanel}>
      <span className={styles.title}>New Song</span>
    </Link>
    <Link to="/list" className={styles.panel}>
      <span className={styles.title}>See List</span>
    </Link>
  </div>
);
