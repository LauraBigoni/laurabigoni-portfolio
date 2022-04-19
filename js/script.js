const show = document.querySelectorAll('.fade-in');

const classes = {
  home: show.item(0),
  about: show.item(1),
  work: show.item(2),
  contacts: show.item(3),
}

const slider = {
  home: document.querySelector('.home'),
  about: document.querySelector('.about'),
  work: document.querySelector('.work'),
  contacts: document.querySelector('.contacts'),
}

function animateHome() {
  slider.home.addEventListener('click', function () {
    classes.home.classList.add('show');
    classes.work.classList.remove('show');
    classes.about.classList.remove('show');
    classes.contacts.classList.remove('show');
  });
}

function animateAbout() {
  slider.about.addEventListener('click', function () {
    classes.about.classList.add('show');
    classes.work.classList.remove('show');
    classes.home.classList.remove('show');
    classes.contacts.classList.remove('show');
  });
}

function animateWork() {
  slider.work.addEventListener('click', function () {
    classes.work.classList.add('show');
    classes.about.classList.remove('show');
    classes.home.classList.remove('show');
    classes.contacts.classList.remove('show');
  });
}

function animateContacts() {
  slider.contacts.addEventListener('click', function () {
    classes.contacts.classList.add('show');
    classes.work.classList.remove('show');
    classes.home.classList.remove('show');
    classes.about.classList.remove('show');
  });
}

animateHome();
animateAbout();
animateWork();
animateContacts();

document.querySelectorAll('.image-preview').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle('full-page');
  })
})