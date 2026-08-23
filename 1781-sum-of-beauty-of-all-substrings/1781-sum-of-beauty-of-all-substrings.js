/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let ans = 0;

    for(let i = 0; i < s.length; i++){
        let map = {};
        for(let j = i; j < s.length; j++){
            if(!map[s[j]]){
                map[s[j]] = 1;
            }else{
                map[s[j]]++;
            }
            ans += getBeauty(map);
        }
    }
    return ans;
};

function getBeauty(map) {
    let max = 0;
    let min = Infinity;
    let keys = Object.keys(map);

    for(let i = 0; i < keys.length; i++) {
        max = Math.max(max, map[keys[i]]);
        min = Math.min(min, map[keys[i]]);
    }

    return max - min;
}