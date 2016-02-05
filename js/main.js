var iceCream = [ 'strawberry', 'chocolate', 'coconut' ];
iceCream = 'pecan';

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
