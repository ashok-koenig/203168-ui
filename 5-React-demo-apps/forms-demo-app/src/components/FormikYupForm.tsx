import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function FormikYupForm() {
    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Name must be at lease 3 characters").required('Name is reqquired'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        gender: Yup.string().required('Gender is required'),
        course: Yup.string().required('Course is required')
    })
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            gender: '',
            course: ''
        },
        validationSchema,
        onSubmit: (values, {setSubmitting, resetForm, setErrors}) =>{
            setTimeout(()=>{
                if(values.email == 'test@email.com'){
                    setErrors({email: 'This email is already registered'})
                }else{
                    console.log('Form submitted successfully', values);
                    resetForm()
                }
                setSubmitting(false)
            }, 2000)       
        }
    })
    // console.log(formik);    
  return (
    <div>
    <h1>Register Form using Formik & Yup</h1>
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" name="name" placeholder='Enter Name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.name && formik.errors.name && <span className="error">{formik.errors.name}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" placeholder='Enter Email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email &&formik.errors.email && <span className="error">{formik.errors.email}</span>}
        </div>
        <div>
            <label>Gender:</label>
            <label>
                <input type="radio" name="gender" value="male" checked={formik.values.gender == 'male'} onChange={formik.handleChange} onBlur={formik.handleBlur}/> Male
            </label>
            <label>
                <input type="radio" name="gender" value="female" checked={formik.values.gender == 'female'} onChange={formik.handleChange} onBlur={formik.handleBlur}/> Female
            </label>
            {formik.touched.gender &&formik.errors.gender && <span className="error">{formik.errors.gender}</span>}
        </div>
        <div>
            <label>Course:</label>
            <select name="course" value={formik.values.course} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Select Course</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="React">React</option>
            </select>
            {formik.touched.course && formik.errors.course && <span className="error">{formik.errors.course}</span>}
        </div>
        <div>
            <button disabled={formik.isSubmitting} type="submit">{formik.isSubmitting?"Please wait...":"Register"}</button>
        </div>
    </form>
</div>
  )
}
