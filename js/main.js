//section 4 | branch: arrays
var iceCream = [ 'strawberry', 'chocolate', 'coconut' ];
iceCream = 'pecan';

//section 5 | branch: presidents
var presidentOne = {
    firstName: 'Barack',
    lastName:'Obama',
    termLength: 2,
    party: 'Democratic',
    yearsOfPresidency: 8
};

var presidentTwo = {
    firstName: 'George',
    lastName:'Bush',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var presidentThree = {
    firstName: 'Bill',
    lastName:'Clinton',
    termLength: 2,
    party: 'Democratic',
    yearsOfPresidency: 8
};

var presidentFour = {
    firstName: 'George',
    lastName:'Bush',
    termLength: 1,
    party: 'Republican',
    yearsOfPresidency: 4
};

var presidentFive = {
    firstName: 'Ronald',
    lastName:'Reagan',
    termLength: 2,
    party: 'Republican',
    yearsOfPresidency: 8
};

var presidents = [ presidentOne, presidentTwo, presidentThree, presidentFour, presidentFive ];

console.log( presidents[ 2 ].firstName + ' ' + presidents[ 2 ].lastName );

//section 6 | branch: functions
function howdy() {
    console.log( 'Hi there! My name is Claudia De Leon' );
}

howdy();

var numba = function meassure( string ) {
    if ( string.length < 7 ) {
        console.log( 'What a short little word!' );
    } else if ( string.length > 7 ) {
        console.log( 'I’m sorry, but that’s too many to count.' );
    } else {
        console.log( '7, what a perfect choice!' );
    }
};

numba( '7' );
numba( 'seventy' );
numba( 'university' );

function inception ( callback, value ) {
    callback( value );
}

function callback( value ) {
    console.log( value + ' is a fantastic movie!' );
}

inception( callback, 'Finding Nemo' );
