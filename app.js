

var pag = document.getElementById('pag');
var but = document.getElementById('but');
var butt = document.getElementById('butt');
var butto = document.getElementById('butto');

function myFunction() {
    pag.style.fontWeight = pag.style.fontWeight === 'bold' ? 'normal' : 'bold';
}

function meFunction() {
    pag.style.fontStyle = pag.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function hyFunction() {
    pag.style.textDecoration = pag.style.textDecoration === 'underline' ? 'none' : 'underline';
}

