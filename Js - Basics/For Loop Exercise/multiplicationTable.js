function cycle (input){
    let y = Number(input[0]);
    
 
    for( let i = 1; i <= 10; i++){
        let res = i*y;
        console.log(`${i} * ${y} = ${res}`)
    }

}