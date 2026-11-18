import { useState } from 'react';

const initialFormData = {
    title: '',
    year: '',
    director: '',
    genres: '',
    rating: '',
    duration: '',
    synopsis: ''
};

function MovieForm({ onAddMovie }) {
    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setSuccessMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newMovie = {
            id: Date.now(),
            title: formData.title.trim(),
            year: Number(formData.year),
            director: formData.director.trim(),
            genres: formData.genres
                .split(',')
                .map((genre) => genre.trim())
                .filter(Boolean),
            rating: Number(formData.rating),
            duration: Number(formData.duration),
            synopsis: formData.synopsis.trim(),
            poster: '',
            trailer: ''
        };

        onAddMovie(newMovie);

        setFormData({ ...initialFormData });
        setSuccessMessage(
            `${newMovie.title} berhasil ditambahkan ke katalog!`
        );
    }

    function handleReset() {
        setFormData({ ...initialFormData });
        setSuccessMessage('');
    }

    return (
        <section id="movie-form" className="movie-form-section">

            <div className="form-heading">
                <span className="welcome-label">
                    BUILD YOUR COLLECTION
                </span>

                <h2>Tambah Film Baru</h2>

                <p>
                    Tambahkan film favoritmu ke dalam koleksi InfoMovies.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="movie-form">

                <div className="row g-3">

                    <div className="col-md-6">
                        <label htmlFor="title" className="movie-form-label">
                            Judul Film
                        </label>

                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control movie-form-control"
                            placeholder="Contoh: Avatar"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="director" className="movie-form-label">
                            Sutradara
                        </label>

                        <input
                            type="text"
                            id="director"
                            name="director"
                            className="form-control movie-form-control"
                            placeholder="Nama sutradara"
                            value={formData.director}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="year" className="movie-form-label">
                            Tahun Rilis
                        </label>

                        <input
                            type="number"
                            id="year"
                            name="year"
                            className="form-control movie-form-control"
                            placeholder="2024"
                            min="1888"
                            max="2100"
                            value={formData.year}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="genres" className="movie-form-label">
                            Genre
                        </label>

                        <input
                            type="text"
                            id="genres"
                            name="genres"
                            className="form-control movie-form-control"
                            placeholder="Action, Drama"
                            value={formData.genres}
                            onChange={handleChange}
                            required
                        />

                        <small className="form-hint">
                            Pisahkan beberapa genre dengan koma.
                        </small>
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="rating" className="movie-form-label">
                            Rating (0–10)
                        </label>

                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            className="form-control movie-form-control"
                            placeholder="8.5"
                            min="0"
                            max="10"
                            step="0.1"
                            value={formData.rating}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="duration" className="movie-form-label">
                            Durasi (Menit)
                        </label>

                        <input
                            type="number"
                            id="duration"
                            name="duration"
                            className="form-control movie-form-control"
                            placeholder="120"
                            min="1"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="synopsis" className="movie-form-label">
                            Sinopsis Film
                        </label>

                        <textarea
                            id="synopsis"
                            name="synopsis"
                            className="form-control movie-form-control"
                            rows="4"
                            placeholder="Tuliskan ringkasan cerita film..."
                            value={formData.synopsis}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                <div className="movie-form-actions">

                    <button type="submit" className="btn btn-warning">
                        + Tambah Film
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-light"
                        onClick={handleReset}
                    >
                        Reset Form
                    </button>

                </div>

                {successMessage && (
                    <p className="form-success" role="status">
                        ✓ {successMessage}
                    </p>
                )}

            </form>
        </section>
    );
}

export default MovieForm;