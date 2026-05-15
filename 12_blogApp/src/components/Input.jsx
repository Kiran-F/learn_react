import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1 font-black uppercase text-black' 
            htmlFor={id}>
                {label}
            </label>
            }

            <input 
            type={type}
            className={`px-3 py-3 bg-white text-black font-bold outline-none border-4 border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all w-full 
                ${className}`}
            ref={ref}
            {...props}
            id={id}
             />
        </div>
    )
})

export default Input