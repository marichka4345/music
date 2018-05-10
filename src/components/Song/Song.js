import React, { Component } from 'react';

import { songs } from '../../songs';

import styles from './song.scss';

export default class Song extends Component {
  constructor(props) {
    super(props);
    const song = songs
      .find(song => song.id === Number(this.props.match.params.id))
      .text.split('\n');

    this.state = {
      song
    };
  }

  handleLineChange(event, index) {
    const value = event.target.innerHTML;
    this.setState(prevState => ({
      song: [
        ...prevState.song.slice(0, index),
        value,
        ...prevState.song.slice(index + 1)
      ]
    }));
  }

  render() {
    const { song } = this.state;

    return (
      <div>
        {song.map((line, index) => (
          <div
            className={styles.line}
            suppressContentEditableWarning={true}
            contentEditable="true"
            key={index}
            onInput={event => this.handleLineChange(event, index)}
          >
            {song[index]}
          </div>
        ))}
      </div>
    );
  }
}
