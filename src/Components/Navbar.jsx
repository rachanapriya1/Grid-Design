import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white p-5 fixed top-0 left-0 right-0 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-3xl text-bold text-blue-600'>
          <h1 className='font-extrabold'>EDYODA</h1>
          <h3 className='text-black text-sm'>stories</h3>
        </div>
        <div className='text-black'>
          <h2>Explore the category ▼</h2>
        </div>
        <div className='text-gray-500'>
          <h3>EdYoda is a learning and knowledge</h3>
          <h3>sharing platform for techies</h3>
        </div>
        <button className='bg-blue-500 text-white px-4 py-3 rounded-full '>
          Go to main website
        </button>
      </div>
    </div>
  );
};

export default Navbar;
