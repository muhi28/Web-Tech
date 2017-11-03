var link = document.getElementsByTagName("a")[2];
//what is the difference of the following three statements???
alert (link.attributes["href"].nodeValue);
alert (link.getAttributeNode("href").nodeValue);
alert (link.href);

alert(link.firstChild.data);

alert (link.attributes[0].nodeType);
alert (link.firstChild.nodeType);

alert(link.parentNode.nodeName);
alert(link.lastChild.parentNode.nodeName);

alert(link.attributes.length);
/*
document.write("<br>link.attributes[\"href\"].nodeValue:"+link.attributes["href"].nodeValue);
document.write("<br>link.getAttributeNode(\"href\").nodeValue:"+link.getAttributeNode("href").nodeValue);
document.write("<br>link.href:"+link.href);

document.write("<br>link.firstChild.data:"+link.firstChild.data);
document.write("<br>link.attributes[0].nodeType:"+link.attributes[0].nodeType);

document.write("<br>link.parentNode.nodeName:"+link.parentNode.nodeName);
document.write("<br>link.lastChild.parentNode.nodeName:"+ link.lastChild.parentNode.nodeName);

document.write("<br>link.attributes.length:"+ link.attributes.length);
*/
// And explain:
//var link = document.getElementsByTagName("a").item(0);
//link.removeAttribute("target");