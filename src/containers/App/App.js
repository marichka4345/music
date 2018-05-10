import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Song from '../../components/Song/Song';
import SongList from '../SongList/SongList';

import global from './app.global.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={SongList} />
          <Route path="/song/:id" component={Song} />
        </div>
      </Router>
    );
  }
}

export default App;
