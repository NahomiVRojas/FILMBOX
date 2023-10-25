import { useEffect, useState } from 'react'
import { getTopMovies } from '../../Services/request'

export default function MoviesTop() {
    const [moviesTop, setMoviesTop] = useState([])

    useEffect(() => {
        getTopMovies()
            .then((data) => {
                console.log('Peliculas Top', data)
                setMoviesTop(data)
            })
            .catch((error) => {
                console.error('error al obtener el top peliculas', error)
            })
    }, []);

    return (
        <>
            <h1 className="text-white text-2xl font-bold py-2 pl-5 border-b-2 border-white ">MOVIES TOP</h1>
            <div className="flex flex-wrap justify-center items-center w-full pl-5 pr-5">
                {moviesTop && moviesTop.length > 0 ? (
                    moviesTop
                        .filter((movie) => movie.poster_path)
                        .map((moviesTop, index) => (
                            <div key={index} className="w-1/6 px-2 py-2">
                                <img
                                    src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + moviesTop.poster_path}
                                    alt={moviesTop.title}
                                    className="w-full h-full"
                                />
                            </div>
                        ))
                ) : (
                    <p>No hay programas de televisión disponibles</p>
                )}
            </div>
        </>
    )
}