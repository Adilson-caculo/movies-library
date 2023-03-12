
import { Link,Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbarr from './components/Navbarr'

function App() {
 

  return (
    <div className="App">
     <Navbarr />
     <Outlet />
     <Footer />
    </div>
  )
}

export default App
