// JavaScript Document

var backgroundVideo = document.getElementById("backgroundVideo");
                
function play(){
    backgroundVideo.play();
}
                
function pause(){
    backgroundVideo.pause();
}

function volumeUp(){
    backgroundVideo.volume += 0.2;
}

function volumeDown(){
    backgroundVideo.volume -= 0.2;
}
