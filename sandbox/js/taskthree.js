const textArray = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"]
];

const stringLengthLimit = 16;

const a = [];
a.push('*'.repeat(stringLengthLimit + 2));
textArray.forEach(s => {
    const l = s.join(' ').length;
    if (l <= stringLengthLimit) {
        a.push('*' + s.join(' ') + ' '.repeat(stringLengthLimit - l) + '*');
    } else {
        const r = s.reduce((r, i) => {
            if ((r + i).length > stringLengthLimit) {
                a.push('*' + ' '.repeat(stringLengthLimit - r.length) + r + '*');
                return i;
            } else {
                return r + ' ' + i;
            }
        }, '');
        a.push('*' + ' '.repeat(stringLengthLimit - r.length) + r + '*');
    }
});
a.push('*'.repeat(stringLengthLimit + 2));

console.log(a);

//№2
const phrases = [
    ['Hello', 'world'],
    ['Brad', 'came', 'to', 'dinner', 'with', 'us'],
    ['He', 'loves', 'tacos']
];

const limit = 16;
const border = '*'.repeat(limit + 2);

const output = [border];

phrases.forEach((phrase, i) => {
    phrase = phrase.join(' ');

    if (phrase.length <= limit) {
        output.push(`*${phrase.padEnd(16)}*`);
    } else {
        const lines = phrase
            .replace(/(.{1,16}) /, '$1\n')
            .split('\n')
            .map(line => `*${line.padStart(16)}*`);
        output.push(...lines);
    }
});

output.push(border);

console.log(output);