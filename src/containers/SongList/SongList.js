import React, { Component } from 'react';

import Card from '../../components/Card/Card';

import { songs } from '../../songs';

import styles from './songList.scss';

const TEXT_LINE_COUNT = 6;

export default class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs
    };
  }

  modifySong(song) {
    return {
      ...song,
      text: song.text
        .split('\n')
        .slice(0, TEXT_LINE_COUNT)
        .join('\n')
    };
  }

  render() {
    const { songs } = this.state;

    return (
      <div className={styles.layout}>
        <h1 className={styles.title}>Saved Songs</h1>
        <div className={styles.list}>
          {songs.map(song => (
            <Card key={song.id} song={this.modifySong(song)} />
          ))}
        </div>
      </div>
    );
  }
}
