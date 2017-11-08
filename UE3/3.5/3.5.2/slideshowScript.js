var pictures = document.getElementsByClassName("mySlides");
var index = 1;
var run = 0;

function playShow() {
    this.window.alert("Pressed Play.");
    run = 1;
    do{
        setTimeout(playShow(), 5000);
    if(index < 1){
        index = pictures.length;
    }
    if(index > pictures.length){
        index = 1;
    }
    for(slideIndex; slideIndex<pictures.length;){
        pictures[slideIndex].style.display = "none";
        pictures[++slideIndex].style.display = "active";
    }
    }while(run!==0);


}

function pauseShow() {
    this.window.alert("Pressed Pause.");
    run = 0;
}

function setNext(){
    this.window.alert("Pressed Next.");
    index += 1;
    playShow();
}
function setPrevious(){
    this.window.alert("Pressed Previous.");
    index -= 1;
    playShow();
}