/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let need = new Array(26).fill(0);
    let window = new Array(26).fill(0);

    for(let i = 0; i < s1.length; i++){
        need[s1.charCodeAt(i) - 97]++;
    }

    let left = 0;
    for(let right = 0; right < s2.length; right++){
        window[s2.charCodeAt(right) - 97]++;

        if(right - left + 1 > s1.length){
            window[s2.charCodeAt(left) - 97]--;
            left++;
        }

        if(right - left + 1 === s1.length){
            let ans = true;
            for(let i = 0; i < 26; i++){
                if(need[i] !== window[i]){
                    ans = false;
                    break;
                }
            }
            if (ans) return true;
        }
    }
    return false;
};