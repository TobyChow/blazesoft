import {
    add,
    edit,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function BookForm({ book = null }) {
    const dispatch = useAppDispatch();
    const mode = book?.id ? 'Edit' : 'Add';
    return (
        <>
        { mode }
        <Formik
            initialValues={{
                name: book?.id || '',
                price: book?.price || '',
                category: book?.category || '',
                description: book?.description || ''
            }}
            validate={values => {
                const errors = {};
                if (values.name === '') {
                    errors.name = 'Required';
                }
                if (values.price === '') {
                    errors.price = 'Required';
                }
                if (values.category === '') {
                    errors.category = 'Required';
                }
                if (values.description === '') {
                    errors.description = 'Required';
                }
                return errors;
            }}
            onSubmit={(values) => {
                if (book?.id) {
                    dispatch(edit({id:book.id, ...values}))
                } else {
                    dispatch(add(values));
                }
            }}
        >{(props) => (
            <Form>
                <label htmlFor="name" className="input input-bordered flex items-center gap-2">
                    Name
                    <Field id="name" name="name" placeholder="Enter name" />
                </label>
                <ErrorMessage name="name" component="div" />

                <label htmlFor="price" className="input input-bordered flex items-center gap-2">
                    Price
                    <Field id="price" name="price" placeholder="Enter price" />
                </label>
                <ErrorMessage name="price" component="div" />

                <label htmlFor="category" className="input input-bordered flex items-center gap-2">
                    category
                    <Field id="category" name="category" placeholder="Enter category" />
                </label>
                <ErrorMessage name="category" component="div" />

                <label htmlFor="description" className="input input-bordered flex items-center gap-2">
                    description
                    <Field id="description" name="description" placeholder="Enter description" />
                </label>
                <ErrorMessage name="description" component="div" />

                <button type="submit" className="btn">Submit</button>
            </Form>
        )}
        </Formik>
        </>
    );
}