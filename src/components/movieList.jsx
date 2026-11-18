import MovieCard from './movieCard';

function MovieList({
    movies,
    emptyMessage = 'Belum ada data film'
}) {
    return (
        <section id="movie-catalog" className="movie-catalog">

            <div className="catalog-heading">
                <div>
                    <span className="welcome-label">
                        EXPLORE YOUR COLLECTION
                    </span>

                    <h2>Movie Catalog</h2>

                    <p>
                        Menampilkan {movies.length} film.
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
                                    ? 'FEATURED MOVIE'
                                    : index === 1
                                        ? 'POPULAR PICK'
                                        : 'MOVIE DATABASE'
                            }
                        />
                    ))}

                </div>

            ) : (

                <div className="empty-state">
                    <span>🎬</span>

                    <h3>{emptyMessage}</h3>

                    <p>
                        Silakan ubah kata pencarian atau filter genre.
                    </p>
                </div>

            )}

        </section>
    );
}

export default MovieList;