
const usedNums = [];

let limit = 5;

$(() => {
	const $button = $('button');
  $button.on('click' , randomUnique);

})


const randomUnique = function (){
  let inputLength = $('input').val().length;
  let inputValue = parseInt($('input').val())
  limit = inputValue;
  let num = Math.floor( Math.random() * (limit ) ) + 1;
  let unique = usedNums.every( ( checkNum )=> {
    return num !== checkNum;
  });
  if ( unique ) {
    usedNums.push( num )
    usedNums.sort(( a ,b )=>{
        return a - b;
    })
    listRandomUniques();
    numFullLength = numPadding ( num, inputLength);
    showNewNum( numFullLength )
  } else {
    if ( usedNums.length < limit  ){
      randomUnique();
    } else if (usedNums.length === limit  ) {
      const $ul = $( 'ul' );
      console.log($ul);
      const $li = $('<li>');
      $li.text ('all numbers used').css ('color', 'orange');
      $ul.prepend($li);
    } else {
      console.log('it is finished');
    }
  }
}

const showNewNum = function ( theNum ){
  const $showNum = $('.show-number');
  const $h4 = $('h4');
  $h4.text( theNum );

}

const listRandomUniques = function () {
  const $ul = $( 'ul' );
  $ul.empty();
  usedNums.forEach ( ( n ) => {
    const $li = $( '<li>' );
    $li.text( n );
    $ul.append($li);
  })
}

const numPadding = function ( n , l ) {
  let nToString = n.toString();
  let numPadded = nToString;


  while ( nToString.length < l ){
    nToArray = nToString.split('');
    nToArray.unshift('0');
    nToString = nToArray.join('');
    numPadded = nToString;

  }

  return numPadded;
}
