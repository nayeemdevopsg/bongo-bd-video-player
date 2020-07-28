function operateBt(value){
    if(value == 1){
        var vidPlay = document.getElementById('vid');
    vidPlay.play();
    }
    else if(value == +10){
        var vidFor = document.getElementById('vid');
        vidFor.currentTime += 10;
    }
    else if(value == -10){
        var vidRew = document.getElementById('vid');
        vidRew.currentTime -= 10;
    }
}