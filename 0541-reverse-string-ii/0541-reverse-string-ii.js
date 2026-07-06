/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");

    for(let x = 0 ; x < s.length; x += 2 * k){
       let i = x;
       let j = Math.min(x+k-1, s.length-1);

       while(i < j){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
       }
    }

    return s.join("");
};