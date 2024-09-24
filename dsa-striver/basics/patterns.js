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

// Input Format: N = 3
// Result: 
// 1
// 2 2 
// 3 3 3

// Input Format: N = 6
// Result:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6


function printN(n) { 
    for(let i = 0; i <= n; i++) { 
        let row = ""
        for(let j = 0; j < i; j++)  {
            row+=`${i} `
        }
        console.log(row);
        
    }
}

printN(5)


/*
Input Format: N = 3
Result: 
* * *
* * 
*

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
* 

*/

function printN2(n) { 
    for (let i = 0; i <= n; i++) {
        let row = ""
        for(let j = 0; j < n - i; j++) {
            row+="* "
        }
        console.log(row);
        
        
    }
}

printN2(3)


// Input Format: N = 3
// Result: 
// 1 2 3
// 1 2
// 1

// Input Format: N = 6
// Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1


function printN3(n) { 
    for(let i = 0; i < n; i++) { 
        let row = ""
        for(let j = 1; j <= n -i; j++) { 
            row += `${j} `
        }
        console.log(row);
        
    }
}

printN3(3)


//java code


// int n = 5;
// for (int i = 0; i < n; i++) {
//     //for spaces
//     for (int j = 0; j < n - i - 1; j++) {
//         System.out.print(" ");
//     }
//     //for stars
//     for (int s = 0; s < 2 * i + 1; s++) {
//         System.out.print("*");

//     }
//     for (int j = 0; j < n - i - 1; j++) {
//         System.out.print(" ");
//     }

//     System.out.println();

// }
// }




//        Input Format: N = 3
//        Result:
//*****
// ***
//  *
//        Input Format: N = 6
//        Result:
//***********
// *********
//  *******
//   *****
//    ***
//     *

// int n = 5;
// for(int i = 0; i < n; i++) {
//     //for spaces
//     for(int j = 0; j < i; j++){
//         System.out.print(" ");
// }
//     for(int s = 0; s < 2 * n- (2 * i + 1); s++) {
//         System.out.print("*");

//     }

//     System.out.println();

// }


//        Input Format: N = 3
//        Result:
//  *
// ***
//*****
//*****
// ***
//  *
//        Input Format: N = 6
//        Result:
//     *
//    ***
//   *****
//  *******
// *********
//***********
//***********
// *********
//  *******
//   *****
//    ***
//     *

// int n = 5;
// for (int i = 0; i < n; i++) {
// //for spaces
// for (int j = 0; j < n - i - 1; j++) {
// System.out.print(" ");
// }
// //for stars
// for (int s = 0; s < 2 * i + 1; s++) {
// System.out.print("*");

// }
// for (int j = 0; j < n - i - 1; j++) {
// System.out.print(" ");
// }

// System.out.println();

// }
// for(int i = 0; i < n; i++) {
// //for spaces
// for(int j = 0; j < i; j++){
// System.out.print(" ");
// }
// for(int s = 0; s < 2 * n- (2 * i + 1); s++) {
// System.out.print("*");

// }

// System.out.println();

// }

// Input Format: N = 3
// Result: 
//   *  
//   **
//   ***  
//   **
//   *   
// Input Format: N = 6
// Result:   
//      *
//      **
//      *** 
//      ****
//      *****
//      ******  
//      *****
//      ****
//      ***    
//      **
//      *


// int n = 3;
// for(int i = 0; i <= (2 * n - 1); i++) {
//     int stars = i;
//     if(i > n) {
//         stars = 2 * n - i;
//     }
//     for(int j =0; j < stars; j++) {
//         System.out.print("*");
//     }
//     System.out.println();
// }


// Input Format: N = 3
// Result: 
// 1
// 01
// 101

// Input Format: N = 6
// Result:   
// 1
// 01
// 101
// 0101
// 10101
// 010101



// int n = 3;
// int number = 1;
// for(int i = 0; i < n; i++) {
//     if(i % 2 == 0) {
//         number = 1;
//     }
//     else {
//         number = 0;
//     }

//     for(int  j =0; j <= i; j++) {
//         System.out.print(number);
//         number = 1 - number;
//     }

//     System.out.println();

// }


//for n = 6
// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321


// int n = 6;
// int spaces = 2 * (n - 1);
// for(int i = 1; i <= n; i++) {
//     //numbers
//     for(int j = 1; j <= i; j++) {
//         System.out.print(j);
//     }
//     //spaces
//     for(int j = 0; j < spaces; j++) {
//         System.out.print(" ");
//     }

