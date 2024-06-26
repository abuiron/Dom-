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

    ul1.setAttribute("class","list")

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
    elementi.setAttribute("style","list-style-type: square;")

})
document.body.appendChild(button2)

//queryselectorall
let button3 = document.createElement("button")
button3.innerText="Click me for queryselectorAll"
button3.setAttribute("id","btn")
button3.setAttribute("class","butto");
button3.addEventListener("click",()=>{
    let elementii = document.querySelectorAll(".list")
    elementii.forEach((e)=>{
        e.setAttribute("style","list-style-type: square;")
        console.log(e);
    })
})
document.body.appendChild(button3)



// next section heading Api checking

let hd=document.createElement("h1")
hd.innerText="Products"
hd.setAttribute("style","margin : 0px 50px 50px 0px ");
hd.setAttribute("style","background-color:green;color:yellow;text-align:center")

document.body.append(hd);



//api checking deatils


products_details = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg"
      ]
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      "images": [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg"
      ]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      ]
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/8/1.jpg",
        "https://cdn.dummyjson.com/product-images/8/2.jpg",
        "https://cdn.dummyjson.com/product-images/8/3.jpg",
        "https://cdn.dummyjson.com/product-images/8/4.jpg",
        "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/9/1.jpg",
        "https://cdn.dummyjson.com/product-images/9/2.png",
        "https://cdn.dummyjson.com/product-images/9/3.png",
        "https://cdn.dummyjson.com/product-images/9/4.jpg",
        "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
      ]
    },
    {
      "id": 10,
      "title": "HP Pavilion 15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/10/1.jpg",
        "https://cdn.dummyjson.com/product-images/10/2.jpg",
        "https://cdn.dummyjson.com/product-images/10/3.jpg",
        "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg"
      ]
    },
    {
      "id": 11,
      "title": "perfume Oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 13,
      "discountPercentage": 8.4,
      "rating": 4.26,
      "stock": 65,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/11/1.jpg",
        "https://cdn.dummyjson.com/product-images/11/2.jpg",
        "https://cdn.dummyjson.com/product-images/11/3.jpg",
        "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
      ]
    },
    {
      "id": 12,
      "title": "Brown Perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 40,
      "discountPercentage": 15.66,
      "rating": 4,
      "stock": 52,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/12/1.jpg",
        "https://cdn.dummyjson.com/product-images/12/2.jpg",
        "https://cdn.dummyjson.com/product-images/12/3.png",
        "https://cdn.dummyjson.com/product-images/12/4.jpg",
        "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
      ]
    },
    {
      "id": 13,
      "title": "Fog Scent Xpressio Perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 13,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/13/1.jpg",
        "https://cdn.dummyjson.com/product-images/13/2.png",
        "https://cdn.dummyjson.com/product-images/13/3.jpg",
        "https://cdn.dummyjson.com/product-images/13/4.jpg",
        "https://cdn.dummyjson.com/product-images/13/thumbnail.webp"
      ]
    },
    {
      "id": 14,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 120,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Al Munakh",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/14/1.jpg",
        "https://cdn.dummyjson.com/product-images/14/2.jpg",
        "https://cdn.dummyjson.com/product-images/14/3.jpg",
        "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
      ]
    },
    {
      "id": 15,
      "title": "Eau De Perfume Spray",
      "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 30,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "thumbnail": "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/15/1.jpg",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/4.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
      ]
    },
    {
      "id": 16,
      "title": "Hyaluronic Acid Serum",
      "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      "price": 19,
      "discountPercentage": 13.31,
      "rating": 4.83,
      "stock": 110,
      "brand": "L'Oreal Paris",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/16/1.png",
        "https://cdn.dummyjson.com/product-images/16/2.webp",
        "https://cdn.dummyjson.com/product-images/16/3.jpg",
        "https://cdn.dummyjson.com/product-images/16/4.jpg",
        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
      ]
    },
    {
      "id": 17,
      "title": "Tree Oil 30ml",
      "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      "price": 12,
      "discountPercentage": 4.09,
      "rating": 4.52,
      "stock": 78,
      "brand": "Hemani Tea",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/17/1.jpg",
        "https://cdn.dummyjson.com/product-images/17/2.jpg",
        "https://cdn.dummyjson.com/product-images/17/3.jpg",
        "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
      ]
    },
    {
      "id": 18,
      "title": "Oil Free Moisturizer 100ml",
      "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      "price": 40,
      "discountPercentage": 13.1,
      "rating": 4.56,
      "stock": 88,
      "brand": "Dermive",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/18/1.jpg",
        "https://cdn.dummyjson.com/product-images/18/2.jpg",
        "https://cdn.dummyjson.com/product-images/18/3.jpg",
        "https://cdn.dummyjson.com/product-images/18/4.jpg",
        "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
      ]
    },
    {
      "id": 19,
      "title": "Skin Beauty Serum.",
      "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      "price": 46,
      "discountPercentage": 10.68,
      "rating": 4.42,
      "stock": 54,
      "brand": "ROREC White Rice",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/19/1.jpg",
        "https://cdn.dummyjson.com/product-images/19/2.jpg",
        "https://cdn.dummyjson.com/product-images/19/3.png",
        "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
      ]
    },
    {
      "id": 20,
      "title": "Freckle Treatment Cream- 15gm",
      "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      "price": 70,
      "discountPercentage": 16.99,
      "rating": 4.06,
      "stock": 140,
      "brand": "Fair & Clear",
      "category": "skincare",
      "thumbnail": "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/20/1.jpg",
        "https://cdn.dummyjson.com/product-images/20/2.jpg",
        "https://cdn.dummyjson.com/product-images/20/3.jpg",
        "https://cdn.dummyjson.com/product-images/20/4.jpg",
        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
      ]
    },
    {
      "id": 21,
      "title": "- Daal Masoor 500 grams",
      "description": "Fine quality Branded Product Keep in a cool and dry place",
      "price": 20,
      "discountPercentage": 4.81,
      "rating": 4.44,
      "stock": 133,
      "brand": "Saaf & Khaas",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
      "images": [
        "https://cdn.dummyjson.com/product-images/21/1.png",
        "https://cdn.dummyjson.com/product-images/21/2.jpg",
        "https://cdn.dummyjson.com/product-images/21/3.jpg"
      ]
    },
    {
      "id": 22,
      "title": "Elbow Macaroni - 400 gm",
      "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      "price": 14,
      "discountPercentage": 15.58,
      "rating": 4.57,
      "stock": 146,
      "brand": "Bake Parlor Big",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/22/1.jpg",
        "https://cdn.dummyjson.com/product-images/22/2.jpg",
        "https://cdn.dummyjson.com/product-images/22/3.jpg"
      ]
    },
    {
      "id": 23,
      "title": "Orange Essence Food Flavou",
      "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      "price": 14,
      "discountPercentage": 8.04,
      "rating": 4.85,
      "stock": 26,
      "brand": "Baking Food Items",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/23/1.jpg",
        "https://cdn.dummyjson.com/product-images/23/2.jpg",
        "https://cdn.dummyjson.com/product-images/23/3.jpg",
        "https://cdn.dummyjson.com/product-images/23/4.jpg",
        "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
      ]
    },
    {
      "id": 24,
      "title": "cereals muesli fruit nuts",
      "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      "price": 46,
      "discountPercentage": 16.8,
      "rating": 4.94,
      "stock": 113,
      "brand": "fauji",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/24/1.jpg",
        "https://cdn.dummyjson.com/product-images/24/2.jpg",
        "https://cdn.dummyjson.com/product-images/24/3.jpg",
        "https://cdn.dummyjson.com/product-images/24/4.jpg",
        "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
      ]
    },
    {
      "id": 25,
      "title": "Gulab Powder 50 Gram",
      "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      "price": 70,
      "discountPercentage": 13.58,
      "rating": 4.87,
      "stock": 47,
      "brand": "Dry Rose",
      "category": "groceries",
      "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/25/1.png",
        "https://cdn.dummyjson.com/product-images/25/2.jpg",
        "https://cdn.dummyjson.com/product-images/25/3.png",
        "https://cdn.dummyjson.com/product-images/25/4.jpg",
        "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
      ]
    },
    {
      "id": 26,
      "title": "Plant Hanger For Home",
      "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      "price": 41,
      "discountPercentage": 17.86,
      "rating": 4.08,
      "stock": 131,
      "brand": "Boho Decor",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/26/1.jpg",
        "https://cdn.dummyjson.com/product-images/26/2.jpg",
        "https://cdn.dummyjson.com/product-images/26/3.jpg",
        "https://cdn.dummyjson.com/product-images/26/4.jpg",
        "https://cdn.dummyjson.com/product-images/26/5.jpg",
        "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
      ]
    },
    {
      "id": 27,
      "title": "Flying Wooden Bird",
      "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      "price": 51,
      "discountPercentage": 15.58,
      "rating": 4.41,
      "stock": 17,
      "brand": "Flying Wooden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/27/1.jpg",
        "https://cdn.dummyjson.com/product-images/27/2.jpg",
        "https://cdn.dummyjson.com/product-images/27/3.jpg",
        "https://cdn.dummyjson.com/product-images/27/4.jpg",
        "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
      ]
    },
    {
      "id": 28,
      "title": "3D Embellishment Art Lamp",
      "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      "price": 20,
      "discountPercentage": 16.49,
      "rating": 4.82,
      "stock": 54,
      "brand": "LED Lights",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/28/1.jpg",
        "https://cdn.dummyjson.com/product-images/28/2.jpg",
        "https://cdn.dummyjson.com/product-images/28/3.png",
        "https://cdn.dummyjson.com/product-images/28/4.jpg",
        "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
      ]
    },
    {
      "id": 29,
      "title": "Handcraft Chinese style",
      "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      "price": 60,
      "discountPercentage": 15.34,
      "rating": 4.44,
      "stock": 7,
      "brand": "luxury palace",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/29/1.jpg",
        "https://cdn.dummyjson.com/product-images/29/2.jpg",
        "https://cdn.dummyjson.com/product-images/29/3.webp",
        "https://cdn.dummyjson.com/product-images/29/4.webp",
        "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
      ]
    },
    {
      "id": 30,
      "title": "Key Holder",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      "price": 30,
      "discountPercentage": 2.92,
      "rating": 4.92,
      "stock": 54,
      "brand": "Golden",
      "category": "home-decoration",
      "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/30/1.jpg",
        "https://cdn.dummyjson.com/product-images/30/2.jpg",
        "https://cdn.dummyjson.com/product-images/30/3.jpg",
        "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
      ]
    }
]

