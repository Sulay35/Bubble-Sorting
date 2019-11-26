function moyenne(array){
  var sum = 0;
  var len = array.length;
  for(var  i = 0; i < len; i++ ){
    sum += array[i];
  }
  var moyenne = sum/len;
  return moyenne;
}


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
      //console.log("Number of comparisons : ", comparisons);
      
      temp = array[x];// keep the value to swap
      array[x] = array[x+1];// change the values of the lower 
      array[x+1] = temp; // the next tile has the value of the working tile
    }
  }
}


function verification(array){
  var errors = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] != rightSet[i]){
      
      errors += 1; 
    }else{
      fill(0,255,0);// color of the working tile
      rect(i*10, 210, 10, -array[i]*2);

  }
  }
  if(errors == 0){
    console.log(array);
    generateNewSet();

  }
}

  // ____________________________________________________________________________________________________________________________ 
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-| Program |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // |-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
  // -----------------------------------------------------------------------------------------------------------------------------
  var comparisons = 0;
  var dataset = [];
  var rightSet = [];
  var comparisonArray = [];
  
  //Button function
  function generateNewSet(){
    comparisonArray.push(comparisons);// add comparisons value to the comparison array for the average
    comparisons = 0;// Reset the counter of comparisons
    dataset = shuffleArray(dataset);// create a new random array
  }
  
  function setup() {
    //create an array of values
    for(var i = 1; i <= 100; i++){
      dataset.push(i);
      rightSet.push(i);
    }
    //Shuffle the dataset
    dataset = shuffleArray(dataset);
    createCanvas(1000, 210);
  }
  
  function draw() {
    var averageT = document.getElementById('averageT');
    var arrayT = document.getElementById('arrayT');
    var button = document.getElementById('button');
    var comparisonsT = document.getElementById('comparisonsT');
    if(arrayT != null){
      arrayT.innerText = dataset;
      comparisonsT.innerText = comparisons;
      averageT.innerText = moyenne(comparisonArray);
      
    }
    


    background(50);
    fill(0,0,255)
    //Draw the tiles of each values
    for(var i = 0; i < dataset.length; i++){
      rect(i*10, 210, 10, -dataset[i]*2);
    }
    bubbleSort(dataset);
   
    verification(dataset)
    
}

// auto
//setInterval(generateNewSet, 3000);
