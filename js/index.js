// Prevent us from attempting to use variables
// that are not declared
"use strict"
//for loops break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}

//continue
for (let = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}