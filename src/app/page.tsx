// page.tsx (fixed)
'use client'
import Image from "next/image";
import Rocket from "../components/rocket";
import Countdown from '../components/countdown';
import Icon from '../components/button';
import Description from './description';
import { useState, useEffect } from 'react';
import { FetchLaunch, Launch, LaunchesResponse } from '../lib/utils';
export default function Home() {
  const [nextLaunch, setNextLaunch] = useState<Launch[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(1);
 const [readMore, setReadmore] = useState(false);
  useEffect(() => {
    async function loadLaunch() {
      try {
        setLoading(true);
        const launches: LaunchesResponse = await FetchLaunch('https://ll.thespacedevs.com/2.3.0/launches/upcoming/?limit=100');
        setNextLaunch(launches.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    
    loadLaunch();
  }, []);

  const handleValueChange = (value: number) => {
    setIndex(value);
  
  };

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="w-full h-screen flex items-center justify-center">Error: {error}</div>;
  }

  if (!nextLaunch || nextLaunch.length === 0) {
    return <div className="w-full h-screen flex items-center justify-center">No launches found</div>;
  }

  // Ensure index is within bounds
  const currentLaunch = nextLaunch[Math.min(index, nextLaunch.length - 1)];

  const handleReadmore = () => {
    setReadmore((prev) => !prev); // Toggle between true/false
  };

  return (
    <>
      <div className='w-full h-[100vh]'>
        <div className='z-0 absolute  w-full h-full'>
          <div className='w-full h-[80%] flex'>
            <Rocket message={currentLaunch} />
            <Icon onValueChange={handleValueChange}  />
          </div>
          <Countdown launch={currentLaunch.net} onClickReadmore={handleReadmore}/>
        </div>
   
        {currentLaunch.image && currentLaunch.image.image_url ? (
          <Image 
            src={currentLaunch.image.image_url}
            width={6000} 
            height={6000} 
            className='w-full h-[100vh] object-cover initial top-0 left-0 z-0' 
            alt="Launch background" 
            priority
          />
        ) : (
          <div className="w-full h-[100vh] bg-black absolute top-0 left-0 z-0"></div>
        )}
     </div> 

      {readMore && <Description />}
      </>
  );
}
