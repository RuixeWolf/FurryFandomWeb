// JavaScript Document


// 相关创作页面播放
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


// 导航栏搜索input聚焦后边框颜色变为#ff550a
$("#searchInp").on("focus", function() {
    $(this).parent().parent().css("border-color", "#ff550a");
});

// 导航栏搜索input失焦后边框颜色变为#2c2c2c
$("#searchInp").on("blur", function() {
    $(this).parent().parent().css("border-color", "#2c2c2c");
});
