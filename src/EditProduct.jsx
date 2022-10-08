import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { env } from './config';

function EditProduct() {

    const params = useParams()
    const navigate = useNavigate()
    const productFormik = useFormik({
        initialValues: {
          product: "",
          model: "",
          company : "",
          color : "",
          price: ""      
        },
        validate : (values)=>{
            let errors ={};
              if (values.product === "" ){
                errors.product = "Please enter Product Name "
              }
      
                if (values.product.length < 5  ){
                errors.product = "Please enter Product Name less than 5 letters"
              }
              if (values.model === ""){
                errors.model = "Please enter model"
              }
            return errors;
          },
      onSubmit: async (values) => {
       await axios.put(`${env.api}/editproduct/${params.id}`,values)
      
       navigate('/portal/products')
      }
    });
  
    useEffect(() => {
      loadProduct()
    }, [])
  
    let loadProduct = async () => {
      try {
        let product = await axios.get(`${env.api}/viewproduct/${params.id}`)
        productFormik.setValues(
          {
            product: product.data.product,
            model: product.data.model,
            company: product.data.company,
            color: product.data.color,
            price: product.data.price
           
          }
        )
  
  
      } catch (error) {
        console.log(error)
      }
    }
  



  return (
    <>
    <div className='container'>
    <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <h1 className="h3 mb-0 text-dark-800">Edit Product Form</h1>
        </div>
      <form onSubmit={productFormik.handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
            <label>Bicycle Name</label>
            <input
              className={`form-control ${productFormik.errors.product ? `input-error`:``}`}
              type={'text'}
              value={productFormik.values.product}
              onChange={productFormik.handleChange}
              name="product"
            />
            <span style={{color:"red"}}>{productFormik.errors.product}</span>
          </div>
          <div className='col-lg-6'>
            <label>Model</label>
            <input
               className={`form-control ${productFormik.errors.model ? `input-error`:``}`}
              type={'text'}
              value={productFormik.values.model}
              onChange={productFormik.handleChange}
              name="model"
            />
            <span style={{color:"red"}}>{productFormik.errors.model}</span>
          </div>
          <div className='col-lg-6'>
            <label>Manufacturar</label>
            <input
              className='form-control'
              type={'text'}
              value={productFormik.values.company}
              onChange={productFormik.handleChange}
              name="company"
            />
          </div>
          <div className='col-lg-6'>
            <label>Color</label>
            <input
              className='form-control'
              type={'text'}
              value={productFormik.values.color}
              onChange={productFormik.handleChange}
              name="color"
            />
          </div>
          <div className='col-lg-6'>
            <label>Price</label>
            <input
              className='form-control'
              type={'text'}
              value={productFormik.values.price}
              onChange={productFormik.handleChange}
              name="price"
            />
          </div>
          <div className='col-lg-6'>
          
          </div>
          <div className='col-lg-6 mt-2'>

            <input
              className='btn-primary'
              type={'submit'}
              value='Submit' 
              disabled={!productFormik.isValid}
              />

          </div>
        </div>
      </form>
    </div>

  </>
  )
}

export default EditProduct