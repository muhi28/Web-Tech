// Important: Newline must be issued via html IF issued inside an .html
// Declaration of Datas
document.write("Basic Declarations.<br>");
name = "Herbert";
alphabet = ['A','B','C','D'];
value = 12315.123;

document.write(name + "<br>" + alphabet + "<br>" + value + "<br>");
// Declaration of Object
person = new Object;
person.name = "John"; person.age = 20;

document.write("Issued Object \"person\" is of type: " + typeof person + "<br>");
document.write("Our person is " + person.name + " and " + person.age + " years old" + "<br>");
document.write("Type of Name: " + typeof person.name + " & Type of Age: " + typeof person.age + "<br>");
document.write("<br>");

// Declaration of Object using funtion
function Person(){
    this.name = "Hildegard";
    this.age = 34;
}
Person = new Person;        // Create Hildegard
Person.age = 10;            // Change her age
document.write(Person.name + " is " + Person.age + " years old." + "<br>");
document.write("<br>");

document.write("Now to Datatypes.<br>");
document.write("Today is: " + Date() + "<br>");
document.write("Issued Date() is of type: " + typeof Date() + "<br>");

document.write("Type of \"John\" is: " + typeof "John" + "<br>");
document.write("Type of 3.14 is : " + typeof 3.14 + "<br>");
document.write("Type of Person() is: " + typeof Person + "<br>");
document.write("Type of null is: " + typeof null + "<br>");
document.write("Type of undefined is: " + typeof undefined + "<br>");
document.write("Type of person = new Object() is: " + typeof person + "<br>");
document.write("Type of alphabet = ['A','B','C','D'] is " + typeof alphabet + "<br>");
document.write("Type of undefined 'param' is: " + typeof param + "<br>");
document.write("Type of typeof function(){} is: " + typeof function(){} + "<br>");
document.write("Type of true is: " + typeof true + "<br>");

// What the fuck even
