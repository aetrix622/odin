const list = document.querySelector("#list");
const tbInput = document.querySelector("#item");
const btnSubmit = document.querySelector("#submit");
let itemID = "item-"
let itemIndex = 0;

btnSubmit.addEventListener("click", doSubmit);

tbInput.addEventListener("keypress", (e) => {
    // if enter key (keyCode 13) is pressed, call doSubmit();
    if (e.keyCode === 13) {
        doSubmit();
    }
});

function doSubmit() {
    // bail out if the input is iempty
    if (tbInput.value === "") return;

    // get formdata and unique item ID, then clear the text box
    const listItemID = itemID + itemIndex;
    const tbInputValue = tbInput.value;
    tbInput.value = "";
    
    // create and assemble the list item elements
    const listItem = document.createElement("li");
    const itemSpan = document.createElement("span");
    const delButton = document.createElement("button");
    listItem.setAttribute("id", listItemID);
    listItem.appendChild(itemSpan);
    listItem.appendChild(delButton);
    itemSpan.textContent = tbInputValue;
    delButton.textContent = "Delete";

    // append the listItem to the list
    list.appendChild(listItem);

    // click delete button to remove line
    delButton.addEventListener("click", (e) => {
        let itemToDelete = document.querySelector(`#${listItemID}`);
        itemToDelete.remove();
    })

    // bump the unique item index and return focus to the text box
    itemIndex++;
    tbInput.focus();
}