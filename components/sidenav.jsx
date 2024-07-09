function SideNav(){
    return(
        <ul className='nav-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="list" viewBox="0 0 16 16" color='white'>
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
    )
}

export default SideNav