//creating div for that products

// displaying one product detail

//{
//    "id": 1,
//    "title": "iPhone 9",
//    "description": "An apple mobile which is nothing like apple",
//    "price": 549,
//    "discountPercentage": 12.96,
//    "rating": 4.69,
//    "stock": 94,
//    "brand": "Apple",
//    "category": "smartphones",
//    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//    "images": [
//      "https://cdn.dummyjson.com/product-images/1/1.jpg",
//      "https://cdn.dummyjson.com/product-images/1/2.jpg",
//      "https://cdn.dummyjson.com/product-images/1/3.jpg",
//      "https://cdn.dummyjson.com/product-images/1/4.jpg",
//      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//    ]
////  }
//
//let divp=document.createElement("div") //create a divp div
//divp.setAttribute("class","products")
//
//let cdwrpr=document.createElement("div") //another div cw 
//cdwrpr.setAttribute("class","card-wrapper")
//
//divp.appendChild(cdwrpr);//div cw inside the divp
//
//let im=document.createElement("img") //img
//im.setAttribute("src","https://cdn.dummyjson.com/product-images/1/1.jpg")
//im.setAttribute("class","product-image")
//cdwrpr.appendChild(im); //img inside the cw
//
//let cnt=document.createElement("div"); // content div
//cnt.setAttribute("class","content");
//cdwrpr.appendChild(cnt); //cnt inside the cw
//
//let cnt_details=[]
//
//let pname=document.createElement("h2")
//pname.setAttribute("class","pname")
//pname.innerText="iPhone"
//cnt_details.push(pname)
//
//let pdesc=document.createElement("p")
//pdesc.setAttribute("class","pdesc")
//pdesc.innerText="An apple mobile which is nothing like apple";
//cnt_details.push(pdesc)
//
//
//let pprice=document.createElement("p")
//pprice.setAttribute("class","pprice")
//pprice.innerText="549";
//cnt_details.push(pprice)
//
//let dprice=document.createElement("p")
//dprice.setAttribute("class","dprice")
//dprice.innerText="%12.96"
//cnt_details.push(dprice);
//
//cnt.append(...cnt_details)
//
//document.body.append(divp)


