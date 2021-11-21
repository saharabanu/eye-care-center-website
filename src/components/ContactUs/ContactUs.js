
import React from 'react';
import { useForm } from "react-hook-form";
import './ContactUs.css';

const ContactUs = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        
        console.log(data)
    };
    
    
    return (
        <div className="bg-secondary">
        <div className="container mt-5 text-white">
                        <div className="d-flex justify-content-around align-items-center contact">
                        <div>
                    <h2>Please Contact us to know more <br /> deatils our services</h2>
                    <h3>
                        Contact Info
                    </h3>
                        <h5>Eye Care Center</h5>
                        <p>Address:1 Dimashk St Maadi
                    Dhaka,
                Mogbazar
                Saturday to Thursday 9:00am - 10:00pm</p>
                <p>Website:http://www.eyecare-center.com</p>
                    <p>Telephone: 2010-0001-5004</p>
           </div>

                <div className="text-white ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input  className="w-100 p-2 rounded mb-3" placeholder="Your Name" type="text" {...register("name", { required: true })} />
                    <br />
                    <input className="w-100 p-2 rounded mb-3" placeholder="Your email" type="emial" {...register("email", { required: true })} />
                    <br />
                    <input className="w-100 p-2 rounded mb-3" placeholder="Your Phone Number"  type="number" {...register("phone", { required: true })} />
                    <br />
                    <input className="w-100 p-2 rounded mb-3" placeholder="Your Message" type="text" {...register("message", { required: true })} />
                    <br />
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input classNmae="btn btn-sucsess p-3 border-0" type="submit" />
                    </form>
    
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default ContactUs;










