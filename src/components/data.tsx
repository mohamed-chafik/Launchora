'use client';
import {Geist, Kanit, Ubuntu} from 'next/font/google';
const geist = Geist({
  weight: '300',
  subsets: ["latin"], // Add this line
})
const kanit = Kanit({

  weight: '600',
    subsets: ["latin"], // or ["latin", "latin-ext"]
})

const ubuntu = Ubuntu({
  weight: '500',
    subsets: ["latin"], // or ["latin", "latin-ext"]
})

export default function Data(){
  const dataStyle = 'w-fit h-fit flex flex-col justify-center items-center border-black border-solid pb-[10px] border-b-2'
  
  return(
  <>
  <div className='w-full p-[80px]'>
  <div className={dataStyle}>
  <span className={`${geist.className} text-sm text-[#979090]`}>Stages</span>
  <span className={`${ubuntu.className} text-xl`}>3</span>
  </div>
  </div>

  </>
  )
}
