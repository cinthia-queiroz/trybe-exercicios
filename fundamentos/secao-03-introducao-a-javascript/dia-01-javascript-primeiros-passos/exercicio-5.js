let angleA = 100;
let angleB = -45;
let angleC = 40;

let sumOfAngles = angleA + angleB + angleC;
let allAnglesPositive = angleA > 0 && angleB > 0 && angleC > 0;

if (allAnglesPositive) {
    if (sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('ângulo inválido!')
}