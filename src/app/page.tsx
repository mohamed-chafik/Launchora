'use client'
import Image from "next/image";
import Rocket from "../components/rocket.tsx";
import Countdown from '../components/countdown.tsx';
import Icon from '../components/button.tsx';
import Description from './description.tsx';
import { useState, useEffect } from 'react';
import {nextLaunch} from '../lib/utils.ts';
export default function Home() {
  const [nextLaunch, setNextLaunch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    async function loadLaunch() {
      try {
        setLoading(true);
        const response = await fetch('https://ll.thespacedevs.com/2.3.0/launches/upcoming/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Set the next launch (first in the array)
        if (data.results && data.results.length > 0) {
          setNextLaunch(data.results);
        }

        setError(null);
      } catch (error) {
        console.error(error);
        setError('Failed to load launch data');
      } finally {
        setLoading(false);
      }
    }
    
    loadLaunch();
  }, []);
const handleValueChange = (value) => {
    setIndex(value);
  };

if (nextLaunch != null){
     return (
    <>
      <div className='w-full h-[100vh]'>
        <div className='z-0 absolute w-full h-full'>
          <div className='w-full h-[80%] flex'>
            <Rocket message={nextLaunch[index]} />
            <Icon onValueChange={handleValueChange}/>
          </div>
          <Countdown launch={nextLaunch[index]} />
        </div>
        <Image 
          src={nextLaunch[index].image.image_url}
          width={6000} 
          height={6000} 
          className='w-full h-[100vh]' 
          alt="background" />
      </div> 
      <div className='w-full h-[100vh]'>
        <Description />
      </div>
    </>
  );  
}
  }

