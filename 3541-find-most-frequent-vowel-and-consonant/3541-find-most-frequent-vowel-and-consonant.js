/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
            map[s[i]]++;
        }else{
            map[s[i]] = 1;
        }
    }

    let vowel = ["a", "e", "i", "o", "u"];
    let max_vowel = 0;
    let max_cons = 0;

    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            max_vowel = Math.max(max_vowel, map[s[i]]);
        }else{
            max_cons = Math.max(max_cons, map[s[i]]);
        }
    }
    return max_vowel + max_cons;
};