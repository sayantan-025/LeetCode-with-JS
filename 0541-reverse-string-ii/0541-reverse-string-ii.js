/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");

    for(let i = 0; i < s.length; i += 2 * k){
        let x = i;
        let z = Math.min(i+k-1, s.length - 1);
        while(x < z){
            let temp = s[x];
            s[x] = s[z];
            s[z] = temp;
            x++;
            z--;
        }
    }

    return s.join("");
};