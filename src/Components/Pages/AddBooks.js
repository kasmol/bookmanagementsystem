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
        <label htmlFor='nm'><b>Book Name: </b></label>
        <input id='nm' type='text' className='form-control' placeholder='eg. Atomic Habits' {...register('BookName')} /><br />
        
        <label htmlFor='anm'><b>Author Name: </b></label>
        <input id='anm' type='text' className='form-control' placeholder='eg. James Clear' {...register('AuthorName')} /><br />
        
        <label htmlFor='avb'><b>Availability: </b></label>
        <select {...register('Availability')} id='avb' className='form-control'>
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>
        <br />
        
        <input type='submit' className='btn btn-success' value="Add" />&nbsp;
        <input type='reset' className='btn btn-warning' />
        
        {/* Display validation errors if any */}
        {errors.BookName && <p>{errors.BookName.message}</p>}
        {errors.AuthorName && <p>{errors.AuthorName.message}</p>}
      </form>
    </div>
  )
}
