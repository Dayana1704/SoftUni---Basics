function devide(input) {
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(i);
        if (num % 2 == 0 ) {
         p1Counter++;
            
        }else if (num % 3 == 0) {
            p2Counter++;
            
            
        }else if (num % 4 == 0) {
            p3Counter++;
            
        }
    }
    
    let p1 = Number(p1Counter / n * 100);
    let p2 = Number(p2Counter / n * 100);
    let p3 = Number(p3Counter / n * 100);
    console.log(p1.toFixed(2) + "%")
    console.log(p2.toFixed(2) + "%")
    console.log(p3.toFixed(2) + "%")
}
devide([12])