/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let ans  = [];

    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "C"){
            ans.pop();
        }else if(operations[i] === "D"){
            ans.push(ans[ans.length -  1] * 2);
        }else if(operations[i] === "+"){
            let a = ans[ans.length - 1];
            let b = ans[ans.length - 2];
            ans.push(a+b);
        }else{
            ans.push(Number(operations[i]));
        }
    }

    let ans2 = 0;
    for(let i = 0; i < ans.length; i++){
        ans2 += ans[i];
    }
    return ans2;
};