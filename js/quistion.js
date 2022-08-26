const progress = document.getElementById('progress');
progress.style.width = 0;
const quizs = document.getElementById('quizs');

const quizList = [
    {quiz1: 'What is Java Srcipt?'},
    {quiz2: 'What is Java Srcipt ES-6?'},
    {quiz3: 'What is Stand fro ES-6?'},
    {quiz4: 'What is Stand for JS?'},
    {quiz5: 'What is The Mohter Company of java-script?'}
];

let width = 0;
let qnumber = 0;

function calcClassAdd(){
    const progress = document.getElementById('progress');
    progress.style.width = `${width}%`;
    qnumber = qnumber + 1;
    if(qnumber <= 5){
        const qNum = document.getElementById('q-no');
        qNum.innerText = `${qnumber}`;
        const quistionNo = document.getElementById('quiz-no');
        quistionNo.innerText = `${qnumber}`;
    }
    else{
        alert('No more question have')
    }
}
document.getElementById('next').addEventListener('click', function(){
    width = width + 20;
    const progress = document.getElementById('progress');
    progress.style.width = `${width}%`;
    qnumber = qnumber + 1;

    if(qnumber === 2){
        quizs.innerText = quizList[1].quiz2;
    }
    else if(qnumber === 3){
        quizs.innerText = quizList[2].quiz3;
    }
    else if(qnumber === 4){
        quizs.innerText = quizList[3].quiz4;
    }
    else if(qnumber === 5){
        quizs.innerText = quizList[4].quiz5;
    }
    
    if(qnumber <= 5){
        const qNum = document.getElementById('q-no');
        qNum.innerText = `${qnumber}`;
        const quistionNo = document.getElementById('quiz-no');
        quistionNo.innerText = `${qnumber}`;
    }
    else{
        alert('No more question have')
    }
})

document.getElementById('start').addEventListener('click', function(){
    const quizbody = document.getElementById('quiz-body');
    quizbody.classList.remove('d-none');

    const stbtn = document.getElementById('start');
    stbtn.classList.add('d-none');

    const cont = document.getElementById('next');
    cont.classList.remove('disabled');

    width = width + 20;
    qnumber = qnumber + 1;

    const progress = document.getElementById('progress');
    progress.style.width = `${width}%`;

    const qNum = document.getElementById('q-no');
    qNum.innerText = `${qnumber}`;
    const quistionNo = document.getElementById('quiz-no');
    quistionNo.innerText = `${qnumber}`;

    if(qnumber === 1){
        quizs.innerText = quizList[0].quiz1;
        console.log(quizList[0].quiz1);
    }
    else{
        alert('hello');
    }
})
const quizOption = [
    opQuiz1[
        {op1: 'anser1'},
        {op2: 'anser1'},
        {op3: 'anser1'},
        {op4: 'anser1'}
    ],
    opQuiz2[
        {op1: 'anser1'},
        {op2: 'anser1'},
        {op3: 'anser1'},
        {op4: 'anser1'}
    ],
    opQuiz3[
        {op1: 'anser1'},
        {op2: 'anser1'},
        {op3: 'anser1'},
        {op4: 'anser1'}
    ],
    opQuiz4[
        {op1: 'anser1'},
        {op2: 'anser1'},
        {op3: 'anser1'},
        {op4: 'anser1'}
    ],
    opQuiz5[
        {op1: 'anser1'},
        {op2: 'anser1'},
        {op3: 'anser1'},
        {op4: 'anser1'}
    ]
];
const firstOption = document.getElementById('option-1');
const secondOption = document.getElementById('option-2');
const thirdOption = document.getElementById('option-3');
const fourthOption = document.getElementById('option-4');