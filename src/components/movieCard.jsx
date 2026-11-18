function MovieCard({ movie, label }) {
    return (
        <div className="col-12 col-md-6 col-xl-4">
            <article className="movie-card h-100">

                <div className="movie-card-poster">
                    {movie.poster ? (
                        <img
                            src={movie.poster}
                            alt={`Poster film ${movie.title}`}
                            className="movie-poster"
                        />
                    ) : (
                        <div className="movie-poster-placeholder">
                            <span className="poster-icon">🎬</span>
                            <strong>{movie.title}</strong>
                            <small>{movie.year}</small>
                        </div>
                    )}
                </div>

                <div className="movie-card-copy">
                    <span className="movie-kicker">
                        {label || "MOVIE DATABASE"}
                    </span>

                    <h3>{movie.title} ({movie.year})</h3>

                    <p className="movie-meta">
                        {movie.genres.join(" · ")}
                    </p>

                    <p className="movie-synopsis">
                        {movie.synopsis}
                    </p>

                    <div className="movie-information">
                        <span>🎬 {movie.director}</span>
                        <span>⏱ {movie.duration} menit</span>
                    </div>

                    <span className="movie-rating">
                        <span>★</span> {movie.rating.toFixed(1)}/10
                    </span>
                </div>

            </article>
        </div>
    );
}

export default MovieCard;