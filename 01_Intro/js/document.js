// -=-=-=-=- working with document

const username = prompt("Enter name:");

// 1 - using write() method
document.write(`<p style='color: coral;'>1 - Hello, dear ${username}</p>`);

// 2 - using document elements
const element = document.createElement('p');
element.innerText = `2 - Hello, dear ${username}`;
element.style.color = 'coral';
element.classList.add('super-text');

document.body.appendChild(element);