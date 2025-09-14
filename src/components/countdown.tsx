import { IoIosAddCircleOutline } from "react-icons/io";
import { useState ,useEffect} from 'react';
export default function Countdown({onClickReadmore, launch}) {
  const Clases = 'flex flex-col justify-center items-center';
  const numClass = 'text-3xl font-bold';
  const today = new Date();
  const todayDate = [today.getFullYear(),today.getMonth() + 1, today.getDate(), today.getHours(), today.getMinutes()]; 
  console.log(launch);
  useEffect(() => {
    function count(todaydate,launchDate){
      let days = (todaydate[0] - launchDate.slice(0,4)) + (todaydate[1] - launchDate.slice(5,7)) + (todaydate[2] - launchDate.slice(8,10)) 
      let hours = ((24 - todaydate[3]) + parseInt(launchDate.slice(11,13))) 
      console.log((Math.abs(days) * 24) + hours)
    }
    count(todayDate, launch)
  }, [launch, todayDate])
  
  return(
    <>
    <div className='absolute z-1 w-[100%] h-[20%] text-white flex justify-center items-center'>
  <div className="w-[30%] flex justify-evenly">

   <div className={Clases}>
    <span className={numClass}>3</span>
    <span >Days</span>
    </div>
    
    <div className={Clases}>
    <span className={numClass}>18</span>
    <span>Hours</span>
    </div>

    <div className={Clases}>
    <span className={numClass}>30</span>
    <span >Minutes</span>
    </div>

  </div> 
  <button className='absolute right-[18px] flex justify-center items-center p-[10px]  hover:rounded-[17px] hover:bg-[#ffffff47] cursor-pointer' onClick={onClickReadmore}><IoIosAddCircleOutline /> ReadMore</button>
    </div>
    </>
  )
}
