import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div>
            <header>

<div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

  <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
  
    <h1 className="mb-4 inline-block font-grasick text-4xl font-bold  md:text-6xl bg-gradient-to-r from-green-500 via-lime-500 to-lime-400 bg-clip-text text-transparent ">
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
      <a href="#" className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8">Get Started</a>
      <a href="#" className="flex items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black">
        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg" alt="" className="mr-2 inline-block max-h-4 w-5" />
        <p className="text-sm text-black sm:text-base">Watch Demo</p>
      </a>
    </div>
  </div>

  <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg" alt="" className="inline-block max-h-[512px] w-full object-cover" />
</div>
</header>
        </div>
    );
};

export default Banner;