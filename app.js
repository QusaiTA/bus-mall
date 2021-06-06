'use strict';

//geting images by id's ..
let handler = document.getElementById('container')
let leftImgElement = document.getElementById('leftImg');
let middleImgElement = document.getElementById('middleImg');
let rightImgElement = document.getElementById('rightImg');


let maxAttempts=25;
let userAttemptsCounter=0;

// declare random images index ..

let leftImgIndex;
let middleImgIndex;
let rightImgIndex;

//create function constructer 

function products (name,source){
    this.name = name;
    this.source = source;
    this.timesShown = 0;
    this.votes = 0;

    products.allProducts.push(this);

}

products.allProducts = [];

new products('bag','img/bag.jpg');
new products('banana','img/banana.jpg');
new products('bathroom','img/bathroom.jpg');
new products('boots','img/boots.jpg');
new products('breakfast','img/breakfast.jpg');
new products('bubblegum','img/bubblegum.jpg');
new products('chair','img/chair.jpg');
new products('cthulhu','img/cthulhu.jpg');
new products('dog-duck','img/dog-duck.jpg');
new products('dragon','img/dragon.jpg');
new products('pen','img/pen.jpg');
new products('pet-sweep','img/pet-sweep.jpg');
new products('scissors','img/scissors.jpg');
new products('shark','img/shark.jpg');
new products('sweep','img/sweep.png');
new products('tauntaun','img/tauntaun.jpg');
new products('unicorn','img/unicorn.jpg');
new products('usb','img/usb.gif');
new products('water-can','img/water-can.jpg');
new products('wine-glass','img/wine-glass.jpg');




//generating random index for all products ..

function generateRandomIndex() {
    // 0 => 19
    return Math.floor(Math.random() * products.allProducts.length); 
  }

  

  //create a render function ..

  function renderProducts(){

    leftImgIndex=generateRandomIndex();
    middleImgIndex=generateRandomIndex();
    rightImgIndex=generateRandomIndex();
     
     // comparing images index
    while( leftImgIndex === middleImgIndex || leftImgIndex === rightImgIndex || rightImgIndex == leftImgIndex || rightImgIndex == middleImgIndex || middleImgIndex == leftImgIndex || middleImgIndex == rightImgIndex){
        leftImgIndex = generateRandomIndex();
        middleImgIndex = generateRandomIndex();
        rightImgIndex = generateRandomIndex();
        }
      
    // increasing time shown
    products.allProducts[leftImgIndex].timesShown++;
    products.allProducts[middleImgIndex].timesShown++;
    products.allProducts[rightImgIndex].timesShown++; 

    // adding the image source

    leftImgElement.src = products.allProducts[leftImgIndex].source;
    middleImgElement.src = products.allProducts[middleImgIndex].source;
    rightImgElement.src = products.allProducts[rightImgIndex].source;
}
  

renderProducts();

// going throgh events ..
handler.addEventListener('click', userClicks);
function userClicks(event){
    userAttemptsCounter ++;

    if(userAttemptsCounter <= maxAttempts){

        console.log(userAttemptsCounter);
        if(event.target.id = 'leftImg'){
            products.allProducts[leftImgIndex].votes++;
        } else if( event.target.id = 'middleImg'){
            products.allProducts[middleImgIndex].votes++;
        } else {
            products.allProducts[rightImgIndex].votes++;
        }
        renderProducts();
    }
    
    else {
    handler.removeEventListener('click',userClicks);

    btn.addEventListener('click', check);
    let finalResult = document.getElementById('results');
    function check(){
           for(let i = 0 ; i < products.allProducts.length ; i++){
        let item = document.createElement('li');
        finalResult.appendChild(item);
        item.textContent = `${products.allProducts[i].name}  has - ${products.allProducts[i].votes}  votes // and   ${products.allProducts[i].timesShown} -  time shown`;
        btn.removeEventListener('click',check);
      
    }}

    }}

