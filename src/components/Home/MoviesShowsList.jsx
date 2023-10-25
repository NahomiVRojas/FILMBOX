import MoviesList from '../Movies/MoviesList';
import ShowList from '../ShowsList/ShowList';

export default function MoviesShowsList() {
    return (
        <>
            <div>
                <h1 className="text-white text-2xl font-bold py-2 pl-5 border-b-2 border-white">MOVIES</h1>
                <div className="flex direction-row justify-center items-center w-full pr-5">
                    <MoviesList/>
                </div>
            </div>
            <div>
                <h1 className="text-white text-2xl font-bold py-2 pl-5 border-b-2 border-white">TV SHOWS</h1>
                <div className="flex direction-row justify-center items-center w-full pr-5">
                    <ShowList />
                </div>
            </div>
        </>
    );
}