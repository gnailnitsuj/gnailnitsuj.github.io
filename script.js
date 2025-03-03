const txt = document.getElementById('user_input');
const btn = document.getElementById('button1');
const out = document.getElementById('output1');

btn.addEventListener('click', () => {
out.insertAdjacentHTML('beforeend', `<li>${txt.value}</li>`);
});
