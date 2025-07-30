import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Nav } from './componets/Nav'
import Buttom1 from './componets/Buttom1'
import { BrowserRouter, Routes, Route, Form } from 'react-router'
import Inicio from './routes/Inicio.jsx'
import Footer from './componets/Footer.jsx'
import IniciarSeccion from './routes/IniciarSeccion.jsx'
import RegSeccion from './routes/RegSeccion.jsx'
import Servicios from './routes/Servicios.jsx'
import Perfil from './componets/Perfil.jsx'
import { AuthProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Nav />

      <Routes>
        <Route path='/' Component={Inicio} exact='/Inicio'/>
        <Route path='/Iniciar-Seccion' Component={IniciarSeccion}/>
        <Route path='/register' Component={RegSeccion}/>
        <Route path='/Servicios' Component={Servicios}/>
        <Route path='/Perfil' Component={Perfil}/>
      </Routes>

      <Footer />
    </AuthProvider>
  )
}

export default App
