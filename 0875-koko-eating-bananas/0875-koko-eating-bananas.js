/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let i = 1;
    let j = Math.max(...piles);
    let res = j;

    while(i <= j){
        let mid = Math.floor((i + j)/2);

        let hour = 0;
        for(let p of piles){
            hour += Math.ceil(p / mid);
        }

        if( hour <= h){
            res = mid;
            j = mid - 1;
        }else{
            i = mid + 1;
        }
    }
    return res;
};