import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CourseForStatistics from './CourseForStatistics';

const Statistics = () => {
    const loadCourses = useLoaderData();
    const allCourses = loadCourses.data;
    return (
        <div>
            <h3>This is statistics.</h3>
            <div className='md:w-2/3 mx-auto mt-9'>
                <ResponsiveContainer>
                    <LineChart width={600} height={300} data={allCourses} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>


            </div>
        </div>
    );
};

export default Statistics;