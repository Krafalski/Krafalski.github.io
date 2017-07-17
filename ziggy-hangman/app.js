const words = [ 'Is there life on Mars?',
"Ashes to Ashes" , "Dust to Dust", "Bully for you Chilly for me", "Boys keep swinging", "They'll Never Clone Ya", "We are the goon squad and we're coming to town! Beep beep!", "Dance with me" , "Blue Jean" , "Rebel Rebel", "Diamond Dogs", "Golden Years", "Absolute Beginners", " Sound and Vision", "Heroes", "Scary Monsters and Super Creeps", "Suffragette City", "Space Oddity" , "The Man Who Sold the World", "Can you hear me, Major Tom?" , "Fame" , "Changes" , "Under Pressure" , "Ground Control", "Dancing in the Streets", "Modern Love", "Jump they Say"];
  const wrongLetters = [];
  let play;

$(()=>{

  $('.welcome').on('click', ()=>{
    $('.welcome').fadeOut('slow');
  });
  $('.lose').on('click', ()=> {
    $('.lose').fadeOut('slow');
    startGame();
  });
  $('.win').on('click', ()=> {
    $('.win').fadeOut('slow');
    startGame();
  });

  $('html').on('keyup', (e)=> {
    const re = new RegExp('[a-zA-Z]');
    if (e.key.match(re)){
      //loop through to remove letter cards
      const letterCards = $('.card');

      letterCards.each((c)=>{

        if (e.key === letterCards.eq(c).text().toLowerCase()){
          letterCards.eq(c).remove();
        }
      })
      const chosenLetter =  e.key ;

      play.isFound(chosenLetter);
      play.render();
      const pushIt = play.test( chosenLetter );
      if (!pushIt){
        wrongLetters.push (chosenLetter);

        if ($('.remaining-stars').children().length === 1){
          $('.card').off( );
          $('.lose').fadeIn('slow');
          return;
        }
        $('.remaining-stars').children().last().addClass('fadeOut').delay(2000).hide(1, function () {
          $(this).remove();
        });
        console.log('star falling');
        //.remove();
      } else { //do nothing
      }
      play.isOver();
      // $( e.target ).remove();

    }
  })

  const letters = () => {

    //select container to add cards
    const $letters = $( '.letters' );
    $letters.children().remove();
    //determine number of cards already in container
    let numberOfCards = 0;
    let test = 0

    //limit total number of cards that can be added
    while ( numberOfCards < 25 ){
      numberOfCards = $letters.children().length;
      //determine letter based on number of cards
      let letter = String.fromCharCode( 65 + numberOfCards );

      //create a card with the letter
      const $card = $( '<div>' ).addClass( 'card' ).text( letter );

      //add an event listner/handler that toggles the class selected for the card that is clicked
      $card.on( 'click', ( e ) => {
        const chosenLetter = $( e.target ).text();
        play.isFound(chosenLetter);
        play.render();
        play.isOver();
        const pushIt = play.test( chosenLetter );
        if (!pushIt){
          wrongLetters.push (chosenLetter);
          if ($('.remaining-stars').children().length === 0){
              $('.card').off( );
              play.letters.forEach((l)=>{
                l.show();
              });

              play.render();
              play.isOver();

            $('.lose').on('click', ()=> {
              $('.lose').fadeOut('slow');
              startGame();
            });


          }
          $('.remaining-stars').children().last().addClass('fadeOut').delay(1000).hide(1, function () {
            $(this).remove();
          });
        } else {
              play.isOver();
        }

        $( e.target ).remove();
      });

      //append the card to the container
      $letters.append( $card );
    }
  }

  const startStars = () => {
    const $startStarBox = $( '.remaining-stars' );
    $startStarBox.children().remove();
    for (let i = 0; i < 6; i++){
      let $starDiv = $('<div>').addClass('star');
      let $starImg = $('<img>').attr('src', './images/Star.png');
      $starDiv.append($starImg);
      $startStarBox.append($starDiv);
    }
  }

  const chooseWord = () => {
    const word = words[Math.floor(Math.random() * (words.length))];
    return word;
  }

  class Word {
    constructor ( letters ){
      this.letters = [];
    }
    getLetters ( word ){
      const letterArray = word.split('').map( (l) => {
        const letterObject =  new Letter (l);
        return letterObject;
      });
      this.letters = letterArray;
    }
    isFound( letter ){
        this.letters.forEach( ( l ) => {
          if (l.value.toLowerCase() === letter.toLowerCase()){
            l.show();
          }
          this.render();
        })

    }
    test( letter ){
      const justLetters = this.letters.map( (l) => {
        return l.value;
      });
      return justLetters.some( ( l ) => {
        return l.toLowerCase() === letter.toLowerCase();
      } );
      }
    isOver (){

      const status = this.letters.every ( ( l )=> {
        console.log(l);
        console.log(!l.hidden , l.value);
        return !l.hidden;
      } )
      console.log('%cstatus', 'color: green', status);
      if (status){
        $('.win').fadeIn('slow');

      }
    }

    render(){
      const re = new RegExp('[a-zA-Z]');

      const $guessIt = $('.guess-word');
      $guessIt.children().remove()
      let expression = '';
      const $h2 = $('<h2>').addClass('letter-card');
      this.letters.forEach( ( l ) => {

        if (l.value === ' ') {
          expression += ' ' ;
          l.show();
        }
        else if ( l.hidden && l.value.match(re) ){
          expression += '_' ;
        }  else if (!l.value.match(re) ){

          expression += l.value;
          l.show();
        } else        {
          expression += l.value ;
        }
        $h2.text(expression);
        $guessIt.append($h2);

      });
    }
  }

  class Letter {
    constructor ( value ){
      this.value = value;
      this.hidden = true;
    }
     show( ) {
         this.hidden = false;
       }
  };


  const displayWord = ( word ) => {
    const $wordContainer = $('.word-to-guess');

  }

const startGame = () => {

  letters();
  startStars();

  play = new Word ();
  play.getLetters(chooseWord());
  //first time render to display at start of game
  play.render();
}

startGame();






















});
