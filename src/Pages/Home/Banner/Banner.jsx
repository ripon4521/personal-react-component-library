import Typewriter from 'typewriter-effect';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';


const Banner = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    
    return (
        <div data-aos="zoom-in-up">
            <header>

<div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

  <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
  
    <h1 className="mb-4  inline-block font-rancho text-4xl font-bold  md:text-6xl bg-gradient-to-r from-green-500 via-lime-500 to-lime-400 bg-clip-text text-transparent ">
    <Typewriter
  options={{
    strings: [' The Website You Want Without The Dev Time.'],
    autoStart: true,
    loop: true,
  }}
/>
        
       </h1>
       
    <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-6 lg:mb-8"></p>
  
    <div className="flex items-stretch justify-center">
      <a href="#" className="mr-5 inline-block rounded-md bg-lime-400 px-5 py-4 text-center  font-grasick    font-bold  md:mr-6 lg:mr-8"> See Components</a>
      
      <a href="#" className="flex bg-lime-400 items-center justify-center rounded-md px-5 py-4 font-bold text-black">
        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg" alt="" className="mr-2 inline-block max-h-4 w-5" />
        <p className="  text-black font-grasick  ">Watch Demo</p>
      </a>
    </div>
  </div>

</div>
<img className='w-[600px] -mt-[350px] -ml-64' src="https://notextech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felement1.7b241e94.png&w=1920&q=75" alt="" />


   
</header>
<img data-aos="fade-up"
     data-aos-duration="3000" src='https://notextech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomeimg.97166bc5.png&w=1920&q=75' alt="" className=" -mt-20 lg:-mt-96 lg:w-[65%] mx-auto     object-cover" />

        </div>
    );
};

export default Banner;