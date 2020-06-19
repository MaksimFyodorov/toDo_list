// // 1. Добавление новой задачи
// var form = document.getElementById("addForm");
// var itemsList = document.getElementById("items");
// var filter = document.getElementById("filter");

// // Прослушка события
// form.addEventListener("submit", addItem);

// function addItem(e) {
//     // Отменяем отправку формы, настроенную по умолчанию
//     e.preventDefault();

//     // Находим инпут с текстом для новой задачи
//     var newItemInput = document.getElementById("newItemText");
//     // Получаем текст из инпута
//     var newItemText = newItemInput.value;

//     // Создаем элент для новой задачи
//     var newElement = document.createElement("li");
//     newElement.className = "list-group-item";

//     // Добавляем текст в новый элемент
//     var newTextNode = document.createTextNode(newItemText);
//     newElement.appendChild(newTextNode);

//     // Создаем кнопку
//     var deleteBtn = document.createElement("button");
//     // Добавляем название кнопки
//     deleteBtn.appendChild(document.createTextNode("Удалить"));
//     // Добавляем  CSS-класс в кнопку
//     deleteBtn.className = "btn btn-light btn-sm float-right";
//     // Добавляем  data-атрибут в кнопку
//     deleteBtn.dataset.action = "delete";
//     // Помещаем кнопку внутрь тега li
//     newElement.appendChild(deleteBtn);

//     // Добавляем новую задачу в общий список дел
//     itemsList.prepend(newElement);

//     // Очищаем поле, куда мы вводили новую задачу
//     newItemInput.value = "";
// }

// // 2. Удаление элемента из списка дел
// itemsList.addEventListener("click", removeItem);

// function removeItem(e) {
//     if (
//         e.target.hasAttribute("data-action") &&
//         e.target.getAttribute("data-action") == "delete"
//         ) {
//             if (confirm("Удалить задачу?")) {
//                 e.target.parentNode.remove();
//             }
//         }
// }

// // 3. Поиск по списку
// filter.addEventListener("keyup", filterItems);

// function filterItems(e) {
//     // Получаем фразу для поиска и переводим ее в нижний регистр
//     var searchedText = e.target.value.toLowerCase();

//     // 3.1
//             // Получаем список всех задач
//     var items = itemsList.querySelectorAll("li");
//             // Перебираем циклом все найденные теги li с задачами
//     items.forEach( function (item) {
//             // Получаем текст задачи из списка и переводим его в нижний регистр
//         var itemText = item.firstChild.textContent.toLowerCase();
//             // Проверяем вхождение искомой подстроки в текст задачи
//         if (itemText.indexOf(searchedText) != -1) {
//             // Если вхождение есть - показываем элемент с задачей
//             item.style.display = "block";
//             // Если вхождения нет - скрываем элемент с задачей
//         } else {
//             item.style.display = "none";
//         }
//     } )
// }






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












// var items = document.querySelector("#items");
// var btnSubmit = document.querySelector("input[type='submit']");
// var elemInput = document.querySelector("#newItemText");
// var elemFilter = document.querySelector("#filter");


// // console.log(items.querySelectorAll("li")[0].attributes)
// // console.log(items.querySelectorAll("li")[1].attributes)


// // Добавление нового дела в список
// btnSubmit.addEventListener("click", function(e) {
//     e.preventDefault();
//     var task = elemInput.value;
//     if (task !== "") {
//         items.insertAdjacentHTML(
//             "beforeend", 
//             `<li class="list-group-item">${task}
//                 <button     
//                     data-action="delete" 
//                     type="button" 
//                     class="btn btn-light btn-sm float-right">\n\tУдалить\n</button>
//              </li>`
//         );
//         elemInput.value = "";
//         taskFilter();
//     } 
// });

// // Удаление дел из списка
// items.addEventListener("click", function(e) {
//     // console.log(e.target.attributes[0])
//     if (e.target.attributes[0].value === "delete" && confirm("Удалить задачу?")) {
//         e.target.parentNode.remove();
//     }
// });

// // // Обработчик события клавиатуры (поиск дел внутри списка)
// elemFilter.addEventListener("keyup", taskFilter);

// // Поиск дел внутри списка
// function taskFilter() {
//     var elems = items.querySelectorAll("li");
//     for (var i = 0; i < elems.length; i++) {
//         var elem = elems[i].firstChild.textContent.toLowerCase();
//         if ( elem.includes(elemFilter.value.toLowerCase()) ) {
//             elems[i].style.display = "";
//         } else {
//             elems[i].style.display = "none";
//         }
//     }
// }












