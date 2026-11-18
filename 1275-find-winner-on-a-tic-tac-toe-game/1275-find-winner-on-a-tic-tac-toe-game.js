/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let a = Array(8).fill(0);
    let b = Array(8).fill(0);

    for(let i = 0; i < moves.length; i++){
        let [r,c] = moves[i];

        let player = i % 2 === 0 ? a : b;

        player[r]++;
        player[c + 3]++;

        if(r === c) player[6]++;
        if(r + c === 2) player[7]++;

        if(player.includes(3)){
            return (i % 2 === 0) ? "A" : "B";
        }
    }
    return moves.length === 9 ? "Draw" : "Pending";
};