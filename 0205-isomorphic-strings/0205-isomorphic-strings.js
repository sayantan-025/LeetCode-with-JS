/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let x = {};
    let y = {};

    for(let i = 0; i < s.length; i++){
        if(s[i] !== t[i]){
            x[s[i]] = t[i];
            y[t[i]] = s[i];
        }else if(x[s[i]] !== t[i] || y[t[i]] !== s[i]){
            return false;
        }
    }
    return true;
};