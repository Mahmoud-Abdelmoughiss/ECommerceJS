// set page name on the logo
document.getElementById('pageLogo').innerHTML = "New Arrival";

//---------------------------- lists for holding data--------------
var productImages = [
    '../images/group01/pair-of-pants01.png',
    '../images/group01/pair-of-pants02.png',
    '../images/group01/pair-of-pants03.png',
    '../images/group01/pair-of-pants04.png',
    '../images/group01/pair-of-pants05.png',
    '../images/group01/pair-of-pants06.png',
    '../images/group01/pair-of-pants07.png',
    '../images/group01/pair-of-pants08.png',
    '../images/group01/pair-of-pants09.png',
    '../images/group01/pair-of-pants10.png',
    '../images/group02/kid01.png',
    '../images/group02/kid02.png',
    '../images/group02/kid03.png',
    '../images/group02/kid04.png',
    '../images/group02/kid05.png',
    '../images/group02/kid06.png',
    '../images/group02/kid07.png',
    '../images/group02/kid08.png',
    '../images/group02/kid09.png',
    '../images/group02/kid10.png',
    '../images/group03/t-shirt01.jpg',
    '../images/group03/t-shirt02.jpg',
    '../images/group03/t-shirt03.jpg',
    '../images/group03/t-shirt04.jpg',
    '../images/group03/t-shirt05.jpg',
    '../images/group03/t-shirt06.jpg',
    '../images/group03/t-shirt07.jpg',
    '../images/group03/t-shirt08.jpg',
    '../images/group03/t-shirt09.jpg',
    '../images/group03/t-shirt10.jpg',
    '../images/group04/ice-cap01.png',
    '../images/group04/ice-cap02.png',
    '../images/group04/ice-cap03.png',
    '../images/group04/ice-cap04.png',
    '../images/group04/ice-cap05.png',
    '../images/group04/ice-cap06.png',
    '../images/group04/ice-cap07.png',
    '../images/group04/ice-cap08.png',
    '../images/group04/ice-cap09.png',
    '../images/group04/ice-cap10.png',
    '../images/group05/shoes01.jpg',
    '../images/group05/shoes02.jpg',
    '../images/group05/shoes03.jpg',
    '../images/group05/shoes04.jpg',
    '../images/group05/shoes05.jpg',
    '../images/group05/shoes06.jpg',
    '../images/group05/shoes07.jpg',
    '../images/group05/shoes08.jpg',
    '../images/group05/shoes09.jpg',
    '../images/group05/shoes10.jpg',
    '../images/group06/glasses001.jpg',
    '../images/group06/glasses002.jpg',
    '../images/group06/glasses003.jpg',
    '../images/group06/glasses004.jpg',
    '../images/group06/glasses005.jpg',
    '../images/group06/glasses006.jpg',
    '../images/group06/glasses007.jpg',
    '../images/group06/glasses008.jpg',
    '../images/group06/glasses009.jpg',
    '../images/group06/glasses010.jpg',
];
var productName = [
    'Comfy Pencil Pants - X-Large',
    'Andora Mens Straight-Leg Side Pocket Rolled-Up',
    'Andora Men burgundy Trousers',
    'Andora',
    'Andora mens Gabardine Casual Pants',
    'Andora-Comfy Olive',
    'Andora-Slim Fit Dark',
    'Coup - Jogger Solid Mid-Rise Pants with Pockets For Men',
    'Andora mens Regular Fit Plain Button Closure Pants',
    'Coup - Jogger Solid Mid-Rise Pants with Pockets',
    'FRILL TIER KNITTED PLAYSUIT',
    'CHERRY BLOSSOM PLAYSUIT',
    'KNITTED FRONT POCKET ROMPER - BLACK',
    'KNITTED FRONT POCKET ROMPER - BLUSH',
    'KNITTED FRONT POCKET ROMPER - GREEN',
    'POLKA DOTS BLOUSE',
    'FLOUNCE TRIMMED SHIRT',
    'EMBROIDERED COTTON JERSEY DRESS - WHITE',
    'EMBROIDERED COTTON JERSEY DRESS - BLUSH',
    'LONG SLEEVE TOP - LILAC',
    'Groowii Sweatshirt Round for Unisex',
    'Groowii High Neck Pullover Top For Unisex',
    'High Neck Pullover Top For Unisex',
    'CAESAR mens Wool Pullover With High Neck Anorak',
    'Round Sweatshirt with Long sleeves from Groowii',
    'Andora Ribbed V-neck & Cuffs Knitted Sweater',
    'Andora Mens Ribbed V-neck and Cuffs Knitted Sweater Modern Pullover Tops, Color',
    'Andora mens 32W22M4519',
    'Magma Basic Contrast Chest Logo Print Short Sleeves Round Neck Sports T-Shirt for Men',
    'Hero Basic Round-Neck Short-Sleeve Solid T-shirt for Men',
    'Ny Sports Cap, Snapback Hat For Men And Women White',
    'Baseball Cap Black',
    'LIGHTWEIGHT METAL BADGE BASEBALL CAP',
    'Activ Baseball And Snapback Hat For Men',
    'Summer Baseball and Snapback Cap',
    'Acme Approved Tactical Multicam, Basebal Caps, Tactical Army Hats Head Caps for Men Outdoor Apparel',
    'Ny Baseball & Snapback Hat For Unisex',
    'Dark Blue NY New York Yankees Baseball Cap',
    'SPORTS CAP FOR MEN, BURGUNDY RED',
    'SPORTS CAP FOR MEN, DARK GREY',
    'Sparx Men\'s White Sneakers',
    'Kraasa Men\'s Running Shoe',
    'Campus Men\'s OXYFIT (N) BLK/D.Gry Casual Shoes ',
    'ASIAN Men\'s Century-04 Back Running,Walking,Sports Shoes UK-6 Black',
    'Bourge Men\'s Loire-z-130 Running Shoes, Black and Red',
    'Puma',
    'PUMA Unisex Adult BMW M Motorsport Drift Cat 8 Shoes White Sneaker',
    'Puma Unisex\'s Match Star Perf White Team Gold SHOES-8UK',
    'Puma Unisex-Adult Rs-z Shoe',
    'Bacca Bucci¬ Men\'s Energy Afterburn Disruptor for Multiple Sports,Fashion, Party & Fun Shoes',
    'Aviator sunglasses',
    'Browline glasses',
    'Bug-eye glasses',
    'Cat eye glasses',
    'GI glasses',
    'Goggles',
    'Horn-rimmed glasses',
    'Lensless glasses',
    'Police OPT, square, reading glasses, for men, VPL953-0722, multicolor',
    'Royal Son UV Protected Aviator Unisex Sunglasses',
];
var productPrice = [
    1390,
    2930,
    1190,
    2999,
    2399,
    1245,
    3120,
    2170,
    2290,
    1999,
    370,
    280,
    410,
    199,
    290,
    230,
    320,
    310,
    250,
    310,
    205,
    89,
    190,
    210,
    167,
    120,
    132,
    155,
    190,
    200,
    44,
    60,
    100,
    89,
    75,
    45,
    70,
    99,
    200,
    120,
    400,
    550,
    1290,
    4010,
    3240,
    2310,
    2999,
    3999,
    5210,
    920,
    170,
    290,
    330,
    299,
    550,
    1110,
    230,
    490,
    520,
    700
];
var categories = [
    'Pair Of Pans For Men',
    'Kids Clothes',
    'T-Shirt For Men',
    'Ice-Cap Casual',
    'Shoes For Men',
    'Glasses'
];

