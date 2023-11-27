const upperLimit = document.querySelector("#upperLimit");
const goButton = document.querySelector("#calculatePrimes");
const result = document.querySelector("#result");
const HARD_LIMIT = 100000; // set a ultimate limit so we don't crash the browser

goButton.addEventListener("click", calculatePrimes);

function calculatePrimes() {
    result.innerHTML = "";
    let ceiling = parseInt(upperLimit.value);
    if (ceiling > HARD_LIMIT) ceiling = HARD_LIMIT;
    if (Number.isInteger(ceiling)) {
        outerloop: for (let i = 3; i < ceiling; i = i+2) {
            for (let j = 2; j < i; j++) {
                // check for a evenly divisile factor and bail out if found
                if (i % j === 0) continue outerloop;
            }
            // no evenly divisible factors found -- display the number
            const para = document.createElement('p');
            para.textContent = i;
            result.appendChild(para);
        }
    }
}