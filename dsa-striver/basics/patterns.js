// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *

let n = 5;
for(let i = 0; i < n; i++) { 
    let row = ''
    for(let j = 0; j < n; j++) { 
        row+="* "
    }

    console.log(row.trim());
    
}


// Input Format: N = 3
// Result: 
// * 
// * * 
// * * *

// Input Format: N = 6
// Result:
// * 
// * * 
// * * *
// * * * *
// * * * * *
// * * * * * *

for(let i = 0 ; i < 5; i++) {
    let row = ""
    for(let k = 0; k <= i ; k++) {
        row+="* "
    }

    console.log(row);
    
}

// Input Format: N = 3
// Result: 
// 1
// 1 2 
// 1 2 3

// Input Format: N = 6
// Result:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6


for(let i = 0; i <= n; i++) {
    let row = ""
    for(let j = 1; j <= i; j++) {
         row+=`${j} `
    }
    console.log(row);
    
}