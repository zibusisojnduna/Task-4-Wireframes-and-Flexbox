import PlayButton from "./playbutton"

function Info(){
    return(
        <section className='info'>
   
      <input type='text' placeholder='Search' className='search'></input>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="search-icon" viewBox="0 0 16 16" color='black'>
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

      <div>
       <h1>Main</h1> 
       <div className='artist'>
        <h4>Kendrick Lamar</h4>
        <h1>Not Like Us</h1>
        <button className='button-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>Listen Now</button>
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
          <h4>Playlist of<br></br> the day</h4>

          <h4>28 Tracks</h4>
          </div>

          <div className='post-malone'>
            <h4>Something<br></br>New</h4>

            <h4>37 Tracks</h4>

          </div>

          

        </div>

        <h4>You may also like</h4>
        <div className='chart'>
          <div className='fs'>
            <img src='\res\Fatboy Slim.jpg' className='img-2'></img><br></br>
            <h4>The Rockerfeller Skank<br></br><p>Fatboy Slim</p><p>3:26</p></h4> 
          </div>

          <div className='ig'>
            <img src='res\Imagine Dragons Cover.jfif' className='img-3'></img>
            <h4>Believer<br></br><p>Imagine Dragons</p><p>3:24</p></h4>
          </div>


        </div>
        
        <div className='live'>
            <img src='\res\beyonce-formation-tracklist-1-600x600.jpg' className='img-5'></img>
            <h4>Formation<br></br><p>Beyonce</p></h4>
            <div>

            <br>
            
            </br>

            
              <button className='play-btn'onClick={PlayButton} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg></button>
            </div>
          </div>

      </div>
    </section>

    )
}

export default Info