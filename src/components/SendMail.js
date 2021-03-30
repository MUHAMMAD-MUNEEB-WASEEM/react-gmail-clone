import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';

function SendMail() {
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
      console.log(data);
    };
    return (
        <div className='sendMail'>

           <div className='sendMail__header'>
                
                <h3>New Message</h3>
                <Close className="sendMail__close"/>
            
            </div> 

            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input name="to" placeholder='To' type="text" ref={register({ required: true })}/>
                <input name="subject" placeholder='Subject' type="text" ref={register({ required: true })}/>
                <input name="message" placeholder='Message...' type="text" className="sendMail__message" ref={register({ required: true })}/>

                <div className="sendMail__options">
                    <Button type="submit" className="sendMail__send" variant="contained" color="primary">Send</Button>
                </div>

            </form>
        
        </div>
    )
}

export default SendMail
