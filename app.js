let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//plalyer x;i.e player 0


const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "0";
            turn0 = false;

        }

        else {
            box.innerText = "x";
            turn0 = true;


        }
        box.disabled = true;

        checkwinner();
    });
});

const disablebox=()=>
{
    for( let box of boxes)
    { 
        box.disabled=true;
    }
}


const enablebox = ()=>{

    for ( let box of boxes)
    {
        box.disabled=false;
        box.innerText="";


    }

}


const showwinner = (winnerr) => {
    msg.innerText = `Congratulations. Winner is  ${winnerr}`
    msgcontainer.classList.remove("hide");
    disablebox();




};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if( (posval1 === posval2) &&( posval2 === posval3))


            showwinner(posval1);


        }


    }
}

const resetgame=()=>{

    turn0=true ;

    enablebox();
    msgcontainer.classList.add("hide");
    
}

newbtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);