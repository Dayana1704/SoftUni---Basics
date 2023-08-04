function godzillaVsKong(input){
    let budget = Number(input[0]);
        let extras = Number(input[1]);
        let clothing = Number(input[2]);
        let decor = budget * 0.10;
        let money = 0;
        if(extras > 150) {
            clothing = clothing * 0.90;
        
        }
        money = decor + (extras * clothing) ;
        if(budget >= money){
            console.log("Action!");
            console.log(`Wingard starts filming with ${(budget - money).toFixed(2)} leva left.`);

        }else{
            console.log("Not enough money!");
            console.log(`Wingard needs ${(money - budget).toFixed(2)} leva more.`)
        }
    }