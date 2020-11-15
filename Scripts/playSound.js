audio = new Audio();

function playSound(link){
    audio.pause();    
    audio.src = link;
    audio.play();
}