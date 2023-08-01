import React from 'react'
import userLg from '../assets/img/user.png'

const UserCard = ({ user, deleteUser, setUserUpdate, handleChangeShowModal }) => {

    const handleClickUpdate = () => {
        setUserUpdate(user)
        handleChangeShowModal()

    }


    return (
        <article className='user'>
            <div className='img-card'>
                <img src={userLg} alt="perfil" />
            </div>
            <div className='title'>
                <h2 className='user--title'>{`${user.first_name} ${user.last_name}`}</h2>
            </div>

            <div className='user--list'>
                <ul className='container-list'>
                    <li className='user--item'>Email</li>
                    <li className='item'>{user.email}</li>
                    <li className='user--item'>Birthday</li>
                    <li className='item'>{user.birthday}</li>
                </ul>

            </div>

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