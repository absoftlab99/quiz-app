const progress = document.getElementById('progress');
progress.style.width = 0;
const quizs = document.getElementById('quizs');

const quizList = [
    {quiz1: '1. What is Java Srcipt?'},
    {quiz2: '2. What is Java Srcipt ES-6?'},
    {quiz3: '3. What is Stand fro ES-6?'},
    {quiz4: '4. What is Stand for JS?'},
    {quiz5: '5. What is The Mohter Company of java-script?'}
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

    
    optionCall(qnumber);

    if(qnumber <= 5){
        const qNum = document.getElementById('q-no');
        qNum.innerText = `${qnumber}`;
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

    if(qnumber === 1){
        quizs.innerText = quizList[0].quiz1;
        console.log(quizList[0].quiz1);
    }
    else{
        alert('hello');
    }

    optionCall(qnumber);
})


function optionCall(num){
    const firstOption = document.getElementById('option1');
    const secondOption = document.getElementById('option2');
    const thirdOption = document.getElementById('option3');
    const fourthOption = document.getElementById('option4');
    if(num === 1){
        firstOption.innerText = quizOption[0].ok;
        secondOption.innerText = quizOption[0].op2;
        thirdOption.innerText = quizOption[0].op3;
        fourthOption.innerText = quizOption[0].op4;
    }
    else if(num === 2){
        firstOption.innerText = quizOption[1].op1;
        secondOption.innerText = quizOption[1].ok;
        thirdOption.innerText = quizOption[1].op3;
        fourthOption.innerText = quizOption[1].op4;
    }
    else if(num === 3){
        firstOption.innerText = quizOption[2].op1;
        secondOption.innerText = quizOption[2].op2;
        thirdOption.innerText = quizOption[2].ok;
        fourthOption.innerText = quizOption[2].op4;
    }
    else if(num === 4){
        firstOption.innerText = quizOption[3].op1;
        secondOption.innerText = quizOption[3].op2;
        thirdOption.innerText = quizOption[3].op3;
        fourthOption.innerText = quizOption[3].ok;
    }
    else if(num === 5){
        firstOption.innerText = quizOption[4].ok;
        secondOption.innerText = quizOption[4].op2;
        thirdOption.innerText = quizOption[4].op3;
        fourthOption.innerText = quizOption[4].op4;
    }
}

const quizOption = [{
    ok: 'quiz1-1',
    op2: 'quiz1-2',
    op3: 'quiz1-3',
    op4: 'quiz1-4'
},
{
    op1: 'quiz2-1',
    ok: 'quiz2-2',
    op3: 'quiz2-3',
    op4: 'quiz2-4'
},
{
    op1: 'quiz3-1',
    op2: 'quiz3-2',
    ok: 'quiz3-3',
    op4: 'quiz3-4'
},
{
    op1: 'quiz4-1',
    op2: 'quiz4-2',
    op3: 'quiz4-3',
    ok: 'quiz4-4'
},
{
    ok: 'quiz5-1',
    op2: 'quiz5-2',
    op3: 'quiz5-3',
    op4: 'quiz5-4'
}
]

