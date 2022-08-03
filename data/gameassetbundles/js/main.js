//troll khi player bấm nút
let lolLevel = 0;
function tryingLol() {
    lolLevel++;
    clearTimeout();
    log("Cố gắng bấm nút đăng nhập nhưng ko thành ;))");
    var startSound = new Audio ('./data/gameassetbundles/resources/sounds/UI_Button_Matchmaking.wav');
    startSound.play();
    startSound.addEventListener('play', function() {
                log("Phát 'UI_Button_Matchmaking.wav'");
            });
    document.getElementById("loginBttn").textContent = ':(';
    if (lolLevel == 1) {
        setTimeout(function(){
            document.getElementById("loginBttn").textContent = '❌❌❌❌❌❌';
        }, 1000);
    }
    if (lolLevel == 2) {
        setTimeout(function(){
            document.getElementById("loginBttn").textContent = '❌❌❌';
        }, 1000);
    }
    if (lolLevel == 3) {
        setTimeout(function(){
            document.getElementById("loginBttn").textContent = '❌';
        }, 1000);
    }
    if (lolLevel == 4) {
        document.getElementById("loginBttn").textContent = 'KHÁCH';
        lolLevel = 0;
        location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}
//phát nhạc nền
var musicAllowPlay = 0;
var bgm = new Audio ('./data/gameassetbundles/resources/sounds/BGM_OB34_BIS_Lobby.wav');
function playBgm() {
    if (musicAllowPlay == 0) {
        musicAllowPlay++;
        bgm.play();
        bgm.addEventListener('play', function() {
                log("Phát nhạc nền 'BGM_OB34_BIS_Lobby.wav'");
            });
        bgm.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}
//chuyển động với các dòng văn bản dài
setTimeout(function(){
var textOvfl,nmoCntnrWidth,nmoWidth,nmoPdng,moving,counter,moveTarget;
textOvfl = nmoCntnrWidth = nmoWidth = nmoPdng = moving = counter = moveTarget = 0;
function nmo(containerWidth,width,pd) {
        nmoCntnrWidth = parseInt(getComputedStyle(document.querySelector(".movflw-container")).getPropertyValue('width'));
        textOvfl = document.querySelector(".movflw");
        nmoWidth = parseInt(getComputedStyle(textOvfl).getPropertyValue('width'));
        nmoPdng = parseInt(getComputedStyle(textOvfl).getPropertyValue('padding-right')) + parseInt(getComputedStyle(textOvfl).getPropertyValue('padding-left'));
        moveTarget = 0 - ((width - containerWidth) + pd);
    if (nmoWidth + nmoPdng > nmoCntnrWidth) {
        counter++;
        if (counter > 40 & counter < (0 - moveTarget) + 41) {if (moving > moveTarget) {moving--;}}
        if (counter > (0 - moveTarget) + 80) {counter = 0;}
        if (counter == 0) {moving = 0;}
        textOvfl.style.webkitTransform = "translateX(" + moving + "px)";
        if (counter < 21) {textOvfl.style.opacity = ((counter / 20) * 130) + "%";}
        if (counter > (0 - moveTarget) + 60) {textOvfl.style.opacity = (((20 - (counter - ((-moveTarget) + 60))) / 20) * 130) + "%";}
    } else {
            textOvfl.style.webkitTransform = "translateX(0px)";
            textOvfl.style.opacity = 1;
            counter, moving = 0;
    }
}
setInterval(function(){nmo(nmoCntnrWidth,nmoWidth,nmoPdng)},25);
},16000)