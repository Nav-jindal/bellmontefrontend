import React from "react"
import requestStyles from '../styles/RequestAQuote.module.sass'

const TextInput = ({
    register,
    title,
    id,
    errors,
    registerProps,
    inputProps
}) => {
    return <div className={requestStyles.inputWrapper}>
    <label htmlFor='name'>{title}</label>
    <input
        type='text'
        htmlFor={id}
        id={id}
        className='textfield'
        {...register(`${id}`,{
            ...registerProps
        })}
        {...inputProps}
    />
    <div className={requestStyles.error}>{errors && errors?.message}</div>
</div>
}

export default TextInput