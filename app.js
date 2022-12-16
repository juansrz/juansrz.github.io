// Efecto pantalla inicial


const hero = document.querySelector(".hero");
const headline = document.querySelector(".headline");
const headline2 = document.querySelector(".headline2");


const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, { height: '80%', ease: Power2.easeInOut})
.fromTo (hero, 1.2, {width: '70%'}, {width: '100%', ease: Power2.easeInOut });


// Botón scroll to top

const scrollBtn = document.querySelector(".scroll-to-top");

const refreshButtonVisibility = () => {

    if (document.documentElement.scrollTop <= 4000) {
        scrollBtn.style.display = "none";
    } else {
        scrollBtn.style.display = "block";
    }

};

refreshButtonVisibility();
    
scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
    refreshButtonVisibility();
});

// Pop-up

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var pop_up = document.getElementById('pop_up');
    pop_up.classList.toggle('active');
    
    
};

function toggle2() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var pop_uptwo = document.getElementById('pop_uptwo');
    pop_uptwo.classList.toggle('active');
    
    
};