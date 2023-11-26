const people = [
    'Chris',
    'Anne',
    'Colin',
    'Terri',
    'Phil',
    'Lola',
    'Sam',
    'Kay',
    'Bruce'
]

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

function addName(name, list) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
}

for (let person of people) {
    if (person === "Phil" || person === "Lola") {
        addName(person, refused);
    } else addName(person, admitted);
}