import React from 'react';

const FormInput = ({ label, email, id, setValid, customCheck }) => {
    function handleChange(e) {
        if (customCheck) {
            customCheck(e.target.value);
        } else {
            if (e.target.value !== "") {
                setValid(true);
            }
        }
    }
    return (
        <div className='relative py-2 border-b border-slate-400'>
            <input type={email ? 'email' : 'text'} className='focus:outline-none peer w-full invalid:text-red-600'
                id={id} onChange={handleChange} placeholder=" " />
            <label className="absolute text-sm -top-2 cursor-pointer peer-focus:-top-2 peer-focus:scale-90
                bg-white px-1 left-0 duration-200 peer-invalid:text-red-600 peer-invalid:-top-2 
                peer-placeholder-shown:top-3" htmlFor={id}>{label}</label>
        </div>
    );
}

export default FormInput;
