import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    
    const [accountType, setAccountType] = useState("student");

    const [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
    })

    function changeHandler(event) {
        const {name, type, value} = event.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created!")
        navigate("/dashboard")

        const finalData = {
            ...formData,
            accountType
        }
        
        console.log(finalData);
    }

  return (

    <div>

      {/* student-instructor tab  */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full border-b-[2px] border-richblack-700 max-w-max'>

        <button onClick={() => setAccountType("student")}
        className={`${accountType === "student" 
        ? "bg-richblack-900 text-richblack-5"
        : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}>
            Student
        </button>
        <button onClick={() => setAccountType("instructor")}
        className={`${accountType === "instructor" 
        ? "bg-richblack-900 text-richblack-5"
        : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}>
            Instructor
        </button> 

      </div>

      {/* form  */}
      <form onSubmit={submitHandler} className='flex flex-col gap-y-2'>

        {/* First & Last Name  */}
        <div className='flex justify-between gap-x-4'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    First Name <sup className='text-pink-200'>*</sup>
                </p>

                <input required type="text" 
                name="firstName" onChange={changeHandler} 
                value={formData.firstName}
                placeholder='Enter First Name' 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
             border-b-[2px] border-richblack-700'
                />
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Last Name <sup className='text-pink-200'>*</sup>
                </p>

                <input required type="text" 
                name="lastName" onChange={changeHandler} 
                value={formData.lastName}
                placeholder='Enter last Name' 
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
             border-b-[2px] border-richblack-700' />
            </label>
        </div>

        {/* Email*/}
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>

            <input required type="email" name="email" 
            value={formData.email} onChange={changeHandler}
            placeholder='Enter email address'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
             border-b-[2px] border-richblack-700' />
        </label>

        {/* createPassword and confirmPassword  */}
        <div className='flex justify-between gap-x-4'>
            <label className='relative w-full'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password <sup className='text-pink-200'>*</sup>
                </p>

                <input required 
                type={showPassword1 ? ("text") : ("password")} 
                name="password" 
                value={formData.password} onChange={changeHandler}
                placeholder='Enter password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
             border-b-[2px] border-richblack-700' />

                <span onClick={() => setShowPassword1(prev => !prev)}
                 className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password <sup className='text-pink-200'>*</sup>
                </p>

                <input required 
                type={showPassword2 ? ("text") : ("password")} 
                name="confirmPassword" 
                value={formData.confirmPassword} onChange={changeHandler}
                placeholder='Confirm password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
             border-b-[2px] border-richblack-700' />

                <span onClick={() => setShowPassword2(prev => !prev)}
                 className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                    : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

        </div>

        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900
         px-[12px] py-[8px] mt-4'>
            Create Account
        </button>

        
      </form>

    </div>
  )
}

export default SignupForm

