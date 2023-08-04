function yardGreening (input){
    let metres = Number(input[0]);
    let price = 7.61;
    let discount = 0.18;
    let result1 = metres * price;
    let result2 = result1*discount;
    let result3 = result1 - result2;
    console.log(`The final price is: ${result3} lv.`)
    console.log(`The discount is: ${result2} lv.`)
    


}