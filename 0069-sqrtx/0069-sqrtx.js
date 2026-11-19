/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;

    let left = 0;
    let right = Math.floor(x/2);

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        let squar = mid * mid;

        if(squar === x){
            return mid;
        }else if(squar < x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return right;
};