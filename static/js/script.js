window.onload = () => {
  let input = document.querySelector('#input');
  input.oninput = function () {
    let  value = this.value.trim();
    let list = document.querySelectorAll('.ul li');

    if(value) {
      list.forEach(elem => {
        if(elem.innerText.search(value) == -1) {
          elem.classList.add('hide');
        }
      });
    }else {
      list.forEach(elem => {
        elem.classList.remove('hide');
      });
    }
  };
};

document.querySelector('.themetoggle').addEventListener('click', (event) => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML()
});
function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
      document.querySelector('.themetoggle span').textContent = 'light_mode';
    }
    else {
      document.querySelector('html').classList.remove('dark');
      document.querySelector('.themetoggle span').textContent = 'dark_mode';
    }
  } catch (err) { }
}
addDarkClassToHTML();

$(document).ready(function(){
	$('.js-selectize').selectize();
});
 $('#link').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this),
                $select = $form.find('select'),
                links = $select.val();
        if (links.length > 0) {
            for (i in links) {
                link = links[i];
                window.open(link);
            }
        }
    });