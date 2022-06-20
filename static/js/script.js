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

$(document).ready(function() {
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






