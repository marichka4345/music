import React, { Component } from "react";
import global from "../styles/app.global";
import styles from "../styles/app";

class App extends Component {
  addSong() {
    console.log("add song");
  }

  showList() {
    console.log("show list");
  }

  render() {
    return (
      <div>
        <div className={styles.main}>
          <div className={styles.lightPanel} onClick={this.addSong}>
            <span className={styles.title}>New Song</span>
          </div>
          <div className={styles.panel} onClick={this.showList}>
            <span className={styles.title}>See List</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
