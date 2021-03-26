const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play'); 
    //sounds
    const sounds = document.querySelectorAll('.sound-picker button');
    //time display
    const timeDisplay = document.querySelector('.time-display');
   //duration
   let fakeDuration = 600;
   //time selection
   const timeSelect = document.querySelectorAll('.time-select button');

   
   //pick different sounds
   sounds.forEach(sound =>{
       sound.addEventListener('click', function(){
           song.src = this.getAttribute('data-sound');
           checkPlaying(song);
       })
   })

   play.addEventListener("click", () => {
       checkPlaying(song);
   })

const checkPlaying = song =>{
    if(song.paused){
    song.play();
    //add image
    play.src = 'assets/stop.png'; 
    }else{
        song.pause();
        //add image
        play.src = "assets/play.png"
    }
};

    //timer
song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= fakeDuration){
        song.pause();
        song.currentTime = 0;
        play.src = 'assets/play.png';
    } 
}

//select time
timeSelect.forEach(option => {
    option.addEventListener('click', function(){
        fakeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`;
    })
});
};

app();