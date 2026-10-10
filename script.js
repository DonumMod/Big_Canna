const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('BIG CANNA enquiry — ' + data.get('interest'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\nEmail: ' + data.get('email') +
    '\\nInterest: ' + data.get('interest') + '\\n\\n' + (data.get('message') || '')
  );
  const note = document.getElementById('form-note');
  note.textContent = 'Your email app should open with a draft. Add BIG CANNA’s preferred contact email in script.js before publishing.';
  // Replace the placeholder address below with the business inbox before launch.
  window.location.href = 'mailto:neo.amodibedi@gmail.com?subject=' + subject + '&body=' + body;
});
