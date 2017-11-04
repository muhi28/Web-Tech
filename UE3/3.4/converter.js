function calculate() {
    // Fetch

    var aCur = document.getElementById("acur").value;
    var usCur = document.getElementById("uscur").value;

    // Check String for faults :: https://stackoverflow.com/questions/6603015/check-whether-a-string-matches-a-regex
    var re = new RegExp("(\\*|\\/)+[0-9]+"); // + and - reads alright
    if(re.test(usCur) || re.test(aCur)){
        console.log("Dirty value was read. Result may vary.")
    }

    // Search String for multiple ',' and change
    /** In .js, Strings are immutable :: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript **/
    var index;
    while((index = usCur.search(",")) !== -1){
        transform(usCur, index);
        console.log(usCur);
    }


    // FIXME below


    // Parse data
    var usVal = parseFloat(usCur);
    var aVal = parseFloat(aCur);


    console.log("usVar: " + usCur + " :: Type of: " + typeof usCur + "\naVar: " + aCur + " :: Type of: " + typeof aCur);
    console.log("usVal: " + usVal + " :: Type of: " + typeof usVal + "\naVal: " + aVal + " :: Type of: " + typeof aVal);

    if (usVal == NaN && aVal == NaN){
        console.log("\n\tEnter a value");
    }
    if(usVal == NaN){
        calc_AustriaToAmerica();
    }
    if(aVal == NaN){
        calc_AmericaToAustria();
    }
}

function transform(string, index){
    return string.substr(0, index) + "," + (index, string.length);
}