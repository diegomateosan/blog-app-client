import './App.css'
import { HomePage } from './Pages/HomePage'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { NewPost } from './components/NewPost'
import { Register } from './components/Register'
import { SettingsProfile } from './components/SettingsProfile'
import { SinglePost } from './components/SinglePost'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App () {
  const user = false
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={user ? <HomePage /> : <Register />} />
        <Route path='/login' element={user ? <HomePage /> : <Login />} />
        <Route path='/newpost' element={user ? <NewPost /> : <Register />} />
        <Route path='/settings' element={user ? <SettingsProfile /> : <Register />} />
        <Route path='/post/:postId' element={<SinglePost />} />
      </Routes>
    </Router>
  )
}

export default App
