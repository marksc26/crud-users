import React from 'react'

const UserCard = ({user, deleteUser, setUserUpdate, handleChangeShowModal}) => {
  
    const handleClickUpdate = () =>{
        setUserUpdate(user)
        handleChangeShowModal()

    }
  
  
    return (
    <article className='user'>
        <h2 className='user--title'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user--list'>
            <div className='container-list'>
                <li className='user--item'><span><i className='bx bx-envelope'></i>Email: </span>{user.email}</li>
                <li className='user--item'><span><i className='bx bx-gift'></i>Birthday: </span>{user.birthday}</li>
            </div>
            
        </ul>

        <div className='edit-btn'>
        <button className='trash' onClick={() => deleteUser(user.id)}>
        <i className='bx bx-trash'></i>
        </button>

        <button className='edit' onClick={handleClickUpdate} >
        <i className='bx bxs-edit'></i>
        </button> 
        </div>

        
        

    </article>
  )
}

export default UserCard