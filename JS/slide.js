var images = [];
var index = 0;//vi tri anh dang hien thi
var sohinh= 5;
for (var i = 0; i < sohinh; i++){
    images[i] = new Image();
    images[i].src = 'images/' + i + '.jpg';
}

function first() {
    index = 0;
    var anh = document.getElementById('anh');
    anh.src = images[index].src;
}
function last() {
    index = images.length -1;
    var anh = document.getElementById('anh');
    anh.src = images[index].src;
}
function next() {
    index ++;
    if (index >= images.length) index = 0;
    var anh = document.getElementById('anh');
    anh.src = images[index].src;
}
function prev() {
    index --;
    if (index <0) index = images.length - 1;
    var anh = document.getElementById('anh');
    anh.src = images[index].src;
}
const myTimeout = setInterval(next, 3000);