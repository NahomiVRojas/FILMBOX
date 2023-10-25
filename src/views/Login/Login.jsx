import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-row">
        <div className="w-1/2 h-screen flex justify-center items-center">
          <img src={Logo} alt='Logo FilmBox' className="w-4/5 h-auto" />
        </div>
        <div className="bg-[#04082E] w-1/2 h-screen flex justify-center items-center flex-col">
          <form className="w-full h-2/2 flex flex-col items-center justify-center text-center font-sans">
            <input
              type="email"
              placeholder='EMAIL'
              className="p-4 mb-2.5 w-1/2 border border-solid border-white-50 bg-[#ffffff27] text-white text-center font-roboto-condensed text-md"
            />
            <input
              type="password"
              placeholder='PASSWORD'
              className="p-4 mb-2.5 w-1/2 border border-solid border-white-50 bg-[#ffffff27] text-white text-center font-roboto-condensed text-md"
            />
            <NavLink to="/home" className="p-4 mb-2.5 w-1/2 cursor-pointer bg-blue-600">
              <button className="p-0 border-none bg-blue-600 text-white text-lg font-bold font-roboto-condensed cursor-pointer">
                SIGN IN
              </button>
            </NavLink>
          </form>
          <div>
            <label className="font-sans text-white mr-1">For the First Time on Filmbox?</label>
            <button className="border-none bg-none p-0 m-0 text-white cursor-pointer outline-none text-medium font-bold font-sans">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
