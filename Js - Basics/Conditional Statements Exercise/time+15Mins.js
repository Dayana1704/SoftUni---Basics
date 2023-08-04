function time(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
     let convertInMinutes  = hours * 60 + minutes + 15;
     let convertedHours = Math.floor(convertInMinutes / 60)
     let convertedMin = convertInMinutes % 60 ;
     if(convertedHours >= 24 ){
         convertedHours =0;
     }
    
     if(convertedMin <10){
         console.log(`${convertedHours}:0${convertedMin}`)
     }
     else{
         console.log(`${convertedHours}:${convertedMin}`)
     }
     
    
    
    }