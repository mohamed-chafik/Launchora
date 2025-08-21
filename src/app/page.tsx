'use client'
import Image from "next/image";
import Rocket from "../components/rocket.tsx";
import Countdown from '../components/countdown.tsx';
import Icon from '../components/button.tsx';
import Description from './description.tsx';
import {useState, useEffect} from 'react';

export interface rocket{
  count: number;
}

export default function Home() {
  const [rockets, setRocket] = useState<rocket[rockets]>([]);
  const [loading, setLoading] = useState(true);
  
useEffect(() => {
    async function loadLaunch() {
      try {
        setLoading(true);
        // Note: Your URL seems to be for a specific launch (with a UUID), not a list
        const response = await fetch('https://fdo.rocketlaunch.live/json/launches/next/5');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setRocket(data.result);
        console.log(rockets);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch launch data');
      } finally {
        setLoading(false);
      }
    }
    
    loadLaunch();
  }, []);        
  return (
    <>   <div className='w-full h-[100vh]'>

    <div className='z-0 absolute w-full h-full'>
    <div className='w-full h-[80%] flex'>
    <Rocket/>
    <Icon/>
    </div>
    <Countdown/>
   

    </div>

   <Image src="/starship.png" width={6000} height={6000} className='w-full h-[100vh] ' alt="background" />
   
   </div> 
    <div className='w-full h-[100vh]'>
        <Description/>
    </div>
    </>

  );  
}
