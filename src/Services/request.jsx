//PELICULAS
export const getLatestMovies = async (page = 1) => {
    const apiKey = 'e428b5a5bb142309dbeacac72868d325';
    const apiUrl = 'https://api.themoviedb.org/3';
    const url = `${apiUrl}/movie/now_playing?api_key=${apiKey}&page=${page}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las películas.');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            console.log(data.results);
            const movies = data.results;
            console.log(movies);
            return movies;
        } else {
            throw new Error('No se encontraron películas.');
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
};

//SERIES
export const getLatestTvShows = async (page = 1) => {
    const apiKey = 'e428b5a5bb142309dbeacac72868d325';
    const apiUrl = 'https://api.themoviedb.org/3';
    const url = `${apiUrl}/tv/airing_today?api_key=${apiKey}&page=${page}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las películas.');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            console.log(data.results);
            const tvShows = data.results;
            console.log(tvShows);
            return tvShows;
        } else {
            throw new Error('No se encontraron series.');
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
};

//TOP RATED MOVIES
export const getTopMovies = async (page = 2) => {
    const apiKey = 'e428b5a5bb142309dbeacac72868d325';
    const apiUrl = 'https://api.themoviedb.org/3';
    const url = `${apiUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las películas.');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            console.log(data.results);
            const moviesTop = data.results;
            console.log(moviesTop);
            return moviesTop;
        } else {
            throw new Error('No se encontraron series.');
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
};