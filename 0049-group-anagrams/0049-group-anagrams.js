/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let i = 0; i < strs.length; i++){
        let str = strs[i];
        let count = new Array(26).fill(0);

        for(let j = 0; j < str.length; j++){
            let index = str.charCodeAt(j) - 97;
            count[index]++;
        }

        let key = count.join("#");

        if(!map.has(key)){
            map.set(key, []);
        }

        map.get(key).push(str);
    }
    return Array.from(map.values());
};