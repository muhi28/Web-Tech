var pictures = document.getElementsByClassName("mySlides");
window.index = 1;
var run = 0;

function playShow() {
    console.log("Echo: Index:" + index + "\n\t")
    //this.window.alert("Pressed Play.");
    run = 1;
    index += 1;
        if(index < 1){
            index = pictures.length;
        }
        if(index > pictures.length){
            index = 1;
        }
        for(index; index<pictures.length;){
            pictures[index].style.display = "none";
            pictures[++index].style.display = "active";
        }

        if(run === 1){
        	console.log("setTimeout() : " + run + "\n\tCurrent Index: " + index);
        }else{

        }


}

function pauseShow() {
    //this.window.alert("Pressed Pause.");
    run = 0;
    console.log("PauseShow() : " + run + "\n\tCurrent Index: " + index);
}

function setNext(){
    //this.window.alert("Pressed Next.");
    index += 1;
    console.log("setNext() : " + run + "\n\tCurrent Index: " + index);
}
function setPrevious(){
    //this.window.alert("Pressed Previous.");
    index -= 1;
    console.log("setPrevious() : " + run + "\n\tCurrent Index: " + index);
}