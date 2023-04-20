import '../styles/form.css'
import axios from 'axios'
import { useState } from 'react'

export function Register () {
  const [error, setError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(false)
    const { username, email, password } = Object.fromEntries(new window.FormData(event.target))
    try {
      const res = await axios.post('/api/auth/register', {
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Registrase</h3>
      <ul className='inner-form'>
        <li>
          <label htmlFor='username'>Username</label>
          <input name='username' type='text' id='name' required />
        </li>
        <li>
          <label htmlFor='email'>Correo Electrónico</label>
          <input name='email' type='email' id='email' required />
        </li>
        <li>
          <label htmlFor='password'>Contraseña</label>
          <input name='password' type='password' id='password' required />
        </li>
      </ul>
      <button type='submit'>
        Registrarse
      </button>
      {error && <span style={{ color: 'red', textAlign: 'center' }}>¡Algo salió mal!</span>}
    </form>
  )
}
