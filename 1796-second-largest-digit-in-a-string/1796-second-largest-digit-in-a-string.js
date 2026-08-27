/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;

    for(let i = 0; i < s.length; i++){
        if(s[i] >= "0" && s[i] <= "9"){
            let num = Number(s[i]);
            if(num > largest){
                secondLargest = largest;
                largest = num;
            }else if(num > secondLargest && num < largest){
                secondLargest = num;
            }
        }
    }
    return secondLargest;
};