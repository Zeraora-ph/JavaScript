// slice() extracts a section of a string
//         and return it as a new string,
//         without modifying the original string.

let fullName = 'pedro henrique'
let firstName
let lastName

// firstName = fullName.slice(0, 5);
// lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(' '))
lastName = fullName.slice(fullName.indexOf(' ') + 1)

console.log(lastName)
console.log(firstName)
