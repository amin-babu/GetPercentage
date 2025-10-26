import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <a className="btn btn-ghost text-xl">GetPercen</a>
        </div>
        <div>
          <img
            className="w-10 cursor-pointer rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;