var toggle = document.querySelector('.toggle'),
    round = toggle.querySelector('.round'),
    price = document.querySelectorAll('.price'),
    prices_annual = ['&dollar;199.99','&dollar;249.99','&dollar;399.99'],
    prices_montly = ['&dollar;19.99','&dollar;24.99','&dollar;39.99'],
    annual = false; 

toggle.addEventListener('click', (e)=>{
    round.classList.toggle('active');
    annual = !annual;

    for(let i = 0; i < price.length; i++){
        if(annual === true){
            price[i].innerHTML = prices_annual[i];
        }else {
            price[i].innerHTML = prices_montly[i];
        }
    } 
});