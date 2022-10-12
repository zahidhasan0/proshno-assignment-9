import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AOS from "aos";
import "aos/dist/aos.css";




const Option = ({ option, options, correctAnswer }) => {

    const [total, setTotal] = useState([])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    let rightAns = [];
    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            toast('Your ans is correct')

        }
        else {
            toast('Wrong ans!!!')
        }

        const exist = total.find(single => single === correctAnswer)

        if (exist) {
            return;
        }
        else {
            rightAns = [...total, e]
            setTotal(rightAns)
        }


    }
    return (
        <fieldset className='flex border border-white p-4 mt-3'>
            <div data-aos="fade-left">
                <input onClick={(e) => handleAnswer(e.target.value)} className='cursor-pointer' type="radio" id="option" name="option" value={option}
                />
                <label className='ml-3' for="option">{option} </label>
            </div>
            <ToastContainer />
        </fieldset>
    );
}

export default Option;