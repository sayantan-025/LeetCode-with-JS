/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let x = word1.length + word2.length - 1;

    let i = 0;
    let j = 0;

    let arr = [];
    
    for(let k = 0; k < x; k++){
        arr.push(word1[i]);
        arr.push(word2[j]);
        i++;
        j++;
    }
    return arr.join("");
};