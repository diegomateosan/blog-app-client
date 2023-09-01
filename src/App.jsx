import { useContext } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Context } from './context/context'
import { RegisterPage } from './Pages/RegisterPage'
import { LoginPage } from './Pages/LoginPage'
import { SettingsProfilePage } from './pages/SettingsProfilePage'
import { SinglePostPagePage } from './pages/SinglePostPage'
import { HomePage } from './Pages/HomePage'
import { CreatePostPage } from './pages/CreatePostPage'

function App () {
  const { user } = useContext(Context)
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={user ? <HomePage /> : <RegisterPage />} />
        <Route path='/login' element={user ? <HomePage /> : <LoginPage />} />
        <Route path='/newpost' element={user ? <CreatePostPage /> : <RegisterPage />} />
        <Route path='/settings' element={user ? <SettingsProfilePage /> : <RegisterPage />} />
        <Route path='/post/:postId' element={<SinglePostPagePage />} />
      </Routes>
    </Router>
  )
}

export default App
