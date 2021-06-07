'use strict';

//geting images by id's ..
let handler = document.getElementById('container');
let leftImgElement = document.getElementById('leftImg');
let middleImgElement = document.getElementById('middleImg');
let rightImgElement = document.getElementById('rightImg');
let btn = document.getElementById('btn');

let maxAttempts = 25;
let userAttemptsCounter = 0;

// declare random images index ..

let leftImgIndex;
let middleImgIndex;
let rightImgIndex;

// declearing vote, shown arrays ..
let vote = [];
let shown = [];
let productsName = [];

//create function constructer

function products(name, source) {
  this.name = name;
  this.source = source;
  this.timesShown = 0;
  this.votes = 0;
  productsName.push(this.name);

  products.allProducts.push(this);

}

products.allProducts = [];

new products('bag', 'img/bag.jpg');
new products('banana', 'img/banana.jpg');
new products('bathroom', 'img/bathroom.jpg');
new products('boots', 'img/boots.jpg');
new products('breakfast', 'img/breakfast.jpg');
new products('bubblegum', 'img/bubblegum.jpg');
new products('chair', 'img/chair.jpg');
new products('cthulhu', 'img/cthulhu.jpg');
new products('dog-duck', 'img/dog-duck.jpg');
new products('dragon', 'img/dragon.jpg');
new products('pen', 'img/pen.jpg');
new products('pet-sweep', 'img/pet-sweep.jpg');
new products('scissors', 'img/scissors.jpg');
new products('shark', 'img/shark.jpg');
new products('sweep', 'img/sweep.png');
new products('tauntaun', 'img/tauntaun.jpg');
new products('unicorn', 'img/unicorn.jpg');
new products('usb', 'img/usb.gif');
new products('water-can', 'img/water-can.jpg');
new products('wine-glass', 'img/wine-glass.jpg');




//generating random index for all products ..

function generateRandomIndex() {
  // 0 => 19
  return Math.floor(Math.random() * products.allProducts.length);
}




//declear an array to stop reload the same image at next itteration ..
let stopNextItteration = [];

//create a render function ..
function renderProducts() {

  leftImgIndex = generateRandomIndex();
  middleImgIndex = generateRandomIndex();
  rightImgIndex = generateRandomIndex();








  // comparing images index and apperance in next itteration ..
  while (leftImgIndex === middleImgIndex || leftImgIndex === rightImgIndex || middleImgIndex === rightImgIndex || stopNextItteration.includes(leftImgIndex) || stopNextItteration.includes(middleImgIndex) || stopNextItteration.includes(rightImgIndex)) {
    leftImgIndex = generateRandomIndex();
    rightImgIndex = generateRandomIndex();
    middleImgIndex = generateRandomIndex();

  }
  stopNextItteration = [leftImgIndex, middleImgIndex, rightImgIndex];


  console.log(stopNextItteration);


  leftImgElement.src = products.allProducts[leftImgIndex].source;
  products.allProducts[leftImgIndex].timesShown++;


  middleImgElement.src = products.allProducts[middleImgIndex].source;
  products.allProducts[middleImgIndex].timesShown++;


  rightImgElement.src = products.allProducts[rightImgIndex].source;
  products.allProducts[rightImgIndex].timesShown++;




}



renderProducts();
function check() {


  for (let i = 0; i < products.allProducts.length; i++) {
    let finalResult = document.getElementById('results');
    let item = document.createElement('li');
    finalResult.appendChild(item);
    item.textContent = `${products.allProducts[i].name}  had - ${products.allProducts[i].votes}  votes // and  was seen ${products.allProducts[i].timesShown} -  time`;
    btn.removeEventListener('click', check);
    btn.hidden=true;

  }
}


// going throgh events ..
handler.addEventListener('click', userClicks);
function userClicks(event) {
  userAttemptsCounter++;

  if (userAttemptsCounter <= maxAttempts) {

    // console.log(userAttemptsCounter);
    if (event.target.id === 'leftImg') {
      products.allProducts[leftImgIndex].votes++;

    } else if (event.target.id === 'middleImg') {
      products.allProducts[middleImgIndex].votes++;

    } else if (event.target.id === 'rightImg') {
      products.allProducts[rightImgIndex].votes++;

    }
    else {
      alert('please click on images');
      userAttemptsCounter--;
    }

    renderProducts();

  }






  else {
    handler.removeEventListener('click', userClicks);
    btn.hidden=false;

    for (let i = 0; i < products.allProducts.length; i++) {
      vote.push(products.allProducts[i].votes);
      shown.push(products.allProducts[i].timesShown);

    }

    chart();


    btn.addEventListener('click', check);


  }
}



function chart() {
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productsName,
      datasets: [{
        label: '# of Votes',
        data: vote,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },
      {
        label: '# of Shown',
        data: shown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}

