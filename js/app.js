// function btnCall(id){
//     document.getElementById(id).addEventListener('click',function(){
//         const btns = document.querySelectorAll('#allbtn');
//         btns.classList.remove('btn-success');
//         const btn = document.getElementById(id);
//         btn.classList.remove('btn-light')
//         btn.classList.add('btn-success');
//     })
// }
// btnCall('option1');
// btnCall('option2');
// btnCall('option3');
// btnCall('option4');

document.getElementById('allbtn').addEventListener('click',function(event){
        const btns = document.querySelectorAll('.option');
        for(btn of btns){
            btn.classList.add('btn-light');
        }
        event.target.classList.remove('btn-light');
        event.target.classList.add('btn-success');
})
