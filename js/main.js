const addBtn = document.querySelector(".input-btn");
addBtn.addEventListener('click',addItem);

let ul = document.querySelector('#list-1');
let search = document.querySelector("#search");

function addItem(e){
    
    e.preventDefault();
    // console.log("run"); 
    let userInput = document.querySelector('#input');
    let text = userInput.value;
    let li = document.createElement("li");
    li.className = "item";
    li.append(text);
    ul.append(li);
    userInput.value = '';
    
    //create Delete button
    let delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "X";
    // console.log(delBtn);
    li.append(delBtn);
    ul.addEventListener("click",delItem);
    search.addEventListener("keyup",searchItem);
    function delItem(e){
        if(e.target.tagName === "BUTTON"){
            e.target.parentElement.remove();
        }
    }
    
    function searchItem(e){
        // console.log(e.target.value);
        let t = e.target.value.toLowerCase();
        console.log(t);
        let items = ul.getElementsByTagName('li');
        // console.log(items);
        Array.from(items).forEach(function(item){
            let s = item.textContent;
            console.log(s);
            if(s.toLowerCase().indexOf(t) != -1){
                item.style.display = "block";
            }
            else{
                item.style.display = "none";
            }
        });
    }
}



