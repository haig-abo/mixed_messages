/*let rand_string = '';*/

function message_generator () {
    const array1 = ['Today\'s forecast', 'Tomorrow morning', 'This evening', 'In the next hour', 'The skies above', 'Later this week'];
    const array2 = ['torrential glitter storms', 'partly cloudy with emotional turbulance', 'sunshine and mild existential dread', 'thunderour applause', 'acidic snowflakes', 'fog made of dad jokes'];
    const array3 = ['so pack your flip-flops and a parka', 'perfect for spontaneous interpretive dance', 'with visibility reduced by flying waffles', 'don\'t forget your inflatable dinasour suit', 'ideal weather for awkward small talk', 'with a 30% change of time travel'];

    let rand_string = '';

    const messageParts = [array1, array2, array3];

    for (let i=0; i<messageParts.length; i++){
        rand_string += messageParts[i][Math.floor(Math.random() * messageParts[i].length)] + ' '
    }
    
    return rand_string.trim();
};


console.log (message_generator());