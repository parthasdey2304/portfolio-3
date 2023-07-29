import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
 return (
    <div>
      <Navbar />
      <div className='w-full h-screen p-4 md:px-64 md:py-32'>
        <div className='w-full h-full border-2 md:flex md:space-x-5 p-6 rounded-3xl'>
          <div className='w-full h-full border-2 rounded-3xl p-6'>
            <div className='rounded-3xl w-full h-full p-6 py-32 flex-col'>
              <h1 className='text-6xl font-semibold'>I'm Partha Sarathi Dey</h1>
            </div>
          </div>
          <div className='w-full h-full border-2 rounded-3xl p-6'>
            <div className='border-2 rounded-3xl w-full h-full p-6'>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;