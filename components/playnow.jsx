function PlayNow(){
    return(
        <div className='play-now'>
        <div className='profile'>
          <h4>James P.</h4><img src='res\dan-stock-19711-1.jpg' className='profile-img'></img>
        </div>

        <div className='tracks'>
          <h4>Now playing</h4>
      
          <div className='songs'>
           <img src='\res\beyonce-formation-tracklist-1-600x600.jpg' className='img-4'></img>
           <h4>Formation<br></br><p>Beyonce</p><p>4:48</p></h4> 
          </div>
          
          <div className='songs'>
            <img src='\res\Led Zepplin Cover.jpg' className='img-4'></img>
            <h4>Dazed and Confused<br></br><p>Led Zepplin</p><p>6:27</p></h4>
          </div>

          <div className='songs'>
            <img src='\res\Black Eyed Peas.jfif' className='img-4'></img>
            <h4>Meet Me Halfway<br></br><p>Black Eyed Peas</p><p>4:45</p></h4>
          </div>

          <div className='songs'>
            <img src='\res\Eminem Albm 1.jfif'className='img-4'></img>
            <h4>Business<br></br><p>Eminem</p><p>4:12</p></h4>
          </div>
          
          
        </div>

        
      </div>


    )
}

export default PlayNow