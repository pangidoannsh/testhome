import React, { useState } from 'react';

const Textarea = ({ label, setValid, id }) => {
    const [isFocus, setisFocus] = useState(false);
    function handleChange(e) {
        if (e.target.value !== "") {
            setValid(true);
        }
    }
    return (
        <div className='h-20 md:col-span-2'>
            <div className='relative py-2 border-b border-slate-400 col-span-2'>
                <textarea rows={isFocus ? 2 : 1} type="text" className='focus:outline-none peer w-full resize-none '
                    id={id} onFocus={() => setisFocus(true)} onBlur={() => setisFocus(false)} onChange={handleChange} />
                <label className="absolute text-sm top-3 cursor-pointer peer-focus:-top-2 peer-focus:scale-90
             bg-white px-1 left-0 duration-300" htmlFor={id}>{label}</label>
                <div className="absolute bottom-0 left-0 bg-sky-600 duration-300 w-0 peer-focus:w-full h-[1px]"></div>
            </div>
        </div>
    );
}

export default Textarea;
