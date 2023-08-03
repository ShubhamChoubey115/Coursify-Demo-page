import React from 'react'

const Hero = () => {
  return (
    <div className='mt-20 flex items-center justify-center'>
        <div className='flex flex-col gap-4'>
        <h1 className='font-extrabold text-2xl'>Find your next top tech job in 1 week.</h1>
        <h3>Are you a <span className='bg-yellow-100'>top 2% Software Engineer</span>, Product Manager or Data Scientist?
        <br/>
        Let leading Indian technology companies compete <span className='bg-yellow-100'>to hire you.</span></h3>

        <button className='bg-slate-800 text-white py-2 rounded-lg max-w-[200px]'>Apply Premium -></button>
        </div>
        <div>
            <img src='https://global-uploads.webflow.com/605ad29901132bc543e01d9b/62727ac8f4e4d65ee7b28106_1-Hero_profile_new_o.jpg' height="400px" width="400px"></img>
        </div>
    </div>
  )
}

export default Hero