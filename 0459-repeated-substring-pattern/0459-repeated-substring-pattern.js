/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for(let i = 1; i < s.length; i++){
        if(s[i] === s[0]){
            let sub = s.substring(0,i);

            if(s.length % sub.length === 0 && sub.repeat(s.length / sub.length) === s){
                return true;
            }
        }
    }
    return false;
};