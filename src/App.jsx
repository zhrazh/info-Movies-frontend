
import { useState } from 'react';

import './App.css';

import Header from './components/header';
import WelcomeBanner from './components/welcomeBanner';
import MovieStats from './components/movieStats';
import MovieList from './components/movieList';
import MovieForm from './components/movieForm';
import SearchBar from './components/searchBar';

import initialMovies from './data/movies';

function App() {

  // State utama daftar film
  const [movies, setMovies] = useState(initialMovies);

  // State pencarian dan filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  // Menambahkan film baru
  function handleAddMovie(newMovie) {
    setMovies((previousMovies) => [
      newMovie,
      ...previousMovies
    ]);
  }

  // Menghapus pencarian dan filter
  function handleResetSearch() {
    setSearchTerm('');
    setSelectedGenre('all');
  }

  // Mengambil semua genre unik dari data film
  const genres = [
    ...new Set(
      movies.flatMap((movie) => movie.genres)
    )
  ].sort();

  // Memfilter film berdasarkan pencarian dan genre
  const filteredMovies = movies.filter((movie) => {

    const keyword = searchTerm.toLowerCase().trim();

    const matchesSearch =
      movie.title.toLowerCase().includes(keyword) ||
      movie.director.toLowerCase().includes(keyword) ||
      String(movie.year).includes(keyword);

    const matchesGenre =
      selectedGenre === 'all' ||
      movie.genres.some(
        (genre) => genre.toLowerCase() === selectedGenre.toLowerCase()
      );

    return matchesSearch && matchesGenre;
  });

  // Menghitung statistik dari seluruh koleksi film
  const averageRating = movies.length
    ? movies.reduce(
      (total, movie) => total + movie.rating,
      0
    ) / movies.length
    : 0;

  const topRatedMovie = movies.length
    ? movies.reduce((top, movie) =>
      movie.rating > top.rating ? movie : top
    ).title
    : '-';

  const hasActiveFilter =
    searchTerm.trim() !== '' ||
    selectedGenre !== 'all';

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

        <MovieForm
          onAddMovie={handleAddMovie}
        />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
          onReset={handleResetSearch}
        />

        <MovieList
          movies={filteredMovies}
          emptyMessage={
            hasActiveFilter
              ? 'Film tidak ditemukan. Coba kata kunci atau genre lain.'
              : 'Belum ada data film'
          }
        />

      </main>

      <footer>
        <p>&copy; 2026 infoMovies. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;