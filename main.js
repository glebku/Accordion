const accordions = document.querySelectorAll('.accordion-elem');


for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        if(accordions[i].classList.contains('active')) {
            accordions[i].classList.remove('active');
        }else{
            for(accordion of accordions){
                accordion.classList.remove('active')
            }
            accordions[i].classList.add('active');
        }
    })
}