const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('#close-btn')
const back_btn = document.querySelector('.back-btn')
const screen = document.querySelector('.screen:last-child')
const screen1 = document.querySelector('.screen:first-child')

open_btn.addEventListener('click', () => {
    if (window.matchMedia("(min-width:721px)").matches) {
        /* a viewport tem pelo menos 721 pixels de largura */
        screen.style.transform = 'translateX(90%)'; // Mova a div 90% para a direita
        screen.style.position = 'fixed';
        screen1.style.position = 'absolute';
        open_btn.style.background = 'transparent';
        open_btn.style.color = 'var(--main-color)';
    } else {
        /* a viewport menos que 721 pixels de largura */
        screen.style.top = '100%'; // Mova a div 100% para a baixo
        open_btn.style.background = 'transparent';
        open_btn.style.color = 'var(--main-color)';
    }

});

close_btn.addEventListener('click', () => {
    if (window.matchMedia("(min-width:721px)").matches) {
        /* a viewport tem pelo menos 800 pixels de largura */
        screen.style.transform = 'translateX(0%)'; // Volte a div à posição original
        screen.style.position = 'absolute';
        screen1.style.position = 'fixed';
        open_btn.style.background = 'var(--main-color)';
        open_btn.style.color = '#000';
    } else {
        /* a viewport menos que 800 pixels de largura */
        screen.style.top = '0%';
        open_btn.style.background = 'var(--main-color)';
        open_btn.style.color = '#000';
    }
});

back_btn.addEventListener('click', () => {
    if (window.matchMedia("(min-width:721px)").matches) {
        /* a viewport tem pelo menos 800 pixels de largura */
        screen.style.transform = 'translateX(0%)'; // Volte a div à posição original
        screen.style.position = 'absolute';
        screen1.style.position = 'fixed';
        open_btn.style.background = 'var(--main-color)';
        open_btn.style.color = '#000';
    } else {
        /* a viewport menos que 800 pixels de largura */
        screen.style.top = '0%';
        open_btn.style.background = 'var(--main-color)';
        open_btn.style.color = '#000';
    }

});

/*===================== typed js =====================*/
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 700,
});

/*===================== Percentage =====================*/
const tempo_intervalo = 5; //ms -> define a velocidade da animação
const tempo = 700; //ms -> define o tempo total da animaçao

$('span#number').each(function() {  
    let count_to = parseInt($(this).data('countTo'));
    let intervalos = tempo / tempo_intervalo; //quantos passos de animação tem
    let incremento = count_to / intervalos; //quanto cada contador deve aumentar
    let valor = 0;
    let el = $(this);
  
    let timer = setInterval(function() {
        if (valor >= count_to){ //se já contou tudo tem de parar o timer
            valor = count_to;
            clearInterval(timer);
        }
    
        let texto = valor.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "%";
        el.text(texto);
        valor += incremento;      
    }, tempo_intervalo);
});

/*===================== Speedmetre Progress =====================*/
const circles = document.querySelectorAll(".circle");

circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var rotate = 360 / dots;
    var points = "";
    for(let i = 0; i < dots; i++) {
        points +=`<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})