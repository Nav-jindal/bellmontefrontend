// Packages
import React, { useEffect } from "react"
import axios from "axios"
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
    } = useForm()

    const reeferUnit = [
        '',
        'Thermo King',
        'Carrier',
    ]
    const vehicleModel = [
        '',
        'Ashok Layland',
        'Bharat Benz',
        'Eicher',
        'Tata',
    ]

    const containerSize = [
        '',
        '17 Foot',
        '20 Foot',
        '22 Foot',
        '24 Foot',
        '26 Foot',
        '28 Foot',
        '30 Foot',
        '32 Foot',
    ]

    const tyesSize = [
        '',
        '6',
        '10',
        '12',
        '14',
        '16',
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
        if(data){
            axios.post('http://localhost/email/email.php', 
            data).then(()=>{ 
                        alert('Email sent sucessfully'); 
                        })
                .catch(()=>{ 
                        alert('Encountered an error while sending the email')
                        })
        } else {
            alert('Encountered an error while submitting the form')
        }
    }

    // Effects
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

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
                
                <div className={requestStyles.inputWrapper}>
                    <label htmlFor='service'>Number of Tyres</label>
                    <Controller
                        name='noOfTyres'
                        control={control}
                        errors={errors.noOfTyres}
                        rules={{required:'This field is required'}}
                        render={({ field }) => (
                        <select {...field} title='service' className={requestStyles.selectArrow}>
                            {tyesSize?.map((service, index) => <option key={index} value={service ?? ''}>{service}</option>)}
                        </select>
                        )}
                    />
                    { errors.noOfTyres && <div className={requestStyles.error}>{errors.noOfTyres.message}</div>}
                </div>
            </div>
            
            <button type='submit'className='primaryBtn' style={{border:'none', outline: 'none'}}>Submit</button>
        </form>
        
    </div>
}

export default RequestAQuote