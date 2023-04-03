import React, { useState } from 'react'

const AddPro = ({onAdd}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name) {
            alert("Please add a product")
            return
        }

        onAdd({ name, price, desc})

        setName('')
        setPrice('')
        setDesc('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Product</label>
                <input type='text' placeholder='Add Product'
                value={name} onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input type='text' placeholder='Enter the Price'
                value={price} onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-control'>
            <label>Description</label>
            <textarea placeholder='Details'
            value={desc} onChange={(e) => setDesc(e.target.value)}
            />
            </div>
            <input type='submit' value='Save Product' className='btn btn-block'/>
    </form>
  )

}
export default AddPro