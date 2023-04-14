import { Link } from 'react-router-dom'

// TODO: Hacer un topbar center y un tobar right
export function NavBar () {
  const user = false
  return (
    <nav className='nav'>
      <a href='/' className='logo'>Post it</a>
      <ul className='nav-list'>
        <li><Link className='link' to='/'>Inicio</Link></li>
        <li>Usuarios</li>
        <li>
          <Link className='link' to='/newpost'>Escribir</Link>
        </li>
      </ul>
      {user
        ? (
          <ul className='nav-list'>
            <li>
              <Link className='link' style={{ display: 'flex', alignItems: 'center' }} to='/settings'>
                <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
              </Link>
            </li>
            <li>LOGOUT</li>
          </ul>
          )
        : (
          <ul className='nav-list'>
            <li><Link className='link' to='/login'>Login</Link></li>
            <li><Link className='link' to='/register'>Registrarse</Link></li>
          </ul>
          )}
    </nav>
  )
}
