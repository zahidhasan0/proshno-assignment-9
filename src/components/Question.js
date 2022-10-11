import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
const Question = ({ data }) => {
    console.log(data);
    const { question, correctAnswer } = data;

    const handleEyeBtn = () => {
        alert(correctAnswer)
    }
    return (
        <div className='w-1/2 mx-auto'>
            <div className='flex justify-between'>
                <h4 className='w-4/5'>Quiz: {question}</h4>
                <button onClick={handleEyeBtn} ><EyeIcon className="h-6 w-6 " /></button>
            </div>
        </div>
    );
};

export default Question;