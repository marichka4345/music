import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.scss';

export default ({ song }) => (
  <Link to={`/song/${song.id}`} className={styles.card}>
    <p className={styles.title}> {song.title}</p>
    <div> {song.text}</div>
  </Link>
);
