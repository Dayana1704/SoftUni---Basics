function figures(input){
    let type = input[0];
    let firstNum = Number(input[1]);
    let secondNum = Number(input[2]);

    if(type == "square"){
        console.log((firstNum * firstNum).toFixed(3))
    }else if(type == "rectangle"){
        console.log((firstNum * secondNum).toFixed(3))
    }else if(type == "circle"){
        console.log((firstNum*Math.PI).toFixed(3))
    }else if(type == "triangle"){
        console.log((firstNum * secondNum).toFixed(3))
    }


}