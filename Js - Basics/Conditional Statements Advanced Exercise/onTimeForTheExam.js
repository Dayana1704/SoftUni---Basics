function exam(input) {
    let examHours = Number(input[0]);
    let examMins = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMins = Number(input[3]);

    let timeExam = examHours * 60 + examMins;
    let timeArrive = arrivalHour * 60 + arrivalMins;

    if (timeExam < timeArrive) {
        console.log("Late")
        let diff = timeArrive - timeExam;
        let hours = Math.floor(diff / 60);
        let mins = diff % 60;
        if (diff >= 60) {
            if (mins < 10) {
                console.log(`${hours}: 0${mins} hours after the start`)
            } else {
                console.log(`${hours}: ${mins} hours after the start`)
            }

        }
        else {
            console.log(`${mins} minutes after the start`)

        }
    } else if (timeExam >= timeArrive && timeExam - timeArrive <= 30) {
        console.log("On time")
        let diff = timeExam - timeArrive;
        if (diff != 0) {
            let mins = diff % 60;
            console.log(`${mins} minutes before the start`)
        }
    } else {
        console.log("Early")
        let diff = timeExam - timeArrive;
        let hours = Math.floor(diff / 60)
        let mins = diff % 60;
        if (diff >= 60) {
            if (mins < 10) {
                console.log(`${hours}: 0${mins} hours before the start`)
            } else {
                console.log(`${hours}:${mins} hours before the start`)
            }
            }else {
                console.log(`${mins} minutes before the start`)
            }
        }
    }