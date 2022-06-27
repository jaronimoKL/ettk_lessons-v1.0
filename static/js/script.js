// Тема

document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'dark')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('html').classList.add('dark');
            document.querySelector('.themetoggle span').textContent = 'light_mode';
        } else {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('.themetoggle span').textContent = 'dark_mode';
        }
    } catch (err) {
    }
}

addDarkClassToHTML();

// Поле поиска Selectize

$(document).ready(function () {
    $(".js-selectize").selectize();
});

// Не знаю что это

// $('#link').on('submit', function (e) {
//        e.preventDefault();
//        var $form = $(this),
//                $select = $form.find('select'),
//                links = $select.val();
//        if (links.length > 0) {
//            for (i in links) {
//                link = links[i];
//                window.open(link);
//            }
//        }
//    });

// Дальше pole ne selectize
let d = new Date();
let n = d.getDay();
if (n == 1){
    let day = document.querySelector('.monday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab21');
    tab.classList.add('show', 'active');
}
else if (n == 2){
    let day = document.querySelector('.tuesday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab22');
    tab.classList.add('show', 'active');
}
else if (n == 3){
    let day = document.querySelector('.wednesday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab23');
    tab.classList.add('show', 'active');
}
else if (n == 4){
    let day = document.querySelector('.thursday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab24');
    tab.classList.add('show', 'active');
}
else if (n == 5){
    let day = document.querySelector('.friday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab25');
    tab.classList.add('show', 'active');
}
else if(n = 6){
    let day = document.querySelector('.saturday');
    day.classList.add('active');
    day.ariaSelected = "true";
    let tab = document.querySelector('.tab26');
    tab.classList.add('show', 'active');
}

