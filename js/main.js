const addBtn = document.getElementsByClassName("input-btn")[0];
addBtn.addEventListener('click',addItem);



function addItem(e){
    
    e.preventDefault();
    const list = document.getElementById("list-1");
    const listItem = document.createElement('li');
    listItem.className = `item-${x}`;
    const text = document.getElementById("input").value;
    listItem.innerHTML = text;
    list.appendChild(listItem);

    //create Deletebutton
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    console.log(listItem);
    deleteBtn.innerHTML = "X";
    listItem.appendChild(deleteBtn);
}

function deleteItem(e){
    console.log(e.target);
}