function prn(val) {
    document.write(val + '<br>');
}

/*for (let i = 10; i >= 0; i--) {
    document.write(i);
    document.write('<br>');
}
document.write('<br>');
for (let i = 0; i <= 10; i+=2) {
    document.write(i);
    document.write('<br>');
}
document.write('<br>');
for (let i = 10; i >= 0; i--) {
    if (i % 2 !== 0) {
        continue;
    }
    prn(i);
}

function prn(val) {
    document.write(val + '<br>');
}*/

// let counter = 0;
// while (counter <= 10) {
//     prn(counter);
//     counter++;
// }

// function prn(val) {
//     document.write(val + '<br>');
// }
// let counter = 0;
// do {
//     prn(counter);
//     counter++;
// } while (counter <= 10)


// let num = parseFloat(prompt('Enter a number'));
// while (Number.isNaN(num)) {
//     alert('Please enter a number');
//     num = parseFloat(prompt('Enter a number'));
// }
// let num;
// do {
//     num = parseFloat(prompt('Enter a number'));
// } while(Number.isNaN(num));

let products = [];
products[0] = 'Tesla Model X';
products[1] = 'Ferrari F430';
products.push('Chevrolet Malibu');
products.push('Fiat Punto');
prn(products.length);
products[100] = 'ZAZ Sens';
// prn(products.length);
// for (let i = 0; i < products.length; i++) {
//     prn(products[i]);
// }

// for (let i = 0; i < products.length; i++) {
//     if (products[i] !== undefined) {
//         prn(products[i]);
//     }
// }

products.forEach(prn);

