/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    if(x < 0) return false;

    let i = 0;
    let j = x.length - 1;

    for(let i = 0; i < x.length; i++){
        while(i < j){
            if(x[i] === x[j]){
                i++;
                j--;
            }else{
                return false;
            }
        }
    }
    return true;
};