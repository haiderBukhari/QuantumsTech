import { useRef, useState } from 'react';
import '../style.css'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';
export const Contact = () => {
    let [names, setname] = useState('')
    let [emails, setemail] = useState('')
    let [subjects, setsubject] = useState('')
    let [messages, setmessage] = useState('')
    function handlesubmit (e){
        e.preventDefault();   
        const emailParams = {
            name: names,
            email: emails,
            subject: subjects,
            message: messages
          }; 
        if(names=='' || emails=='' || subjects=='' || messages==''){
            toast.info('Please fill all the fields', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });    
            return;
        }
        emailjs.send("service_g3tksbh","template_1oldi28",emailParams, '3xpK5MwsJcVnpuW9Y').then((result) => {
            setname('')
            setmessage('')
            setemail('')
            setsubject('')
            toast.success('Thank you for Sending the message! You will be contacted within 1 business day', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });      
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
        })
        .catch((error) => {
            console.log(error);
            toast.error('Error in Sending the Message! Please Try again', {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });                
        });
  }
    return (
    <section id="contact" className='bg-apply'>
    <div className="container bg-apply">
        <div class="row mb-5">
            <div class="col-md-8 mx-auto text-center">
                <h6 class="text-primary">CONTACT</h6>
                <h1>Get In Touch</h1>
                <p>Thank you for visiting our website! We value your feedback and inquiries. If you have any questions, suggestions, or concerns, please don't hesitate to contact us. We're here to assist you in any way we can.</p>
            </div>
        </div>
        <form onSubmit={handlesubmit} action="" class="row g-3 justify-content-center">
            <div class="col-md-5">
                <input onChange={(e)=>{setname(e.target.value)}} id='black-p' value={names} type="text" class="form-control" placeholder="Full Name" required/>
            </div>
            <div class="col-md-5">
                <input onChange={(e)=>{setemail(e.target.value)}} id='black-p' value={emails} type="email" class="form-control" placeholder="Enter E-mail" required/>
            </div>
            <div class="col-md-10">
                <input onChange={(e)=>{setsubject(e.target.value)}} id='black-p' value={subjects} type="text" class="form-control" placeholder="Enter Subject" required/>
            </div>
            <div class="col-md-10">
                <textarea onChange={(e)=>{setmessage(e.target.value)}} id='black-p' value={messages} cols="30" rows="5" class="form-control"
                    placeholder="Enter Message" required></textarea>
            </div>
            <div class="col-md-10 d-grid">
                <button type='submit' class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</section>
  )
}