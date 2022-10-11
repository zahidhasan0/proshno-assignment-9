import React, { useState } from 'react';
import { toast } from 'react-toastify';








const Option = ({ option, correctAnswer }) => {
    const [total, setTotal] = useState([])



    const handleAnswer = (e) => {
        let rightAns = [];
        if (correctAnswer === e) {
            toast.success('success!', { autoClose: 500 })

            rightAns = [...total, e]
            setTotal(rightAns)
            console.log(rightAns)
        }


        // if (correctAnswer === e) {
        //     rightAns = [...total, e];
        //     setTotal(rightAns);

        // }
        // else {
        //     alert('wrong ans')
        // }

    }
    // console.log(total)

    return (
        <fieldset className='flex border border-white p-4'>
            <div>
                <input onClick={(e) => handleAnswer(e.target.value)} type="radio" id="option" name="option" value={option}
                    checked />
                <label className='ml-3' for="option">{option}</label>
            </div>
        </fieldset>
    );
};

export default Option;