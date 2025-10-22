import {Geist, Kanit} from 'next/font/google';

const geist = Geist({
  weight: '300',
    subsets: ["latin"], // or ["latin", "latin-ext"]
});

const kanit = Kanit({
  weight: '500',
    subsets: ["latin"], // or ["latin", "latin-ext"]
});

export default function Rocket({message}) {
  // Handle cases where message might be null or undefined
  if (!message) {
    return (
      <div className='w-[50%] h-[100%] flex justify-center items-start p-[30px] flex-col'>
        <button className='bg-[#cfef00] rounded-[100px] font-bold py-[2px] px-[10px]'>
          <span>Loading...</span>
        </button>
        <h1 className="text-white text-6xl font-[600] text-[82px]">Loading mission...</h1>
      </div>
    );
  }


  return(
    <>
      <div className='w-[50%] h-[100%] flex justify-center items-start p-[30px] flex-col gap-[6px]'>
        <button className='bg-[#cfef00] rounded-[100px] font-bold py-[0px] px-[5px] md:py-[2px] md:px-[10px]'>
          <span>{message.status.abbrev}</span>
        </button>
        <h1 className="text-white text-6xl font-[600] text-[25px] md:text-[50px]">
          {message.name || 'Mission Name TBA'}
        </h1>
        <p className={`text-white text-base pr-[75px] hidden lg:flex ${geist.className}`}>{(message.mission.description.slice(0,300)).slice(0, message.mission.description.slice(0,300).lastIndexOf('.') + 1)}</p>
        <h2 className={`text-white font-bold ${kanit.className}`}>{message.net.slice(0,10)}</h2>
      </div>
    </>
  );
}
