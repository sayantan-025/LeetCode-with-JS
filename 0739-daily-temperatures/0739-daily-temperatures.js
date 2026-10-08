/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let result = new Array(n).fill(0);
    let s = [];

    for(let i = n - 1; i >= 0; i--){
        while(s.length > 0 && temperatures[i] >= temperatures[s[s.length - 1]]){
            s.pop();
        }
        
        if(s.length > 0){
            result[i] = s[s.length - 1] - i;
        }

        s.push(i);
    }

    return result;
};