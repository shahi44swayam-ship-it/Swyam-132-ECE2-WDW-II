//  js can change all the html elements in the page
// can change all the attributes
// can chnage all the css styles
// can remove or add existing html elements and attributes
// can react to all existing html events in the page
// can create new html events 

const result=document.getElementById("jk");
result.innerHTML=<b>hello world</b>;

const result=document.getElementsByClassName("p1");
result[1].innerHTML="Bisht";
result[0].innerHTML="Tushar";

const result=document.getElementsByTagName("p");
result[2].style.color="blue";
result[1].innerText="my paragraph";

const result=document.getElementById("jk").getAttribute("class");
document.getElementById("p1").innerHTML=result;

const heading=document.createElement("h2");
const bodytag=document.getElementsByTagName("body");
bodytag[0].append(heading); 

// node.prepend() = adds at the start of the node
// node.after()= after the node
// node.before()=before the node
// node.remove()=delete the node
