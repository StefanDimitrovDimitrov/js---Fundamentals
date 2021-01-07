function evenOdd(arr){
    sumEven = 0 
    sumOdd = 0

    for (let num of arr) {
        if (num % 2 === 0){
            sumEven+=num
        }else{
            sumOdd += num
        }
        
    }
    console.log(sumEven - sumOdd);
}

evenOdd([1,2,3,4,5,6])

// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
// Examples
// Input	Output	Comments
// [1,2,3,4,5,6]	3	2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3
// [3,5,7,9]	-24	
// [2,4,6,8,10]	30	
