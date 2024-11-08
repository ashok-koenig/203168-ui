import React, { useState } from 'react'

export default function StateFrom() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        course: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const {name, value} = e.target
        setFormData((preData)=> ({...preData, [name]:value}))
    }
    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log(formData);        
    }
  return (
    <div>
    <h1>Register Form using state</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' />
            <span className="error"></span>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Email' />
            <span className="error"></span>
        </div>
        <div>
            <label>Gender:</label>
            <label>
                <input type="radio" name="gender" value="male" checked={formData.gender == 'male'} onChange={handleChange}/> Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={formData.gender == 'female'} onChange={handleChange} /> Female
            </label>
            <span className="error"></span>
        </div>
        <div>
            <label>Course:</label>
            <select name="course" value={formData.course} onChange={handleChange}>
                <option value="">Select Course</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="React">React</option>
            </select>
            <span className="error"></span>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
</div>
  )
}
