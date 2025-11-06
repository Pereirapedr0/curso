let i = 0;
while (i <=10) {
    console.log(i);
    i++;
}

let j = 0;
do {
    console.log(j);
    j++;
} while (j <=10);


function random (min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random (1,50);
while (rand !== 10) {
    rand = random (1,50);
    console.log(rand);
}