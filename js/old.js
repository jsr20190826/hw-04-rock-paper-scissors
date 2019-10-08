let playerAnswer = ""
let cpuAnswer = ""

let playerLogic = 0
let playerChoice = playerLogic
let cpuChoice = Math.ceil((Math.random() * 3))

let playerScore = 0
let cpuScore = 0


let cpuLogic = ()=>{
  if( cpuChoice === 1 ){
  cpuAnswer = "Rock"
  } else if ( cpuChoice === 2 ) {
  cpuAnswer = "Paper"
  } else{
    cpuAnswer = "Scissors"
  }
}

let winningMessage = ()=>{
  $("#status").html("You played <u>" + playerAnswer +  "</u>. The computer played <u>" + cpuAnswer + "</u>.")
}


let findAnswer = ()=>{

if (playerChoice < cpuChoice){
    cpuScore++
    $("#computerScore").html(cpuScore)
    let cpuChoice = Math.ceil((Math.random() * 3))
    console.log("playerLogic is " + playerLogic)
    console.log("playerScore is " + playerScore)
    console.log("cpuChoice is " + cpuChoice)
} else if (playerChoice > cpuChoice){
    playerScore++
    $("#computerScore").html(cpuScore)
    let cpuChoice = Math.ceil((Math.random() * 3))
    console.log("playerLogic is " + playerLogic)
    console.log("playerScore is " + playerScore)
    console.log("cpuChoice is " + cpuChoice)
} else {
    let cpuChoice = Math.ceil((Math.random() * 3))
    console.log("cpu score is " + cpuScore)
    console.log("cpuChoice is " + cpuChoice)
  }
}

$("#rock").click(()=>{
  let playerScore = 1
  let playerAnswer = "Rock"
  cpuLogic()
  findAnswer()
  winningMessage()
  console.log(cpuAnswer)
})

$("#paper").click(()=>{
  let playerScore = 2
  let playerAnswer = "Paper"
  cpuLogic()
  findAnswer()
  winningMessage()
  console.log(cpuAnswer)
  console.log(playerAnswer)
})

$("#scissors").click(()=>{
  let playerScore = 3
  let playerAnswer = "Scissors"
  cpuLogic()
  findAnswer()
  winningMessage()
  console.log(cpuAnswer)
})
