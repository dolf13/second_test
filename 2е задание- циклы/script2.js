let num = 50;

if (num > 50) {
    console.log("Больше");
} else if (num == 50) {
    console.log("Равно");
} else {
    confirm("Прекрасно!", "");
};


(num == 50) ? console.log("Ravno"): confirm("Прекрасненько!", "");


switch (num) {
    case num < 50:
        console.log("меньше");
        break;
    case 50:
        console.log("Равно");
        break;
    case num > 50:
        confirm("Больше!!!!!!");
        break;
};


// while (num <= 60) {
//     console.log(num);
//     num++;
// };


do {
    console.log("Больше  " + num, "");
    num++;
}
while (num < 55);

for (let i = 1; i < 100; i++) {
    console.log(i);
}

for (num; num < 100; num++) {
   
    if (num == 77) {
        continue;
    }
    if (num ==78) {
        break;
    }
    console.log(num);
}