function cinema(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    
    let money = 0;
    
    if(type === "Premiere"){
        money = r*c * 12
    }else if (type ==="Normal"){
    money = r*c*7.50
    }else if (type === "Discount"){
        money  = r*c*5
    }
    
    
    console.log(money.toFixed(2))
    }