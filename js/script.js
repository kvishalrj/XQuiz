// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerListElement = document.getElementById('answer-list');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

nextButton.style.display = 'none';

function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.text;
    answerListElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="radio" name="answer" value="${index}"> ${option}
            </label>
        `;
        answerListElement.appendChild(li);
    });
}

function getSelectedAnswer() {
    const radios = document.getElementsByName('answer');
    let selectedValue = -1;
    radios.forEach((radio, index) => {
        if (radio.checked) {
            selectedValue = index;
        }
    });
    return selectedValue;
}

submitButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === -1) {
        alert('Please select an answer!');
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].correct;
    answerListElement.childNodes.forEach((li, index) => {
        if (index === correctAnswer) {
            li.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    submitButton.style.display = 'none';
    nextButton.style.display = 'inline';
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        currentQuestionIndex = 0;
        score = 0;
    }
    loadQuestion(currentQuestionIndex);

    submitButton.style.display = 'inline';
    nextButton.style.display = 'none';
});

loadQuestion(currentQuestionIndex);
