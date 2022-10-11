import React from 'react';

const Course = ({ course }) => {
    console.log(course)
    const { logo, name, total } = course;
    return (
        <div>
            <div className='bg-gray-300 rounded-md '>
                <div className='p-5 text-sky-900' >
                    <img className='h-60 w-full' src={logo} alt="" />
                    <h4 className='text-2xl font-bold'>{name} </h4>
                    <p>Total quiz: {total}</p>
                    <button className='bg-sky-900 text-gray-300 font-semibold px-3 w-full rounded-lg'>Quizes</button>
                </div>
            </div>
        </div>
    );
};

export default Course;