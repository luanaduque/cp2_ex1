import './App.css'
import Menu from './components/Menu'
import { Outlet } from 'react-router-dom'

function App(){

  return (
    <>
    <Outlet/>
    </>
  )
}
export default App