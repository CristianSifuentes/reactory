import React, { ChangeEvent, useState } from 'react'
//rafc

export const Form2 = () => {


  const [ form, setForm ] = useState({
    postalcode: '',
    city: ''
  });

  // const handleChange = (ev : ChangeEvent<HTMLInputElement>) => {
  //   console.log(ev.target.name);
  // console.log(ev.target.value);

  // }


   const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;

      console.log(name, value);

      setForm({
        ...form,
        [name]: value
      })
  }

  return (
    <form autoComplete='off'>
        <div className="mb-3">
            <label className='Form-label'>Postal Code:</label>
            <input type="email" className='from-control' name='postalcode' onChange={(ev) => handleChange(ev)}/>

        </div>
        <div className="mb-3">
            <label className='Form-label'>City:</label>
            <input type="name" className='from-control' name='city' onChange={(ev) => handleChange(ev)}/>

        </div>

        <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
