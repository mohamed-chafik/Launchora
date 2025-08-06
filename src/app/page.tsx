import Image from "next/image";
import Rocket from "../components/rocket.tsx"
import Countdown from '../components/countdown.tsx'
import Icon from '../components/button.tsx'
export default function Home() {
  return (
   <div className='w-full h-[100vh]'>

    <div className='z-0 absolute w-full h-full'>
    <div className='w-full h-[80%] flex'>
    <Rocket/>
    <Icon/>
    </div>
    <Countdown/>
   

    </div>

   <Image src="/starship.png" width={6000} height={6000} className='w-full h-[100vh] ' alt="background" />
   
   </div> 
  );  
}
