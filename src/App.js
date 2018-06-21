import React, { Component } from 'react';
import './App.css';
import movies from './providers/data.js'
import Movie from './components/Movie.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        {
          movies.map(movie => <Movie key={movie.id} movie={movie} />)
        }
      </div>
    );
  }
}

export default App;
