import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
      <Link to="/">
        <div className="left flex items-center gap-2">
          <img className="w-9" src="https://i.ibb.co/QxPKXTh/logo.png" alt="" />
          <p className="hidden md:block lg:block text-2xl font-bold tracking-wide">
            Hobby <span className='text-primary'>Shop</span>
          </p>
        </div>
      </Link>
    );
};

export default Logo;