// -------------------filling the data in corresponding places-------------------------
//*********************** */ when strart as default or when refresh the page ----------------------

//hide 32 product item
for(var i = 0 ;i<32; i++){
    document.getElementsByClassName('productItemMultiCategories')[i].style.display = 'none';
   }
//get random 32 product from all categories
var randomList = [];

for(var i = 0 ;i<20; i++){
    document.getElementsByClassName('productItemMultiCategories')[i].style.display = 'block';
    var r = Math.floor(Math.random()*productName.length);
    randomList[randomList.length] = r;
}
   //display product item  = list.lenght
   for(var i = 0 ;i<randomList.length; i++){
    document.getElementsByClassName('productItemMultiCategories')[i].style.display = 'block';
   }
// display products in randomList
for(var i = 0 ;i<randomList.length ;i++){
    document.getElementsByClassName('imageByCats')[i].src = productImages[randomList[i]];
    document.getElementsByClassName('productNameByCats')[i].innerHTML =productName[randomList[i]];
    document.getElementsByClassName('priceByCats')[i].innerHTML = productPrice[randomList[i]]+" L.E";
}




//getProductInfo
function getProductInfo(){
    window.onclick=function(e){
        var currentProductName='';
        if(e.target.hasAttribute('src')){
            currentProductName=e.target.parentElement.nextElementSibling.innerHTML;
        }else if(e.target.getAttribute('class')=='priceByCats'){
            currentProductName=e.target.previousElementSibling.innerHTML;
        }else{
            currentProductName=e.target.innerHTML;
        }
        console.log(currentProductName);
        var index = productName.indexOf(currentProductName);
        console.log(index);
        //set values in session of current clicked element
        sessionStorage.setItem("productName",productName[index]);
        sessionStorage.setItem("productPrice",productPrice[index]);
        sessionStorage.setItem("productImage",productImages[index]);
    }
}

// shuffle function
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  for(var i = 0 ;i <5 ;i++){
      sessionStorage.setItem("item1"+i,"values"+i);
  }
  for(var i = 0 ;i <5 ;i++){
    var x = sessionStorage.getItem("item1"+i);
    console.log(x);
}
  

function getProductInfo(){
    window.onclick=function(e){
        var currentProductName='';
        if(e.target.hasAttribute('src')){
            currentProductName=e.target.parentElement.nextElementSibling.innerHTML;
        }else if(e.target.getAttribute('class')=='priceByCats'){
            currentProductName=e.target.previousElementSibling.innerHTML;
        }else{
            currentProductName=e.target.innerHTML;
        }
        console.log(currentProductName);
        var index = productName.indexOf(currentProductName);
        console.log(index);
        //set values in session of current clicked element
        localStorage.setItem("productName",productName[index]);
        localStorage.setItem("productPrice",productPrice[index]);
        localStorage.setItem("productImage",productImages[index]);
    }
} 