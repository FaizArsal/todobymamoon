var list = document.getElementById("list1")
// console.log(list)
function addTodo() {
    var todoItem = document.getElementById("todoItembyfaiz")
    if (todoItem.value.length >= 4) {
      // create aside
        var aside = document.createElement("aside")
        aside.classList.add("listItem")
        aside.setAttribute("id", "compInp")
      //create li
        var li = document.createElement("li")
        var liText = document.createTextNode(todoItem.value)
        li.appendChild(liText)
        aside.appendChild(li)
        // creat edit button
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "<i class='far fa-edit'></i>"
        editBtn.classList.add("btnP")
        editBtn.setAttribute("onclick", "editBtn(this)")
        aside.appendChild(editBtn)
        // create delete btn
        var dltBtn = document.createElement("button")
        dltBtn.innerHTML = "<i class='fal fa-minus-circle'></i>"
        dltBtn.classList.add("btnM")
        dltBtn.setAttribute("onclick", "hideList(this)")
        aside.appendChild(dltBtn)
        list.appendChild(aside)
        todoItem.value = "";
    } else {
        alert("Enter correct Value Bahi....")
    }
}
// delete list
function hideList(f) {
    f.parentNode.remove()
}
// delete ALl
function dltAll() {
    list.innerHTML = " ";
}
function editBtn(e) {
    var val = e.parentNode.firstChild.parentNode.firstChild.innerHTML
    var editValue = prompt("Enter Edit Value bahi", val)
    e.parentNode.firstChild.parentNode.firstChild.innerHTML = editValue
}