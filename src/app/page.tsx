'use client'
import Image from "next/image";
import Rocket from "../components/rocket.tsx";
import Countdown from '../components/countdown.tsx';
import Icon from '../components/button.tsx';
import Description from './description.tsx';
import { useState, useEffect } from 'react';
import {NextLaunch, FetchLaunch, Launch} from '../lib/utils.ts';

export default function Home() {
  const [nextLaunch, setNextLaunch] =useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    async function loadLaunch() {
    const launches = await FetchLaunch('https://ll.thespacedevs.com/2.3.0/launches/upcoming/',index);
     setNextLaunch(launches);
     console.log(launches.detail);
       
    }
    
    loadLaunch();
  }, []);


const handleValueChange = (value) => {
    setIndex(value);
    loadLaunch()
  };

if (nextLaunch != null){
     return (
    <>
      <div className='w-full h-[100vh]'>
              </div>
    </>
  );  
}
  }

