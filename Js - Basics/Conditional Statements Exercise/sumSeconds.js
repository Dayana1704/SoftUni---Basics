function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
let totalSeconds = firstTime + secondTime + thirdTime;
let min = Math.floor(totalSeconds/60);
let seconds = totalSeconds % 60;
if (seconds < 10)

{console.log(`${min}:0${seconds}`)

}else {
    console.log(`${min}:${seconds}`)

}
}