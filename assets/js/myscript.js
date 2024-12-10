//Restart Game Button
var restart=document.querySelector("#b")

//Grabs all the squares
var squares=document.querySelectorAll(".col-4")

//Clear all the squares

function clearBoard(){
    for(var i=0; i<squares.length; i++){
squares[i].textContent='';
    }
}

restart.addEventListener('click',clearBoard)

//Check the sqare marker

var mytestcell=document.querySelector("#topleft")

// // mytestcell.addEventListener('click', function(){
//     if(mytestcell.textContent==="-"){
//         mytestcell.textContent="X"
//     }else if (mytestcell.textContent==="X"){
//         mytestcell.textContent="O"
//     }else{
//         mytestcell.textContent="-"
//     };

// } )


function checkerMate() {
    if(this.textContent==="X"){
    this.textContent="O";
    }else if(this.textContent==="O"){
    this.textContent="-";
    }else{this.textContent="X";}

}

for(var i=0; i < squares.length; i++){
    squares[i].addEventListener('click',checkerMate)
    }



//For Loop to add event listeners to all the squares