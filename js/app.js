function optionSelect(btnid){
    document.getElementById(btnid).addEventListener('click',function(event){
        const btns = document.querySelectorAll('.option');
        for(btn of btns){
            btn.classList.add('btn-light');
        }
        event.target.classList.remove('btn-light');
        event.target.classList.add('btn-success');
})
}
optionSelect('allbtn');

document.getElementById('next').addEventListener('click', function(){
    const btns = document.querySelectorAll('.option');
    for(btn of btns){
        btn.classList.add('btn-light');
    }
})


let result = 0;
let result2 = 0;

document.getElementById('allbtn').addEventListener('click', function(event){
        if(event.target.innerText === quizOption[0].ok || event.target.innerText === quizOption[1].ok || event.target.innerText === quizOption[2].ok || event.target.innerText === quizOption[3].ok || event.target.innerText === quizOption[4].ok || event.target.innerText === quizOption[5].ok){
            result = result + 1;
            const results = document.getElementById('result');
            results.innerText = result;
        }else{
            return result;
        }
})