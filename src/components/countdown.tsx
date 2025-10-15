import { IoIosAddCircleOutline } from "react-icons/io";
import { useState ,useEffect} from 'react';
export default function Countdown({launch}) {
  const Clases = 'flex flex-col justify-center items-center';
  const numClass = 'text-3xl font-bold';
  const [countdown, updateCount] = useState([]);

  useEffect(() => {
    function count(launchDate) {
      const today = new Date();
      const todaydate = [today.getFullYear(), today.getMonth() + 1, today.getDate(), today.getHours(), today.getMinutes()]; 
      const years = todaydate[0] - launchDate.slice(0,4) 
      const months = (todaydate[1] - launchDate.slice(5,7)) 
      const days = todaydate[2] - launchDate.slice(8,10)
      const hours = (24 - todaydate[3]) + parseInt(launchDate.slice(11,13))
      const minutes = (60 - todaydate[4]) + parseInt(launchDate.slice(15,17))
      const countdowncal = [Math.abs((years * 365) + (months * 30) + days), hours, minutes]
      updateCount(countdowncal);
    }

    count(launch);
    
    const interval = setInterval(() => {
      count(launch); // This uses the current launch value
    }, 1000);

    return () => clearInterval(interval);
  }, [launch]); // Effect re-runs when launch changes

 
  return(
    <>
    <div className='absolute z-1 w-[100%] h-[20%] text-white flex justify-center items-center'>
  <div className="w-[100%] flex justify-evenly md:w-[30%]">

   <div className={Clases}>
    <span className={numClass}>{countdown[0]}</span>
    <span >Days</span>
    </div>
    
    <div className={Clases}>
    <span className={numClass}>{countdown[1]}</span>
    <span>Hours</span>
    </div>

    <div className={Clases}>
    <span className={numClass}>{countdown[2]}</span>
    <span >Minutes</span>
    </div>

  </div> 
  <button className='absolute right-[18px] hidden md:flex justify-center items-center p-[10px]  hover:rounded-[17px] hover:bg-[#ffffff47] cursor-pointer  ' ><IoIosAddCircleOutline /> ReadMore</button>
    </div>
    </>
  )
}
