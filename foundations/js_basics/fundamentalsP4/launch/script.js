let output = document.querySelector('.output');
output.innerHTML = "";

let i =  10;
while (i >= 0) {
    if (i === 10) {
        outputPara("Countdown 10");
    } else if (i === 0) {
        outputPara("Blast off!");
    } else {
        outputPara(i);
    }
    i--;
}

function outputPara(textString) {
    const para = document.createElement('p');
    para.textContent = textString;
    output.appendChild(para);
}