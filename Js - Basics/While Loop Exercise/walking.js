function walking(input){
    let goal = 10000;
    let index = 0;
    let command = input[index];
    index++;
    let sum = 0;
    let isCommandHome = false;

    while(command !== "Going home"){
        let currentSteps = Number(command);
        sum += currentSteps;
        if(sum>= goal){
            isCommandHome = false;
            console.log("Goal reached! Good job!");
            console.log(`${sum - goal} steps over the goal!`);
            break;

        }
        command = input[index];
        index++;
    }
    sum+= Number(input[index]);
    if(isCommandHome)
    if(sum>= goal){
        isCommandHome = true;
        console.log("Goal reached! Good job!");
            console.log(`${sum - goal} steps over the goal!`);
    }else{
        isCommandHome = true;
        console.log(`${goal - sum} steps to reach goal!`)
    }

}