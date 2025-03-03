/**
 * 
 * @param {*} a value
 * @returns  value multiply by value
 */
let sqr = (a) =>{
    return a*a;
    }
/**
 * 
 * @param {*} x1 Horizontal position x of A in 2D space
 * @param {*} y1 Vertical position y of A in 2D space
 * @param {*} x2 Horizontal position x of B in 2D space
 * @param {*} y2 Vertical position y of B in 2D space
 * @returns  return square root
 */
let calcDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(sqr(y2 - y1) + sqr(x2 - x1));
    }

let A = [1,1];
let B = [2,2];

let result = calcDistance(A[0],A[1],B[0],B[1]);
console.log(`Le resultat de la distance est ${result}.`)
