const mediumTriva = [
	{
		question: "In which year did Christopher Columbus discover America?",
		options: ["1492", "1620", "1776", "1812"],
		answer: "1492",
		difficulty: "medium",
	},
	{
		question: "Who wrote the play 'Romeo and Juliet'?",
		options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
		answer: "William Shakespeare",
		difficulty: "medium",
	},
	{
		question: "Which gas do plants absorb from the atmosphere?",
		options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
		answer: "Carbon dioxide",
		difficulty: "medium",
	},

	{
		question: "What is the tallest mountain in the world?",
		options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount McKinley"],
		answer: "Mount Everest",
		difficulty: "medium",
	},


	{
		question: "Who wrote 'The Great Gatsby'?",
		options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "Harper Lee"],
		answer: "F. Scott Fitzgerald",
		difficulty: "medium",
	},

	{
		question: "What is the tallest tree species in the world?",
		options: ["Sequoia", "Palm tree", "Coast Redwood", "Oak"],
		answer: "Coast Redwood",
		difficulty: "medium",
	},

	{
		question: "What is the square root of 144?",
		options: ["9", "12", "16", "18"],
		answer: "12",
		difficulty: "medium",
	},
	{
		question: "What is the largest desert in the world?",
		options: ["Gobi Desert", "Sahara Desert", "Mojave Desert", "Atacama Desert"],
		answer: "Sahara Desert",
		difficulty: "medium",
	},

	{
		question: "Which planet is known as the 'Morning Star'?",
		options: ["Venus", "Mercury", "Mars", "Jupiter"],
		answer: "Venus",
		difficulty: "medium",
	},

	{
		question: "How many bones are there in the adult human body?",
		options: ["206", "216", "226", "236"],
		answer: "206",
		difficulty: "medium",
	},

]

let triviaDiff=mediumTriva
console.log(triviaDiff)



var allQuestions = []

let theQuestion = document.getElementById("quest")
let option1 = document.getElementById("pleasework1")
let option2 = document.getElementById("pleasework2")
let option3 = document.getElementById("pleasework3")
let option4 = document.getElementById("pleasework4")
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
let rightanswer= document.querySelector(".Right_answer")
let nextButton = document.getElementById("nextButton")
let scoreImage= document.querySelector(".score_image")
// var easybuttonclicked= false
// var mediumbuttonclicked= false
// var hardbuttonclicked= false





var score = 0









// var lastQuestion= false
for (let i = 0; i < triviaDiff.length; i++) {
	allQuestions[i] = triviaDiff[i].question
}
console.log(allQuestions)
function disableNextButton() {
	nextButton.disabled = true
}

function enableNextButton() {
	nextButton.disabled = false
}
var questionIndex = 0



function disabledOptions(bool){

	answer1.disabled = bool
	answer2.disabled = bool
	answer3.disabled = bool
	answer4.disabled = bool


}

function displayQuestionandOptions() {



	console.log("DA LENGTH OF TRIVIADIFF IS   " + triviaDiff.length)
	console.log("HERE DA QUESTION INDEX  " + questionIndex)


	if (questionIndex < allQuestions.length) {

		const currentQuestion = triviaDiff[questionIndex] // keep tracks on what question we are on // stores as an object

		theQuestion.innerHTML = allQuestions[questionIndex]
		option1.innerHTML = currentQuestion.options[0]
		option2.innerHTML = currentQuestion.options[1]
		option3.innerHTML = currentQuestion.options[2]
		option4.innerHTML = currentQuestion.options[3]





		questionIndex += 1

		disableNextButton()

	} else {
		theQuestion.innerHTML = "TRIVIA DONE"
		const optionContainer = document.querySelector("#optionContainer")
		optionContainer.style.display = "none" // hide the options
		nextButton.style.display = "none"

		const displayScore = document.querySelector("#score")
		displayScore.innerHTML = "You got " + score + " out of "+ triviaDiff.length+" questions right"
		 displayImage()

	}

}

option1.addEventListener("click", function(e) {
	const options = triviaDiff[questionIndex - 1].options
	console.log("OPTION 1 CLICKED")
	checkAnswerSelected(options[0])

	disabledOptions(true)
	enableNextButton()

})

option2.addEventListener("click", function(e) {
	const options = triviaDiff[questionIndex - 1].options
	console.log("OPTION 2 CLICKED")
	checkAnswerSelected(options[1])

	disabledOptions(true)
	enableNextButton()

})

option3.addEventListener("click", function(e) {
	const options = triviaDiff[questionIndex - 1].options

	console.log("OPTION 3 CLICKED")
	checkAnswerSelected(options[2])

	disabledOptions(true)
	enableNextButton()
})

option4.addEventListener("click", function(e) {
	const options = triviaDiff[questionIndex - 1].options

	console.log("OPTION 4 CLICKED")
	checkAnswerSelected(options[3])

	disabledOptions(true)
	enableNextButton()

})

nextButton.addEventListener("click", function(e) {
	disabledOptions(false)
	rightanswer.innerHTML= ""
	const unselect = document.querySelectorAll(' input[name="option1"]')

	unselect.forEach((input) => {
		input.checked = false
	}) // I wanna make sure that the answer selected before is now unselected

	displayQuestionandOptions()
})

function displayImage(){
	if(score <= 4){
		scoreImage.src="https://media.tenor.com/agYucrt9BLgAAAAi/sad-my.gif"
	}else if(score > 7){
		scoreImage.src="https://i.pinimg.com/originals/3e/2c/fe/3e2cfee2eb4ed31f4325598ee53ece71.gif"
	}else{
		scoreImage.src="https://media.tenor.com/RRjNq45nkfEAAAAd/straight-face-not-funny.gif"
	}
}


function checkAnswerSelected(userOption) {
	const correctAnswer = triviaDiff[questionIndex - 1].answer

	if (userOption === correctAnswer) {
		score++
		rightanswer.style.color = 'limegreen'
		rightanswer.innerHTML= "You got it right :D"
	}else {
		rightanswer.style.color = "black"
		rightanswer.innerHTML="The correct answer is " + triviaDiff[questionIndex-1].answer
	}


	// console.log("THE SCORE IS " +score)

}


displayQuestionandOptions()