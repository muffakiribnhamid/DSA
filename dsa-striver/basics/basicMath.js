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

function palindrome(n) {
    let originalN = n;
    let reversedDigit = 0;
    while(n > 0) {
        let lastDigit = n % 10;
        reversedDigit = (reversedDigit * 10) + lastDigit;
        n = Math.floor(n / 10);
    }
    if(reversedDigit == originalN ) {
        return true
    }
    return false
}

console.log(palindrome(111));
console.log(palindrome(121));
