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