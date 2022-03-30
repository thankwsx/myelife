document.body.style.border = "5px solid red";


// 获取图书内容

const title = document.querySelector("#wrapper > h1 > span").innerText;
// alert(title);

const info = document.querySelector("#info").innerText;

const cover = document.querySelector("#mainpic > a > img").src;

// alert(cover);
// TODO:: 加工处理数据

function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback.call(this, dataURL);
        canvas = null; 
    };
    img.src = url;
}

convertImgToBase64(cover, function(base64Img){
    alert(base64Img);
});