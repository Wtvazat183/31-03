const array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
let neyaray = [];
const reject = /(^2|^5)/;

for (let i = 0; i < array.length; i++) {
    if (reject.test(array[i]) == true) {
        neyaray.push(array[i]);
    }
}

console.log(neyaray);
neyaray.sort(function (a, b) {
    return b - a;
});
console.log(neyaray);

const str = [
    'li',
    'div',
    'li',
    'p',
    'h1',
    'p',
    'h1',
    'div',
    'div',
    'li',
    'h1',
    'p',
    'h1',
    'ol',
    'br',
];
tegObj = {
    li: 0,
    div: 0,
    p: 0,
    h1: 0,
    ol: 0,
    br: 0,
};

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'li') tegObj.li++;
    if (str[i] == 'div') tegObj.div++;
    if (str[i] == 'h1') tegObj.h1++;
    if (str[i] == 'p') tegObj.p++;
    if (str[i] == 'ol') tegObj.ol++;
    if (str[i] == 'br') tegObj.br++;
}

console.log(tegObj)