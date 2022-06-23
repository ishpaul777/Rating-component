const ratingBtn = document.querySelectorAll(".rating-btn");
let ratings = ''

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    for(let i=0; i<ratingBtn.length; i++){
        ratingBtn[i].style.backgroundColor = 'hsl(215, 20%, 26%)'
    }
    btn.style.backgroundColor ='hsl(25, 97%, 53%)'
    ratings = btn.innerHTML
  });
});

const submitBtn = document.getElementById('submit')
const ratingPage = document.querySelector('.rating-state')
const thankuPage = document.querySelector('.thanku-state')
const selection = document.querySelector('.selection')

submitBtn.addEventListener('click', ()=>{
    if(ratings === ''){
        alert('please select rating');  
        return 
    }
    ratingPage.classList.add('invisible')
    thankuPage.classList.add('active')
    selection.innerHTML = ratings
})

