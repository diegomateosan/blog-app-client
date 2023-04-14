export function SettingsProfile () {
  return (
    <section className='settings-profile'>
      <div className='settings-wrapper'>
        <div className='settings-title'>
          <span className='settings-tile-update'>Actualiza tu cuenta</span>
          <span className='settings-tile-delete'>Elimina tu cuenta</span>
        </div>
        <form className='settings-form'>
          <label>Profile Picture</label>
          <div className='settings-pic'>
            <img className='settings-pic-img' src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg' alt='' />
            <label style={{ display: 'block', width: '64px', height: '64px', cursor: 'pointer' }} htmlFor='fileInput'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label htmlFor='username'>Username</label>
          <input type='text' placeholder='diegomateosan' id='username' />
          <label htmlFor='email'>Correo Electrónico</label>
          <input type='email' placeholder='diegomateosan@gmail.com' id='email' />
          <label htmlFor='password'>Contraseña</label>
          <input type='password' id='password' />
          <button type='submit'>
            Actualizar
          </button>
        </form>
      </div>
    </section>
  )
}
