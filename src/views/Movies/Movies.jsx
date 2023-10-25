import NavVar from '../../components/NavVar/NavVar'
import MoviesList from '../../components/Movies/MoviesList'
import InputSearch from '../../components/InputSearch/InputSearch'

export default function Movies() {
    return (
        <>
            <NavVar/>
            <InputSearch/>
            <MoviesList/>
        </>
    )
}