// var fullName = "kieu van truong"

// confirm('xac nhan ban du 18 tuoi')

// prompt('ten ban la gi')

// setTimeout(function() {
//     alert('ban khong nen choi nua')
// }, 15000)
// console.log(fullName)

// setInterval(function() {
//     alert('d m m')
// }, 20000);

// toan tu so hoc
// ** luy thua
// % chia lay so du
// --a ( a-1)
// a-- ( tra ve a)

// if else
// var mark = 5
// if (mark > 10 || mark < 0) {
//     console.log('??????')
// } else if (mark >= 8) {
//     console.log('hs gioi')
// } else if (mark >=7) {
//     console.log('hs kha')
// } else {
//     console.log('hs ngu')
// }

// swith case
// var name = ('linh')
// switch(name) {
//     case 'nhan':
//         alert('nhan');
//         break;
//     case 'linh':
//         alert('linh');
//         break;
//     default:
//         alert('deo co');
// }

// for

// for(var number = 0; number <= 3; number++) {
//     alert('rounds: ' + number)
// }

// var number = 0
// while(number < 3) {
//     alert('vong:' + number)
//     number++
// }

// do while
// var number = 0
// do {
//     alert('vong:' + number)
//     number++
//     if(number == 4) {
//         break;
//     }
// } while(number < 5)


// var inputNumber = prompt('enter')
// alert('input: ' + inputNumber)

// === so sanh type

// function hello() {
//     do{
//         var inputNumber = prompt('enter')
//         inputNumber = Number(inputNumber)
//     } while(isNaN(inputNumber))
//     // alert('number= ' +inputNumber)
//     var count = 0;
//     for(var i = 1; i <= inputNumber; i++) {
//         if (inputNumber % i == 0) {
//             count++;
//         }
//         if(count > 2) {
//             break;
//         }
//     }
//     if(count == 2) {
//         alert('so nguyen to')
//     } else {
//         alert('k phai so nguyen to')
//     }
//     return hello;
// }
// hello()

// function
// function hello(name, from) {
//     alert('hello '+name+' i am '+ from)
// }
// hello('truong', 'developer')
// hello('tung', 'tester')
// codex.tokyo

// dem gia tri toan so le
// var n = prompt('nhap gia tri')
// var check = true
// while (n > 0) {
//     var remain = n % 10
//     if ( remain % 2 == 0) {
//     check = false
//     break;
//     }
//     n = Math.floor(n / 10)
// }
// if (check) {
//     alert('phai')
// } else {
//     alert('k phai')
// }


// regular function
// function print(n) {
//     if(n<0){
//         return;
//     }
//     console.log('n: ', n)
//     print(n -1)
// }
// print(5)

// expression
// const print2 = function(n) {
//     if(n<0){
//         return;
//     }
//     console.log('n: ', n)
//     print2(n -1)
// }
// print2(5)

// arrow function ( fat arrow)
// const print3 = (n) => {
//     if(n<0){
//         return;
//     }
//     console.log('n: ', n)
//     print2(n -1)
// }
// print3(5)

// function even(n) {
//     return n % 2 === 0
// }
// const abc = (n) => n % 2 === 0

// console.log('even', even(3))
// console.log('abc', abc(6))

// math.round() : lam tron. hoac Math.PI.toFixed(2)
// math.floor() : lam tron xuong
// math.ceil() : lam tron len

//random
// console.log('random: ', Math.random())

// function randomDice() {
//     return Math.floor((Math.random() * 7)+18)
    
// }
// var value = randomDice()
// console.log('random: ', value)

// var name = "  \"truong\"  "
// console.log(name)

// var name2 = '"\t truong \n new line" \\'
// console.log(name2)

// khoi tao 1 array
// var a = ['abc', 'xzc']
// var b = [1, 2, 3, 4]
// b[0] = 10
// alert(b)


// function hello() {
//     console.log('xin chao')
// }
// function say(callback) {
//     callback()
// }
// say(hello)

// var names = ['tung', 'truong', 'dung']
// function findname(name) {
//     return name[0] === 't'
// }
// var a = names.find(findname)
// alert(a)

// var a = [1,2,3,4,5]
// function even(number) {
//     console.log(number)
//     return number % 2 == 0
// }
// // var b = a.find(even => even % 2 == 0)
// var b = a.find(even)
// alert(b)
// var myFind = (array, callBack) => {
//     for(var i = 0; i < array.length; i++) {
//         if (callBack(array[i], i, array)) {
//             return array[i]
//         }
//     }
// }
// alert(myFind(number, even))

// filter
// var a = [1,2,3,4,5]
// var myFilter = (number) => {
//     return number % 2 == 0;
// }
// var aMyFilter = a.filter(myFilter)
// alert(aMyFilter)

// map
// var students = [
//     {
//         firstName: 'doan hoang',
//         lastName: 'tung',
//         age: 20
//     },
//     {
//         firstName: 'kieu van',
//         lastName: 'truong',
//         age: 18
//     },
//     {
//         firstName: 'pham quang',
//         lastName: 'dung',
//         age: 20
//     }
// ]
// var fullName = []
// for(var i = 0; i < students.length; i++) {
//         fullName.push(students[i].firstName + ' ' + students[i].lastName)
// }
// // alert(fullName)
// var fullName1 = students.map(item => item.firstName + ' ' + item.lastName)
// // alert(fullName1)

// var tuoi = students.filter(student => student.age > 19).map(student => {
//     return {
//         age: student.age,
//         fullName: student.firstName + ' ' + student.lastName
//     }
// })
// console.log(tuoi)

// reduce
// var number = [1,2,3,4,5,6]
// var sole = number.filter(le => le % 2 !== 0)
// var d = sole.length
// alert(d)
// var tongsole = number.reduce((quantity, value) => {
//     if (value % 2 === 1) {
//         quantity += 1;
//     }
//     return quantity
// })
// alert(tongsole)


// tuong tac voi DOM
// var a = document.getElementById('demo')
// a.style.backgroundColor = 'red'