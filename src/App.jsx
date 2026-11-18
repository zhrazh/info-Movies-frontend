
import { useState } from 'react';

import './App.css';

import Header from './components/header';
import WelcomeBanner from './components/welcomeBanner';
import MovieStats from './components/movieStats';
import MovieList from './components/movieList';

import initialMovies from './data/movies';

function App() {
  const [movies] = useState(initialMovies);

  const averageRating = movies.length
    ? movies.reduce((total, movie) => total + movie.rating, 0) / movies.length
    : 0;

  const topRatedMovie = movies.length
    ? movies.reduce((top, movie) =>
      movie.rating > top.rating ? movie : top
    ).title
    : '-';

  return (
    <>
      <Header />

      <main>
        <WelcomeBanner />

        <MovieStats
          totalMovies={movies.length}
          averageRating={averageRating}
          topRatedMovie={topRatedMovie}
        />

        <MovieList movies={movies} />
      </main>

      <footer>
        <p>&copy; 2026 infoMovies. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;