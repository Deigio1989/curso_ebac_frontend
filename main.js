const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const feedback = document.querySelector('.feedback');
const form =document.getElementById('form');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    if(Number(campoA.value) < Number(campoB.value)){
        feedback.classList.add('sucesso');
        feedback.classList.remove('fail');
        feedback.innerHTML="Sucesso!";
        campoA.value="";
        campoB.value="";
    }
    else{
        feedback.innerHTML="O valor do Campo B precisa ser superior ao valor do Campo A";
        feedback.classList.add('fail');
        feedback.classList.remove('sucesso');
    }
})
