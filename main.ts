function guessCharacter () {
    letter = game.askForString("Enter a character.", 1)
    if (checkCharGuessed(letter)) {
        game.splash("You've already guessed " + letter + ". Try another letter.")
    }
    if (secretWord.includes(letter)) {
        game.splash("" + letter + " is in the word!")
        found = findLetterIndices(letter)
        for (let j = 0; j <= numLetters - 1; j++) {
            if (found.indexOf(j) != -1) {
                progress[j] = letter
            }
        }
        progressMessage = progress.join("")
game.splash(progressMessage)
        if (progress.indexOf("_") == -1) {
            gameWon()
        }
    } else {
        game.splash("Nope, guess again!")
        updateProgressMessage()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    guessWord()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    guessCharacter()
})
function startGame () {
    game.splash("Welcome to Word Guesser! Use A to guess a letter, use B to guess a word, and use Menu to restart the game.")
    secretWord = "again"
    progress = []
    progressMessage = ""
    numLetters = secretWord.length
    numGuesses = 5
    guessedLetters = ""
    numGuessesLeft = 0
    guessMessage = ""
    for (let i = 1; i <= numLetters; i++) {

        progress.push("_")
    }
progressMessage = progress.join("")
game.splash(progressMessage)
}
function findLetterIndices (letter: string) {
    let array: number[] = []
    n1 = secretWord.indexOf(letter)
    n2 = secretWord.indexOf(letter, 1)
array.push(n1)
    array.push(n2)
    return array
}
function updateProgressMessage () {
    numGuesses += -1
    game.splash("Number of Guesses Left: " + numGuesses)
    if (numGuesses <= 0) {
        game.splash("GAME OVER! The secret word was again.")
    }
}
function guessWord () {
    word = game.askForString("Enter a word.", 1)
    if (word == secretWord) {
        progressMessage = "again"
        game.splash(progressMessage)
        gameWon()
    }
}
function checkCharGuessed (letter: string) {
    if (guessedLetters.includes(letter)) {
        return true
    } else {
        guessedLetters = "" + guessedLetters + letter
        return false
    }
}
function gameWon () {
    game.over(true)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    startGame()
})
let word = ""
let n1 = 0
let numGuesses = 0
let found: number[] = []
let progressMessage = ""
let secretWord = ""
let guessedLetters = ""
let numGuessesLeft = 0
let guessMessage = ""
let numLetters = 0
let progress: string[] = []
let letter = ""
let n2 = 0
n2 = 0
letter = ""
let letter2 = ""
progress = []
numLetters = 0
guessMessage = ""
numGuessesLeft = 0
guessedLetters = ""
secretWord = ""
progressMessage = ""
startGame()