//     //numbers
//     for(int j = i; j >= 1; j--) {
//         System.out.print(j);
//     }

//     System.out.println();
//     spaces -= 2;

// }


// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

// Input Format: N = 6
// Result:   
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21


// int n = 3;
// int number = 1;
// for (int i = 1; i <= n; i++) {
//     for (int j = 1; j <= i; j++) {
//         System.out.print(number + " ");
//         number = number + 1;
        
//     }

//     System.out.println();


// }

// Input Format: N = 3
// Result: 
// A
// A B
// A B C

// Input Format: N = 6
// Result:   
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F


// int n = 3;
// for(int i = 1; i <= n; i++) {
//     for(char ch = 'A'; ch < 'A' + i; ch++) {
//         System.out.print(ch + " ");
//     }
//     System.out.println();
// }


// Input Format: N = 3
// Result: 
// A B C
// A B
// A

// Input Format: N = 6
// Result:   
// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A



// int n = 6;
// for(int i = 0; i <= n; i++) {
//     for(char ch = 'A'; ch <='A' + (n - i - 1); ch++) {
//         System.out.print(ch);
// }
//     System.out.println();
// }



// Input Format: N = 3
// Result: 
// A
// B B
// C C C

// Input Format: N = 6
// Result:   
// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

// int n = 6;
// char ch = 'A';
// for (int i = 1; i <= n; i++)  {
//     for(int j = 1; j <= i; j++) {
//          System.out.print(ch);
//     }
//     ch++;

//     System.out.println();
// }


// int n = 3;
// for (int i = 0; i < n; i++) {
//     //spaces
//     for (int j =0; j < n - i - 1; j++) {
//         System.out.print(" ");
//     }
//     // chars
//     char ch = 'A';
//     int breakpoint  = (2*i+1) / 2;
//     for(int j = 1; j <= 2 * i + 1; j++) {
//         System.out.print(ch);
//         if(j <= breakpoint) ch++;
//         else ch--;
//     }

//     for (int j =0; j < n - i - 1; j++) {
//         System.out.print(" ");
//     }

//     System.out.println();

// }


// Result:   
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************



// let ns = 5;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
    
    
// }


// int n = 5;
// int spaces = 8;
// for (int i = 0; i < n; i++) {
//     //stars
//     for(int j = 0; j < n - i; j++) {
//         System.out.print("*");
//     }
//     for(int j = 0; j < i * 2; j++) {
//         System.out.print(" ");
//     }
//     for(int j = 0; j < n - i; j++) {
//         System.out.print("*");
//     }

//     System.out.println();
// }

// for(int i = 1; i <= n; i++) {
//     for(int j = 1; j <= i; j++) {
//         System.out.print("*");
//     }
//     for(int j = 0; j < spaces; j++) {
//         System.out.print(" ");
//     }
//     for(int j = 1; j <= i; j++) {
//         System.out.print("*");
//     }

//     System.out.println();
//     spaces = spaces - 2 ;
// }

// int n = 5;
// int inS = 2 * n - 2;
// for (int i = 1; i <= (2 * n)- 1; i++) {
//     //stars
//     int stars = i;
//     if(i > n) stars = 2 * n - i;

//     //stars
//     for(int j = 1; j <= stars; j++) {
//         System.out.print("*");

//     }
//     //spaces
//     for(int j = 0; j < inS; j++) {
//         System.out.print(" ");
//     }

//     //stars
//     for(int j = 1; j <= stars; j++) {
//         System.out.print("*");

//     }
//     System.out.println();
//     if(i < n) inS = inS - 2;
//     else inS = inS + 2;



// ****
// *  *
// *  *
// ****

// int n = 4;
// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         if (i == 0 || i == n - 1 || j == 0 || j == n - 1) {
//             System.out.print("*");
//         }
//         else  {
//             System.out.print(" ");
//         }

//     }
//     System.out.println();




//     }



// }

// 555555555
// 544444445
// 543333345
// 543222345
// 543212345
// 543222345
// 543333345
// 544444445
// 555555555


// int n = 5;
// for (int i = 0; i < 2 * n - 1; i++) {
//     for(int j = 0; j < 2 * n - 1; j++) {
//         int top = i;
//         int left = j;
//         int right = (2 * n - 2) - j;
//         int down = (2 * n - 2) - i;
//         System.out.print(n - Math.min(Math.min(top,down),Math.min(left,right)));
//     }
//     System.out.println();


// }


