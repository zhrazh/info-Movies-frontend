import './App.css';

import Header from './components/header';
import WelcomeBanner from './components/welcomeBanner';
import MovieStats from './components/movieStats';

function App() {
  return (
    <>
      <Header />

      <main>
        <WelcomeBanner />

        <MovieStats
          totalMovies={8}
          averageRating={8.25}
          topRatedMovie="The Dark Knight"
        />

        <section id="movie-catalog" className="catalog-placeholder">
          <h2>Movie Catalog</h2>
          <p>
            Explore your favorite movies. Movie collection
            will be displayed here.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 infoMovies. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;