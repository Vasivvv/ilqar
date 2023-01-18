import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPost() {
    return (
        <Formik
            initialValues={{ name: '', description: '', }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                description: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),

            })}
            onSubmit={(values) => {
                const data = {
                    name: values.name,
                    description: values.description
                }
                axios.post("https://northwind.vercel.app/api/categories", data)

            }}
        >
            <Form>
                <label htmlFor="name"> Name</label>
                <Field name="name" type="text" />


                <label htmlFor="description">description</label>
                <Field name="description" type="text" />

                <button type="submit">Submit</button>
                <br></br>
            <Link to={"/"}><button>back</button></Link>
            </Form>
        </Formik>
    )
}

export default AddPost