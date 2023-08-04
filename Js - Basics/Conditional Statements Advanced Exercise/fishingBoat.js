function fishBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = Number(input[2]);
    let finalsum = 0;
    let money = 0;

    switch (season) {
        case "Spring":
            money = 3000;
            break;
        case "Summer":
        case "Autumn":
            money = 4200;
            break;
        case "Winter":
            money = 2600;
            break;



    } if(count<= 6){
        finalsum = money * 0.90;
    }else if(count >=7 && count<= 11){
        finalsum = money * 0.85;
    }else if(count >= 12){
        finalsum = money * 0.75;
    }
    if(count %2 == 0 && season != "Autumn"){
        finalsum = finalsum * 0.95;
    }else{
        finalsum = finalsum;

    }
    if(budget >= finalsum ){
        console.log(`Yes! You have ${(budget - finalsum).toFixed(2)} leva left. `)
    }else if (budget < finalsum ){
        console.log(`Not enough money! You need ${(finalsum - budget).toFixed(2)} leva.`)
    }



}