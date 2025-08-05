export default function Countdown() {
  const Clases = 'flex flex-col justify-center items-center'
    return(
    <>
    <div className='absolute z-1 w-[100%] text-white flex justify-center'>
    <div className={Clases}>
    <span>3</span>
    <span>Days</span>
    </div>
    
    <div className={Clases}>
    <span>18</span>
    <span>Hours</span>
    </div>

    <div className={Clases}>
    <span>30</span>
    <span>Minutes</span>
    </div>

    </div>
    </>
  )
}
