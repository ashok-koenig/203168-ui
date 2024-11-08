import React from 'react'

export default function BasicForm() {
  return (
    <div>
        <h1>Register Form</h1>
        <form>
            <div>
                <label>Name:</label>
                <input type="text" name="name" placeholder='Enter Name' />
                <span className="error"></span>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder='Enter Email' />
                <span className="error"></span>
            </div>
            <div>
                <label>Gender:</label>
                <label>
                    <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" /> Female
                </label>
                <span className="error"></span>
            </div>
            <div>
                <label>Course:</label>
                <select name="course">
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
