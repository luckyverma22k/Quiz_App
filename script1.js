
const questions = [
    {
        question: "What is the time complexity of searching an element in a sorted array using Binary Search?",
        answers: [
            { text: "O(1)", correct: false },
            { text: "O(log n)", correct: true },
            { text: "O(n)", correct: false },
            { text: "O(n log n)", correct: false }
        ]
    },
    {
        question: "Which data structure is typically used to implement a LIFO (Last In, First Out) behavior?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Linked List", correct: false },
            { text: "Stack", correct: true },
            { text: "Tree", correct: false }
        ]
    },
    {
        question: "What is the worst-case time complexity of bubble sort for an array of size 'n'?",
        answers: [
            { text: "O(n)", correct: false },
            { text: "O(n log n)", correct: false },
            { text: "O(n^2)", correct: true },
            { text: "O(log n)", correct: false }
        ]
    },
    {
        question: "What is the space complexity of an algorithm?",
        answers: [
            { text: "The amount of time an algorithm takes to run", correct: false },
            { text: "The number of operations an algorithm performs", correct: false },
            { text: "The amount of memory an algorithm uses", correct: true },
            { text: "The number of inputs an algorithm takes", correct: false }
        ]
    },
    {
        question: "Which sorting algorithm is known for its average-case time complexity of O(n log n) and is generally considered efficient for large datasets?",
        answers: [
            { text: "Bubble Sort", correct: false },
            { text: "Insertion Sort", correct: false },
            { text: "Merge Sort", correct: true },
            { text: "Selection Sort", correct: false }
        ]
    },
    {
        question: "What is the purpose of a hash table in data structures?",
        answers: [
            { text: "To maintain a sorted collection of elements", correct: false },
            { text: "To perform recursive searches in a binary tree", correct: false },
            { text: "To efficiently map keys to values for quick retrieval", correct: true },
            { text: "To organize data in a linear, linked sequence", correct: false }
        ]
    },
    // Add more questions here
];


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");

const  nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
   
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
            nextButton.style.display="none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){ 
        selectedBtn.classList.add("correct");
        score++;

    }
    else 
    {
        selectedBtn.classList.add("incorrect");
        
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){

      resetState();
      questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML="Play Again";
      nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else 
    {
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

// showQuestion();
startQuiz();

console.log("lol");
