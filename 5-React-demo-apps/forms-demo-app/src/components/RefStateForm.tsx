import React, { useRef, useState } from 'react'

export default function RefStateForm() {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const genderRef = useRef<HTMLInputElement>(null)
    const courseRef = useRef<HTMLSelectElement>(null)
    const [errors, setErrors] = useState<{ [key: string]: string}>({})
   
    const validateFrom = () =>{
        const currentErrors: {[key: string]: string} = {}
        if(!nameRef.current?.value) currentErrors.name = 'Name is required'
        if(!emailRef.current?.value) currentErrors.email = 'Email is required'
        if(!genderRef.current?.checked) currentErrors.gender = 'Gender is required'
        if(!courseRef.current?.value) currentErrors.course = 'Course is required'
        setErrors(currentErrors)
        return Object.keys(currentErrors).length === 0
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(validateFrom()){
             console.log(nameRef.current?.value);  
             console.log(emailRef.current?.value); 
             console.log(genderRef.current?.value); 
             console.log(courseRef.current?.value);    
        }          
    }
  return (
    <div>
        <h1>Register Form using useRef & useState</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" ref={nameRef} placeholder='Enter Name' />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" ref={emailRef} placeholder='Enter Email' />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label>Gender:</label>
                <label>
                    <input type="radio" name="gender" ref={genderRef} value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div>
                <label>Course:</label>
                <select name="course" ref={courseRef}>
                    <option value="">Select Course</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="TypeScript">TypeScript</option>
                    <option value="React">React</option>
                </select>
                {errors.course && <span className="error">{errors.course}</span>}
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
  )
}
