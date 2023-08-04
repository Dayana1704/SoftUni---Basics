function commerce(input){
    let city = input[0];
    let tradings = Number(input[1]);
    let sum = 0;

    if(tradings >=0 && tradings<= 500){
        switch(city){
            case "Sofia":
                sum =  (tradings*0.05);break;
                case "Varna":
                    sum =  (tradings*0.045);break;
                    case "Plovdiv":
                        sum =  (tradings *0.055 );break;

        }
    }else if(tradings>500 && tradings <= 1000 ){
        switch(city){
            case "Sofia":
                sum = (tradings*0.07);break;
                case "Varna":
                    sum =  (tradings*0.075);break;
                    case "Plovdiv":
                        sum =  (tradings *0.08 );break;

        }
    }else if(tradings >1000 && tradings <= 10000){
        switch(city){
            case "Sofia":
                sum =  (tradings*0.08);break;
                case "Varna":
                    sum =(tradings*0.1);break;
                    case "Plovdiv":
                        sum = (tradings *0.12 );break;

        }
    }else if(tradings > 10000){
        switch(city){
            case "Sofia":
                sum = (tradings*0.12);break;
                case "Varna":
                    sum =  (tradings*0.13);break;
                    case "Plovdiv":
                        sum = (tradings *0.145 );break;

        }
    }else{
        console.log("error")
    }
    console.log(sum.toFixed(2))
}