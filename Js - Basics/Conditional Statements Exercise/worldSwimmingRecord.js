function swimming(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);
    let result = distance * timeForOneMeter
    let slowTime = Math.floor(distance / 15)* 12.5;
    result = result + slowTime
    let diff = Math.abs(record - result)

if(result < record){
    console.log(`Yes, he succeeded! The new world record is ${result.toFixed(2)} seconds.`)
    let diff = Math.abs(record - result);
} else{
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
}  




}