export default function Countdown() {
  const Clases = 'flex flex-col justify-center items-center'
  const numClass = 'text-3xl font-bold'
    return(
    <>
    <div className='absolute z-1 w-[100%] h-[20%] text-white flex justify-center'>
  <div className="w-[30%] flex justify-evenly">

   <div className={Clases}>
    <span className={numClass}>3</span>
    <span >Days</span>
    </div>
    
    <div className={Clases}>
    <span className={numClass}>18</span>
    <span>Hours</span>
    </div>

    <div className={Clases}>
    <span className={numClass}>30</span>
    <span >Minutes</span>
    </div>

  </div> 
    </div>
    </>
  )
}
