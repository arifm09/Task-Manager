let addTaskBtn = document.getElementById("addTask");
let todoContainer = document.getElementById("todo");

addTask.addEventListener("click", (e) =>{
    let card = document.createElement("div");

    card.setAttribute("class", "card");
    card.setAttribute("contentEditable", true);
    card.innerText = "New Task";

    todoContainer.append(card);

    console.log(card);

    card.addEventListener("click", () =>{
        if(card.innerText=="New Task"){
          card.innerText="";
        }
        

    })
    
    card.addEventListener("blur", (e)=>{
        if(card.innerText.trim()==""){
           card.remove();
        }

    })

    let dropdown = document.createElement("select");

    dropdown.innerHTML = `
      <option value="todo">Todo</option>
      <option value="progress">Progress</option>
      <option value="done">Done</option>
    `
    card.append(dropdown);

})
