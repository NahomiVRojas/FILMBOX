import { useEffect, useState } from 'react';
import { getLatestTvShows } from '../../Services/request';
import Next from '../../assets/Next.svg'
import { useLocation } from 'react-router-dom';

export default function ShowList() {
    const [tvShows, setTvShows] = useState([]);
    const [currentPageTvShow, setCurrentPageTvShow] = useState(1);

    const handleNextPageTvShow = () => {
        if (tvShows.length === 0) {
            setCurrentPageTvShow(1);
        } else {
            setCurrentPageTvShow(currentPageTvShow + 1);
        }
    };

    const location = useLocation();

    useEffect(() => {
        getLatestTvShows(currentPageTvShow)
            .then((tvShowsData) => {
                setTvShows(tvShowsData);
                console.log('Data Shows:', tvShowsData)
            })
            .catch((error) => {
                console.error('Error al obtener programas de televisión:', error);
            });
    }, [currentPageTvShow]);

    return (
        <>
            {location.pathname == '/home' && (
                <div className="flex flex-wrap justify-center items-center w-full pl-5 pr-5">
                    {tvShows && tvShows.length > 0 ? (
                        tvShows
                            .filter((show) => show.poster_path)
                            .map((tvShow, index) => (
                                <div key={index} className="w-1/12 px-2 py-2">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + tvShow.poster_path}
                                        alt={tvShow.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            ))
                    ) : (
                        <p>No hay programas de televisión disponibles</p>
                    )}
                </div>
            )}
            {location.pathname !== '/shows' && (
                <img src={Next} className='cursor-pointer' onClick={handleNextPageTvShow} />
            )}
            {location.pathname == '/shows' && (
                <div className="flex flex-wrap justify-center items-center w-full pl-5 pr-5">
                    {tvShows && tvShows.length > 0 ? (
                        tvShows
                            .filter((show) => show.poster_path)
                            .map((tvShow, index) => (
                                <div key={index} className="w-1/6 px-2 py-2">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w440_and_h660_face/` + tvShow.poster_path}
                                        alt={tvShow.title}
                                        className="w-full h-full"
                                    />
                                </div>
                            ))
                    ) : (
                        <p>No hay programas de televisión disponibles</p>
                    )}
                </div>
            )}
        </>

    )
}