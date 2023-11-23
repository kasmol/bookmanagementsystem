import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function AddBook() {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Added formState to handle errors
  const navigate = useNavigate();
  
  const savedata = async (data) => {
    try {
      // Make sure to await the Axios request
      const response = await axios.post('https://localhost:7079/api/Books/AddBook', data);

      if (response.status === 200) {
        // The request was successful, navigate to the desired page
        navigate('/show');
      } else {
        // Handle other response status codes or error messages here
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      // Handle Axios request error
      console.error("An error occurred:", error);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(savedata)} className='jumbotron mt-4'>
        <label htmlFor='nm'><b>Account Name: </b></label>
        <input id='nm' type='text' className='form-control' placeholder='eg. Moses Otieno' {...register('AccountName')} /><br />
        
        <label htmlFor='anm'><b>Account Number: </b></label>
        <input id='anm' type='text' className='form-control' placeholder='eg. 12906745' {...register('AccountNumber')} /><br />
        
        <label htmlFor='avb'><b>Status: </b></label>
        <select {...register('Status')} id='avb' className='form-control'>
          <option value="Active">Active</option>
          <option value="Disabled">Disabled</option>
        </select>
        <br />
        
        <input type='submit' className='btn btn-success' value="Add" />&nbsp;
        <input type='reset' className='btn btn-warning' />
        
        {/* Display validation errors if any */}
        {errors.AccountName && <p>{errors.AccountName.message}</p>}
        {errors.AccountNumber && <p>{errors.AccountNumber.message}</p>}
      </form>
    </div>
  )
}
