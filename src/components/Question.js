import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Option from './Option';


const Question = ({ data }) => {
    // console.log(data);
    const { question, correctAnswer, options } = data;

    const handleEyeBtn = () => {
        toast.success(`${correctAnswer}`, {
            position: 'top-center'
        })

    }
    return (
        <div>
            <div className='p-5 md:w-1/2 mx-auto mt-7 bg-sky-900 text-white rounded-md '>
                <div className='md:flex justify-between'>
                    <h4 className=' md:w-4/5 md:flex justify-between font-bold'><span className='mr-10'>Quiz: </span> <span>{question}</span></h4>
                    <button title='show the right answer' onClick={handleEyeBtn} ><EyeIcon className="h-6 w-6 " /></button>
                </div>
                <div className='grid md:last:grid-cols-2 gap-2'>
                    {options.map(option => <Option
                        key={option.idx}
                        option={option}
                        correctAnswer={correctAnswer}
                        options={options}
                    ></Option>)}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Question;