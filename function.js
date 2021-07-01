var element1 = document.getElementById("0")
var element2 = document.getElementById("1")
var element3 = document.getElementById("2")

var element1value = 0
var element2value = 0
var element3value = 0

// var values = [0,0,0]

// var elements = [element1, element2, element3]

// element1.innerText = values[0]
// element2.innerText = values[1]
// element3.innerText = values[2]

element1.innerText = element1value
element2.innerText = element2value
element3.innerText = element3value

function like(id) {
    if (id == 0) {
        element1value++;
        element1.innerText = element1value;
    } 
    else if (id ==1) {
        element2value++;
        element2.innerText = element2value;
    }
    else if (id ==2) {
        element3value++;
        element3.innerText = element3value;
    }
}


// function like(id) {
//     console.log(id)
//     values[id]++;
//     elements[id].innerText = values[id]


// }



// function like1() {
//     element1value++
//     element1.innerText = element1value
// }
// function like2() {
//     element2value++
//     element2.innerText = element2value
// }
// function like3() {
//     element3value++
//     element3.innerText = element3value
// }