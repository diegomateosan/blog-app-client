import { Header } from '../components/Header'
import { SettingsProfile } from '../components/SettingsProfile'
import { Footer } from '../components/Footer'

export function SettingsProfilePage () {
  return (
    <div className='page'>
      <Header />
      <SettingsProfile />
      <Footer />
    </div>
  )
}
