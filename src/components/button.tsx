import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

export default function Icon(){ 
  return (
   <>
    <div className='w-[50%] h-[100%]  p-[30px] flex flex-row justify-end items-center '>
 <button className='w-[46px] h-[46px] mr-[10px] text-white border border-solid rounded-[50%] text-4xl flex justify-center items-center cursor-pointer hover:bg-[#ffffff4d]'>
<AiOutlineLeft/>

    </button>
    <button className='w-[46px] h-[46px] text-white border border-solid rounded-[50%] text-4xl flex justify-center items-center cursor-pointer hover:bg-[#ffffff4d]'>
<AiOutlineRight />

    </button>


    </div>

    </>

  );
};
