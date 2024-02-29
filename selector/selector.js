console.log("hello");

let id1 = document.getElementById('id1');
id1.innerText = "text change";
console.log(id1);


let class1 = document.getElementsByClassName('class1')[0];
class1.innerHTML = `
<h1>Hello World </h1>
<p> hi i'm Idba Islam. currently i'm learning jsDOM </p>

`
console.log(class1);


let tagName = document.getElementsByTagName('p')[1];
tagName.textContent = "hey it's tag selector with textContent";
console.log(tagName);


let quarry = document.querySelector('#quarry');
quarry.innerText = "Quarry selector";
console.log(quarry);