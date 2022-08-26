// function btnCall(id){
//     document.getElementById(id).addEventListener('click',function(){
    
//         const btn = document.getElementById(id);
//         btn.classList.add('btn-info');
        
//     })
    
//     document.getElementsByClassName('option').classList.remove('btn-info');
// }
// btnCall('option1');
// btnCall('option2');
// btnCall('option3');
// btnCall('option4');

document.getElementById('allbtn').addEventListener('click',function(event){
    event.target.classList.remove('btn-light');
    event.target.classList.add('btn-success');
    const btns = document.querySelectorAll('.option');
    console.log(isNaN(btns));
})
