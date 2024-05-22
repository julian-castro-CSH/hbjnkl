const easyTriva = [
	{
		question: "What is the capital of France?",
		options: ["London", "Berlin", "Paris", "Madrid"],
		answer: "Paris",
		difficulty: "easy",
	},
	{
		question: "Which planet is known as the 'Red Planet'?",
		options: ["Venus", "Mars", "Jupiter", "Saturn"],
		answer: "Mars",
		difficulty: "easy",
	},
	{
		question: "What is 2 + 2?",
		options: ["3", "4", "5", "6"],
		answer: "4",
		difficulty: "easy",
	},
	{
		question: "What is the capital of Japan?",
		options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
		answer: "Tokyo",
		difficulty: "easy",
	},

	{
		question: "Who is the author of the book The Cat in the hat?",
		options: ["Jacqueline Woodson", "Dr. Seuss", "Jeff Kinney", "Eric Carle"],
		answer: "Dr. Seuss",
		difficulty: "easy",
	},

	{
		question: "What is the most popular sport in the world?",
		options: ["Basketball", "Soccer", "Cricket", "Tennis"],
		answer: "Soccer",
		difficulty: "easy",
	},
	{
		question: "What is the most popular programming language in the world?",
		options: ["Java", "Python", "JavaScript", "C++"],
		answer: "Python",
		difficulty: "easy",
	},
	{
		question: "Why did the chicken cross the road?",
		options: ["To get to the other side?", "To just cross the raod da", "why not", "it felt like it"],
		answer: "it felt like it",
		difficulty: "easy",
	},
	{
		question: "What came first the chicken or the egg?",
		options: ["Da egg", "The chicken", "BOTH", "Neither"],
		answer: "The chicken",
		difficulty: "easy",
	},
	{
		question: "What is the best selling manga of all time",
		options: ["Naruto", "Two Piece", "One Piece", " Saskue"],
		answer: "One Piece",
		difficulty: "easy",
	},

	





]

let triviaDiff=easyTriva
console.log(triviaDiff)





let theQuestion = document.getElementById("quest")
let option1 = document.getElementById("pleasework1")
let option2 = document.getElementById("pleasework2")
let option3 = document.getElementById("pleasework3")
let option4 = document.getElementById("pleasework4")
let nextButton = document.getElementById("nextButton")
let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
let scoreImage= document.querySelector(".score_image")
let rightanswer= document.querySelector(".Right_answer")

// var easybuttonclicked= false
// var mediumbuttonclicked= false
// var hardbuttonclicked= false





var score = 0






var allQuestions = []


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