/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    while(i < j){
        if(!check(s[j])){
           j--;
        }else if(!check(s[i])){
           i++;
        }else if(s[i] === s[j]){
            i++;j--;
        }else{
            return false;
        }
    }
    return true;
};

function check(val){
    return(
        (val >= "a" && val <= "z") ||
        (val >= "0" && val <= "9")
    )
}