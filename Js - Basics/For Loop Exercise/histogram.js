function histogram(input){
    let numbersCount = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 1; i<=numbersCount; i++){
    let num = Number(input[i]);
    
    if(num < 200){
        p1Counter++;
    }else if(num >=200 && num <= 399){
        p2Counter++;
    }else if(num >=400 && num <= 599){
        p3Counter++;
    }else if(num >=600 && num <= 799){
        p4Counter++;
    }else{
        p5Counter++;
    }
}
    let p1 = p1Counter/numbersCount * 100;
    let p2 = p2Counter/numbersCount * 100;
    let p3 = p3Counter/numbersCount*100;
    let p4 = p4Counter/numbersCount*100;
    let p5 = p5Counter/numbersCount*100;

    console.log(p1.toFixed(2) + "%")
    console.log(p2.toFixed(2) + "%")
    console.log(p3.toFixed(2) + "%")
    console.log(p4.toFixed(2) + "%")
    console.log(p5.toFixed(2) + "%")

}