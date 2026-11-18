import MovieCard from './movieCard';

function MovieList({ movies }) {
    return (
        <section id="movie-catalog" className="movie-catalog">

            <div className="catalog-heading">
                <div>
                    <span className="welcome-label">EXPLORE YOUR COLLECTION</span>
                    <h2>Movie Catalog</h2>

                    <p>
                        {movies.length} film tersedia dalam katalog InfoMovies.
                    </p>
                </div>
            </div>

            {movies.length > 0 ? (
                <div className="row g-4">
                    {movies.map((movie, index) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            label={
                                index === 0
                                    ? "FEATURED MOVIE"
                                    : index === 1
                                        ? "POPULAR PICK"
                                        : "MOVIE DATABASE"
                            }
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <span>🎬</span>
                    <h3>Belum ada data film</h3>
                    <p>Silakan tambahkan film ke dalam katalog InfoMovies.</p>
                </div>
            )}

        </section>
    );
}

export default MovieList;