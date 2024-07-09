import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles.css"
import PlayButton from '../components/playbutton'
import SideNav from '../components/sidenav'
import Info from '../components/info'
import PlayNow from '../components/playnow'


function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
    
    <main className='main'>
     <ul><SideNav/></ul>
    <section><Info/></section>
    <section><PlayNow/></section>
    </main>

    

    

  
    </>
  )
}

export default App
