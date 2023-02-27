const quiz =[
    {
        question: '"Every dog has his day" is a proverb about...',
        answers :[
            'dogs',
            'people',
            'dogs and people',
            'cats'
        ],
        correct: 'people'
    }, {
        question: '"He who hesitates is lost" is a saying that suggests we should act on opportunities',
        answers :[
            'only if all else is lost',
            'after careful consideration',
            'immediately',
            'success'
        ],
        correct: 'immediately'

    }, {
        question: '"Fortune knocks once at every mans door" is a philosophy of',
        answers :[
            'pessimism',
            'optimism',
            'brutal realism',
            'sad'
        ],
        correct: 'optimism'

    } 
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () =>{
document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}
}

setupQuiz();


const clickHandler =(e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("correct");
        score++;
    } else {
        window.alert("wrong");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数が残っていれば実行
        setupQuiz();
    } else {
        window.alert('Finish! Your score is ' + score + '/' + quizLength);
    }
};


let handlerIndex = 0;
while (handlerIndex < buttonLength) {
$button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
    });
    handlerIndex++;
}

