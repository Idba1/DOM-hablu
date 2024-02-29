console.log("hello");

let div = document.createElement('div');
div.id = "createDiv";
div.innerHTML = `
<h1>Hello Everyone </h1>
<p> Counting objects: 100% (8/8), done.<br>
Delta compression using up to 4 threads </p>

`
document.body.appendChild(div);


// script
let script = document.createElement('script');
script.src = 'idba.js';
document.body.appendChild(script)


// menu
let menu = document.getElementById("menu");

function createLi(para){
    let li = document.createElement('li');
    li.innerText = para;
    // console.log(li);
    return li;
}
menu.appendChild(createLi('Idba'))
menu.appendChild(createLi('Islam'))