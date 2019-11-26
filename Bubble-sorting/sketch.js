
function randomI(min, max){
  return Math.round(Math.random() * max - min);// return a value between min and max 
}
// shuffle an existing array with random values with no repeatition
function shuffleArray(array){
  var tempo;
  for(var i = 0; i < array.length; i++){
    j = Math.floor(Math.random() * (i+1));
    tempo = array[i];
    array[i] = array[j];
    array[j] = tempo
  }
  return array;
}

//Sorting function
function bubbleSort(array){
  
  for(var x = 0; x < array.length; x++){
    
    var temp; // temporary variable for a value
    var freq = map(array[x], 0, 100, 0,1)
    
    if(array[x] > array[x+1]){// if the next value is lower then the actual
      fill(255,0,0);// color of the working tile
      rect(x*10, 210, 10, -array[x]*2);//draw the evaluate value 
      
      // console visualisation
      // console.log(array[x], array[x+1]);
      comparisons += 1;
      console.log("Number of comparisons : ", comparisons);
      
      temp = array[x];// keep the value to swap
      array[x] = array[x+1];// change the values of the lower 
      array[x+1] = temp; // the next tile has the value of the working tile
    }
  }
}

function verification(data){
  for(var i = 0; i < data.length; i++){
    //if(dataset[i] < data[i+1]){
      fill(255,0,0);
      rect(i*10, 210, 10, -data[i]*2);
      //}
    }
  }
  
  // ____________________________________________________________________________________________________________________________ 
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-| Program |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // -----------------------------------------------------------------------------------------------------------------------------
  var comparisons = 0;
  var dataset = [];
  
  //Button function/*
  function generateNewSet(){
    comparisons = 0;
    dataset = shuffleArray(dataset);
  }
  
  function setup() {
    //create an array of values
    for(var i = 1; i <= 100; i++){
      dataset.push(i);
    }
    //Shuffle the dataset
    dataset = shuffleArray(dataset);
    createCanvas(1000, 210);
  }
  
  function draw() {
    var arrayT = document.getElementById('arrayT');
    if(arrayT != null){
      arrayT.innerText = dataset;
    }
    
    background(50);
    fill(0,0,255)
    //Draw the tiles of each values
    for(var i = 0; i < dataset.length; i++){
      rect(i*10, 210, 10, -dataset[i]*2);
    }
    bubbleSort(dataset);
  }
