import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    a = 3;
    b = 5;
    c = 6;
})
test('sum should be correct', () => {

    const result1 = sum(a, b);
    const result2 = sum(b, c);

    expect(result1).toBe(8)
    expect(result2).toBe(11)
})

test('multiply should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(15)
    expect(result2).toBe(30)
})