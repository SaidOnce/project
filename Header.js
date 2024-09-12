import React from 'react';
import Logo from "./images/logo.png"
import { useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();

    const toIndex = () => {
      navigate("/");
    }

    const toProtected = () => {
      navigate("/protected");
    }

    const toLogin = () => {
      navigate("/login");
    }

    const toRegistration = () => {
      navigate("/registration");
    }

    const style = `sm:text-3xl md:text-2xl lg:text-xl xl:text-base leading-relaxed break-words`

  return (
    <header className='select-none bg-gray-300 max-h-[10vh] h-[10vh] flex justify-between items-center overflow-hidden mb-5 px-5'>
        <div className='flex-1'>
          <img onClick={toIndex} className='select-none max-h-[9vh]  cursor-pointer' src={Logo} alt='' />
        </div>
        <div className='flex-1 text-center'>
          <div>
            <button onClick={toProtected} className={`select-none py-[1.5vh] px-[3vw] rounded-lg font-medium bg-indigo-600 text-black 
            ${style}`}>Protected</button>
          </div>
        </div>
        <div className='flex-1 text-end min-w-[34.6vw]'>
            <button onClick={toLogin} className={`select-none py-[1.5vh] px-[3vw] rounded-lg font-medium bg-teal-200 text-teal-800 
            ${style}`}>Войти</button>
            <button onClick={toRegistration} className={`ml-2 py-[1.5vh] px-[3vw] rounded-lg font-medium bg-teal-400 text-teal-800 
            ${style}`}>Регистарция</button>
        </div>
    </header>
  );
};

export default Header;