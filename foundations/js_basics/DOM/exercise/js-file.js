const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.setAttribute('style', 'color: red;');
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.textContent = "I'm a blue h3!";

container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'border: black 1px solid; background-color: pink');
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);
const innerPara = document.createElement('p');
innerPara.textContent = "ME TOO!";
div.appendChild(innerPara);
container.appendChild(div);

// buttons
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', (e) => {
    alert("Hello World");
    console.log(e.target);
    e.target.style.background = 'blue';
});

// buttons node list
// buttons is a node list. It looks and cts much like an array.
const buttons = document.querySelectorAll('.btngroup');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});