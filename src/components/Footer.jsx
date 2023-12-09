import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TiSocialLinkedin,TiSocialFacebook,TiSocialDribbble,TiSocialTwitter  } from "react-icons/ti";
import { SlSocialInstagram,SlSocialBehance } from "react-icons/sl";
export const Footer = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        try{
            let response = await fetch(`http://localhost:5000/contact`, {
            // let response = await fetch(process.env.REACT_APP_BASE_URL+"/contact", {
            // let response = await fetch(`${process.env.REACT_APP_BASE_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(details),
            });
            console.log(response);
            setStatus("Submit");
            let result = await response.json();
            alert(result.status);
            
        }catch(e){
            setStatus("Submit");
            console.error(e.message);
            alert("Server Down.Please try again later.");
        }
    };
    return (
        <div className='mx-auto  mt-10' id='contact'>
            <div className='flex w-3/4 mb-10 max-[500px]:w-11/12 m-auto max-[900px]:flex-col shadow-[3px_3px_10px_#565656] rounded-3xl'>
                <div className='w-1/2 max-[900px]:w-11/12 m-auto min-h-[500px] flex flex-col justify-around gap-4 p-8 max-[500px]:p-3'>
                    <div className='text-2xl font-semibold'>Let’s discuss your Project</div>
                    <div className='text-[#87909D] text-sm'>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex w-[80%] gap-2 rounded-md shadow-[0px_0px_5px_#565656] items-center p-4'>
                            <div className='w-[20%] h-10  flex items-center justify-center bg-[#5C38901A] rounded-md hover:bg-[#FF7A2F] text-[#5C3890]'>
                                <CiLocationOn />
                            </div>
                            <div className='flex flex-col w-[80%]'>
                                <div className='text-[#424E60] text-sm'>Adress:</div>
                                <div className='text-sm text-[#132238]'>New Mexico 31134</div>
                            </div>
                        </div>
                        <div className='flex w-[80%] gap-2 rounded-md shadow-[0px_0px_7px_#565656]  items-center p-4'>
                            <div className='w-[20%] h-10 flex items-center justify-center bg-[#5C38901A] rounded-md hover:bg-[#FF7A2F] text-[#5C3890]'>
                                <MdOutlineMail />
                            </div>
                            <div className='flex flex-col w-[80%]'>
                                <div className='text-[#424E60] text-sm'>My Email:</div>
                                <div className='text-sm text-[#132238]'>mymail@mail.com</div>
                            </div>
                        </div>
                        <div className='flex w-[80%] gap-2 rounded-md shadow-[0px_0px_7px_#565656]  items-center p-4'>
                            <div className='w-[20%] h-10 flex items-center justify-center bg-[#5C38901A] rounded-md hover:bg-[#FF7A2F] text-[#5C3890]'>
                                <IoCall />
                            </div>
                            <div className='flex flex-col w-[80%]'>
                                <div className='text-[#424E60] text-sm'>Call Me Now:</div>
                                <div className='text-sm text-[#132238]'>00-1234 00000</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-1 text-[#A53DFF] text-2xl w-3/4 h-10 '>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><TiSocialLinkedin/></div>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><TiSocialFacebook /></div>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><SlSocialInstagram/></div>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><TiSocialDribbble/></div>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><TiSocialTwitter/></div>
                        <div className='hover:bg-[#A53DFF] w-[15%]  hover:text-white transition-all flex items-center justify-center rounded-sm'><SlSocialBehance/></div>
                    </div>
                </div>
                <div className='w-1/2 max-[900px]:w-11/12 m-auto min-h-[500px] flex flex-col justify-around  gap-4 p-8 max-[500px]:p-3'>
                    <div className='text-[#87909D] text-sm'>There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.</div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-8  text-[#697484]'>
                        <div>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" required placeholder='Name*' className='  w-3/4 outline-none focus:border-b-[#A53DFF] border-b-2 text-[#A53DFF] focus:placeholder:text-[#A53DFF]' />
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" id="email" required placeholder='Email*' className='  w-3/4 outline-none focus:border-b-[#A53DFF] border-b-2 text-[#A53DFF] focus:placeholder:text-[#A53DFF]' />
                        </div>
                        <div>
                            <label htmlFor="location"></label>
                            <input type="text" id="location" placeholder='Location' className='  w-3/4 outline-none focus:border-b-[#A53DFF] border-b-2 text-[#A53DFF] focus:placeholder:text-[#A53DFF]' />
                        </div>
                        <div>
                            <label htmlFor="subject"></label>
                            <input type="text" id="subject" required placeholder='Subject*' className='  w-3/4 outline-none focus:border-b-[#A53DFF] border-b-2 text-[#A53DFF] focus:placeholder:text-[#A53DFF]' />
                        </div>
                        <div>
                            <label htmlFor="message"></label>
                            <input type='text' id="message" required placeholder='Message*' className='  w-3/4 outline-none focus:border-b-[#A53DFF] border-b-2 text-[#A53DFF] focus:placeholder:text-[#A53DFF]' />
                        </div>

                        <button className='flex bg-[#5C3890] gap-1 w-[30%] py-4 items-center justify-center rounded-md text-[#F5F5F7] text-sm font-bold' type='submit'>
                            <div >{status}</  div>
                            <div><FiArrowRight /></div>
                        </button>
                    </form>
                </div>
            </div>

            <div className='min-h-[100px] flex items-center justify-center   w-full bg-[#2B384C]'>
                <div className='w-3/4 mx-auto  text-[#F0F1F3] flex justify-between'>
                    <div className='flex w-[50%] justify-between'>
                        <div>Home</div>
                        <div>About</div>
                        <div>Projects</div>
                        <div>Services</div>
                        <div>Contact</div>
                    </div>
                    <div className='w-[25%]'>
                    Copyright © 2023 Sumit Gaurav
                    </div>
                </div>
            </div>
        </div>
    )
}
