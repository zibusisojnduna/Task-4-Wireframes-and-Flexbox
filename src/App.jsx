import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./styles.css"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <main className='main'>
      <ul className='nav-1'>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" color='white'>
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>

      <li className='li-1'>Main</li>
      <li className='li-1'>Radio</li>
      <li className='li-1'>Podcats</li>
      <li className='li-1'>Books</li>
      <br></br>
      
      

      <li className='heading'><h2>My Music</h2></li>
      <li className='li-1'>Tracks</li>
      <li className='li-1'>Albums</li>
      <li className='li-1'>Artist</li>
      <li className='li-1'>Files</li>

      <br></br>
      <br></br>
      <br></br>

      <li className='li-1'>Settings</li>
      <li className='li-1'>Log Out</li>
    </ul>

    <section className='info'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" color='black'>
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      <input type='text' placeholder='Search' className='search'></input>
      <div>
       <h1>Main</h1> 
       <div className='artist'>
        <h4>Kendrick Lamar</h4>
        <h1>Not Like Us</h1>
        <button className='button-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>Play Now</button>
<img src='\res\Kendrick Lamar.jfif' className='img-1'></img>
       </div>
       <br></br>
        <h4>Playlists for you</h4>
        <div className='albums'>
          <div className='eminem'>
            <br></br>
            <h4>Dejavu</h4>

            <h4>30 Tracks</h4>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='taylor'>

          </div>
        </div>
      </div>
    </section>
    </main>

    

  
    </>
  )
}

export default App
