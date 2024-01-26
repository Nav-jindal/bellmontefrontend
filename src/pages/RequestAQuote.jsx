// Packages
import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"

// Stylings
import requestStyles from '../styles/RequestAQuote.module.sass'

// Components
import TextInput from "../components/TextInput"

const RequestAQuote = () => {
    // Constant
    const { 
        register,
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        initialValues: {
            service: 'Cold Storage Solutions'
        }
    })

    const reeferUnit = [
        '',
        'Thermo King',
        'Carrier',
    ]
    const vehicleModel = [
        '',
        'Tata',
        'Ashok Layland',
        'Eicher',
        'Bharat Benz',
    ]

    const containerSize = [
        '',
        '20 Foot',
        '22 Foot',
        '24 Foot',
        '26 Foot',
        '28 Foot',
        '30 Foot',
        '32 Foot',
    ]

    // Functions
    const isNumber = (str) => {
        if (str.trim() === '') {
          return false
        }
        return !isNaN(Number(str))
      }
    
    const handleNumberInputChange = (str, id) => {
        if (isNumber(str)) {
          setValue(id, str)
        } else {
          setValue(id, '')
        }
    }

    const submitRequestaQuote = async (data) => {
        reset()
        alert('Email sent sucessfully')
        const res = await fetch('/register',{
            method:'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                data: data
            })
        })
        
        // const dataFromServer = await res.json()

        // if( dataFromServer.status === 401 || !dataFromServer)  {
        //     alert('Email not sent')
        // } else {
        //     alert('Email Sent Successfully!')
        //     reset()
        // }

    }

    useEffect(() => {
        window.scrollTo(0, 0);
      },[]);
    return <div>
        <h2 className={requestStyles.heading}>Request a quote</h2>

        <form onSubmit={handleSubmit(submitRequestaQuote)}>
            <h3 className={requestStyles.subHeading}>Basic Info</h3>
            <div className={requestStyles.sectionWrapper}>
                <TextInput
                    register={register}
                    title='Company name'
                    id='companyName'
                    errors={errors.companyName}
                    registerProps={{
                        required: 'This field is required'
                    }}
                />

                <TextInput
                    register={register}
                    title='Name'
                    id='fullName'
                    errors={errors.fullName}
                    registerProps={{
                        required: 'This field is required'
                    }}
                />

                <TextInput
                    register={register}
                    title='Email'
                    id='email'
                    errors={errors.email}
                    registerProps={{
                        required: 'This field is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email',
                        }
                    }}
                />

                <TextInput
                    register={register}
                    title='Phone Number'
                    id='phone'
                    errors={errors.phone}
                    registerProps={{
                        required: 'This field is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Invalid phone number',
                        },
                        onChange: e => {
                            handleNumberInputChange(e.target.value, e.target.id)
                        },
                        validate: value => !isNaN(parseInt(value)),
                    }}
                    inputProps={{
                        type: 'tel',
                        maxLength: 10,
                    }}
                />
            </div>

            
            <h3 className={requestStyles.subHeading}>Reefer Vehicle Requirements</h3>        
            <div className={requestStyles.sectionWrapper}>
                <div className={requestStyles.inputWrapper}>
                    <label htmlFor='service'>Vehicle Model</label>
                    <Controller
                        name='vehicleModel'
                        control={control}
                        errors={errors.vehicleModel}
                        rules={{required:'This field is required'}}
                        render={({ field }) => (
                        <select {...field} title='service' className={requestStyles.selectArrow}>
                            
                            {vehicleModel?.map((service, index) => <option key={index} value={service}>{service}</option>)}
                        </select>
                        )}
                    />
                    { errors.vehicleModel && <div className={requestStyles.error}>{errors.vehicleModel.message}</div>}
                </div>
               

                <div className={requestStyles.inputWrapper}>
                    <label htmlFor='service'>Reefer Container Size</label>
                    <Controller
                        name='containerSize'
                        control={control}
                        errors={errors.containerSize}
                        rules={{required:'This field is required'}}
                        render={({ field }) => (
                        <select {...field} title='service' className={requestStyles.selectArrow}>
                            
                            {containerSize?.map((service, index) => <option key={index} value={service ?? ''}>{service}</option>)}
                        </select>
                        )}
                    />
                    { errors.containerSize && <div className={requestStyles.error}>{errors.containerSize.message}</div>}
                </div>
                

                <div className={requestStyles.inputWrapper}>
                    <label htmlFor='service'>Reefer Unit</label>
                    <Controller
                        name='reeferUnit'
                        errors={errors.reeferUnit}
                        control={control}
                        rules={{required:'This field is required', }}
                        render={({ field }) => (
                        <select {...field} title='service' className={requestStyles.selectArrow}>
                            
                            {reeferUnit?.map((service, index) => <option key={index} value={service}>{service}</option>)}
                        </select>
                        )}
                    />
                    { errors.reeferUnit && <div className={requestStyles.error}>{ errors.reeferUnit.message}</div>}
                </div>

                <TextInput
                    register={register}
                    title='Temperature (Celcius)'
                    id='temperature'
                    errors={errors.temperature}
                    registerProps={{
                        required: 'This field is required',
                        onChange: e => {
                            handleNumberInputChange(e.target.value, e.target.id)
                        },
                        validate: value => !isNaN(parseInt(value)),
                    }}
                />

                <TextInput
                    register={register}
                    title='Vehicle Quantity'
                    id='vehicleQuantity'
                    errors={errors.vehicleQuantity}
                    registerProps={{
                        required: 'This field is required',
                        onChange: e => {
                            handleNumberInputChange(e.target.value, e.target.id)
                          },
                          validate: value => !isNaN(parseInt(value)),
                    }}
                />
                
            </div>
            
            <button type='submit'className='primaryBtn' style={{border:'none', outline: 'none'}}>Submit</button>
        </form>
        
    </div>
}

export default RequestAQuote