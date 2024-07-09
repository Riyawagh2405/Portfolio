AOS.init();

// scroll to top  

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});

// owl carousel 

$(document).ready(function(){
  $('.myCarousel').owlCarousel({
    items : 3,
    margin: 10,
    loop: true,
    mouseDrag : false,
    nav : true,
    lazyLoad : true, 
    autoplay : true,
    autoplayTimeout : 4000,
    autoplayHoverPause : true,
    responsive : {
      0 : {
        items : 1
      },
      480 : {
        items : 1
      },
      768 : {
        items : 2
      },
      992 : {
        items : 2
      }
    }
  });


  $('.owl-prev').empty().append('<i class="bi bi-arrow-left-square-fill"></i>');
  $('.owl-next').empty().append('<i class="bi bi-arrow-right-square-fill"></i>');
});





// Footer year
  
let currentDate = new Date();
let output = currentDate.getFullYear();

document.getElementById('currentYear').innerHTML = `<span>${output}</span>`;



//form validation 

$("#commonform").validate();
jQuery('.numbersOnly').keyup(function () {
  this.value = this.value.replace(/[^0-9\.]/, '');
});




const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];


submit.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("Clicked");
  
})
