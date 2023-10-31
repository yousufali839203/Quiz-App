
const questions = [
    {
        question: "Which is larget animan in the world?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct : false},
        ]
    },
    {
        question: "Which is larget animan in the world?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct : false},
        ]
    },

    {
        question: "Which is larget animan in the world?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct : false},
        ]
    }

    ,

    {
        question: "Which is larget animan in the world?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct : false},
        ]
    }
    ,

    {
        question: "Which is larget animan in the world?",
        answers: [
            {text: "Shark" , correct:false},
            {text: "Blue Whale" , correct: true},
            {text: "Elephant" , correct :false},
            {text: "Giraffe" , correct : false},
        ]
    }
];

const  questinElement = document.getElementById("quesion");
const  answerButtons = document.getElementById("ans-buttons");
const nextButton = document.getElementById("next-btn");

let currQuestionindex = 0;
let score = 0;

function strtQuiz(){
    currQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentquestion  = questions[currQuestionindex];
    let questinno = currQuestionindex+1;
    questinElement.innerHTML = questinno+". "+currentquestion.question;
    currentquestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
            score++;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click" , ()=>{
        if(currQuestionindex<questions.length){
            handlenextButton();
        }else{
            strtQuiz();
        }
});
function showScore(){
    resetState();
    questinElement.innerHTML = `You Scores ${score} out of 5`;
    nextButton.innerHTML = "play again";
    nextButton.style.display= "block";
}
function handlenextButton(){
    currQuestionindex++;
    if(currQuestionindex<questions.length){
        showQuestions();
    }else{
        showScore();
    }
}
strtQuiz();