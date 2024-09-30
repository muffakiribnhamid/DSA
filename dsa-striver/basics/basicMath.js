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



function sumOfDivisors(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result += i * Math.floor(n / i)

    }
    return result
}

console.log(sumOfDivisors(5));
