/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ans  = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            ans.push(")");
        }else if(s[i] === "{"){
            ans.push("}");
        }else if(s[i] === "["){
            ans.push("]");
        }else if(ans.length === 0 || ans.pop() !== s[i]){
            return false;
        }
    }
    return ans.length === 0;
};