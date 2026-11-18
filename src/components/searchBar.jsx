function SearchBar({
    searchTerm,
    onSearchChange,
    selectedGenre,
    onGenreChange,
    genres,
    onReset
}) {
    return (
        <section id="search" className="search-section">

            <div className="search-heading">
                <div>
                    <span className="welcome-label">
                        FIND YOUR FAVORITE
                    </span>

                    <h2>Search Movies</h2>

                    <p>
                        Cari film berdasarkan judul, sutradara, atau tahun rilis.
                    </p>
                </div>
            </div>

            <div className="search-controls">

                <div className="search-input-wrapper">
                    <span className="search-icon">⌕</span>

                    <input
                        type="search"
                        className="form-control search-input"
                        placeholder="Cari judul, sutradara, atau tahun film..."
                        value={searchTerm}
                        onChange={(event) =>
                            onSearchChange(event.target.value)
                        }
                        aria-label="Cari film"
                    />
                </div>

                <select
                    className="form-select genre-select"
                    value={selectedGenre}
                    onChange={(event) =>
                        onGenreChange(event.target.value)
                    }
                    aria-label="Filter berdasarkan genre"
                >
                    <option value="all">Semua Genre</option>

                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className="btn btn-outline-warning reset-search-btn"
                    onClick={onReset}
                >
                    Reset
                </button>

            </div>

        </section>
    );
}

export default SearchBar;