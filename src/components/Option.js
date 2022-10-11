import React from 'react';

const Option = ({ option, correctAnswer }) => {

    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            console.log('yess');
        }
        else {
            console.log('no');
        }
    }

    return (
        <div className='flex border border-white p-4'>
            <input onClick={(e) => handleAnswer(e.target.value)} className='mr-3' type="radio" name="" id="" value={option} />
            <p >{option}</p>
        </div>
    );
};

export default Option;