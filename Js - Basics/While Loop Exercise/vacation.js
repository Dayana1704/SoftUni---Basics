function journey(input) {
    let needMoney = Number(input[0]);
    let gotMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    index++;
    let spentOrSavedMoney = input[index];
    index++;;
    let spentMoney = 0;
    let days = 0;
    let spentMoneyDays = 0;


    while (needMoney > gotMoney) {
        if (command == "spend") {
            spentMoneyDays++;
            gotMoney -= spentOrSavedMoney;
            spentMoney += spentOrSavedMoney;

            days++;
        
            if (spentMoney > gotMoney) {
                gotMoney = 0;

            }if (spentMoneyDays == 5) {
                console.log("You can't save the money.")
                console.log(`${days}`)
                break;

            }

        } else if (command = "save") {
            gotMoney += spentOrSavedMoney;
            spentMoneyDays = 0;
            days++;
            if (gotMoney >= needMoney) {
                console.log(`You saved the money for ${days} days.`)
                break;
            }

        }


        command = input[index];
        index++;
        spentOrSavedMoney = Number(input[index]);
        index++;
    }
    

}