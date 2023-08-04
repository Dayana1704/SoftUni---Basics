function marin(input) {
    let negativeGrades = Number(input[0]);
    let counterNegatives = 0;
    let index = 1;
    let task = input[index];
    index++;
    let grades = 0;
    let tasks = 0;
    let lastProblem = "";
    let isNeedBreak = false;

    while (task !== "Enough") {
        let currentTask = task;
        let grade = Number(input[index]);
        index++;
        if (grade <= 4) {
            counterNegatives++;
        }
        if (counterNegatives === negativeGrades) {
            isNeedBreak = true;
            console.log(`You need a break, ${counterNegatives} poor grades.`);
            break;

        }
        grades += grade;
        tasks++;
        lastProblem = currentTask;
        task = input[index];
        index++;
    }
    if(!isNeedBreak){
        let avgScore = grades / tasks;
    if (task == "Enough") {
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${lastProblem}`)
    }

    }
    



}