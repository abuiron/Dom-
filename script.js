console.log("Welcome to DOM"); 

//document object model all are define as document select by id
let element=document.getElementById("root");

////this is for inner text not tag
//element.innerText="welcome to dom" 

//this is define as html tags 

element.innerHTML="<h1>welcome to dom</h1>"

//element.appendChild="<h1>this is interesting to learn</h1>"

let node = document.createElement("div") // create a div

let node1 = document.createElement("ul") // create a ul

let listItem1 = document.createElement("li") // create a li
listItem1.innerText="create element"    // added text in li
node1.appendChild(listItem1)  // added li ti ul

let listItem2 = document.createElement("li") // create a li
listItem2.innerText="get element" // added text to li
node1.appendChild(listItem2)

let listItem3 = document.createElement("li")  // create a li
listItem3.innerText="append element" // added text to li
node1.appendChild(listItem3)

//first append all the li to node1(ul) and append the ul tonode(div)

node.appendChild(node1);


document.body.append(node)

// append - will automatically create text node and bind it also you can insert dom node as well
//appendchild - will not any text.will append only a dom node

// diiference betwwen append and append child
let pp= document.createElement("h1")
pp.innerText="example of append and append child"

document.body.append(pp)

//example of append
let ap = document.createElement("h2")
ap.innerText="append ex"
document.body.append(ap)


let div1 = document.createElement("div") // create div
let p1 = document.createElement("p") // create p tag 
p1.innerText= "this is p tag " // added text to a p tag

div1.append(p1,"this is second  p text using append") // append automatically add ext node

document.body.append(div1)

//eaxample of apend child

let ac=document.createElement("h2")
ac.innerText="append child ex"

document.body.append(ac)

let acdiv= document.createElement("div") // create div

let acol=document.createElement("ol") //create ol

let acolli1=document.createElement("li") // create li1
acolli1.innerText="this is li"; // added text to li1
acol.appendChild(acolli1); // appendchild li1 to ol not directly append to body

let acolli2=document.createElement("li") // create li2
acolli2.innerText="this is li"; // added text to li2
acol.appendChild(acolli2); // appendchild li1 to ol not directly append to body

let acolli3=document.createElement("li") // create li3
acolli3.innerText="this is li"; // added text to li3
acol.appendChild(acolli3); // appendchild li1 to ol not directly append to body

//append the ol with li node  to div node
acdiv.appendChild(acol);

//append the div to body
document.body.append(acol);




// calling a function  create table tag 
function constructTable()
{
    let tb=document.createElement("table")

let tr1=document.createElement("tr")

tr1.setAttribute("class","tr11") // connect the attribuute of class

let td1=document.createElement("td")
td1.innerText="hi"
tr1.appendChild(td1)

let td2=document.createElement("td")
td2.innerText="hlo"
tr1.appendChild(td2)

let td3=document.createElement("td")
td3.innerText="bye"
tr1.appendChild(td3)

tb.append(tr1)

document.body.appendChild(tb)
}

let button = document.createElement("button")
button.innerText="Click me for table"
button.setAttribute("id","btn")
button.setAttribute("class","butto");
button.addEventListener("click",constructTable) // event if i click then the function will call


document.body.appendChild(button)



//caling function using eventlistenr

function conUl(){
    let div1 = document.createElement("div")


    let ul1 =document.createElement("ul");

    div1.setAttribute("class","list")

    let listItems = []

    let li1 = document.createElement("li")
    li1.innerText="one";
    listItems.push(li1)

    let li2 = document.createElement("li")
    li2.innerText="two";
    listItems.push(li2)

    let li3 = document.createElement("li")
    li3.innerText="three";
    listItems.push(li3)

    console.log(listItems);

    ul1.append(...listItems);

    div1.appendChild(ul1);

    document.body.append(div1);
}


let button1 = document.createElement("button")
button1.innerText="Click me for ul"
button1.setAttribute("id","btn")
button1.setAttribute("class","butto");
button1.addEventListener("click",conUl)
document.body.appendChild(button1)




// selectors

//query selector

let button2 = document.createElement("button")
button2.innerText="Click me for queryselector"
button2.setAttribute("id","btn")
button2.setAttribute("class","butto");
button2.addEventListener("click",()=>{
    let elementi = document.querySelector(".list");
    elementi.setAttribute("id","lis")
    console.log(elementi);

    document.body.append(elementi)

})
document.body.appendChild(button2)

//queryselectorall
let button3 = document.createElement("button")
button3.innerText="Click me for queryselectorAll"
button3.setAttribute("id","btn")
button3.setAttribute("class","butto");
button3.addEventListener("click",()=>{
    let elementii = document.querySelectorAll(".list")
    console.log(elementii)

    document.body.append(elementii);
})
document.body.appendChild(button3)












