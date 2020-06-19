var form = document.querySelector("#addForm");
var itemsList = document.querySelector("#items");
var filter = document.querySelector("#filter");

form.addEventListener("submit", addItem);
itemsList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

function addItem (e){
    e.preventDefault();

    var newItemInput = document.querySelector("#newItemText");
    var newItemText = newItemInput.value;
    if (newItemText == "") {
        alert("Необходимо указать задачу для добавления в список!");
    } else {
        var newElement = document.createElement("li");
        newElement.className = "list-group-item";
    
        var newTextNode = document.createTextNode(newItemText);
        newElement.appendChild(newTextNode);
    
        var deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("Удалить"));
        deleteBtn.className = "btn btn-light btn-sm float-right";
        deleteBtn.dataset.action = "delete";
        newElement.appendChild(deleteBtn);
    
        itemsList.prepend(newElement);
    }
    newItemInput.value = "";
}

function removeItem(e) {
    if (e.target.getAttribute("data-action") == "delete") {
        if (confirm("Удалить задачу?")){
            e.target.parentNode.remove();
        }
    }
}

function filterItems(e) {
    var searchedText = e.target.value.toLowerCase();
    var items = itemsList.querySelectorAll("li");
    
    items.forEach(function (item) {
        var itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(searchedText) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}



