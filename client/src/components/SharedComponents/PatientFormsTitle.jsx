import {React,memo} from 'react'
import Doctor from '../../assets/PatientForms/Doctor.svg'
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg'
const PatientFormsTitle = memo(({ Title }) => {
  return (
   <>
        <div className=' px-4 xl:px-32 gap-10 pt-28 lg:pt-40'>
            <div className=' pb-10 md:pb-0 relative flex flex-col md:flex-row justify-start gap-10 xl:gap-32 items-center w-full overflow-hidden'>
                <img loading='lazy' width="auto" height="auto" src={Doctor} alt="" className=' md:max-w-[300px] lg:max-w-[455px]' />
                <h1
          className=" font-ElMessiri lg:max-w-[465px] xl:max-w-[650px] z-10 text-[#554075] font-bold text-center lg:text-left leading-[40px] md:leading-[70px] lg:leading-[80px] xl:leading-[91px] text-[45px] md:text-[70px] xl:text-[90px] 2xl:text-[98px]"
          // style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
         {Title}
        </h1>
        <img loading='lazy' width="auto" height="auto" src={GrayFlower} alt="" className='absolute right-0 lg:right-10 top-80 md:-top-10 w-[200px] md:w-[300px] lg:w-[435px] z-0' />
            </div>
        </div>
   </>
  )
})

export default PatientFormsTitle
