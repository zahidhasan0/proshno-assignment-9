import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-sky-900 p-3 text-white flex justify-between items-center'>
            <div>
                <Link to='/'><h3 className='text-3xl font-bold ml-4 '>PROSHNO</h3></Link>
            </div >
            <div>
                <NavLink className='mr-3' to='/'>Home</NavLink>
                <Link className='mr-3' to='/quizes'>Topics</Link>
                <Link className='mr-3' to='/statistics'>Statistics</Link>
                <Link className='mr-3' to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;