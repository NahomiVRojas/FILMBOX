import { useEffect, useState } from 'react';
import { getLatestMovies } from '../../Services/request'
import Next from '../../assets/Next.svg'
import { useLocation } from 'react-router-dom';

export default function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        if (movies.length === 0) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const location = useLocation();

    useEffect(() => {
        getLatestMovies(currentPage)
            .then((moviesData) => {
                setMovies(moviesData);
                console.log('Data Peliculas:', moviesData)
            })
            .catch((error) => {
                console.error('Error al obtener películas:', error);
            });
    }, [currentPage]);

    return (
        <>
            {location.pathname == '/home' && (
                <div className="flex flex-wrap justify-center items-center w-full pl-5 pr-5">
                    {movies && movies.length > 0 ? (
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie, index) => (
                                <div key={index} className="w-1/12 px-2 py-2">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + movie.poster_path}
                                        alt={movie.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            ))
                    ) : (
                        <p>No hay películas disponibles</p>
                    )}
                </div>
            )}
            {location.pathname !== '/movies' && ( //{} se utiliza para encerrar parte de codigo del componente
                <img src={Next} onClick={handleNextPage} className='cursor-pointer' />
            )}
            {location.pathname == '/movies' && (
                <div className="flex flex-wrap justify-center items-center w-full pl-5 pr-5">
                    {movies && movies.length > 0 ? (
                        movies
                            .filter((movie) => movie.poster_path)
                            .map((movie, index) => (
                                <div key={index} className="w-1/6 px-2 py-2">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + movie.poster_path}
                                        alt={movie.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            ))
                    ) : (
                        <p>No hay películas disponibles</p>
                    )}
                </div>
            )}
        </>
    );
}
