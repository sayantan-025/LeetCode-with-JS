/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let n = position.length;
    let stack = [];
    let cars = [];

    for(let i = 0; i < n; i++){
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }

    cars.sort((a,b) => a[0] - b[0]);

    for (const [p, time] of cars){
        while(stack.length > 0 && time >= stack[stack.length - 1]){
            stack.pop();
        }
        stack.push(time);
    }
    return stack.length;
};