import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'


const BASE_URL = "https://users-crud.academlo.tech/"

function App() {

  //Estados para almacenar usuarios y poder mostrarlos
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShowForm, setIsShowForm] = useState(false)


  /*const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }

  }*/


  // c Read u d    Funcion que obtiene todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  // Create r u d    Funcion que crea un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        handleChangeShowModal()
      })
      .catch(err => console.log(err))

  }

  // c r u Delete   funcion para eliminar el usuario
  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))

  }

  // c r Update d   funcion para modificar las caracteristicas de un usuario creado
  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUserUpdate()
      })
      .catch(err => console.log(err))


  }

  const handleClickNewUser = () => {
    handleChangeShowModal()
    setUserUpdate()
  }



  const handleChangeShowModal = () => {
    setIsShowForm(!isShowForm)
  }


  //Se obtienen todos los usuarios al cargar la app
  useEffect(() => {
    getAllUsers()
  }, [])


  return (

    <div className="App">


      <div className='header--container'>
        <h1>Users</h1>
        <div>
          <button onClick={handleClickNewUser} className='header--btn'><i className='bx bx-plus'></i>Create New User</button>
        </div>

      </div>


      <div>
        <FormUsers
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          isShowForm={isShowForm}
          handleChangeShowModal={handleChangeShowModal}
        />
      </div>

      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              handleChangeShowModal={handleChangeShowModal}
            />
          ))
        }
      </div>


    </div>
  )
}

export default App
