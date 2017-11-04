function calculate() {
    // Setup
    var val;
    // Fetch
    val = document.getElementById("uscur").value;

    console.log("Val: " + val + ":: Type of: " + typeof val);

    // Check String for faults :: https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex
    var re = new RegExp("(\\*|\\/)+[0-9]+"); // + and - reads alright
    if(re.test(val)){
        console.log("A dirty value was read. Result may vary.")
    }else{
        console.log("Value is fine.")
    }
    // TODO: Add regex which controls ',' locations ... 302,312,312 & not: 30,23123,12

    // Search String for multiple ',' and change
    /** In .js, Strings are immutable :: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript **/
    var index = val.search(",");
    var pre, suf;
    while(index >= 0){
        pre = val.substr(0,index);              // Exklusive index
        suf = val.substr(index+1, val.length);  // Inklusive index => +1

        val = pre+'.'+suf;
        index = val.search(",");
    }
    // [123,123,123] => [123.123,123] => [123.123.123]
    // Val is now in european format

    // Pass Data into Element
    document.getElementById("acur").value = val;
}