export function Login () {
  return (
    <form className='form'>
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
      <button type='submit'>
        Ingresar
      </button>
    </form>
  )
}
