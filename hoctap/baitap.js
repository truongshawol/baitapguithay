// bai 0
// var a = 4
// var b = 0
// for ( var n = 1; n <= a; n++) {
//     if( a % n == 0) {
//        b++
//     }
// }
// if (b==2) {
//     alert('so nguyen to')
// } else {
//     alert('k phai nguyen to')
// }


// bai 1
// var n = 10
// var a = ""
// for(n ; n>=0; n--) {
//     a += n + ' '
// }
// alert(a)


// bai 2
// var a = 10
// var b = ''
// for (a ; a>0; a--) {
//     if(a % 2 !== 0) {
//         b += a + ' '
//     }
// }
// alert(b)


// bai 3
// var a = 10
// var b = ''
// for (a ; a>0; a--) {
//     if(a%2==0) {
//         b += a + ' '
//     }
// }
// alert(b)


// bai 4
// var a = 10
// var b = 0
// var d = ''
// for (var e = 2; e <= a; e++) {
//     for (var c = 1; c <= a; c++) {
//         if(e % c == 0) {
//             b++
//         }
//     }
//     if(b==2) {
//         d += e + ' '
//     }
//     var b = 0
// }   
// alert(d)

// bai 5
// var a = 4
// var b = 0
// for (a ; a>0; a--) {
//     b += a
// }
// alert(b)


// bai 6
// var a = 3
// var c = 0
// for ( a; a>0; a--) {
//     var b = a**2
//     c += b
// }
// alert(c)


// bai 7
// var a = 5
// var b = 0
// for (a ; a>0; a--) {
//     if(a % 2 !== 0) {
//         b += a
//     }
// }
// alert(b)


// bai 8
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
//     alert('toan so le')
// } else {
//     alert('co so chan')
// }


// bai 9 
// var n = prompt('nhap gia tri')
// var c = 0
// var i = n
// while (n>0) {
//     var a = n % 10;
//     c = (c*10) + a;
//     n = Math.floor(n / 10);
// }
// if ( i == c) {
//     alert('so dao nguoc bang gia tri ban dau')
// } else {
//     alert('so dao nguoc khong bang gia tri ban dau')
// }


// bai 10
// var e = ''
// var f = ''
// for (var a = 2; a < 10; a++) {
//     for (var b = 1; b <= 10; b++) {
//         var c = a * b
//         var d = a + 'x' + b + '=' + c + '\n'
//         if ( b == 10) (
//             d = a + 'x' + b + '=' + c + '\n' + '\n'
//         )
//         e += d
//     }
// }
// console.log(e)


// bai 11
function bai11() {
var n = 'hello ban tung'
var a = n.length
var nn = ' '
var d = 0
var f = 0
while ( a > 0 && d < a ) {
    var e = n.charAt(d)
        if ( e == nn) {
            f++
            d++
        } else if ( e != n ) {
            d++
        }
}
alert(f)
}


// bai 12
function bai12() {
var a = 'xin chao thay va cac ban than yeu'
var b = a.split(" ")
var c = b.length
var d = 0
var e = ""
for ( d = 0; d < c; d++) {
    e += b[d]
}
alert(e)
}


// bai 13
function bai13() {
var a = 'xin chao minh la truong dep trai binh thuong hihi'
var b = -1
var d = a.split("")
var g = d.length
var e = ""
for(b=-1; b >= -g; b--) {
    var c = a.substr(b, 1)
    e += c
}
alert(e)
}

// bai 14
function bai14() {
var a = 'this is a beautiful day'
var b = 'is'
var c = a.split(" ")
var d = c.length
var e = ""
for (var f = 0; f<d; f++) {
    if (c[f] == b) {
        e += (f+1) + " "
    }
}
alert(e)
}


// bai 15
function bai15() {
var a = 'xIn ChAo CaC bAn'
var b = a.toLowerCase()
var c = b.split(" ");
var d = c.length;
var e = 0
var f = ""
for (e=0; e<d; e++) {
   f += c[e].replace(c[e].charAt(0), c[e].charAt(0).toUpperCase()) + " "
}
alert(f)
}


// bai 16
function bai16() {
var a = 'http://www.facebook.com/kieuvantruong'
var b = 'http://www.facebook.com/'
var c = b.length
var d = a.substr(c)
alert(d)
}


// bai 17
function bai17() {
var a = 1
var b = 2
var c = 3
var d = Math.max(a, b, c)
var e = Math.min(a, b, c)
var f = 'max: ' + d + '   ' + 'min: ' + e
alert(f)
}


//bai 18
function bai18() {
    var a = 'xin chao ban dung ham va chao tung ham hap'
var b = 'ham'
var c = a.lastIndexOf(b)
alert(c)
}



// bai 19
function bai19() {
var x = 9
var y = x*(x+1)/2
alert(y)
}


// bai 21
// var a =[1,2,3]
// var b = a.reduce((a, b) => {
//     return a + b
// })
// alert(b)


// bai 22
// var a = [1,3,4,6]
// var c = a.length
// var b = Math.max(...a)
// alert('max: ' + b)
// var d = Math.min(...a)
// alert('min: ' + d)
// var e = a.reduce((a, b) => {
//         return a + b
//     })
// var g = e / c
// alert('so trung binh cong: '+g)


// bai 23
// var a = [1,1,2,2,2,3,3,3,4]
// var b = a.length
// var e = 0
// var f = 0
// var g = 0
// for (var c = 0; c < b; c++) {
//         for (var d = 0; d < b; d++) {
//             if (a[c] == a[d]) {
//             e++
//             f = e
//         }
//         if (f >= g) {
//             g = f
//         }    
//     }
//     e = 0
// }
// alert(g)


// bai 24
// var a = [1,2,2,2,3,4,5,6,7,13,8]
// var b = a.length
// function songuyento (truong) {
//     var c = 0
//     for ( var n = 1; n <= truong; n++) {
//             if( truong % n == 0) {
//                c++
//             }
//     }
//     if (c==2) {
//         return truong;
//     }
// }
// var d = a.filter(songuyento)
// alert(d)


// bai 25
// var a = [1, 2, 3, 4]
// var b = a.map(number => number ** 2)
// alert(b)


// bai 26
// var a = [1,2,3,4,5,7,8,9]
// var b = a.length
// var c = 6
// var d = []
// var e = []
// for (var i = 0; i < b; i++) {
//     if (c > a[i]) {
//         d.unshift(a[i])
//     }
//     if (c < a[i]) {
//         e.unshift(a[i])
//     }
// }
// alert('gia tri gan nhat la: ' + Math.max(...d) + ' ' + Math.min(...e))


// bai 27
// var students = [
//     {
//         id: "T3HXX1",
//         firstName: "ngAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// function doiten () {
//     lastName.split(' ')
//     (lastName[0].toUpperCase + lastName.substr(1)).john(' ')
// }
// var b = students.map(doiten)
// console.log(b)


// bai 30
// var a = [1,1,2,3]
// var c = a.filter(b => b < Math.max(...a))
// var d = c.indexOf(Math.max(...c))
// if ( d == -1) {
//     alert(d)
// } else {
//     alert(c[d])
// }
