function changeColor1(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("user-01").src = (t.checked) ?'1user-01.svg' :'user-01.svg';
}
function changeColor2(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("user-02").src = (t.checked) ?'1user-02.svg' :'user-02.svg';
}
function changeColor3(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("user-03").src = (t.checked) ?'1user-03.svg' :'user-03.svg';
}
function changeColor4(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("circle").src = (t.checked) ?'1circle.svg' :'circle.svg';
}
function changeColor5(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("square").src = (t.checked) ?'1square.svg' :'square.svg';
}
function changeColor6(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("left-seat").src = (t.checked) ?'1left-seat.svg' :'left-seat.svg';
}
function changeColor7(t) {
    tr = t.parentNode;
    tr.style.color = (t.checked) ?"#FF6C0F" :"#7C7A7A";
    document.getElementById("grid").src = (t.checked) ?'1grid.svg' :'grid.svg';
}

function reset() {
    location.reload(true);
}
