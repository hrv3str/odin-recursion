const fibs = (n) => {
    const output = [0, 1];
    for (i = n-2; i> 0; i--) {
        const sum = output[output.length-2] + output[output.length-1];
        output.push(sum);
    }
    return output;
};

const fibsRec = (n) => {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const output = fibsRec(n - 1);
    const next = output[output.length - 1] + output[output.length - 2];
    output.push(next);
    return output;
}