$(()=>{

//jQuery Selectors
  const $body       = $( 'body' );
  const $h1         = $( 'h1' );
  const $h2         = $( 'h2' );
  const $loseIt     = $( '.lose-it' );
  const $loseScreen = $( '.lose' );
  const $newh1      = $( '<h1>' );
  const $newh2      = $( '<h2>' );
  const $welcome    = $( '.welcome' );
  const $winIt      = $( '.win-it' );
  const $winScreen  = $( '.win' );

  //fade out welcome modal on click
  $welcome.on('click', () => {
    $welcome.fadeOut( 'slow' );
  });

  //check play on clicking `lose it` button
  $loseIt.on('click', () => {
    checkPlay( 'lose' );
  });

  //check play on clicking `win it` button
  $winIt.on('click', () => {
    checkPlay( 'win' );
  });

  //fade out lose modal on click
  $loseScreen.on('click', () => {
    resetPlay();
    $loseScreen.fadeOut( 'slow' );
  });

  //fade out win modal on click
  $winScreen.on('click', () => {
    resetPlay();
    $winScreen.fadeOut( 'slow' );
  });



  //check which button was clicked and display correct modal
  const checkPlay = ( choice ) => {

    if ( choice === 'win' ){
      //show win screen
      $winScreen.fadeIn( 'slow' );
      //display correct message
      displayMessage ( choice );
    } else if (choice === 'lose' ){
      //show lose screen
      $loseScreen.fadeIn ( 'slow' );
      //display correct message
      displayMessage ( choice );
    } else {
      //catchall for weirdness
      console.log( 'Something has gone horribly wrong' );
    }
  }

  //resets the view for new round
  const resetPlay = () => {
    $newh2.remove()
    $newh1.text("Best Game Ever!");
    $body.prepend( $newh1 );
  }

  //swaps game title for appropriate message
  const displayMessage = ( choice ) => {
    
    let message = '';

    if ( choice === 'win'){
      message = "Hero! Champion! Click image to play again!";
    } else if ( choice ==='lose' ){
      message = "What Happened? So Unfair! Click image to try again";
    } else {
      message = "Error error error!"
    }

    $h1.remove();
    $newh2.text( message ).css('color', 'white').css( 'text-shadow', '2px 2px 4px black' );
    $body.prepend( $newh2 );
  }


});
