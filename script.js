const txt = document.getElementById('user_input');
const btn = document.getElementById('button1');
const out = document.getElementById('output1');

btn.addEventListener('click', () => {
out.insertAdjacentHTML('beforeend', `<li>${txt.value}</li>`);
});

function removeAll() {
    document.getElementById("output1").innerHTML="";
}

function change() {
    var select = document.getElementById("select").value;
    document.getElementById("output").innerHTML = select;
}

function change2() {
    var select = document.getElementById("select2").value;
    document.getElementById("output2").innerHTML = select;
}

function change3() {
    var select = document.getElementById("select3").value;
    document.getElementById("output3").innerHTML = select;
}

function change4() {
    var select = document.getElementById("select4").value;
    document.getElementById("output4").innerHTML = select;
}

function change5() {
    var select = document.getElementById("select5").value;
    document.getElementById("output5").innerHTML = select;
}
