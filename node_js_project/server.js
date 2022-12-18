// const cart = ['a', 'b', 'c', 'd', 'e'];


// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })
// //producing promise
// function createOrder(cart) {
//     return new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             reject(new Error(`Cart is not valid`));
//         }
//         const orderId = 12345;
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId);
//             }, 5000);
//         }
//     });

// }
// function validateCart(cart) {
//     return false;
// }




// function getSumNum(a, b) {
//     return new Promise((resolve, reject) => {
//         const sum = a + b;

//         if (sum <= 5) {
//             resolve("Let's go!!")
//         } else {
//             reject(new Error('Oops!.. Number must be less than 5'))
//         }
//     })

//     // return customPromise
// }

// // consuming the promise
// getSumNum(1, 3)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const array = [6, 5, 4, 4, 3, 1, 2];
// const n = array.length;
// findIndex(array, n, 4)


// const promise = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a == 2) {
//         resolve('true')
//     } else {
//         reject('false')
//     }
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })  


function checkPalindrome() {
    const str = '1234321';
    let reverse = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reverse += str[index];
    }

    if (str === reverse)
        return true;
    return false;
}

console.log(checkPalindrome());


// function palindrom(number) {
//     const originalNumber = number;
//     let result = 0;

//     while (number != 0) {
//         let reminder = number % 10;
//         result = result * 10 + reminder;
//         number = parseInt(number / 10);
//     }
//     if (originalNumber == result) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let number = 121;
// let a = palindrom(number)
// console.log(a);

// function checkPalindrome(str) {
//     let length = str.length;
//     for (let index = 0; index < length / 2; index++) {
//         if (str[index] != str[length - 1 - index]) {
//             return false;
//         }
//     }
//     return true;
// }

// let str = "abcdcba"
// let result = checkPalindrome(str)
// console.log(result);

// function palindrom(number) {
//     const originalNumber = number;
//     let result = 0;

//     while (number != 0) {
//         let reminder = number % 10;
//         result = result * 10 + reminder;
//         number = parseInt(number / 10);
//     }
//     if (originalNumber == result) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let number = 121;
// let a = palindrom(number)
// console.log(a);







