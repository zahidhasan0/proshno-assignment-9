import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from './Option';

const Question = ({ data }) => {
    // console.log(data);
    const { question, correctAnswer, options } = data;

    const handleEyeBtn = () => {
        toast({ correctAnswer })
    }
    return (
        <div className='w-1/2 mx-auto mt-7 bg-sky-900 text-white rounded-md p-5'>
            <div className='flex justify-between'>
                <h4 className='w-4/5 flex justify-between font-bold'><span className='mr-10'>Quiz: </span> <span>{question}</span></h4>
                <button onClick={handleEyeBtn} ><EyeIcon className="h-6 w-6 " /></button>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {options.map(option => <Option
                    option={option}
                    correctAnswer={correctAnswer}
                ></Option>)}
            </div>
        </div>
    );
};

export default Question;