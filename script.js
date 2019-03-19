//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

  function getAuthorAndYearString(a,b) {
    document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + a + ' in ' + b + '<br>';
  }
  getAuthorAndYearString(speechesArray[0].author, speechesArray[0].year);


  function displayBCEString(x) {
    x = speechesArray[0].yearIsBCE;

    if( x === true) {
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place before the common era.<br>';
    }
    if( x === false){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place during the common era.<br>';
    }
}
  displayBCEString();



  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  function getOldestOrYoungestString(a) {
    a = speechesArray[0].year;

    if(a === oldest){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This is the oldest speech on the page.<br>';
    }
    if(a === newest){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This is the most recent speech on the page.<br>';
    }
  }
  getOldestOrYoungestString();

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  function getAuthorAndYearString(a,b) {
    document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + a + ' in ' + b + '<br>';
  }
  getAuthorAndYearString(speechesArray[1].author, speechesArray[1].year);


  function displayBCEString(x) {
    x = speechesArray[1].yearIsBCE;

    if( x === true) {
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place before the common era.<br>';
    }
    if( x === false){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place during the common era.<br>';
    }
}
  displayBCEString();


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  function getOldestOrYoungestString(a) {
    a = speechesArray[1].year;

    if(a === oldest){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This is the oldest speech on the page.<br>';
    }
    if(a === newest){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This is the most recent speech on the page.<br>';
    }
  }
  getOldestOrYoungestString();
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  function getAuthorAndYearString(a,b) {
    document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + a + ' in ' + b + '<br>';
  }
  getAuthorAndYearString(speechesArray[2].author, speechesArray[2].year);


  function displayBCEString(x) {
    x = speechesArray[2].yearIsBCE;

    if( x === true) {
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place before the common era.<br>';
    }
    if( x === false){
      return document.getElementById('ConsoleDisplay').innerHTML = 'This speech took place during the common era.<br>';
    }
}
  displayBCEString();


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  function getOldestOrYoungestString(a) {
    a = speechesArray[2].year;

    if(a === oldest){
      return document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
    }
    if(a === newest){
      return document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
    }
  }
  getOldestOrYoungestString();
});
