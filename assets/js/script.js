const toggle = document.getElementById('toggle-icon');
const overlay = document.getElementById('overlay');
const nav = document.getElementsByTagName('nav')[0]; // CONTAINER NAV
const body = document.getElementsByTagName('body')[0]; // BODY TAG 

toggle.addEventListener('click', function(e){
    if (nav.classList.contains('active')) {
        closemenu();
    }
    else {
        body.style.overflow = 'hidden';
        overlay.style.visibility = 'visible';
        nav.classList.add('active');
    }

});

function closemenu() {
    overlay.style.visibility = 'hidden';
    body.style.overflow = 'visible';
    nav.classList.remove('active');
}

window.addEventListener('click', function (e) {
    // SE CLICAR EM QUALQUER LUGAR FORA DO CONTAINER NAV E O CONTAINER NAV CONTER A CLASSE 'ACTIVE' ELE IRA EXECUTAR A FUNÇÃO FECHAR O MENU.
    !nav.contains(e.target) && nav.classList.contains("active") && closemenu();
});