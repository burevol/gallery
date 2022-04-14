function button_left() {
    alert('left')
}

function button_right() {
    alert('right')
}

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
btn_left.addEventListener("click", button_left);
btn_right.addEventListener('click', button_right);