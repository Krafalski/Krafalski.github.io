/***********************************
* Words to Guess
************************************/


const words = ['intersect', 'helicopter', 'Tango', 'Wookiee', 'Sizzling Shrimp' , 'Sandworm' , ' Alma Mater' , 'The Truth', 'Imported Hard Salami' , 'Nemesis' , 'Crown Victoria' , ' Undercover' , 'Marlin' , 'Buy More' , 'Orange Orange' , 'Weinerlicious', 'Echo Park' , 'Burbank' , 'Seduction' , 'Break-up' , 'Cougars', 'Tom Sawyer', 'Fat Lady', 'Gravitron',  'Sensai' , 'DeLorean' , 'DeMorgan' , 'Santa Claus' , 'Third Dimenison' , 'The Suburbs', 'Best Friend', 'Beefcake' , 'Lethal Weapon', 'Predator' , 'Broken Heart', 'Dream Job', 'CIA' ,'FBI', 'First Kill', 'Colonel Casey', 'The Ring', 'Dont freak out', 'Fulcrum', 'Pink Slip', 'Angel de la Muerte' , 'Operation Awesome', , 'Captain Awesome' , 'Jeffster ', 'First Class', 'Nacho Sampler', 'The Mask', 'Fake name', 'The Beard', 'Final Exam', 'American Hero', 'Daniel Shaw', 'Bryce Larken', 'The Other Guy', 'The Honeymooners', 'Role Models', 'Subway', 'Living Dead', 'The Tooth', 'Anniversary' , 'Suitcase', 'Cubic Z', 'Coup dEtat', 'Couch Lock',  'Nerd Herd', 'Aisle of Terror', 'First Fight', 'Phase Three', 'The leftovers', 'Balcony', 'The Gobbler', 'Push Mix', 'Seduction Impossible', 'Cat Squad', 'Masquerade', 'First Bank of Evil', 'A-Team', 'Family Volkoff', 'Wedding Planner', 'Pinnaple', 'Agent X', 'Cliffhanger', 'Flash' , 'Zoom' , 'Computer Emergency' , 'Frosted Tips', 'Business Trip', 'The Curse', 'Bullet Train', 'versus', 'agent' , 'NSA' , 'spy' , 'mission', 'Largemart', 'Dont shoot', 'Stay in the car', 'Big Mike', 'Geneal Diane Beckman', 'Emmet' , 'Harry Tang', 'Dr. Jill Roberts', 'Hugo Panzer', 'Heather Chandler', 'Kung fu', 'Agent Carmicheal'];


/***********************************
* Keep a tally of the wrong letters
************************************/

let wrongLetters = [];

/***********************************
* will allow the play object to be global and accessable to all other functions
************************************/

let play;

/***********************************
* document on ready
************************************/
$(()=>{

  /***********************************
  * Modals
  ************************************/
  //show welcome only on page load
  $( '.welcome' ).on( 'click', () => {
    $( '.welcome' ).fadeOut( 'slow' );
  });



  /***********************************
  * event listeners on key presses
  ************************************/

  $( 'html' ).on( 'keyup' , ( e )=> {
    //capture key value
    const chosenLetter =  e.key ;
    //check for valid key input for game play
    const re = new RegExp( '[a-zA-Z]' );
    //if valid key
    if ( e.key.match( re )){

      const letterCards = $( '.card' );
      //loop through the letter cards, if there is a match, remove it
      letterCards.each( ( c )=>{
        if ( e.key === letterCards.eq( c ).text().toLowerCase()){
          letterCards.eq( c ).remove();
        }
      });

      //check if letter is a match,if there is a win or lose
      checkPlay( chosenLetter );

    } //closes if valid key, nothing happens if key is invalid
  });

//on page load:
startGame();

}); // closes window on ready


/***********************************
* these are the clickable letters
* called by startGame() which is in document.ready, will not execute until page is loaded
************************************/

const letters = () => {

  //select container to add cards
  const $letters = $( '.letters' );
  //for game reset/many rounds - remove unplayed letters
  $letters.children().remove();
  //determine number of cards already in container
  let numberOfCards = 0;

  //limit total number of cards that can be added
  while ( numberOfCards < 25 ){
    numberOfCards = $letters.children().length;
    //determine letter based on number of cards
    let letter = String.fromCharCode( 65 + numberOfCards );

    //create a card with the letter
    const $card = $( '<div>' ).addClass( 'card' ).text( letter );

    //add an event listner/handler-removes the letter when played
    $card.on( 'click', ( e ) => {
      const chosenLetter = $( e.target ).text();
      //checks for match and win/lose
      checkPlay( chosenLetter );
      //for switching between keyboard and card clicks - this keeps track for keyups
      wrongLetters.push(chosenLetter);
      //remove played card
      $( e.target ).remove();
    });

    //append the card to the container
    $letters.append( $card );
  }
}

/***********************************
* Word Class
* choose a word - chooseWord
* create letter objects - getLetters
* store letter objects - inside constructor
* checks if letter is found within word - isFound
* tests if a letter is found, assists with pushing wrong letters into wrong letter array - test
* checks for win state - isFound
* 'guesses' - wrong guesses are tracked by these stars - startStars
* render the view of the word in guessed state - render
************************************/

