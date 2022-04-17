function changeBackground(div) {
    //get the image from the div
    var img = div.getElementsByTagName('img')[1];
    //get the color of the pixel at the center of the image
    var color = getPixelColor(img);
    var skill = div.getElementsByClassName('skill');
    skill[0].style.backgroundColor = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
}

function setBgBlack(div){
    var skill = div.getElementsByClassName('skill');
    skill[0].style.backgroundColor = 'black';
}

function getPixelColor(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.crossOrigin = "Anonymous";
    //while pixel == 0,0,0 change x and y
    var pixel;
    //browse pixels in the image until a non-transparent pixel is found
    for (var x = 0; x < img.width; x++) {
        for (var y = 1; y < img.height; y++) {
            pixel = ctx.getImageData(x, y, 1, 1).data;
            if (pixel[0] != 0 || pixel[1] != 0 || pixel[2] != 0) {
                break;
            }
        }
        if (pixel[0] != 0 || pixel[1] != 0 || pixel[2] != 0) {
            break;
        }
    }

    return pixel;
}