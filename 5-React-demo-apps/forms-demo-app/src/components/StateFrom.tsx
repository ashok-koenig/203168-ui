import React, { useState } from 'react'

export default function StateFrom() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        course: ''
    })
    const [errors, setErrors] = useState<{ [key: string]: string}>({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const {name, value} = e.target
        setFormData((preData)=> ({...preData, [name]:value}))
    }
    const validateFrom = () =>{
        const currentErrors: {[key: string]: string} = {}
        if(!formData.name) currentErrors.name = 'Name is required'
        if(!formData.email) currentErrors.email = 'Email is required'
        if(!formData.gender) currentErrors.gender = 'Gender is required'
        if(!formData.course) currentErrors.course = 'Course is required'
        setErrors(currentErrors)
        return Object.keys(currentErrors).length === 0
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(validateFrom()){
             console.log(formData);     
        }
          
    }
  return (
    <div>
    <h1>Register Form using state</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' />
            {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Email' />
            {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
            <label>Gender:</label>
            <label>
                <input type="radio" name="gender" value="male" checked={formData.gender == 'male'} onChange={handleChange}/> Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={formData.gender == 'female'} onChange={handleChange} /> Female
            </label>
            {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
            <label>Course:</label>
            <select name="course" value={formData.course} onChange={handleChange}>
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
