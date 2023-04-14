export function Register () {
  return (
    <form className='form'>
      <h3>Registrase</h3>
      <ul className='inner-form'>
        <li>
          <label htmlFor='username'>Username</label>
          <input name='username' type='text' id='name' />
        </li>
        <li>
          <label htmlFor='email'>Correo Electrónico</label>
          <input name='email' type='email' id='email' />
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
