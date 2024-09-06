let addTaskBtn = document.getElementById("addTask");
let todoContainer = document.getElementById("todo");

addTask.addEventListener("click", (e) =>{
    let superDiv = document.createElement("div");
    superDiv.setAttribute("class","super-div");
    superDiv.style.backgroundColor = "aqua";
   
    let card = document.createElement("div");

    card.setAttribute("class", "card");
    card.setAttribute("contentEditable", true);
    card.innerText = "New Task";

    superDiv.append(card);


    card.addEventListener("click", () =>{
        if(card.innerText=="New Task"){
          card.innerText="";
        }
        

    })
    
    card.addEventListener("blur", (e)=>{
        let targetCard = e.target; // card
        let targetCardParent = targetCard.parentElement; // superDiv
        if(card.innerText.trim() == ""){
            // targetCard.remove()
            // targetCardParent.remove()
            superDiv.remove()
        }

    })

    let dropdown = document.createElement("select");

    dropdown.innerHTML = `
      <option value="todo">Todo</option>
      <option value="progress">Progress</option>
      <option value="done">Done</option>
    `
    superDiv.append(dropdown);

    dropdown.addEventListener("change", (e)=>{
        let targetValue = e.target.value;
        let selectedColumn = document.getElementById(targetValue);
        selectedColumn.append(superDiv);
    })

    

    todoContainer.append(superDiv);
})
