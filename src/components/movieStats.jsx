function MovieStats({ totalMovies, averageRating, topRatedMovie }) {
    return (
        <section className="movie-stats" aria-label="Statistik film">

            <article className="stat-card">
                <span className="stat-icon">🎬</span>
                <div>
                    <p>Total Movies</p>
                    <h3>{totalMovies}</h3>
                </div>
            </article>

            <article className="stat-card">
                <span className="stat-icon">⭐</span>
                <div>
                    <p>Average Rating</p>
                    <h3>{averageRating.toFixed(2)}/10</h3>
                </div>
            </article>

            <article className="stat-card">
                <span className="stat-icon">🏆</span>
                <div>
                    <p>Top Rated Movie</p>
                    <h3>{topRatedMovie}</h3>
                </div>
            </article>

        </section>
    );
}

export default MovieStats;