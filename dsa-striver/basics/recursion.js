// function Print() {
//     console.log('x')
//     Print()
// }

// Print()


// let count = 0;
// function printX() {
//     if(count == 6) {
//         return;
//     }
//     console.log(count);
//     count++;
//     printX()
    

// }

// printX()


//printing till n
let count = 0;
function printNos(N){
    //code here
    if(count == N + 1) return;
    console.log(count);
    count++
    printNos(N)

    
}

printNos(10)