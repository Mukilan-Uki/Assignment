//1st question

function winningTicket(){
    let winningDigit=[];
    for(let i=0; i<8; i++){
        winningDigit.push(Math.floor(Math.random()*10));
    }
    return winningDigit;
}

function compareWinningNumber(ticket,player){
    let mat=[];
    for(let i=0; i<ticket.length; i++){
        if(player[i]<0 || player[i]>9){
            return "Invalid input";
        }
        else if(ticket[i]==player[i]){
            mat.push(ticket[i]);
        }
    }
    if(mat.length==0){
        return "There is no matches found.";
    }
    else if(mat.length<2){
        return "There is "+mat.length+" number is matched. That is "+mat;
    }
    else{
        return "There is "+mat.length+" numbers are matched. That are "+mat;
    }
}

function mainLottery(){
    let winner=winningTicket();
    let matt=[1,0,9,7,1,4,2,3];
    console.log(winner);
    console.log("\t");
    console.log(compareWinningNumber(winner,matt));
}
mainLottery();


console.log("\n")


//2nd question

function countDigit(n){
    let num=n.toString().split("");
    return num.length;
}

function mainCount(n){
    console.log("The given number is "+n);
    console.log("Number os digits of number "+n+" is "+countDigit(n));
}
mainCount(100000);