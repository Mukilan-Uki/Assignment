function pundToKg(a){
    let kg=a*0.453592;
    return kg;
}

function cmToM(a){
    let m=a/100;
    return m;
}

function bmiCalculator(kg,m){
    let bmi=kg/(m*m);
    return bmi;
}

function results(a){
    switch(true){
        case a<18.5:
            return "Under weight";
            break
        case a>18.5 || a<24.9:
            return "Normal";
            break
        case a>25 || a<29.9:
            return "Over weight";
            break
        default:
            return "Obese";
            break
    }
}

let pound=165;
let cm=180;
function main(){
    let Kg=pundToKg(pound);
    let m=cmToM(cm);
    let bmi=bmiCalculator(Kg,m);
    console.log(results(bmi));
}
main();

//Fibonacci Value

function fibonicci(num){
    let a=0;
    let b=1;
    let next=0;
    if(num==0){
        return "Nothing";
    }
    else if(num==1){
        return a;
    }
    else{
        for(let i=2; i<num; i++){
            next=a+b;
            a=b;
            b=next;
        }
        return next;
    }
}
let num=4
console.log(num+" fibonacci number is "+fibonicci(num));