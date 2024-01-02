
var menu = document.querySelector('header .nav .nav-bar ul');
var link = document.querySelectorAll('.link');
var btntoggle = document.querySelector('.btn-toggle');
var icon = document.querySelector('.icon');

btntoggle.addEventListener('click', function () {
    menu.classList.toggle('show');
})
function linkAction() {
    link.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    menu.classList.remove('show');
}
link.forEach(n => n.addEventListener('click', linkAction));

var acc = document.getElementsByClassName("skill");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight == '180px') {
            panel.style.maxHeight = 0;
            panel.style.padding = '0px';
            panel.style.border = 'none';
        } else {
            panel.style.maxHeight = "180px";
            panel.style.padding = '20px';
            panel.style.border = '1px solid #8084ff2f';
        }
    });
}

function showDetail(){
    let card = document.querySelector('.work-detail');
    card.style.display = 'block';
    document.querySelector('.body').style.overflow = 'hidden';
}
function hideDetail(){
    let card = document.querySelector('.work-detail');
    card.style.display = 'none';
    document.querySelector('.body').style.overflow = 'auto';
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.text');
sr.reveal('.imgPortfolio', { delay: 500 });
// sr.reveal('.about', { delay: 100 });
sr.reveal('.analyse');
sr.reveal('.qualification');
sr.reveal('.dad');
sr.reveal('.works');
sr.reveal('.contact');

let nums = document.querySelectorAll('.item .num');
let section = document.querySelector('.analyse');
let started = false;

window.onscroll = function(){
    if(window.scrollY >= section.offsetTop - 230){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}


function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },2000/goal);
}

// script img Slide

var indexValue = 1;
showImg(indexValue);

function side_slide(e){showImg(indexValue += e);}

function showImg(e){
  var i;
  const img = document.querySelectorAll('.img');
  if(e > img.length){indexValue = 1}
  if(e < 1){indexValue = img.length}
  for(i = 0; i < img.length; i++){
    img[i].style.display = "none";
  }
  img[indexValue-1].style.display = "block";
}