// using foe each to access all images



let pro=document.createElement("div")
pro.setAttribute("class","products")



products_details.forEach((e)=>{

    //create a wrapper div
    let cw1=document.createElement("div")
    cw1.setAttribute("class","card-wrapper");

    //create a product image
    let image=document.createElement("img");
    image.setAttribute("class","product-image");
    image.setAttribute("src",e.thumbnail)
    image.setAttribute("alt",e.title)

    //create a product content

    let pcontent=document.createElement("div")
    pcontent.setAttribute("class","content")

    //create a product name
    let ptitle=document.createElement("h2")
    ptitle.setAttribute("class","pname");
    ptitle.innerText=e.title;

    //create product description
    let prdesc=document.createElement("p");
    prdesc.setAttribute("class","prdesc")
    prdesc.innerText=e.description;

    //create a product price
    let prprice=document.createElement("p");
    prprice.setAttribute("class","pprice")
    prprice.innerHTML=`<s> ${e.price} </s> <b> $ ${(e.price)-(e.price * e.discountPercentage /100).toFixed()}</b>`

    //create a product discount price
    let dsprice=document.createElement("p");
    dsprice.setAttribute("class","dprice");
    dsprice.innerText=e.discountPercentage

    //create add to cart button
    let bt=document.createElement("button");
    bt.setAttribute("class","bt")
    bt.innerText="Add to cart"

    pcontent.append(ptitle,prdesc,prprice,dsprice,bt)

    cw1.append(image,pcontent)

    bt.addEventListener("click",()=>{
        alert(`product ${e.title} added to cart`);
    })
    pro.appendChild(cw1)
    document.body.append(pro)


})


/// another way of manipulation 


let ah=document.createElement("h1")
ah.innerText="another products"
ah.setAttribute("style","background-color:green;color:yellow;text-align:center")

document.body.append(ah)

// looping 

let prode=document.createElement("div");
prode.setAttribute("class","products")

function addTocart(title){
    alert(`product ${title} added to cart`)
}

products_details.forEach((e,i)=>{

    let wrapper=document.createElement("div");
    wrapper.setAttribute("class","card-wrapper")
    wrapper.innerHTML=`
        <img src="${e.thumbnail}" alt="${e.title}" class="product-image"></div>
        <div class="content">
            <h2 class="pname">${e.title}</h2>
            <p class="pdesc">${e.description}</p>
            <p class="pprice">${e.price}</p>
            <p class="dprice">${e.discountPercentage}</p>
            <button class="bt" id="btn-${i}">Add to Cart</button>
        </div>
</div>`

prode.appendChild(wrapper)
document.body.append(prode)

})







