//extraction of digits
function extractDigits(n) {
    let newArr = []
    let count = 0;
    while(n > 0) {
        let number = n % 10;
        n = Math.floor(n / 10);
        count++;
        newArr.push((number))
    }
    return newArr
}


console.log(extractDigits(7789));

function evenlyDivides(N)
        {
            let count = 0;
            let originalN = N
            while(N > 0) { 
                let lastDigit = N % 10;
                N = Math.floor(N / 10)
                if(originalN % lastDigit === 0 && lastDigit !== 0) {
                    count++;
                }

            }
            return count;

        }


console.log(evenlyDivides(23));




function lastDigit(n) {
    let reversedDigit = 0;
    let isNegative = n < 0;
    n = Math.abs(n)
    while(n > 0) {
        let lastDigit = n % 10;
        reversedDigit = (reversedDigit * 10) + lastDigit;
        n = Math.floor(n / 10)
    }
    return isNegative ? -reversedDigit : reversedDigit;
}

console.log(lastDigit(1534236469));



//palindrome

function palindrome(x) {
    let originalN = x;
    let reversedDigit = 0;
    while(x > 0) {
        let lastDigit = x % 10;
        reversedDigit = (reversedDigit * 10) + lastDigit;
        x = Math.floor(x / 10);
    }
    if(reversedDigit == originalN ) {
        return true
    }
    return false
}

console.log(palindrome(111));
console.log(palindrome(121));


 
//armstrong numbers

function armstrong(n) {
    let originalN = n
    let armNo = 0;
    while(n > 0) {
        let lastDigit = n % 10
        armNo = armNo + (lastDigit ** 3)
        n = Math.floor(n / 10)
    }
    if(armNo == originalN) {
        return true
    }
    return false
}

console.log(armstrong(371));
console.log(armstrong(35));



function printDivisors(n) {
    let divisors = []
    for(let i = 1; i <= n; i++) {
        if(n % i == 0) {
            divisors.push(i)
            
        }
    }
    return divisors;
}

console.log(printDivisors(4));



function sumOfDivisors(N) {
    let result = 0;
    for(let i = 1; i <= N; i++) {
        result += i * Math.floor(N / i)

    }
    return result
}

console.log(sumOfDivisors(5));


console.log('-----------------------------------------');



function mathObservation(n) {
    let divisors = []
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i == 0){
            divisors.push(i);
            if((n/i) != i) {
                divisors.push(n/i);
                
            }
            
        }
    }
    return divisors.sort((a,b) => a - b)
}

console.log(mathObservation(36));



//bruteforce method to get prime

function checkforPrime(n) {
    let count = 0;
    for(let i = 1; i * i <= n; i++) {
        if(n % i == 0) {
            count++

            if((n/i) != i) {
                count++
            }
        }
    }
    if(count == 2) {
        return 1
    }
    return 0
}


console.log(checkforPrime(2));
console.log(checkforPrime(16));
console.log(checkforPrime(7));


//method 1, it will take more method.
function gcd(a,b) {
    let hcf = 1;
    for(let i = 1; i <= a; i++) {
        if(a % i == 0 && b % i == 0) {
            hcf = i;
        }
    }
    return hcf

}


console.log(gcd(9,12));


//method 2, it will take lesser time
function gcd1(a,b) {
    let hcf = 1;
    for(let i = Math.min(a,b); i >= 1; i--) {
        if(a % i == 0 && b % i == 0) {
            hcf = i;
            break;
        }
    }
    return hcf

}


console.log(gcd1(9,12));


console.log('----------------------------------------------------');

//euclidean algorithm

function eq(a,b) {
    while(a > 0 && b > 0) {
        if(a > b) a = a % b;
        else b = b % a;
    }
        if(a == 0) return b;
        else  return a;
    }

console.log(eq(9,12));

console.log(12%9);







function pali(n) {
    let originalN = n;
    let reversedDigit = 0;
    while(n > 0) {
        let lastDigit = n % 10;
        reversedDigit = (reversedDigit * 10) + lastDigit;
        n = Math.floor(n / 10)
    }
    if(reversedDigit == originalN) {
        return true
    }
    return false
}

console.log(pali(111));
console.log(pali(102));
