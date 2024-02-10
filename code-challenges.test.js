// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// const fibonacciLength1 = 6
// // Expected output: [1, 1, 2, 3, 5, 8]

// const fibonacciLength2 = 10
// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// describe("fibonacciLength", () => {
//     it("returns an array containing the Fibonacci sequence for length of 6", () => {
//       const fibonacciLength1 = 6
//       const expectedOutput1 = [1, 1, 2, 3, 5, 8]
//       expect(fibonacciLength(fibonacciLength1)).toEqual(expectedOutput1)
//     })
//       it("returns an array containing the Fibonacci sequence for length of 10", () => {
//       const fibonacciLength2 = 10
//       const expectedOutput2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//       expect(fibonacciLength(fibonacciLength2)).toEqual(expectedOutput2)
//     })
//   })
//   function fibonacciLength (length){
//     const fibonacciLength = [1, 1]
//     for(let i = 2; i < length; i++){
//       fibonacciLength.push(fibonacciLength [i - 1] + fibonacciLength [ i - 2])
//     }
//     return fibonacciLength
//   }
// Pseudo code:
//looking fibonacciLength1 has a length of 6 with output of an array of [1, 1, 2, 3, 5, 8]
//fibonacciLength2 has a length of 10 with output of an array of [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//need to create a new const called expectedOutput for both fibonacciLength
//need to create a testing unit called fibonacciLength
//has 2 expect
//need .push
//for loop

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("vote", () => {
  it("returns the end tally for votes1", () => {
    const votes1 = { upVotes: 13, downVotes: 2}
    const expectedOutput1 = 11
    const result1 = vote(votes1)
    expect(result1).toEqual(expectedOutput1)
  })
  it("returns the end tally for votes2", () =>{
    const votes2 = { upVotes: 2, downVotes: 33}
    const expectedOutput2 = -31
    const result2 = vote(votes2)
    expect(result2).toEqual(expectedOutput2)
  })
})
function vote (votes){
  const upVotes = typeof votes.upVotes === 'number' ? votes.upVotes: 0
  const downVotes = typeof votes.downVotes === 'number' ? votes.downVotes: 0
  return upVotes - downVotes
}
// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
//if statement of upVotes - downVotes to get endTally
//need to create result1 so we can plug in votes1 inside it and same for votes2
//need to use typeof