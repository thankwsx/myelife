// document.body.style.border = "5px solid red";

// 创建一个按钮

const btnNode = document.createElement('button');

btnNode.style.position = 'fixed';
btnNode.style.top = '20px';
btnNode.style.right = '100px';

btnNode.innerHTML = '收藏';

btnNode.onclick = () => {
    // 获取图书内容

    const title = document.querySelector("#wrapper > h1 > span").innerText;

    const info = document.querySelector("#info").innerText;
    const cover = document.querySelector("#mainpic > a > img").src;

    console.log(title, info, cover);
    // const title = document.querySelector('h1').innerText;
    // const image = document.querySelector('#mainpic img').src;
    // const url = document.querySelector('#mainpic a').href;
    // const author = document.querySelector('#info a').innerText;
    // const publisher = document.querySelector('#info span').innerText;
    // const price = document.querySelector('#info .rating_self strong').innerText;
    // const rating = document.querySelector('#interest_sectl .rating_num').innerText;
    // const description = document.querySelector('#link-report').innerText;
    // const douban_id = document.querySelector('#info .pl').innerText.match(/\d+/)[0];
    // const tags = document.querySelectorAll('#db-tags-section .tag');

    // const tag = [];
    // tags.forEach(item => {
    //     tag.push(item.innerText);
    // });
    // const data = {
    //     title,
    //     image,
    //     url,
    //     author,
    //     publisher,
    //     price,
    //     rating,
    //     description,
    //     douban_id,
    //     tag
    // };

    // console.log(data)
    // 将数据提交到服务器
    // fetch('http://localhost:3000/book', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then(res => {
    //     console.log(res);
    // });
}

document.body.appendChild(btnNode);

// alert(cover);
// TODO:: 加工处理数据

// 因为CORS原因，不能直接获取图片数据，这个函数暂时不能直接启用。
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

// convertImgToBase64(cover, function(base64Img){
//     alert(base64Img);
// });
// const handleMessage = (request, sender, sendResponse) => {
//     console.log(request, sender, sendResponse);
// };

// // 接收其他组件发送来的消息
// browser.runtime.onMessage.addListener(handleMessage)