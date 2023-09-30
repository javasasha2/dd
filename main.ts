input.onGesture(Gesture.Shake, function () {

    let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]

    let playerChoice = options[Math.randomRange(0, 4)]

    let microbitChoice = options[Math.randomRange(0, 4)]

    basic.showString(playerChoice)

    basic.pause(1000)

    basic.showString(microbitChoice)

    if (playerChoice == microbitChoice) {

        basic.showString("Tie!")

    } else if (

        (playerChoice == "Rock" && (microbitChoice == "Scissors" || microbitChoice == "Lizard")) ||

        (playerChoice == "Paper" && (microbitChoice == "Rock" || microbitChoice == "Spock")) ||

        (playerChoice == "Scissors" && (microbitChoice == "Paper" || microbitChoice == "Lizard")) ||

        (playerChoice == "Lizard" && (microbitChoice == "Spock" || microbitChoice == "Paper")) ||

        (playerChoice == "Spock" && (microbitChoice == "Scissors" || microbitChoice == "Rock"))

    ) {

        basic.showString("You win!")

    } else {

        basic.showString("Micro:bit wins!")

    }

})