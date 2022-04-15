const picture_count = 5;
let current_count = 3;

function scroll_left(position) {
    if (current_count == 1) {
        return picture_count;
    } else {
        return --position;
    }    
}

function scroll_right(position) {
    if (current_count == picture_count) {
        return 1;
    } else {
        return ++position;
    }
}

function button_left() {
    current_count = scroll_left(current_count);
    draw_pictures();
}

function button_right() {
    current_count = scroll_right(current_count);
    draw_pictures();
}

function draw_pictures() {
  left_image = document.getElementById('id-left-image');
  right_image = document.getElementById('id-right-image');
  center_image = document.getElementById('id-center-image');
  
  left_image.setAttribute('src', `asset/image-${current_count-1}.jpg`)
  center_image.setAttribute('src', `asset/image-${current_count}.jpg`)
  right_image.setAttribute('src', `asset/image-${current_count+1}.jpg`)
}

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
btn_left.addEventListener("click", button_left);
btn_right.addEventListener('click', button_right);
draw_pictures();