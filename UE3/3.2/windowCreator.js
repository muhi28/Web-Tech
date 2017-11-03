/** Sources:
/*  https://wiki.selfhtml.org/wiki/JavaScript/Window/open
 */

function popup() {
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
        ",toolbar=0";
    var replace = false;

    var w = window.open("", title, windowFeatures, replace);

    <!--Placing Windows is deemed a """Security Issue in Chrome""", thus: -->
    /**
    /* Not: document.documentElement.offsetWidth
     */
    var left = (window.innerWidth/2);   // Middle of current window
    var top = (window.innerHeight/2);   // Middle of current window
    w.moveTo(left, top);

    // For Debugging:
    //w.document.write("Hello world. My x is " + x + "My y is " + y + "My screenX is: " +left + "myScreenY is : "+ top);
}