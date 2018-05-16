// Code your solutions in this file

function tailsNeverFails() {
  let tailsCounter = 0
  while (coinFlip() === "tails") {
    tailsCounter++
  }
  console.log(`You got ${tailsCounter} tails in a row!`)
}

function coinFlip() {
  rand = Math.random()
  if (rand >= 0.5) {
      return "heads"
    } else {
      return "tails"
  }
}

function countFlips() {
  let headsCounter = 0
  let tailsCounter = 0
  for (i = 0; i < 1000; i++)
  if (coinFlip() === "heads") {
      headsCounter++
    } else {
      tailsCounter++
  }
  let diff = Math.abs(headsCounter - tailsCounter)
  console.log(`Heads: ${headsCounter}`)
  console.log(`Tails: ${tailsCounter}`)
  console.log(`Difference: ${diff}`)
  return Object.assign({}, {heads: headsCounter}, {tails: tailsCounter}, {difference: diff})
}

function analytics() {
  let data = []
  for (i = 0; i < 10; i++) {
    data.push(countFlips().difference)
  }
  return data
}
