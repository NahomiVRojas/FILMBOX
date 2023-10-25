import { Link } from 'react-router-dom';
import UserPhoto from '../../assets/User.svg';
import Exit from '../../assets/Exit.svg';

function NavVar() {
    return (
        <nav className="flex justify-between items-center flex-row w-full h-20 text-white font-sans bg-gray-800">
            <div className="w-20% pl-5">
                <label className="text-4xl font-extrabold font-sans">FILMBOX</label>
            </div>

            <ul className="flex justify-between items-center flex-row w-1/2 h-full list-none p-0">
                <li className="h-16 w-1/6 flex justify-center items-center rounded-lg hover:bg-[#02031D]">
                    <Link to="/home" className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">HOME</Link>
                </li>
                <li className="h-16 w-1/6 flex justify-center items-center rounded-lg hover:bg-[#02031D]">
                    <Link to="/movies" className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">MOVIES</Link>
                </li>
                <li className="h-16 w-1/6 flex justify-center items-center rounded-lg hover:bg-[#02031D]">
                    <Link to="/shows" className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">TV SHOWS</Link>
                </li>
                <li className="h-16 w-1/6 flex justify-center items-center rounded-lg hover:bg-[#02031D]">
                    <Link to="/" className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">FAVORITES</Link>
                </li>
                <li className="h-16 w-1/6 flex justify-center items-center rounded-lg hover:bg-[#02031D]">
                    <Link to="/top" className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">TOP RATED</Link>
                </li>
            </ul>

            <div className="w-1/6 h-full flex justify-between items-center">
                <div className="w-1/2 flex justify-around items-center">
                    <label className="text-white no-underline font-bold h-80 flex justify-center items-center text-xl">NAME</label>
                    <img src={UserPhoto} className="h-8" />
                </div>
                <Link to="/">
                    <img src={Exit} className="h-8 pr-7" />
                </Link>
            </div>
        </nav>
    );
}

export default NavVar;
