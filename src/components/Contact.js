import React, { useRef, useState } from 'react';
import FormInput from './FormInput';
import Textarea from './TextArea';

const Contact = ({ refrence }) => {
    const [position, setPosition] = useState(0);
    const isDefaultPos = useRef(true);
    const [nameValid, setnameValid] = useState(false);
    const [emailValid, setemailValid] = useState(false);
    const [messageValid, setmessageValid] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
    }
    function checkEmailValid(value) {
        if (value.includes("@") && value.includes(".")) {
            setemailValid(true);
        } else {
            setemailValid(false);
        }
    }
    function handleHover(e) {
        if (nameValid && emailValid && messageValid) {

        } else {
            if (isDefaultPos.current) {
                if (window.screen.width <= 400) {
                    setPosition(80);
                } else {
                    setPosition(240);
                }
                isDefaultPos.current = !isDefaultPos.current
            } else {
                setPosition(0);
                isDefaultPos.current = !isDefaultPos.current
            }
        }
    }

    return (
        <>
            <div ref={refrence} className="h-20"></div>
            <div className="py-16 md:px-32 px-2 background" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")` }}>
                <div className="rounded-lg p-8 bg-white shadow-lg">
                    <div className='text-4xl md:text-5xl font-medium text-slate-600 text-center mb-16' >Contact</div>
                    <div className='text-slate-600 md:text-xl'>ingin diskusi tentang project anda?</div>
                    <div className='text-slate-600 md:text-xl'>Mari kita ngopi!</div>
                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <FormInput label="Name" id="nameinput" setValid={setnameValid} />
                        <FormInput label="Email" id="emailinput" email setValid={setemailValid} customCheck={checkEmailValid} />
                        <Textarea label="Message" id="message" setValid={setmessageValid} />
                    </div>
                    <div className="relative h-16 mt-4">
                        <button onMouseOver={handleHover} onClick={handleSubmit}
                            className={`absolute top-0 duration-300 py-4 px-6 text-xl font-medium text-white rounded-lg bg-yellow-400`}
                            style={{
                                right: `${(nameValid && emailValid && messageValid) ? 0 : position}px`
                            }} >Send Message</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Contact;
