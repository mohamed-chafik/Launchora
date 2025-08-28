import {Geist, Kanit} from 'next/font/google';

const geist = Geist({
  weight: '300',
});

const kanit = Kanit({
  weight: '300',
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
      <div className='w-[50%] h-[100%] flex justify-center items-start p-[30px] flex-col'>
        <button className='bg-[#cfef00] rounded-[100px] font-bold py-[2px] px-[10px]'>
          <span>{message[0].status.abbrev}</span>
        </button>
        <h1 className="text-white text-6xl font-[600] text-[82px]">
          {message[1].name || 'Mission Name TBA'}
        </h1>
        <p className={`text-white text-base pr-[75px] ${geist.className}`}>{message[0].mission.description}</p>
        <h2 className={`text-white ${kanit.className}`}>{message[0].net.slice(0,9)}</h2>
      </div>
    </>
  );
}
