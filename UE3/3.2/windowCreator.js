/** Sources:
/*  https://wiki.selfhtml.org/wiki/JavaScript/Window/open
 * https://www.w3schools.com/jsref/met_document_createelement.asp
 */

function popup() {
    // Define new Window
    var url = document.getElementById("url").value;
    var title = document.getElementById("title").value;
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var windowFeatures = "width="+x+",height="+y+""+
        ",menubar=0" +      // Disable Menubar <=> Set new window in Chromium
        ",location=0" +     // ???
        ",resizable=0" +    // ???
        ",scrollbars=0" +   // ??? Assuming lack of scrollbar with content
        ",status=0" +       // ??? New Window
        ",titlebar=0" +     // New window. Why even
        ",toolbar=0";       // What the fuck
    var replace = false;

    // Create Window
    var w = window.open("", title, windowFeatures, replace);

    // Move Window
    var left = (window.innerWidth/2);   // Middle of current window
    var top = (window.innerHeight/2);   // Middle of current window
    w.moveTo(left, top);

    // For Debugging:
    //w.document.write("Hello world. <br>My x is " + x + "<br>My y is " + y + "<br>My screenX is: " +left + "<br>myScreenY is : "+ top + "<br><br>");

    // Create Button
    var button = document.createElement("button");
    button.innerHTML = "Close";

    // Append to body
    var body = w.document.getElementsByTagName("body")[0];
    body.appendChild(button);

    // Add Listener
    button.addEventListener ("click", function() {
        w.close();
    });
}