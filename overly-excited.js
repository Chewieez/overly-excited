// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let aBetterSentence = ["The", "math", "in", "this", "function", "was", "tough", "to", "think", "through", "and", "figure", "out."]


/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/

addExcitement = (theWordArray, characterString) => {
    let completeSentence = ""; 
    //loops through the array and concatinates each word
    for (var i = 0; i < theWordArray.length; i++) {
        completeSentence += theWordArray[i];
        // checks for every 3rd word
            if ((i+1) % 3 === 0) {
                // determines what multiple of 3 the current words sits in the sentence
                let numberOfWords = (i+1) / 3;
                // repeats the characterString by the multiple of 3
                completeSentence += characterString.repeat(numberOfWords); 
            }
    
// adds a space at the end of each word (and after the characterString)
        completeSentence += " ";
// prints out the current complete sentence for each place in the for loop
        console.log(completeSentence);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?");
addExcitement(aBetterSentence, "^");






//  Old method using original function structure
/*
function addExcitement (theWordArray, characterString) {
    let completeSentence = ""; 
    //loops through the array and concatinates each word
    for (var i = 0; i < theWordArray.length; i++) {
        completeSentence += theWordArray[i];
        // checks for every 3rd word
            if ((i+1) % 3 === 0) {
                // determines what multiple of 3 the current words sits in the sentence
                let numberOfWords = (i+1) / 3;
                // repeats the characterString by the multiple of 3
                completeSentence += characterString.repeat(numberOfWords); 
            }
    
// adds a space at the end of each word (and after the characterString)
        completeSentence += " ";
// prints out the current complete sentence for each place in the for loop
        console.log(completeSentence);
    }
}
*/