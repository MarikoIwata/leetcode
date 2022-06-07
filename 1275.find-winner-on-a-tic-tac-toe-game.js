/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    //if array length is less than 5 return "Pending"
    if (moves.length<5) return "Pending";
    //declare const variable aMoves assigned to empty array
    const aMoves = [];
    const aWins = {};
    //declare const variable bMoves assigned to empty array
    const bMoves = [];
    const bWins = {};
    //declare win combos
    const winCombosString = [
        ['0,0', '0,1', '0,2'],//winComboA1
        ['0,0', '1,0', '2,0'],//winComboA2
        ['0,0', '1,1', '2,2'],//winComboA3   
     
        ['2,2', '2,0', '2,1'],//winComboB1
        ['2,2', '0,2', '1,2'],//winComboB2
        
        ['1,1', '1,0', '1,2'],//winComboC1
        ['1,1', '2,0', '0,2'],//winComboC2
        ['1,1', '0,1', '2,1'],//winComboC3
     ]
    //loop through moves and push e/o el to aMoves starting with index 0
    for(let i = 0; i<moves.length; i+=2){
        aMoves.push(moves[i])
    }
    const aMovesString = aMoves.join(" ").split(" ")
    console.log("aMovesString: ", aMovesString)

    //loop through moves and push e/o el to bMoves starting with index 1
    for(let j = 1; j<moves.length; j+=2){
        bMoves.push(moves[j])
    }
    const bMovesString = bMoves.join(" ").split(" ")

    //iterate over aMovesString to see if element matches
    function matches(array, el){
        if(array.indexOf(el) !== -1) return true;
    return false
    }

    //loop over aMovesString to see if any element matches
    for(let i = 0; i<8; i++){
        for(let j = 0; j<3; j++){
            if(matches(aMovesString, winCombosString[i][j])){
                aWins.push(i)
            }
        }
    }
    //create count of values in aWins
   const aOccurances = aWins.reduce(function(acc, curr){
    return acc[curr] ? ++acc[curr] : acc[curr] = 1
   }, {});   
   //check if there are any values that are 3 in aOccurances
   const arrayOfValues = Object.values(aOccurances)
   if(arrayOfValues.indexOf(3)) return "A"
   //loop over bMovesString to see if any element matches

    //check if bWins has a sequence of 3 of the same, if so then B wins

    //if array length is less than 9 return "Pending"
    //else return "Draw"
    
};
// @lc code=end

const arr = [[0,0],[2,0],[1,1],[2,1],[2,2]]
console.log(tictactoe(arr))

//HORIZONTAL WINS
    //if element 0 same for all
//VERTICAL WINS
    //if element 1 same for all
//diagonal
    //if element 0&1 are same
    //addition of elements is 2 if 1,1 0,2 and 2,0 - no other place where elements equal 2


    //function check for winner
        //check if element 0 is same for all
        //check if element 1 is same for all
        //check if 0&1 are same
        //check if addition of each element is 2


// const arr = [
//     [arr[0][0], arr[0][1]],//player A
//     [arr[2][0], arr[2][1]],//player A
//     [arr[4][0], arr[4][1]],//player A
//     [arr[6][0], arr[6][1]],//player A
//     [arr[8][0], arr[8][1]],//player A

//     [arr[1][0], arr[1][1]],//player B
//     [arr[3][0], arr[3][1]],//player B
//     [arr[5][0], arr[5][1]],//player B
//     [arr[7][0], arr[7][1]],//player B
//     ]

const winCombos = [
   [[0,0], [0,1], [0,2]],//winComboA
   [[0,0], [1,0], [2,0]],//winComboD

   [[2,2], [2,0], [2,1]],//winComboC
   [[2,2], [0,2], [1,2]],//winComboF
   
   [[1,1], [0,0], [2,2]],//winComboG   
   [[1,1], [1,0], [1,2]],//winComboB
   [[1,1], [2,0], [0,2]],//winComboH
   [[1,1], [0,1], [2,1]],//winComboE

]



