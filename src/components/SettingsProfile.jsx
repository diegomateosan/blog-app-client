import '../styles/settingsprofile.css'
import { useContext, useState } from 'react'
import { Context } from '../context/context'
import { PUBLIC_FOLDER } from '../consts'
import { updateUser } from '../services/user.service'

export function SettingsProfile () {
  const { user, updateStart } = useContext(Context)
  const [file, setFile] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateStart()
    const { username, email, password } = Object.fromEntries(new window.FormData(event.target))
    updateUser({ userId: user._id, username, email, password, file })
  }

  return (
    <section className='settings-profile'>
      <div className='settings-wrapper'>
        <div className='settings-title'>
          <span className='settings-tile-update'>Actualiza tu cuenta</span>
          <button className='settings-title-delete'>Elimina tu cuenta</button>
        </div>
        <form className='settings-form' id='settings-form' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settings-pic'>
            <img className='settings-pic-img' src={file ? URL.createObjectURL(file) : `${PUBLIC_FOLDER}${user.profilePic}`} alt='' />
            <label style={{ display: 'block', width: '64px', height: '64px', cursor: 'pointer' }} htmlFor='fileInput'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} onChange={evt => setFile(evt.target.files[0])} />
          </div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' placeholder={user.username} id='username' required />
          <label htmlFor='email'>Correo Electrónico</label>
          <input type='email' name='email' placeholder={user.email} id='email' required />
          <label htmlFor='password'>Contraseña</label>
          <input type='password' name='password' id='password' required />
          <button type='submit'>
            Actualizar
          </button>
        </form>
      </div>
    </section>
  )
}
