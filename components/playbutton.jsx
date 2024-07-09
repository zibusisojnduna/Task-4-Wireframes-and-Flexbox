function PlayButton(props){

    
    
   const playbutton = () => {
   alert("This starts the selected track.")
   props.setCounter(props.counter)
 };

   return(    
    <button className="play-btn" onClick={playbutton}></button>
   )
}
export default PlayButton;