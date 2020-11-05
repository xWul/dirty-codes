import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App-main">
      <h1>Dirty Codes 🗑</h1>
      <div className="App-content">
        <Link to='/movies'>
          <button className="App-button offset-button">
            Movies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App
