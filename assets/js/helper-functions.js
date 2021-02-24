/* DUPLICATE OBJECT */
const duplicateObject = (object, duplicate) => {
    for (let key in object) {
        duplicate[key] = object[key];
    }
}

/* GET GAME FUNCTION */
const getGame = () => {
    let url = window.location.href;
    if (url.includes("/circuit/tekken") || url.includes("/fight-night")) {
        return "tekken";
    } else if (url.includes("/circuit/mk")) {
        return "mk";
    }
}

/* NUMBER TO WORDS FUNCTION || Source: https://gist.github.com/ForbesLindesay/5467742 */
function numToWords(num) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'
    ];

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    //the case of 1 - 20
    if (num < 20) {
        return ones[num];
    }

    if (numString.length === 2) {
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return ones[numString[0]] + ' hundred';
        else
            return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
    }

    if (numString.length === 4) {
        var end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + ' thousand';
        if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
        return ones[numString[0]] + ' thousand ' + convert(end);
    }
}

/* CAPITALIZE FUNCTION */
const capitalize = str => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/* EXPORTING FUNCTIONS */
export { duplicateObject, getGame, numToWords, capitalize };