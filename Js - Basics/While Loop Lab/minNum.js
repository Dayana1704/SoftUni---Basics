function minNumber(input) {
    let index = 0;
    let command = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;
    while (command !== "Stop") {
        index++;
        let currentNumber = Number(input[index])
        if (currentNumber < minNumber) {
            minNumber = currentNumber;
            
        }
        command = input[index];
    }
    console.log(minNumber)

}