import { useFormik } from 'formik'
import React from 'react'

export default function FormikForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            gender: '',
            course: ''
        },
        validate:(values)=>{
            const errors: {[key: string]: string} = {}
            if(!values.name) errors.name = 'Name is required'
            if(!values.email) errors.email = 'Email is required'
            if(!values.gender) errors.gender = 'Gender is required'
            if(!values.course) errors.course = 'Course is required'
            return errors;
        },
        onSubmit: (values) =>{
            console.log(values);            
        }
    })
    // console.log(formik);    
  return (
    <div>
    <h1>Register Form using Formik</h1>
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder='Enter Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && <span className="error">{formik.errors.name}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder='Enter Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && <span className="error">{formik.errors.email}</span>}
        </div>
        <div>
            <label>Gender:</label>
            <label>
                <input type="radio" name="gender" value="male" checked={formik.values.gender == 'male'} onChange={formik.handleChange} onBlur={formik.handleBlur}/> Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={formik.values.gender == 'female'} onChange={formik.handleChange} onBlur={formik.handleBlur}/> Female
            </label>
            {formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
        </div>
        <div>
            <label>Course:</label>
            <select name="course" value={formik.values.course} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Select Course</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="React">React</option>
            </select>
            {formik.errors.course && <span className="error">{formik.errors.course}</span>}
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
</div>
  )
}
