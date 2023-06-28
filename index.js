let pl1 = document.querySelectorAll(".p1 div");
let pl2 = document.querySelectorAll(".p2 div");
function clickme(){
    let x = Math.random();
    x = Math.floor(x*6)+1;
    let y = Math.random();
    y = Math.floor(y*6)+1;
    for(let a = 0;a<9;a++){
        pl1[a].style.visibility = "hidden";
        pl2[a].style.visibility = "hidden";
    }

    // for player 1
    if(x==1){
        pl1[4].style.visibility = "visible";
    }
    else if(x==2){
        pl1[2].style.visibility = "visible";
        pl1[6].style.visibility = "visible";
    }
    else if(x==3){
        pl1[2].style.visibility = "visible";
        pl1[4].style.visibility = "visible";
        pl1[6].style.visibility = "visible";
    }
    else if(x==4){
        pl1[0].style.visibility = "visible";
        pl1[2].style.visibility = "visible";
        pl1[6].style.visibility = "visible";
        pl1[8].style.visibility = "visible";
    }
    else if(x==5){
        pl1[0].style.visibility = "visible";
        pl1[2].style.visibility = "visible";
        pl1[6].style.visibility = "visible";
        pl1[8].style.visibility = "visible";
        pl1[4].style.visibility = "visible";
    }
    else if(x==6){
        pl1[0].style.visibility = "visible";
        pl1[2].style.visibility = "visible";
        pl1[6].style.visibility = "visible";
        pl1[8].style.visibility = "visible";
        pl1[3].style.visibility = "visible";
        pl1[5].style.visibility = "visible";
    }

    // for y or player 2
    if(y==1){
        pl2[4].style.visibility = "visible";
    }
    else if(y==2){
        pl2[2].style.visibility = "visible";
        pl2[6].style.visibility = "visible";
    }
    else if(y==3){
        pl2[2].style.visibility = "visible";
        pl2[4].style.visibility = "visible";
        pl2[6].style.visibility = "visible";
    }
    else if(y==4){
        pl2[0].style.visibility = "visible";
        pl2[2].style.visibility = "visible";
        pl2[6].style.visibility = "visible";
        pl2[8].style.visibility = "visible";
    }
    else if(y==5){
        pl2[0].style.visibility = "visible";
        pl2[2].style.visibility = "visible";
        pl2[6].style.visibility = "visible";
        pl2[8].style.visibility = "visible";
        pl2[4].style.visibility = "visible";
    }
    else if(y==6){
        pl2[0].style.visibility = "visible";
        pl2[2].style.visibility = "visible";
        pl2[6].style.visibility = "visible";
        pl2[8].style.visibility = "visible";
        pl2[3].style.visibility = "visible";
        pl2[5].style.visibility = "visible";
    }
    if(x>y){
        document.querySelector('h1').innerHTML = "Player 1 Won";
    }
    else if(x==y){
        document.querySelector('h1').innerHTML = "Draw Match";
    }
    else{
        document.querySelector('h1').innerHTML = "Player 2 Won";
    }
}