function library(input) {
    let book = input[0];
    let index = 1;
    let command = input[index];
    index++;
    let counter = 0;
    let isFound = false;

    while (command !== "No More Books") {
        let currentBook = command;


        if (currentBook === book) {
            isFound = true;

            console.log(`You checked ${counter} books and found it.`);
            break;

        }
        counter++;
        command = input[index];
        index++;
    }
    if (!isFound) {
        console.log("The book you search is not here!")
        console.log(`You checked ${counter} books. `)
    }


}