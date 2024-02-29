console.log("hello");

let div = document.createElement('div');
div.id = "createDiv";
div.innerHTML = `
<h1>Hello Everyone </h1>
<p> Counting objects: 100% (8/8), done.<br>
Delta compression using up to 4 threads </p>

`
document.body.appendChild(div);