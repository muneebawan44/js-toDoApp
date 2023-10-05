var inputElement = document.getElementById('input')
var count = 0
var update = false
var updateId = ''
function addItem() {

    if(!update){
var inputElement = document.getElementById('input')
var ulElement = document.getElementById('list')
var liElement = document.createElement('li')
liElement.id = `${count}`
count++
var delBtn = '<button onClick = " deleteItem(event)">Delete</button>'
var editBtn = `<button  onClick = " editItem(event)">Edit</button>`
liElement.innerHTML = inputElement.value + editBtn + delBtn
ulElement.append(liElement)
}else{
var inputElement = document.getElementById('input')
    var list = document.getElementById(`${updateId}`)
    var editBtn = document.getElementById('editBtn')

    list.innerHTML = `<li  id='${updateId}' >${inputElement.value} <button  onClick = " editItem(event)">Edit</button> <button onClick = " deleteItem(event)">Delete</button> </li>`

    editBtn.innerHTML = 'add'
    update = false;
}

cls()
}
function deleteItem(event) {

    var liElement = event.target.parentNode
    liElement.remove()
}

function Update(id , value) {
    
}


function editItem(event) {
    var inputElement = document.getElementById('input')
    var editBtn = document.getElementById('editBtn')
    editBtn.innerHTML = 'Update'
    update = true;
    updateId = event.target.parentNode.id
    // editBtn.onclick(()=>{
    //     var list = document.getElementById(`${event.target.parentNode.id}`)
    //     list.innerHTML = inputElement.value
    // })
    console.log('list',list);
    inputElement.value = event.target.parentNode.childNodes[0].nodeValue
}

function cls() {
    var inputElement = document.getElementById('input')
    inputElement.value = ''

}