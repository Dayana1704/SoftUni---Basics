function hotel(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);
    let studioMoney = 0;
    let apartmentMoney = 0;


    switch (month) {
        case "May":
        case "October":
            studioMoney = 50;
            apartmentMoney = 65; break;
        case "June":
        case "September":
            studioMoney = 75.20;
            apartmentMoney = 68.70; break;
        case "July":
        case "August":
            studioMoney = 76;
            apartmentMoney = 77;
            break;
    }

            if (nightsCount > 14) {
                apartmentMoney = apartmentMoney * 0.90;
                switch (month) {
                    case "May":
                    case "October":
                        studioMoney = studioMoney * 0.70; 
                        break;
                    case "June":
                    case "September":
                        studioMoney = studioMoney * 0.80; 
                        break;

                }

            }else if(nightsCount > 7 && month === "May" || month == "October"){
                studioMoney = studioMoney*0.95;
            
    }


console.log(`Apartment: ${(apartmentMoney * nightsCount).toFixed(2)} lv.`);
console.log(`Studio: ${(studioMoney * nightsCount).toFixed(2)} lv.`)
}