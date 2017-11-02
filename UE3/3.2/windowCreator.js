function popup(){
    var url = document.getElementById('url').value;
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var title = document.getElementById('title').value;

    // Fixme
    window.open(url, title, height=x, width=y,left=(parent.width/2),top=(parent.height/2));
}