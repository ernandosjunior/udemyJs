let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

/* TODO 
** variable varA to point variable varB
** variable varB to point variable varC
** variable varC to point variable varA
*/

/*my soluction
const temp = varA
varA = varB;
varB = varC;
varC = temp;
*/
//Teacher soluction
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)

