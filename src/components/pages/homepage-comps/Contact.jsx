import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef()
    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
      .sendForm('service_gx4ygxm', 'template_chj386o', form.current, {
        publicKey: '7cChOnv_WL66z7-xo',
      })
      .then(
        () => {
            Swal.fire({
                icon: 'success',
                iconColor: '#0DFC4B',
                title: 'Thank you for contacting me. It will be a pleasure to work with you!',
                showConfirmButton: true,
                background: '#191a19',
                color: '#fff',
                confirmButtonColor: '#117911',
                backdrop: `
                    rgba(54, 55, 54,0.4)
                `
            })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

        // const formData = new FormData(event.target);

        // axios.post('https://getform.io/f/feff19e5-27a9-4f74-be5d-9699c4b245ed', formData)
        //     .then(response => {
        //         Swal.fire({
        //             icon: 'success',
        //             iconColor: '#0DFC4B',
        //             title: 'Thank you for contacting me. It will be a pleasure to work with you!',
        //             showConfirmButton: true,
        //             background: '#191a19',
        //             color: '#fff',
        //             confirmButtonColor: '#117911',
        //             backdrop: `
        //                 rgba(54, 55, 54,0.4)
        //             `
        //         })
        //     })
        //     .catch(error => {
        //     console.log(error);
        //     });
        
        // event.target.reset();
    }
    

    return (
        <section name='Contact Us' className='relative w-full md:h-screen p-4 text-white h-unset' style={{backgroundColor: "#0B0F1A"}}>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Contact</h2>
                    <p className='py-6'>Get in touch with us at Focuzblitz to bring your ideas to life!</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form ref={form} onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input 
                        type="text" 
                        name="user_name" placeholder='Enter your name' 
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required/>

                        <input 
                        type="email" 
                        name="user_email" placeholder='Enter your email' 
                        className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required />

                        <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-primary-color' required></textarea>

                        <button className='text-black font-semibold bg-gradient-to-t from-green-400 to-primary-color px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send Email</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact