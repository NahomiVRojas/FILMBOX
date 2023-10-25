import NavVar from '../../components/NavVar/NavVar'
import MoviesTop from '../../components/MoviesTop/MoviesTop'
import InputSearch from '../../components/InputSearch/InputSearch'
import ButtonTop from '../../components/ButtonTop/ButtonTop'
import { useState } from 'react'

export default function TopMovies() {
    const [showMoviesTop, setShowMoviesTop] = useState(false);

    const handleMoviesTop = () => {
        setShowMoviesTop(true);
    }

    return (
        <>
            <NavVar />
            <InputSearch />
            <div className="flex justify-center flex-row">
                <ButtonTop buttonText='MOVIES TOP' onClick={handleMoviesTop} />
                <ButtonTop buttonText='TV SHOWS TOP' onClick={handleMoviesTop} />
            </div>
            {showMoviesTop && <MoviesTop />}

        </>
    )
}