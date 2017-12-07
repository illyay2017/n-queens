/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  //i; n = size of board x n= rooks
  //O; matrix of arrays of array
  // start with begining of board at 0,0
  // console.log(solution.attributes[0]);
  startColIdx = 0;
  startRowIdx = 0;
  
  
  for (var rowIndexToToggle = 0; rowIndexToToggle < n; rowIndexToToggle++) {
    for (var colIndexToToggle = 0; colIndexToToggle < n; colIndexToToggle++) {
      solution.togglePiece(rowIndexToToggle, colIndexToToggle);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(rowIndexToToggle, colIndexToToggle); 
      }
    }
  }
  console.log(solution);
  
  // var rookSolverAt = function(rowIdx, colIdx, boardToTry) {
  //   if (rowIdx === undefined) {
  //     rowIdx = 0;
  //   }
  //   if (colIdx === undefined) {
  //     colIdx = 0;
  //   }
  //   boardToTry.togglePiece(0, 0);
  //   // toggle current piece
  //   // (current piece index = rowIdx, colIdx++)
  //   // UNTIL rowIdx = n - 1
  //   //     WHILE colIdx <= n - 1
  //   //         toggle next piece, hasAnyRooksConflicts();
  //   //           IF board has conflicts
  //   //             untoggle current piece
  //   //             colIdx++
  //   //           ELSE
  //   //             colIdx++
  //   //       colIdx = 0;
  //   //       rowIdx++;
  // };
  // console.log(boardToTry);

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
