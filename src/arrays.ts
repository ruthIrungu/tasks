/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let totalNum: number[] = [];
    if (numbers.length === 0) {
        return numbers;
    }
    if (numbers.length === 1) {
        totalNum = [...numbers, ...numbers];
    } else {
        totalNum = [numbers[0], numbers[numbers.length - 1]];
    }
    return totalNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((x): number => x * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((num) => parseInt(num) || 0);
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const justNumbers = amounts.map((x) => (x[0] === "$" ? x.substring(1) : x));
    const total = stringsToIntegers(justNumbers);
    return total;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const yelled = messages.map((x) => (x.includes("!") ? x.toUpperCase() : x));
    const total = yelled.filter(
        (x: string): boolean => x.includes("?") === false
    );
    return total;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const total = words.filter((x): boolean => x.length < 4);
    return total.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const total: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return total;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((curr: number, num: number) => curr + num, 0);
    sum.toString();
    const addendStr: string = addends.join("+");
    return sum + "=" + addendStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // const negative = values.find((x: number): boolean => x < 0);
    const valuesInside = [...values];
    const negativeInd: number = valuesInside.findIndex(
        (value: number): boolean => value < 0
    );
    if (negativeInd === -1) {
        const sum = valuesInside.reduce(
            (curr: number, num: number) => curr + num,
            0
        );
        return [...valuesInside, sum];
    } else {
        const allNumBefore: number[] = valuesInside.slice(0, negativeInd);
        const sum = allNumBefore.reduce(
            (curr: number, num: number) => curr + num,
            0
        );
        valuesInside.splice(negativeInd + 1, 0, sum);
        return valuesInside;
    }
}
