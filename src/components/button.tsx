import { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { NextLaunch } from '../lib/utils';

export default function Icon({onValueChange}) { 
  const [num, setNum] = useState(1);
  
  const handlePrevClick = () => {
    const newNum = num - 1;
    setNum(newNum);
    NextLaunch(newNum);
    onValueChange(newNum);
  };
  
  const handleNextClick = () => {
    const newNum = num + 1;
    setNum(newNum);
    NextLaunch(newNum);
    onValueChange(newNum);
  };
  
  return (
    <>
      <div className='w-[50%] h-[100%] p-[30px] flex flex-row justify-end items-center'>
        <button 
          onClick={handlePrevClick} 
          className='w-[46px] h-[46px] mr-[10px] text-white border border-solid rounded-[50%] text-4xl flex justify-center items-center cursor-pointer hover:bg-[#ffffff4d]'
        >
          <AiOutlineLeft />
        </button>
        <button 
          onClick={handleNextClick}
          className='w-[46px] h-[46px] text-white border border-solid rounded-[50%] text-4xl flex justify-center items-center cursor-pointer hover:bg-[#ffffff4d]'
        >
          <AiOutlineRight />
        </button>
      </div>
    </>
  );
};
