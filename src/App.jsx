import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer sticky='bottom'/>
    </>
  )
}

export default App
