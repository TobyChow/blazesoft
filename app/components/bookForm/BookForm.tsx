import {
    add,
    edit,
} from "@/lib/features/bookstore/BookStoreSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function BookForm({ book = null, modalRef = null }) {
    const dispatch = useAppDispatch();
    return (
        <>
            <Formik
                initialValues={{
                    name: book?.name || '',
                    price: book?.price || '',
                    category: book?.category || '',
                    description: book?.description || ''
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validate={values => { //todo better validations
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
                        dispatch(edit({ id: book.id, ...values }))
                    } else {
                        dispatch(add(values));
                    }
                    if (modalRef) modalRef.current.close();
                }}
            >{(props) => (
                <Form>
                    <label htmlFor="name" className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <Field id="name" className="input input-bordered" name="name" placeholder="Enter name" />
                    </label>
                    <ErrorMessage name="category" component="div" />

                    <label htmlFor="price" className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <Field id="price" className="input input-bordered" name="price" placeholder="Enter price" />
                    </label>
                    <ErrorMessage name="category" component="div" />

                    <label htmlFor="category" className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <Field id="category" className="input input-bordered" name="category" placeholder="Enter category" />
                    </label>
                    <ErrorMessage name="category" component="div" />

                    <label htmlFor="description" className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <Field id="description" className="w-full textarea textarea-bordered" name="description" as="textarea" placeholder="Enter description" />
                    </label>
                    <ErrorMessage name="description" component="div" />

                    <button type="submit" className="btn mt-2">Submit</button>
                </Form>
            )}
            </Formik>
        </>
    );
}