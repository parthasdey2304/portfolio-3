import { useState } from 'react';
import Navbar from './components/Navbar';
import myimage from './static/img/myimage.jpeg'

function App() {
 return (
    <div>
      <Navbar />
      <div className='w-full h-screen md:h-[1300px] p-4 md:px-64 md:py-20'>
        <div className='w-full h-full md:flex md:space-x-5 p-6 rounded-3xl'>
          <div className='w-full h-full rounded-3xl p-6'>
            <div className='rounded-3xl w-full h-full p-10 md:py-80 flex-col space-y-10'>
              <h1 className='text-5xl md:text-6xl font-semibold text-blue-600'>I'm <br /> Partha Sarathi Dey</h1>
              <p className='text-xl md:text-3xl font-semibold md:font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus repudiandae dignissimos temporibus eius harum sunt, non in ut assumenda quaerat ad cumque, animi ullam itaque magni dicta id neque!</p>
            </div>
          </div>
          <div className='w-full h-full rounded-3xl'>
            <div className='rounded-3xl w-full h-full md:pt-64 md:pl-64'>
              <div className='w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-black z-50 absolute -skew-y-6 p-4'>
                <div className='w-full h-full bg-white rounded-full p-4'>
                  <img src={myimage} alt="" className='rounded-full skew-y-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[1300px] bg-blue-600 -z-50'></div>
    </div>
  );
}

export default App;