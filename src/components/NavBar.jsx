import { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Context } from '../context/context'
import { PUBLIC_FOLDER } from '../consts'

export function NavBar () {
  const { user, logout } = useContext(Context)
  const location = useLocation()

  return (
    <nav className='nav'>
      <Link className='logo' to='/'>Post it</Link>
      <ul className='nav-list'>
        <li>
          <NavLink
            className={`link ${location.pathname === '/' && 'active-link'}`}
            to='/'
          >Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`link ${location.pathname === '/newpost' && 'active-link'}`}
            to='/newpost'
          >Escribir
          </NavLink>
        </li>
      </ul>
      {user
        ? (
          <ul className='nav-list'>
            <li>
              <Link className='link' style={{ display: 'flex', alignItems: 'center' }} to='/settings'>
                {
                  user.profilePic !== '' ? (<img src={`${PUBLIC_FOLDER}${user.profilePic}`} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} alt={user.username} />) : (<img src='https://img.freepik.com/free-icon/user_318-875902.jpg' style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} alt={user.username} />)
                }

              </Link>
            </li>
            <li><button className='logout' onClick={logout}>Cerrar Sesión</button></li>
          </ul>
          )
        : (
          <ul className='nav-list'>
            <li>
              <NavLink
                className={`link ${location.pathname === '/login' && 'active-link'}`}
                to='/login'
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className={`link ${location.pathname === '/register' && 'active-link'}`} to='/register'>Registrarse
              </NavLink>
            </li>
          </ul>
          )}
    </nav>
  )
}
