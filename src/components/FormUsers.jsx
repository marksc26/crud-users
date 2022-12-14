import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""

}

const validationEmail = {
    required: "Email is required",
    minLength: {
        message:"Email is too short",
        value: 3
    },
    maxLength:{
        message:"Email is too Long",
        value: 45
    }
}

const FormUsers = ({createUser, userUpdate, updateUser, handleChangeShowModal, isShowForm}) => {

    const {handleSubmit, register, reset, formState:{errors}} = useForm()

    const submitForm = (data) =>{
        if(userUpdate){
            updateUser(userUpdate.id, data)
        }else{
            createUser(data)
        }
        reset(defaultValues)
        
    }

    const titleForm = userUpdate ? "Edit User" : "New User"
    const textButton = userUpdate ? "Edit User" : "Upload"

    

    useEffect(() =>{
        if(userUpdate){
           reset(userUpdate) 
        }else{
            reset(defaultValues)
        }

    }, [userUpdate])

    const regularExpresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i


  return (

    <div className={`container--form ${isShowForm ? "" : "disable--form"}`}>
        <form className='form' onSubmit={handleSubmit(submitForm)}>
            <div className='header--form'>
               <i className='bx bxs-x-square'onClick={handleChangeShowModal}></i>
              <h2>{titleForm}</h2> 
            </div>
        
        <div className='container--info'>
        <div className='names'>
            <label htmlFor=""><i className='bx bxs-user-circle'></i></label>
            <input placeholder='first name' type="text" {...register("first_name")}/><label htmlFor=""></label>
            <input  placeholder='last name' type="text" {...register("last_name")}/>
        </div>
        <div>
            
        </div>
        <div className='emails'>
            <label htmlFor=""><i className='bx bx-envelope'></i></label>
            <input  placeholder='email' type="email" {...register("email", {
                required: "Email is required",
                minLength: {
                message:"Email is too short",
                value: 3
                },
                maxLength:{
                message:"Email is too Long",
                 value: 30
                },
                pattern:{
                    message: "Write a valid email",
                    value: regularExpresion
                }
                })} 
            />
            {
                errors.email && <p>{errors.email.message}</p>
            }
        </div>
        <div className='passwords'>
            <label htmlFor=""><i className='bx bx-lock-alt'></i></label>
            <input placeholder='password' type="password" {...register("password")} />
        </div>

        <div className='birthdays'>
             <label htmlFor=""><i className='bx bx-gift' ></i></label>
            <input placeholder='birthday' type="date" {...register("birthday")} />
        </div>
        
        
           
        </div>

        <div className="container--btn">
            <button className='form--btn' type='submit'>{textButton}</button> 
        </div>

       

    </form> 
    </div>
  )
}

export default FormUsers