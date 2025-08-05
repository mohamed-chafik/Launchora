import Image from "next/image";

export default function Home() {
  return (
   <div className='w-full h-[100vh]'>
   <Image src="/starship.png" width={6000} height={6000} className='w-full h-[100vh] z-1'/>
   </div> 
  );
}
