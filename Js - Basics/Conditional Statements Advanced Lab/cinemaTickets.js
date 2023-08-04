function ticket(input) {
    let day = input[0];
    let money = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            money = 12; break;
        case "Wednesday":
        case "Thursday":
            money = 14; break;
        case "Saturday":
        case "Sunday":
            money = 16;

    }
    console.log(money)
}