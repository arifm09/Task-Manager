let addTaskBtn = document.getElementById("addTask");
let todoContainer = document.getElementById("todo");

let count = 1;

addTask.addEventListener("click", (e) =>{
    let card = document.createElement("div");

    card.setAttribute("class", "card");
    card.setAttribute("contentEditable", true);
    card.setAttribute("draggable", true);
    card.id = `task ${count++}`;
    card.innerText = "New Task";

    todoContainer.append(card);

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

    card.addEventListener("dragstart", (e)=>{
       card.style.opacity = 0.5;

       e.dataTransfer.setData("text", card.id);
    })

    card.addEventListener("dragend", ()=>{
        console.log("dragging ended");
        card.style.opacity = 1;
    })


    let dragEvents = ["dragover", "dragenter", "drop"];

    for(let drag of dragEvents){

        let columns = document.querySelectorAll(".column")

        for(let col of columns){
            col.addEventListener(drag,(e)=>{
                e.preventDefault();

                if(drag=="drop"){

                    let cardId = e.dataTransfer.getData("text");
                    let targetCard = document.getElementById(cardId);
                    col.append(targetCard);
                }
            })
        }
    }




}) 