class Word {
  //choose a random word!
  chooseWord (){
    const word = words[ Math.floor( Math.random() * ( words.length ))];
    return word;
  }
  //store letter objects
  constructor ( letters ){
    this.letters = [];
  }
  //create letter objects from chosen word
  getLetters ( word ){
    const letterArray = word.split( '' ).map( ( l ) => {
      const letterObject =  new Letter ( l );
      return letterObject;
    });
    this.letters = letterArray;
  }
  //if letter is found set hidden to false, re-render the view
  isFound( letter ){
      this.letters.forEach( ( l ) => {
        if ( l.value.toLowerCase() === letter.toLowerCase() ){
          l.show();
        }
        this.render();
      });
  }
  //test if every is found, returns true or false
  test( letter ){
    const justLetters = this.letters.map( ( l ) => {
      return l.value;
    });
    return justLetters.some( ( l ) => {
      return l.toLowerCase() === letter.toLowerCase();
    });
  }
  //check for win - if every letter hidden value is false, it is a win
  isOver (){
    const status = this.letters.every ( ( l )=> {
      return !l.hidden;
    });
    // if every letter is not hidden - show win state
    //lose state is in
    if ( status ) {
      $( '.win' ).fadeIn( 4000 );   
      $( '.win' ).on( 'click', () => {
        $( '.win' ).fadeOut( 'slow' );
        startGame();
      });
    }
  }
  //makes stars - keeps track of number of wrong guesses
  startStars () {
    //get div that will hold stars
    const $startStarBox = $( '.remaining-stars' );
    //for game restart/reset empty any leftover stars from last round
    $startStarBox.children().remove();
    //sets stars/wrong guesses to 6 and shows stars that represent this
    for (let i = 0; i < 6; i++){
      let $starDiv = $( '<div>' ).addClass( 'star' );
      let $starImg = $( '<img>' ).attr( 'src', './images/Star.png' );
      $starDiv.append( $starImg );
      $startStarBox.append( $starDiv );
    }
  }

  //see the word in its guessed/unguessed state
  render(){
    //only valid letters
    const re = new RegExp( '[a-zA-Z]' );
    //grab container for expression to guess
    const $guessIt = $( '.guess-word' );
    //remove if game is reset/restarted
    $guessIt.children().remove();
    //build the expression
    let expression = '';
    //store the expression
    const $h2 = $( '<h2>' ).addClass( 'letter-card' );

    //loop through the letters to set the view of each one depending on guess state
    this.letters.forEach( ( l ) => {
      //always show spaces (for multiword plays)
      if (l.value === ' ') {
        expression += ' ' ;
        l.show();
        //show _ for hidden letters that are valid
      } else if ( l.hidden && l.value.match( re ) ){
        expression += '_' ;
        //always show weird characters like ? and ''
      } else if ( !l.value.match( re ) ){
        expression += l.value;
        l.show();
        //show non-hidden letters
      } else {
        expression += l.value ;
      }
      //set text of h2
      $h2.text( expression );
      //append h2 to proper div
      $guessIt.append( $h2 );

    }); //closes forEach
  }
} // closes Word Class


/***********************************
* Letter Class
* sets value and hidden property to true
* has method to change hidden property value to false
************************************/
class Letter {
  constructor ( value ){
    this.value = value;
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
};


/***********************************
* Start the game - works for initial and for play again
************************************/

//Start the game
const startGame = () => {

  //empty wrong letters
  wrongLetters = [];
  //add clickable letters
  letters();

  //set new word object
  play = new Word ();

  const getWord = play.chooseWord()
  //get a word/expression and set up letter objects
  play.getLetters( getWord );
  //first time render to display at start of game
  play.render();
  //add stars
  play.startStars();
} // closes startGame

/***********************************
* check if game is won or lost
************************************/
const checkPlay = ( chosenLetter ) => {
  //check if letter is found
  play.isFound( chosenLetter );
  //render the board after the play
  play.render();
  //determine if game is over/won
  play.isOver();
  //add wrong letter to wrongLetters array
  const pushIt = play.test( chosenLetter );
  //if letter is wrong, check for lose state
  if ( !pushIt ){
    //store wrong letters for keyup game play
    wrongLetters.push ( chosenLetter );
    // if there are no stars left - final play
    if ($( '.remaining-stars' ).children().length === 0){

        //check if win
        play.isOver();
        // remove click handler from all clickable letters
        $( '.card' ).off();
        //show the expression/word that could not be guessed
        play.letters.forEach( ( l ) => {
          l.show();
        });
      // render the view
      play.render();
      $('h2').css('opacity' ,'0.3');
      $('h2').fadeOut( 3500 );
      //fade in lose modal
      $( '.lose' ).fadeIn( 4000 );
      //start new round on modal click
      $( '.lose' ).on( 'click', () => {
        $( '.lose' ).fadeOut( 'slow' );
        startGame();
      });
    } //closes if statement - remaining star

    //remove last star after css animation
    $( '.remaining-stars' ).children().last().addClass( 'fadeOut' ).delay( 800 ).hide( 1, function () {
      $( this ).remove();
    });
  } else { // matched with pushit statement
        //check play if letter is correct
        //do not need this?
      play.isOver();
  }
} //closes checkPlay
