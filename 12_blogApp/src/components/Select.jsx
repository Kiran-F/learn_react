import React, {useId} from 'react'

function Select({
    options, //options is an array by default so have to apply an optional loop
    label,
    className='',
    ...props
}, ref) {
    const id= useId();
  return (
    <div className='w-full '>
        {label && <label htmlFor='{id}' className=''></label>}
        <select 
        {...props} 
        id={id} 
        ref={ref} 
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
{/* this is an optional mapping to avoid crashing if we haven't passed any value using props (when calling)*/}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)
// another way to use forwardRef