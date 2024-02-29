console.log("hello");

let traversing = document.getElementsByClassName('FirstChild')[0];
console.log(traversing.parentElement.parentElement.parentElement);

console.log(traversing.parentElement.firstElementChild);
console.log(traversing.parentElement.lastElementChild);
console.log(traversing.parentElement.childNodes);
console.log(traversing.parentElement.children);