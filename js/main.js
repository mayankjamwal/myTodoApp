console.log("runn...");
const submitBtn = document.getElementsByClassName("submit")[0];
const clearBtn = document.getElementsByClassName("clear")[0];
const userInput = document.getElementsByClassName("userText")[0];
const head = document.getElementsByClassName("heading")[0];
// console.log(head);
// console.log(submitBtn);

submitBtn.addEventListener("click",submitUserData);
clearBtn.addEventListener("click",clearUserData);


function submitUserData(){
  const li = document.createElement('li');
  li.textContent = userInput.value;
  const ul = document.querySelector('.ul-list');
  ul.appendChild(li);
  userInput.value = ''; 
}

function clearUserData(){
    const li = document.querySelector("li");
    userInput.value = '';
    if(li){
        li.remove();
    }
    else{
        console.error("Error: No list Item is present.");
    }
    
}

