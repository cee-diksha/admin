import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./productForm.css"

const validationSchema = Yup.object().shape({
  id: Yup.string().required('ID is required'),
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  stock: Yup.number().required('Stock is required'),
  cloudinaryImage: Yup.mixed().required('Image is required'),
  price: Yup.number().required('Price is required'),
  category: Yup.string().required('Category is required'),
});

const ProductsPost = () => {
  const initialValues = {
    id: '',
    name: '',
    description: '',
    stock: 0,
    cloudinaryImage: null,
    price: 0,
    category: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values, initialValues)
    try {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }

    //   const response = await axios.post('YOUR_API_ENDPOINT/products', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       // Add any additional headers if needed
    //     },
    //   });

    //   console.log(response.data);
    } catch (error) {
      console.error('Error uploading product:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
   <div className='form-wrapper'>
     <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='product-form'>
        <div className='wrapper'>
        <label htmlFor="id">ID:</label>
        <Field type="text" id="id" name="id" required className='field' />
        </div>
       <div className='wrapper'>
       <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" required className='field' />
       </div>

        <div className='wrapper'>
        <label htmlFor="description">Description:</label>
        <Field as="textarea" id="description" name="description" required className='field' />
        </div>

        <div className='wrapper'>
        <label htmlFor="stock">Stock:</label>
        <Field type="number" id="stock" name="stock" required className='field' />
        </div>

        <div className='wrapper'>
        <label htmlFor="cloudinaryImage">Image:</label>
        <Field type="file" id="cloudinaryImage" name="cloudinaryImage" required className='field' />
        </div>

        <div className='wrapper'>
        <label htmlFor="price">Price:</label>
        <Field type="number" id="price" name="price" required className='field' />
        </div>

        <div className='wrapper'>
        <label htmlFor="category">Category:</label>
        <Field type="text" id="category" name="category" required className='field' />
        </div>
        <button type="submit" className='upload-btn'>Upload Product</button>
      </Form>
    </Formik>
   </div>
  );
};

export default ProductsPost;
