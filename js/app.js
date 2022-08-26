const progress = document.getElementById('progress');
progress.style.width = 0;
let width = 0;
let qnumber = 0;
document.getElementById('next').addEventListener('click', function(){
    width = width + 20;
    const progress = document.getElementById('progress');
    progress.style.width = `${width}%`;
    qnumber = qnumber + 1;
    if(qnumber <= 5){
        const qNum = document.getElementById('q-no');
        qNum.innerText = `${qnumber}`;
    }
    else{
        alert('No more question have')
    }
})