import React, { useState, useEffect } from 'react'
import data from './data'
import './style.css'

function App() {
  const [movies, setMovies] = useState()
  const [order, setOrder] = useState('rating')
  const [showResume, setShowResume] = useState()

  useEffect(() => {
    setMovies(data)
  }, [])

  const handleOrder = (e) => {
    setOrder(e.target.value)
  }

  const ordination = () => {
    if (order === 'rating') {
      return data.sort((a, b) => b.rating - a.rating)
    }

    if (order === 'name') {
     return data.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (order === 'year') {
      return data.sort((a, b) => b.year - a.year)
    }

    if (order === 'duration') {
      return data.sort((a, b) => b.duration - a.duration)
    }

    return data
  } 

  return (
    <div className="movies__main">
      <h1>IMDB Top Rated Movies</h1>
      <div className="movies__content">
        <div className='control'>
          <select onChange={handleOrder} >
            <option value='rating'>Rating</option>
            <option value='name'>Name</option>
            <option value='year' >Year</option>
            <option value='duration'>Duration</option>
          </select>
        </div>
        <div className="movies__list">
          {
            movies && ordination().map((movie) => {
              return (
                <div key={movie.order} className="movie" style={{ backgroundImage: `url(${movie.image})` }}>
                  <div className="movie__cover" onClick={() => setShowResume(movie.order)}>
                    <span className={`movie__cover--rating ${movie.rating > 9 ? 'high' : 'medium'}`}>
                      {movie.rating}
                    </span>
                    <div className="movie__cover--content">
                      <span className="movie__cover--title"> {movie.name} ({movie.year}) </span>
                      <p className="movie__cover--details">
                        {movie.categories.map(category => {
                          return category + ', '
                        })}
                      </p>
                      <p className="movie__cover--details">
                        {Math.floor(movie.duration / 60)}h {(movie.duration % 60)}min
                      </p>
                    </div>
                  </div>
                  {
                    showResume == movie.order && <div className="movie__description" onClick={() => setShowResume(null)}>
                      <p className="movie__cover--resume">
                        {movie.resume}
                      </p>
                      <span className="movie__cover--director">
                        Director: {movie.director}
                      </span>
                    </div>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App
