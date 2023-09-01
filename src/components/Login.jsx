import '../styles/form.css'
import { useContext } from 'react'
import { Context } from '../context/context'
import { loginUser } from '../services/user.service'

export function Login () {
  const { isFecthing, loginStart, loginSuccess, loginFailure } = useContext(Context)

  const handleSubmit = async (event) => {
    event.preventDefault()
    loginStart()
    const { username, password } = Object.fromEntries(new window.FormData(event.target))
    try {
      loginUser({ username, password }).then(res => loginSuccess(res.data))
    } catch (error) {
      loginFailure()
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Login</h3>
      <ul className='inner-form'>
        <li>
          <label htmlFor='username'>Username</label>
          <input name='username' type='text' id='name' />
        </li>
        <li>
          <label htmlFor='password'>Contraseña</label>
          <input name='password' type='password' id='password' />
        </li>
      </ul>
      <button className='loginButton' type='submit' disabled={isFecthing}>
        Ingresar
      </button>
    </form>
  )
}
