import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../../hooks/useForm'
//rafc


interface FormData {
    email: string;
    name : string;
    age: number
}


export const Form = () => {

  const { form, handleChange } = useForm<FormData>({
    email: 'cristian@gmail.com',
    name: 'Cristian Sifuntes',
    age: 10
  });

  const {email, name, age } = form;


  // const [ form, setForm ] = useState({
  //   email: '',
  //   name: ''
  // });

  // // const handleChange = (ev : ChangeEvent<HTMLInputElement>) => {
  // //   console.log(ev.target.name);
  // // console.log(ev.target.value);

  // // }


  //  const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = target;

  //     console.log(name, value);

  //     setForm({
  //       ...form,
  //       [name]: value
  //     })
  // }

  return (
    <form autoComplete='off'>
        <div className="mb-3">
            <label className='Form-label'>Email:</label>
            <input 
            type="email" 
            className='from-control' 
            name='email' 
            value={email} onChange={handleChange}/>

        </div>
        <div className="mb-3">
            <label className='Form-label'>Name:</label>
            <input type="name" 
            className='from-control' 
            name='name' 
            value={name} 
            onChange={handleChange}/>

        </div>

          <div className="mb-3">
            <label className='Form-label'>Age:</label>
            <input type="age" 
            className='from-control' 
            name='age' 
            value={age} 
            onChange={handleChange}/>

        </div>

        <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
