import {Geist, Kanit} from 'next/font/google';
const geist = Geist({
  weight: '300',
})
const kanit = Kanit({

  weight: '600',
})
export default function Rocket() {
  return(
    <>
    <div className='w-[50%] h-[100%] flex justify-center items-start p-[30px] flex-col'>
   <button className='bg-[#cfef00]  rounded-[100px] font-bold py-[2px] px-[10px]'>
  <span>Go</span>
  </button>
  <h1 className="text-white text-6xl font-[600] text-[82px]">Falcon Heavy</h1>
  <p className={`text-white text-base pr-[75px] ${geist.className}`}>All Dragon and Starship missions have the ability to conduct scientific research to improve life back on Earth as well as raise awareness to a global audience.</p>
  <h2 className={`text-white ${kanit.className}`}>Monday August 4 2025</h2>
    </div>

    </>
  )
}
