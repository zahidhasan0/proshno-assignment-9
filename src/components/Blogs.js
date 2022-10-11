import React from 'react';

const Blogs = () => {
    return (
        <div className='w-2/3 mx-auto mt-10'>
            <div className='border border-sky-900 border-3 p-5 bg-sky-900 text-white rounded' data-aos="zoom-in">
                <h4 className='text-2xl font-semibold mb-3'>What is the purpose of react router?</h4>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='border border-sky-900 border-3 p-5 bg-sky-900 text-white rounded my-4' data-aos="zoom-in">
                <h4 className='text-2xl font-semibold mb-3'>How does context api works?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border border-sky-900 border-3 p-5 bg-sky-900 text-white rounded mb-4' data-aos="zoom-in">
                <h4 className='text-2xl font-semibold mb-3'>What about useRef()?</h4>
                <p>The useRef Hook is a function that returns a mutable ref object whose.current property is initialized with the passed argument (initialValue).The returned object will persist for the full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blogs;