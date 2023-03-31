import React from 'react'

function TextField({ label = '', type = 'text', disabled = false, placeholder = '', value, onChange = () => { } }) {
    console.log(value);
    return (
        <label className='w-full md:w-60 flex flex-col justify-start items-start mt-4 px-1 mx-4'>
            {label}
            <input type={type} disabled={disabled} placeholder={placeholder} className='w-full h-12 border border-slate-300 rounded px-3 py-1 mx-1 my-1 outline-none disabled:cursor-not-allowed' defaultValue={value} onChange={onChange} />
        </label>
    )
}

export default TextField