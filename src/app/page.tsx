'use client'
import Image from "next/image";
import Rocket from "../components/rocket.tsx";
import Countdown from '../components/countdown.tsx';
import Icon from '../components/button.tsx';
import Description from './description.tsx';
import { useState, useEffect } from 'react';


export default function Home() {
  const [launch, setLaunch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function loadLaunch() {
      try {
        setLoading(true);
        const response = await fetch('https://ll.thespacedevs.com/2.3.0/launches/upcoming/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setLaunch(data.results);
  
        setError(null);
      } catch (error) {
        console.error(error);
        setError('Failed to load launch data');
      } finally {
        setLoading(false);
      }
    }
    
    loadLaunch();
  }, [])      

  return (
    <>   <div className='w-full h-[100vh]'>

    <div className='z-0 absolute w-full h-full'>
    <div className='w-full h-[80%] flex'>
    <Rocket message={launch}/>
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
