/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let j = 0;

    let ans = [];

    for(let x = 0; x < Math.max(word1.length, word2.length); x++){
        if(i < word1.length) ans.push(word1[i]);
        if(j < word2.length) ans.push(word2[j]);
        i++;
        j++;
    }

    return ans.join("");
};