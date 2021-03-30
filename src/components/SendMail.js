import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice' 
import { db } from '../firebase';
import firebase from 'firebase'

function SendMail() {
   
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    
    const onSubmit = (FormData) => {
      console.log(FormData);

      //Adding data to firestore
      db.collection('emails').add({
          to:FormData.to,
          subject: FormData.subject,
          message: FormData.message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      //Close form after submitting it
      dispatch(closeSendMessage());
    };
    
    return (
        <div className='sendMail'>

           <div className='sendMail__header'>
                
                <h3>New Message</h3>
                <Close className="sendMail__close" onClick={()=> dispatch(closeSendMessage())}/>
            
            </div> 

            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input name="to" placeholder='To' type="email" ref={register({ required: true })}/>
                {errors.to && <p className="sendMail__error">To is Required</p>}
                
                <input name="subject" placeholder='Subject' type="text" ref={register({ required: true })}/>
                {errors.subject && <p className="sendMail__error">Subject is Required</p>}
                
                <input name="message" placeholder='Message...' type="text" className="sendMail__message" ref={register({ required: true })}/>
                {errors.message && <p className="sendMail__error">Message is Required</p>}    

                <div className="sendMail__options">
                    <Button type="submit" className="sendMail__send" variant="contained" color="primary">Send</Button>
                </div>

            </form>
        
        </div>
    )
}

export default SendMail
