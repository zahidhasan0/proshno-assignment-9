import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Statistics = () => {
    const loadCourses = useLoaderData();
    const allCourses = loadCourses.data;
    return (
        <div>
            <h3 className='text-3xl text-sky-900 font-semibold border-b-2 w-2/3 mx-auto shadow-lg mt-7'>Line Chart Of Total Quizes Of Every Single Topic</h3>
            <div className='md:w-1/2 mx-auto mt-9'>


                <LineChart width={300} height={300} data={allCourses} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>




            </div>
        </div>
    );
};

export default Statistics;