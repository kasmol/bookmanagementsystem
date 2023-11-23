import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function UpdateBook() {
  const {id} = useParams();
  const {register, handleSubmit, setValue} = useForm();
  const navigate = useNavigate();

  async function fetchBook() {
    const result = await axios.get(`https://localhost:7079/api/Books/${id}`)
    setValue('AccountName',result.data.AccountName)
    setValue('AccountNumber',result.data.AccountNumber)
    setValue('Avaibility', result.data.Avaibility)
  }

  function savedata(data) {
    axios.put(`https://localhost:7079/api/Books/UpdateBook/${id}`,data)
    navigate('/show')
  }

  useEffect(()=>{
    fetchBook();
  },[]);
  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(savedata)} className='jumbotron mt-4'>
        <label htmlFor='nm'><b>Account Name: </b></label>
        <input id='nm' type='text' className='form-control' placeholder='eg. KCB' {...register('AccountName')}/><br/>
        <label htmlFor='anm'><b>Account Number: </b></label>
        <input id='anm' type='text' className='form-control' placeholder='eg. 190099349' {...register('AccountNumber')}/><br/>
        <label htmlFor='avb'><b>Status: </b></label>
        <select {...register('Status')} id='avb' className='form-control'>
          <option value="Active">Active</option>
          <option value="Disabled">Disabled</option>
        </select>
        <br/>
        <input type='submit' className='btn btn-success' value="Update"/> &nbsp;
        <input type='reset' className='btn btn-warning'/>
      </form>
    </div>
  )
}