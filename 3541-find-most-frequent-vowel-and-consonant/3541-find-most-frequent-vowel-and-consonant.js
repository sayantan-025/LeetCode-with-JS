/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};

    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }

    let vowels = ["a" , "e", "i", "o", "u"];
    let max_vowels = 0;
    let max_cons = 0;

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            max_vowels = Math.max(max_vowels, map[s[i]]);
        }else{
            max_cons = Math.max(max_cons, map[s[i]]);
        }
    }
    return max_vowels + max_cons;
};