var toggle = document.querySelector('.toggle'),
    round = toggle.querySelector('.round');

toggle.addEventListener('click', (e)=>{
   
    console.log(round.classList);
    round.classList.toggle('active');
    console.log(round.classList);

});