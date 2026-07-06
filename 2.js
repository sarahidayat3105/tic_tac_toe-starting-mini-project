let box = document.querySelectorAll(".box");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turno = true;

const ResetGame = () => {
   enablebox ();

    msgContainer.classList.add("hide");
} 


const WinPatterns =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];


box.forEach((box) => {
    box.addEventListener("click" ,() => {
        console.log("box was clicked");
        
        if(turno){
            box.innerText = "o";
            turno = false;
        }
        else{
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkWinner();

    });
});

const disablebox = () => {
    box.forEach ((box) => {
    box.disabled = true;
    })
};

const enablebox = () => {
    box.forEach ((box) => {
    box.enabled = true;
    turno = true;
       box.innerText = "";
       box.disabled = false;
    })
};

const checkWinner = () => {
    for(let pattern of WinPatterns){
        let pos1value = box[pattern[0]].innerText;
        let pos2value = box[pattern[1]].innerText;
        let pos3value = box[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
        if(pos1value === pos2value && pos2value === pos3value){
        console.log("Winner is:" ,pos1value);
        showWinner(pos1value);

    }
}
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
};
newBtn.addEventListener("click" ,ResetGame);
resetBtn.addEventListener("click", ResetGame);





