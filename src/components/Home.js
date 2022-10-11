import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';



const Home = () => {
    const allCourses = useLoaderData();
    const courses = allCourses.data;

    // console.log(courses)


    return (
        <div className='bg-gray-300'>
            <div className='text-sky-900 p-12 '>

                <h3 className='text-4xl font-bold'>
                    Spread Your Knowledge.
                </h3>
                <p>By answering some quizes, you can explore your knowledge about some best courses. </p>
            </div>
            <div className='grid md:grid-cols-4 w-100 mx-8 gap-4 bg-sky-900 p-5'>
                {courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)}
            </div>

        </div>

    );
};

export default Home;