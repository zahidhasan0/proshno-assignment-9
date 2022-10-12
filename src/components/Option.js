import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AOS from "aos";
import "aos/dist/aos.css";



const Option = ({ option, correctAnswer }) => {

    const [total, setTotal] = useState([])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    let rightAns = [];
    const handleAnswer = (e) => {
        if (correctAnswer === e) {
            toast.success('Your answer is right', { autoClose: 500 })

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Congratulations! Your ans is right!!',
                showConfirmButton: false,
                timer: 1500
            })

        }
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Wrong answer!!',
                showConfirmButton: false,
                timer: 1500

            })
        }

        const exist = total.find(single => single === e)
        if (exist) {
            return;
        }
        else {
            rightAns = [...total, e]
            setTotal(rightAns)
        }

    }
    console.log(total)



    // if (correctAnswer === e) {
    //     rightAns = [...total, e];
    //     setTotal(rightAns);

    // }
    // else {
    //     alert('wrong ans')
    // }


    // console.log(total)

    return (
        <fieldset className='flex border border-white p-4 mt-3'>
            <div data-aos="fade-left">
                <input onClick={(e) => handleAnswer(e.target.value)} type="radio" id="option" name="option" value={option}
                />
                <label className='ml-3' for="option">{option}</label>
            </div>
        </fieldset>
    );
}

export default Option;